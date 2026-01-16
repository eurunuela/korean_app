import { Link } from 'react-router-dom'
import { useProgress } from '../hooks/useProgress'
import { useSRS } from '../hooks/useSRS'
import { useLanguage } from '../hooks/useLanguage'
import { getWeekSchedule, getDaySession, getWeekScheduleBasque, getDaySessionBasque } from '../data/schedule'
import { getVocabForWeek, getVocabForWeekBasque } from '../data/vocabulary'
import './Home.css'

function Home() {
  const { progress } = useProgress()
  const { getStats, addCards, hasCard } = useSRS()
  const { currentLanguage, curriculum, selectedLanguage } = useLanguage()
  const stats = getStats()

  // Get language-specific functions
  const getWeekData = selectedLanguage === 'basque' ? getWeekScheduleBasque : getWeekSchedule
  const getDayData = selectedLanguage === 'basque' ? getDaySessionBasque : getDaySession
  const getVocab = selectedLanguage === 'basque' ? getVocabForWeekBasque : getVocabForWeek

  // Get modules for quick action links (filter out 'daily' - it's accessed through schedule)
  const browsableModules = curriculum?.modules?.filter(m => m.id !== 'daily') || []
  const firstModule = browsableModules[0]
  const secondModule = browsableModules[1]

  const currentWeekData = getWeekData(progress.currentWeek)
  const todaySession = getDayData(progress.currentWeek, progress.currentDay)

  const handleLoadWeekVocab = () => {
    const weekVocab = getVocab(progress.currentWeek)
    const newCards = weekVocab.filter(v => !hasCard(v.front, v.back))
    if (newCards.length > 0) {
      addCards(newCards)
      alert(`Added ${newCards.length} vocabulary cards for Week ${progress.currentWeek}!`)
    } else {
      alert('All vocabulary for this week is already in your deck!')
    }
  }

  return (
    <div className="home">
      <header className="home-header">
        <h1>Today's Session</h1>
        <p className="home-date">
          Week {progress.currentWeek}, Day {progress.currentDay}
        </p>
      </header>

      {/* Stats Overview */}
      <section className="home-stats">
        <div className="stat-card">
          <span className="stat-card-value">{progress.streak}</span>
          <span className="stat-card-label">Day Streak</span>
        </div>
        <div className="stat-card">
          <span className="stat-card-value">{progress.vocabLearned}</span>
          <span className="stat-card-label">Words Learned</span>
        </div>
        <div className="stat-card stat-card--accent">
          <span className="stat-card-value">{stats.due}</span>
          <span className="stat-card-label">Cards Due</span>
        </div>
      </section>

      {/* Week Theme */}
      {currentWeekData && (
        <section className="home-week">
          <h2>{currentWeekData.theme}</h2>
          <div className="week-goals">
            <h4>This Week's Goals</h4>
            <ul>
              {currentWeekData.goals.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
          <div className="week-progress">
            <span>Target: {currentWeekData.targetVocab} words</span>
            <button className="week-load-vocab" onClick={handleLoadWeekVocab}>
              Load Week's Vocabulary
            </button>
          </div>
        </section>
      )}

      {/* Today's Blocks */}
      {todaySession && (
        <section className="home-session">
          <h2>Today's Plan</h2>
          <div className="session-blocks">
            {todaySession.blocks.map((block, index) => (
              <div key={index} className={`session-block session-block--${block.type}`}>
                <div className="session-block-header">
                  <span className="session-block-type">
                    {block.type === 'review' && '🔄 Review'}
                    {block.type === 'lesson' && '📖 Learn'}
                    {block.type === 'output' && '✍️ Practice'}
                  </span>
                  <span className="session-block-time">{block.minutes} min</span>
                </div>
                <p className="session-block-content">{block.content}</p>
                {block.moduleId && block.lessonId && (
                  <Link
                    to={`/lesson/${block.moduleId}/${block.lessonId}`}
                    className="session-block-link"
                  >
                    Go to Lesson →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Quick Actions */}
      <section className="home-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <Link to="/review" className="action-btn action-btn--primary">
            <span className="action-icon">🔄</span>
            <span className="action-label">Review Cards</span>
            {stats.due > 0 && <span className="action-badge">{stats.due}</span>}
          </Link>
          <Link to="/schedule" className="action-btn">
            <span className="action-icon">📅</span>
            <span className="action-label">View Schedule</span>
          </Link>
          {firstModule && (
            <Link to={`/lesson/${firstModule.id}`} className="action-btn">
              <span className="action-icon">{firstModule.icon}</span>
              <span className="action-label">{firstModule.name}</span>
            </Link>
          )}
          {secondModule && (
            <Link to={`/lesson/${secondModule.id}`} className="action-btn">
              <span className="action-icon">{secondModule.icon}</span>
              <span className="action-label">{secondModule.name}</span>
            </Link>
          )}
        </div>
      </section>

      {/* Progress Summary */}
      <section className="home-progress">
        <h2>Your Progress</h2>
        <div className="progress-bar-container">
          <div className="progress-bar-labels">
            <span>Week {progress.currentWeek} of 24</span>
            <span>{Math.round((progress.currentWeek / 24) * 100)}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-bar-fill"
              style={{ width: `${(progress.currentWeek / 24) * 100}%` }}
            />
          </div>
        </div>
        <p className="progress-summary">
          You've studied for{' '}
          <strong>{Math.round(progress.totalStudyMinutes / 60)} hours</strong> total
          and completed{' '}
          <strong>{progress.completedLessons.length} lessons</strong>.
        </p>
      </section>
    </div>
  )
}

export default Home
