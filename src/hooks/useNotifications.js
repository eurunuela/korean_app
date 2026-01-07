import { useState, useEffect, useCallback } from 'react'
import { useProgress } from './useProgress'

const STORAGE_KEY = 'korean_notifications'

const defaultSettings = {
  enabled: false,
  morningTime: '08:00',
  reminderTime: '17:00',
  lastNotificationDate: null
}

export function useNotifications() {
  const [settings, setSettings] = useState(defaultSettings)
  const [permission, setPermission] = useState('default')
  const { progress } = useProgress()

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      setSettings(JSON.parse(saved))
    }
    if ('Notification' in window) {
      setPermission(Notification.permission)
    }
  }, [])

  // Save settings to localStorage
  const saveSettings = useCallback((newSettings) => {
    setSettings(newSettings)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newSettings))
  }, [])

  // Request notification permission
  const requestPermission = useCallback(async () => {
    if (!('Notification' in window)) {
      console.log('Notifications not supported')
      return false
    }

    const result = await Notification.requestPermission()
    setPermission(result)

    if (result === 'granted') {
      saveSettings({ ...settings, enabled: true })
      return true
    }
    return false
  }, [settings, saveSettings])

  // Show a notification
  const showNotification = useCallback((title, options = {}) => {
    if (permission !== 'granted') return

    const notification = new Notification(title, {
      icon: '/icon-192.png',
      badge: '/icon-192.png',
      ...options
    })

    notification.onclick = () => {
      window.focus()
      notification.close()
    }

    return notification
  }, [permission])

  // Check if today's lesson is complete
  const isTodayLessonComplete = useCallback(() => {
    const today = new Date().toDateString()
    return progress.lastStudyDate &&
           new Date(progress.lastStudyDate).toDateString() === today
  }, [progress.lastStudyDate])

  // Schedule check for notifications
  useEffect(() => {
    if (!settings.enabled || permission !== 'granted') return

    const checkAndNotify = () => {
      const now = new Date()
      const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`
      const today = now.toDateString()

      // Don't notify if we already notified today for this time slot
      const notifiedToday = settings.lastNotificationDate === today

      // Morning notification at 8am
      if (currentTime === settings.morningTime && !notifiedToday) {
        showNotification('Time to study Korean!', {
          body: 'Start your daily lesson and keep your streak going!',
          tag: 'morning-reminder'
        })
        saveSettings({ ...settings, lastNotificationDate: today })
      }

      // Afternoon reminder at 5pm if lesson not complete
      if (currentTime === settings.reminderTime && !isTodayLessonComplete()) {
        showNotification('Don\'t forget your Korean lesson!', {
          body: 'You haven\'t completed today\'s lesson yet. Keep your streak alive!',
          tag: 'afternoon-reminder'
        })
      }
    }

    // Check every minute
    const interval = setInterval(checkAndNotify, 60000)

    // Also check immediately
    checkAndNotify()

    return () => clearInterval(interval)
  }, [settings, permission, showNotification, isTodayLessonComplete, saveSettings])

  // Toggle notifications
  const toggleNotifications = useCallback(async (enabled) => {
    if (enabled && permission !== 'granted') {
      const granted = await requestPermission()
      if (!granted) return false
    }
    saveSettings({ ...settings, enabled })
    return true
  }, [permission, requestPermission, settings, saveSettings])

  // Update notification times
  const updateTimes = useCallback((morningTime, reminderTime) => {
    saveSettings({ ...settings, morningTime, reminderTime })
  }, [settings, saveSettings])

  return {
    settings,
    permission,
    requestPermission,
    toggleNotifications,
    updateTimes,
    showNotification,
    isTodayLessonComplete
  }
}
