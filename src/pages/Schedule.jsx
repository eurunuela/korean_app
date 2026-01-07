import { useState } from 'react'
import { Link } from 'react-router-dom'
import { schedule, getMonthTheme, scheduleBasque, getMonthThemeBasque } from '../data/schedule'
import { useProgress } from '../hooks/useProgress'
import { useLanguage } from '../hooks/useLanguage'
import './Schedule.css'

function Schedule() {
  const { progress, advanceDay, setDay } = useProgress()
  const { currentLanguage, selectedLanguage } = useLanguage()
  const [expandedWeek, setExpandedWeek] = useState(progress.currentWeek)

  const handleSelectDay = (week, day) => {
    setDay(week, day)
  }

  // Get language-specific data
  const currentSchedule = selectedLanguage === 'basque' ? scheduleBasque : schedule
  const getTheme = selectedLanguage === 'basque' ? getMonthThemeBasque : getMonthTheme

  const months = [1, 2, 3, 4, 5, 6]

  const getWeeksForMonth = (month) => {
    const start = (month - 1) * 4 + 1
    return currentSchedule.filter(w => w.week >= start && w.week < start + 4)
  }

  const handleAdvanceDay = () => {
    if (confirm('Mark today as complete and move to the next day?')) {
      advanceDay()
    }
  }

  return (
    <div className="schedule">
      <header className="schedule-header">
        <Link to="/" className="schedule-back">← Back</Link>
        <h1>24-Week Study Plan</h1>
        <p>Your roadmap to {currentLanguage?.name || 'language'} fluency</p>
      </header>

      {/* Current Position */}
      <div className="schedule-current">
        <div className="schedule-current-info">
          <span className="schedule-current-label">Current Position</span>
          <span className="schedule-current-value">
            Week {progress.currentWeek}, Day {progress.currentDay}
          </span>
        </div>
        <button className="schedule-advance" onClick={handleAdvanceDay}>
          Complete Today →
        </button>
      </div>

      {/* Progress Overview */}
      <div className="schedule-progress">
        <div className="schedule-progress-bar">
          <div
            className="schedule-progress-fill"
            style={{ width: `${(progress.currentWeek / 24) * 100}%` }}
          />
          {[1, 2, 3, 4, 5, 6].map(month => (
            <div
              key={month}
              className="schedule-progress-marker"
              style={{ left: `${(month * 4 / 24) * 100}%` }}
            >
              <span>M{month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Month by Month */}
      {months.map(month => {
        const monthWeeks = getWeeksForMonth(month)
        const isCurrentMonth = progress.currentWeek >= (month - 1) * 4 + 1 &&
                               progress.currentWeek <= month * 4

        return (
          <div key={month} className={`schedule-month ${isCurrentMonth ? 'schedule-month--current' : ''}`}>
            <div className="schedule-month-header">
              <h2>Month {month}: {getTheme(month)}</h2>
              <span className="schedule-month-weeks">Weeks {(month - 1) * 4 + 1}-{month * 4}</span>
            </div>

            <div className="schedule-weeks">
              {monthWeeks.map(week => {
                const isCurrentWeek = week.week === progress.currentWeek
                const isPastWeek = week.week < progress.currentWeek
                const isExpanded = expandedWeek === week.week

                return (
                  <div
                    key={week.week}
                    className={`schedule-week ${isCurrentWeek ? 'schedule-week--current' : ''} ${isPastWeek ? 'schedule-week--past' : ''}`}
                  >
                    <button
                      className="schedule-week-header"
                      onClick={() => setExpandedWeek(isExpanded ? null : week.week)}
                    >
                      <div className="schedule-week-info">
                        <span className="schedule-week-number">Week {week.week}</span>
                        <span className="schedule-week-theme">{week.theme}</span>
                      </div>
                      <div className="schedule-week-meta">
                        <span className="schedule-week-vocab">{week.targetVocab} words</span>
                        <span className="schedule-week-expand">{isExpanded ? '−' : '+'}</span>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="schedule-week-content">
                        <div className="schedule-goals">
                          <h4>Goals</h4>
                          <ul>
                            {week.goals.map((goal, i) => (
                              <li key={i}>{goal}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="schedule-days">
                          <h4>Daily Sessions</h4>
                          {week.dailySessions.map(session => {
                            const isToday = isCurrentWeek && session.day === progress.currentDay
                            const isPastDay = isPastWeek || (isCurrentWeek && session.day < progress.currentDay)

                            return (
                              <div
                                key={session.day}
                                className={`schedule-day ${isToday ? 'schedule-day--today' : ''} ${isPastDay ? 'schedule-day--past' : ''}`}
                                onClick={() => handleSelectDay(week.week, session.day)}
                                style={{ cursor: 'pointer' }}
                              >
                                <div className="schedule-day-header">
                                  <span className="schedule-day-number">Day {session.day}</span>
                                  {isToday && <span className="schedule-day-badge">Current</span>}
                                  {!isToday && <span className="schedule-day-select">Click to select</span>}
                                </div>
                                <div className="schedule-day-blocks">
                                  {session.blocks.map((block, i) => (
                                    <div key={i} className={`schedule-block schedule-block--${block.type}`}>
                                      <span className="schedule-block-type">
                                        {block.type === 'review' && '🔄'}
                                        {block.type === 'lesson' && '📖'}
                                        {block.type === 'output' && '✍️'}
                                      </span>
                                      <span className="schedule-block-content">{block.content}</span>
                                      <span className="schedule-block-time">{block.minutes}m</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Schedule
