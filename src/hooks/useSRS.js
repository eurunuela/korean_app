import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './useAuth'

const initialSettings = {
  newCardsPerDay: 20,
  reviewLimit: 100
}

// SM-2 Algorithm implementation
function calculateNextReview(card, quality) {
  let { interval, easeFactor, repetitions } = card

  if (quality < 3) {
    repetitions = 0
    interval = 1
  } else {
    if (repetitions === 0) {
      interval = 1
    } else if (repetitions === 1) {
      interval = 6
    } else {
      interval = Math.round(interval * easeFactor)
    }
    repetitions += 1
  }

  easeFactor = Math.max(1.3, easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)))

  const dueDate = new Date()
  dueDate.setDate(dueDate.getDate() + interval)

  return {
    interval,
    easeFactor,
    repetitions,
    dueDate: dueDate.toISOString(),
    lastReview: new Date().toISOString()
  }
}

export function useSRS() {
  const { user } = useAuth()
  const [cards, setCards] = useState([])
  const [settings, setSettings] = useState(initialSettings)
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState({ totalReviews: 0, cardsLearned: 0 })

  // Fetch cards and settings from Supabase
  useEffect(() => {
    if (!user) {
      setCards([])
      setSettings(initialSettings)
      setLoading(false)
      return
    }

    const fetchData = async () => {
      // Fetch cards
      const { data: cardsData, error: cardsError } = await supabase
        .from('srs_cards')
        .select('*')
        .eq('user_id', user.id)

      if (cardsError) {
        console.error('Error fetching cards:', cardsError)
      } else {
        setCards(cardsData.map(card => ({
          id: card.id,
          front: card.front,
          back: card.back,
          pronunciation: card.pronunciation,
          audio: card.audio,
          interval: card.interval,
          easeFactor: card.ease_factor,
          repetitions: card.repetitions,
          dueDate: card.due_date,
          lastReview: card.last_review,
          created: card.created_at
        })))
      }

      // Fetch settings
      const { data: settingsData, error: settingsError } = await supabase
        .from('srs_settings')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (settingsError && settingsError.code !== 'PGRST116') {
        console.error('Error fetching settings:', settingsError)
      }

      if (settingsData) {
        setSettings({
          newCardsPerDay: settingsData.new_cards_per_day,
          reviewLimit: settingsData.review_limit
        })
      } else {
        // Create default settings
        await supabase.from('srs_settings').insert({
          user_id: user.id,
          new_cards_per_day: 20,
          review_limit: 100
        })
      }

      setLoading(false)
    }

    fetchData()
  }, [user])

  const addCard = useCallback(async (card) => {
    if (!user) return null

    // Check for duplicate
    if (cards.some(existing => existing.front === card.front && existing.back === card.back)) {
      console.log('Card already exists in the deck')
      return null
    }

    const newCard = {
      user_id: user.id,
      front: card.front,
      back: card.back,
      pronunciation: card.pronunciation || null,
      audio: card.audio || null,
      interval: 0,
      ease_factor: 2.5,
      repetitions: 0,
      due_date: new Date().toISOString(),
      last_review: null
    }

    const { data, error } = await supabase
      .from('srs_cards')
      .insert(newCard)
      .select()
      .single()

    if (error) {
      console.error('Error adding card:', error)
      return null
    }

    const formattedCard = {
      id: data.id,
      front: data.front,
      back: data.back,
      pronunciation: data.pronunciation,
      audio: data.audio,
      interval: data.interval,
      easeFactor: data.ease_factor,
      repetitions: data.repetitions,
      dueDate: data.due_date,
      lastReview: data.last_review,
      created: data.created_at
    }

    setCards(prev => [...prev, formattedCard])
    return data.id
  }, [user, cards])

  const addCards = useCallback(async (cardsToAdd) => {
    if (!user) return

    // Filter out duplicates - cards that already exist in the deck
    const uniqueCards = cardsToAdd.filter(card =>
      !cards.some(existing => existing.front === card.front && existing.back === card.back)
    )

    if (uniqueCards.length === 0) {
      console.log('All cards already exist in the deck')
      return
    }

    const newCards = uniqueCards.map(card => ({
      user_id: user.id,
      front: card.front,
      back: card.back,
      pronunciation: card.pronunciation || null,
      audio: card.audio || null,
      interval: 0,
      ease_factor: 2.5,
      repetitions: 0,
      due_date: new Date().toISOString(),
      last_review: null
    }))

    const { data, error } = await supabase
      .from('srs_cards')
      .insert(newCards)
      .select()

    if (error) {
      console.error('Error adding cards:', error)
      return
    }

    const formattedCards = data.map(card => ({
      id: card.id,
      front: card.front,
      back: card.back,
      pronunciation: card.pronunciation,
      audio: card.audio,
      interval: card.interval,
      easeFactor: card.ease_factor,
      repetitions: card.repetitions,
      dueDate: card.due_date,
      lastReview: card.last_review,
      created: card.created_at
    }))

    setCards(prev => [...prev, ...formattedCards])
  }, [user, cards])

  const reviewCard = useCallback(async (cardId, quality) => {
    const cardIndex = cards.findIndex(c => c.id === cardId)
    if (cardIndex === -1) return

    const card = cards[cardIndex]
    const updated = calculateNextReview(card, quality)

    const { error } = await supabase
      .from('srs_cards')
      .update({
        interval: updated.interval,
        ease_factor: updated.easeFactor,
        repetitions: updated.repetitions,
        due_date: updated.dueDate,
        last_review: updated.lastReview
      })
      .eq('id', cardId)

    if (error) {
      console.error('Error updating card:', error)
      return
    }

    setCards(prev => {
      const newCards = [...prev]
      newCards[cardIndex] = { ...card, ...updated }
      return newCards
    })

    setStats(prev => ({
      totalReviews: prev.totalReviews + 1,
      cardsLearned: quality >= 3 ? prev.cardsLearned + (card.repetitions === 0 ? 1 : 0) : prev.cardsLearned
    }))
  }, [cards])

  const getDueCards = useCallback(() => {
    const now = new Date()
    return cards
      .filter(card => new Date(card.dueDate) <= now)
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
      .slice(0, settings.reviewLimit)
  }, [cards, settings.reviewLimit])

  const getNewCards = useCallback(() => {
    const today = new Date().toDateString()
    const newCardsToday = cards.filter(
      card => card.lastReview && new Date(card.lastReview).toDateString() === today && card.repetitions === 1
    ).length

    const remaining = settings.newCardsPerDay - newCardsToday

    return cards
      .filter(card => card.repetitions === 0)
      .slice(0, Math.max(0, remaining))
  }, [cards, settings.newCardsPerDay])

  const getReviewQueue = useCallback(() => {
    const due = getDueCards()
    const newCards = getNewCards()
    return [...due, ...newCards]
  }, [getDueCards, getNewCards])

  const hasCard = useCallback((front, back) => {
    return cards.some(card => card.front === front && card.back === back)
  }, [cards])

  const updateSettings = useCallback(async (newSettings) => {
    if (!user) return

    const { error } = await supabase
      .from('srs_settings')
      .upsert({
        user_id: user.id,
        new_cards_per_day: newSettings.newCardsPerDay,
        review_limit: newSettings.reviewLimit
      }, { onConflict: 'user_id' })

    if (error) {
      console.error('Error updating settings:', error)
      return
    }

    setSettings(prev => ({ ...prev, ...newSettings }))
  }, [user])

  const getStats = useCallback(() => {
    const now = new Date()
    const dueCount = cards.filter(card => new Date(card.dueDate) <= now).length
    const newCount = cards.filter(card => card.repetitions === 0).length
    const learnedCount = cards.filter(card => card.repetitions > 0).length

    return {
      total: cards.length,
      due: dueCount,
      new: newCount,
      learned: learnedCount,
      ...stats
    }
  }, [cards, stats])

  return {
    cards,
    settings,
    loading,
    addCard,
    addCards,
    reviewCard,
    getDueCards,
    getNewCards,
    getReviewQueue,
    hasCard,
    updateSettings,
    getStats
  }
}
