import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { useSRS } from '../hooks/useSRS'
import { useAuth } from '../hooks/useAuth'
import { useNotifications } from '../hooks/useNotifications'
import { useLanguage } from '../hooks/useLanguage'
import './Settings.css'

function Settings() {
  const { progress, resetProgress } = useProgress()
  const { settings, updateSettings, getStats } = useSRS()
  const { user, signOut } = useAuth()
  const {
    settings: notifSettings,
    permission,
    toggleNotifications,
    updateTimes
  } = useNotifications()
  const { selectedLanguage, languages, changeLanguage, currentLanguage } = useLanguage()
  const stats = getStats()

  const [newCardsPerDay, setNewCardsPerDay] = useState(settings.newCardsPerDay)
  const [reviewLimit, setReviewLimit] = useState(settings.reviewLimit)
  const [morningTime, setMorningTime] = useState(notifSettings.morningTime)
  const [reminderTime, setReminderTime] = useState(notifSettings.reminderTime)

  const handleSaveSettings = async () => {
    await updateSettings({
      newCardsPerDay: parseInt(newCardsPerDay),
      reviewLimit: parseInt(reviewLimit)
    })
    alert('Settings saved!')
  }

  const handleResetProgress = () => {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
      resetProgress()
      alert('Progress has been reset.')
    }
  }

  const handleSignOut = async () => {
    if (confirm('Are you sure you want to sign out?')) {
      await signOut()
    }
  }

  return (
    <div className="settings">
      <header className="settings-header">
        <Link to="/" className="settings-back">← Back</Link>
        <h1>Settings</h1>
      </header>

      {/* Language Selection */}
      <section className="settings-section">
        <h2>Language</h2>
        <div className="settings-field">
          <label>Select Language to Learn</label>
          <div className="settings-language-options">
            {Object.values(languages).map(lang => (
              <button
                key={lang.id}
                className={`settings-language-btn ${selectedLanguage === lang.id ? 'settings-language-btn--active' : ''}`}
                onClick={() => changeLanguage(lang.id)}
              >
                <span className="settings-language-flag">{lang.flag}</span>
                <span className="settings-language-name">{lang.name}</span>
                <span className="settings-language-native">{lang.nativeName}</span>
              </button>
            ))}
          </div>
          <p className="settings-help">
            Currently learning: <strong>{currentLanguage?.name}</strong> ({currentLanguage?.nativeName})
          </p>
        </div>
      </section>

      {/* Notifications */}
      <section className="settings-section">
        <h2>Notifications</h2>

        <div className="settings-field">
          <div className="settings-toggle-row">
            <label htmlFor="notifEnabled">Daily reminders</label>
            <button
              className={`settings-toggle ${notifSettings.enabled ? 'settings-toggle--on' : ''}`}
              onClick={async () => {
                const success = await toggleNotifications(!notifSettings.enabled)
                if (!success && !notifSettings.enabled) {
                  alert('Please allow notifications in your browser settings')
                }
              }}
            >
              <span className="settings-toggle-slider" />
            </button>
          </div>
          <p className="settings-help">
            {permission === 'denied'
              ? 'Notifications are blocked. Please enable them in browser settings.'
              : 'Get reminded to study every day'}
          </p>
        </div>

        {notifSettings.enabled && (
          <>
            <div className="settings-field">
              <label htmlFor="morningTime">Morning reminder</label>
              <input
                type="time"
                id="morningTime"
                value={morningTime}
                onChange={(e) => {
                  setMorningTime(e.target.value)
                  updateTimes(e.target.value, reminderTime)
                }}
              />
              <p className="settings-help">Daily reminder to start your lesson</p>
            </div>

            <div className="settings-field">
              <label htmlFor="reminderTime">Afternoon reminder</label>
              <input
                type="time"
                id="reminderTime"
                value={reminderTime}
                onChange={(e) => {
                  setReminderTime(e.target.value)
                  updateTimes(morningTime, e.target.value)
                }}
              />
              <p className="settings-help">Reminder if you haven't finished your lesson yet</p>
            </div>
          </>
        )}
      </section>

      {/* Account */}
      <section className="settings-section">
        <h2>Account</h2>
        <div className="settings-account">
          <div className="settings-account-info">
            <span className="settings-account-label">Signed in as</span>
            <span className="settings-account-email">{user?.email}</span>
          </div>
          <button className="settings-signout" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </section>

      {/* SRS Settings */}
      <section className="settings-section">
        <h2>Flashcard Settings</h2>

        <div className="settings-field">
          <label htmlFor="newCards">New cards per day</label>
          <input
            type="number"
            id="newCards"
            value={newCardsPerDay}
            onChange={(e) => setNewCardsPerDay(e.target.value)}
            min="1"
            max="100"
          />
          <p className="settings-help">
            Number of new vocabulary cards to introduce each day
          </p>
        </div>

        <div className="settings-field">
          <label htmlFor="reviewLimit">Daily review limit</label>
          <input
            type="number"
            id="reviewLimit"
            value={reviewLimit}
            onChange={(e) => setReviewLimit(e.target.value)}
            min="10"
            max="500"
          />
          <p className="settings-help">
            Maximum number of cards to review in a single session
          </p>
        </div>

        <button className="settings-save" onClick={handleSaveSettings}>
          Save Settings
        </button>
      </section>

      {/* Statistics */}
      <section className="settings-section">
        <h2>Your Statistics</h2>

        <div className="settings-stats">
          <div className="settings-stat">
            <span className="settings-stat-label">Current Week</span>
            <span className="settings-stat-value">Week {progress.currentWeek}</span>
          </div>
          <div className="settings-stat">
            <span className="settings-stat-label">Day Streak</span>
            <span className="settings-stat-value">{progress.streak} days</span>
          </div>
          <div className="settings-stat">
            <span className="settings-stat-label">Total Study Time</span>
            <span className="settings-stat-value">{Math.round(progress.totalStudyMinutes / 60)} hours</span>
          </div>
          <div className="settings-stat">
            <span className="settings-stat-label">Lessons Completed</span>
            <span className="settings-stat-value">{progress.completedLessons.length}</span>
          </div>
          <div className="settings-stat">
            <span className="settings-stat-label">Total Flashcards</span>
            <span className="settings-stat-value">{stats.total}</span>
          </div>
          <div className="settings-stat">
            <span className="settings-stat-label">Cards Learned</span>
            <span className="settings-stat-value">{stats.learned}</span>
          </div>
        </div>
      </section>

      {/* Data Management */}
      <section className="settings-section">
        <h2>Data Management</h2>

        <div className="settings-actions">
          <div className="settings-sync-info">
            <span className="settings-action-icon">☁️</span>
            <div>
              <span className="settings-action-label">Cloud Sync Enabled</span>
              <span className="settings-action-desc">Your data syncs automatically across devices</span>
            </div>
          </div>

          <button className="settings-action settings-action--danger" onClick={handleResetProgress}>
            <span className="settings-action-icon">🗑️</span>
            <div>
              <span className="settings-action-label">Reset Progress</span>
              <span className="settings-action-desc">Start fresh (cannot be undone)</span>
            </div>
          </button>
        </div>
      </section>

      {/* About */}
      <section className="settings-section">
        <h2>About</h2>
        <div className="settings-about">
          <p>
            <strong>{currentLanguage?.name} Fluency in 6 Months</strong>
          </p>
          <p>
            A personal learning app for mastering {currentLanguage?.name} through structured daily practice,
            spaced repetition, and active output exercises.
          </p>
          <p className="settings-version">Version 1.1.0</p>
        </div>
      </section>
    </div>
  )
}

export default Settings
