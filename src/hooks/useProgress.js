import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabase'
import { useAuth } from './useAuth'

const initialProgress = {
  completedLessons: [],
  currentWeek: 1,
  currentDay: 1,
  streak: 0,
  lastStudyDate: null,
  totalStudyMinutes: 0,
  vocabLearned: 0
}

export function useProgress() {
  const { user } = useAuth()
  const [progress, setProgress] = useState(initialProgress)
  const [loading, setLoading] = useState(true)

  // Fetch progress from Supabase
  useEffect(() => {
    if (!user) {
      setProgress(initialProgress)
      setLoading(false)
      return
    }

    const fetchProgress = async () => {
      const { data, error } = await supabase
        .from('user_progress')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching progress:', error)
      }

      if (data) {
        setProgress({
          completedLessons: data.completed_lessons || [],
          currentWeek: data.current_week,
          currentDay: data.current_day,
          streak: data.streak,
          lastStudyDate: data.last_study_date,
          totalStudyMinutes: data.total_study_minutes,
          vocabLearned: data.vocab_learned
        })
      } else {
        // Create initial progress for new user
        await supabase.from('user_progress').insert({
          user_id: user.id,
          completed_lessons: [],
          current_week: 1,
          current_day: 1,
          streak: 0,
          total_study_minutes: 0,
          vocab_learned: 0
        })
      }
      setLoading(false)
    }

    fetchProgress()
  }, [user])

  // Sync progress to Supabase
  const syncProgress = useCallback(async (newProgress) => {
    if (!user) return

    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: user.id,
        completed_lessons: newProgress.completedLessons,
        current_week: newProgress.currentWeek,
        current_day: newProgress.currentDay,
        streak: newProgress.streak,
        last_study_date: newProgress.lastStudyDate,
        total_study_minutes: newProgress.totalStudyMinutes,
        vocab_learned: newProgress.vocabLearned,
        updated_at: new Date().toISOString()
      }, { onConflict: 'user_id' })

    if (error) {
      console.error('Error syncing progress:', error)
    }
  }, [user])

  const updateProgress = useCallback((updater) => {
    setProgress(prev => {
      const newProgress = typeof updater === 'function' ? updater(prev) : updater
      syncProgress(newProgress)
      return newProgress
    })
  }, [syncProgress])

  const updateStreak = useCallback(() => {
    const today = new Date().toDateString()
    const lastDate = progress.lastStudyDate ? new Date(progress.lastStudyDate).toDateString() : null

    if (lastDate === today) return progress.streak

    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)

    if (lastDate === yesterday.toDateString()) {
      return progress.streak + 1
    }
    return 1
  }, [progress.lastStudyDate, progress.streak])

  const markLessonComplete = useCallback((lessonId) => {
    const newStreak = updateStreak()
    updateProgress(prev => ({
      ...prev,
      completedLessons: [...new Set([...prev.completedLessons, lessonId])],
      streak: newStreak,
      lastStudyDate: new Date().toISOString()
    }))
  }, [updateProgress, updateStreak])

  const addStudyTime = useCallback((minutes) => {
    updateProgress(prev => ({
      ...prev,
      totalStudyMinutes: prev.totalStudyMinutes + minutes,
      lastStudyDate: new Date().toISOString(),
      streak: updateStreak()
    }))
  }, [updateProgress, updateStreak])

  const advanceDay = useCallback(() => {
    updateProgress(prev => {
      let newWeek = prev.currentWeek
      let newDay = prev.currentDay + 1

      if (newDay > 6) {
        newDay = 1
        newWeek = Math.min(newWeek + 1, 24)
      }

      return { ...prev, currentWeek: newWeek, currentDay: newDay }
    })
  }, [updateProgress])

  const setDay = useCallback((week, day) => {
    updateProgress(prev => ({
      ...prev,
      currentWeek: Math.max(1, Math.min(24, week)),
      currentDay: Math.max(1, Math.min(6, day))
    }))
  }, [updateProgress])

  const incrementVocab = useCallback((count = 1) => {
    updateProgress(prev => ({
      ...prev,
      vocabLearned: prev.vocabLearned + count
    }))
  }, [updateProgress])

  const resetProgress = useCallback(() => {
    updateProgress(initialProgress)
  }, [updateProgress])

  const isLessonComplete = useCallback((lessonId) => {
    return progress.completedLessons.includes(lessonId)
  }, [progress.completedLessons])

  return {
    progress,
    loading,
    markLessonComplete,
    addStudyTime,
    advanceDay,
    setDay,
    incrementVocab,
    resetProgress,
    isLessonComplete
  }
}
