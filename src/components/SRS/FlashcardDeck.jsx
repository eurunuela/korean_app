import { useState, useEffect, useRef } from 'react'
import Flashcard from './Flashcard'
import { useSRS } from '../../hooks/useSRS'
import './FlashcardDeck.css'

function FlashcardDeck() {
  const { getReviewQueue, reviewCard, getStats, cards, loading } = useSRS()
  const [queue, setQueue] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sessionStats, setSessionStats] = useState({ reviewed: 0, correct: 0 })
  const [isComplete, setIsComplete] = useState(false)
  const hasInitialized = useRef(false)

  // Update queue when cards load or change
  useEffect(() => {
    // Don't run while loading or if we've already started a review session
    if (loading) return
    if (hasInitialized.current && sessionStats.reviewed > 0) return

    const reviewQueue = getReviewQueue()
    setQueue(reviewQueue)
    setCurrentIndex(0)
    setIsComplete(reviewQueue.length === 0)
    hasInitialized.current = true
  }, [cards, loading, getReviewQueue, sessionStats.reviewed])

  const handleRate = (cardId, quality) => {
    reviewCard(cardId, quality)

    setSessionStats(prev => ({
      reviewed: prev.reviewed + 1,
      correct: quality >= 3 ? prev.correct + 1 : prev.correct
    }))

    if (currentIndex < queue.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handleRefresh = () => {
    hasInitialized.current = false
    const reviewQueue = getReviewQueue()
    setQueue(reviewQueue)
    setCurrentIndex(0)
    setSessionStats({ reviewed: 0, correct: 0 })
    setIsComplete(reviewQueue.length === 0)
    hasInitialized.current = true
  }

  const stats = getStats()
  const currentCard = queue[currentIndex]

  if (isComplete && sessionStats.reviewed === 0) {
    return (
      <div className="flashcard-deck">
        <div className="flashcard-empty">
          <div className="flashcard-empty-icon">🎉</div>
          <h3>No cards to review!</h3>
          <p>You're all caught up. Add more cards from lessons or come back later.</p>
          <div className="flashcard-stats-summary">
            <div className="stat-item">
              <span className="stat-value">{stats.total}</span>
              <span className="stat-label">Total Cards</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{stats.learned}</span>
              <span className="stat-label">Learned</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{stats.new}</span>
              <span className="stat-label">New</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (isComplete) {
    const accuracy = Math.round((sessionStats.correct / sessionStats.reviewed) * 100)

    return (
      <div className="flashcard-deck">
        <div className="flashcard-complete">
          <div className="flashcard-complete-icon">
            {accuracy >= 80 ? '🌟' : accuracy >= 60 ? '👍' : '💪'}
          </div>
          <h3>Session Complete!</h3>
          <div className="flashcard-session-stats">
            <div className="session-stat">
              <span className="session-stat-value">{sessionStats.reviewed}</span>
              <span className="session-stat-label">Cards Reviewed</span>
            </div>
            <div className="session-stat">
              <span className="session-stat-value">{accuracy}%</span>
              <span className="session-stat-label">Accuracy</span>
            </div>
          </div>
          <p className="flashcard-feedback">
            {accuracy >= 80
              ? 'Excellent retention! Keep up the great work.'
              : accuracy >= 60
              ? 'Good progress! Keep practicing daily.'
              : 'Keep going! Consistent review builds strong memory.'}
          </p>
          <button className="flashcard-refresh" onClick={handleRefresh}>
            Review More Cards
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flashcard-deck">
      <div className="flashcard-deck-header">
        <div className="flashcard-progress">
          <span>{currentIndex + 1} / {queue.length}</span>
          <div className="flashcard-progress-bar">
            <div
              className="flashcard-progress-fill"
              style={{ width: `${((currentIndex + 1) / queue.length) * 100}%` }}
            />
          </div>
        </div>
        <div className="flashcard-deck-stats">
          <span className="deck-stat deck-stat--due">{stats.due} due</span>
          <span className="deck-stat deck-stat--new">{stats.new} new</span>
        </div>
      </div>

      {currentCard && (
        <Flashcard
          key={currentCard.id}
          card={currentCard}
          onRate={handleRate}
        />
      )}

      <div className="flashcard-session-progress">
        <span>This session: {sessionStats.reviewed} reviewed, {sessionStats.correct} correct</span>
      </div>
    </div>
  )
}

export default FlashcardDeck
