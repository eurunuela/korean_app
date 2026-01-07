import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { useLanguage } from '../hooks/useLanguage'
import { useProgress } from '../hooks/useProgress'
import StudyGuide from '../components/Learning/StudyGuide'
import Quiz from '../components/Learning/Quiz'
import Dialogue from '../components/Learning/Dialogue'
import OutputPractice from '../components/Learning/OutputPractice'
import './Lesson.css'

function Lesson() {
  const { moduleId, lessonId } = useParams()
  const { markLessonComplete, isLessonComplete } = useProgress()
  const { curriculum } = useLanguage()
  const [selectedLesson, setSelectedLesson] = useState(null)

  // Get module from current language's curriculum
  const module = curriculum?.modules?.find(m => m.id === moduleId)

  if (!module) {
    return (
      <div className="lesson-not-found">
        <h2>Module not found</h2>
        <Link to="/">Return to Home</Link>
      </div>
    )
  }

  // If no lesson selected, show module overview
  const currentLesson = selectedLesson
    ? module.lessons.find(l => l.id === selectedLesson)
    : lessonId
    ? module.lessons.find(l => l.id === lessonId)
    : null

  const handleLessonComplete = () => {
    if (currentLesson) {
      markLessonComplete(currentLesson.id)
    }
  }

  return (
    <div className="lesson">
      {/* Module Header */}
      <header className="lesson-header">
        <Link to="/" className="lesson-back">← Back</Link>
        <div className="lesson-module-info">
          <span className="lesson-module-icon">{module.icon}</span>
          <div>
            <h1>{module.name}</h1>
            <p>{module.description}</p>
          </div>
        </div>
      </header>

      {/* Lesson Navigation */}
      <nav className="lesson-nav">
        <div className="lesson-nav-list">
          {module.lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              className={`lesson-nav-item ${
                (currentLesson?.id === lesson.id) ? 'lesson-nav-item--active' : ''
              } ${isLessonComplete(lesson.id) ? 'lesson-nav-item--complete' : ''}`}
              onClick={() => setSelectedLesson(lesson.id)}
            >
              <span className="lesson-nav-number">{index + 1}</span>
              <span className="lesson-nav-title">{lesson.title}</span>
              {isLessonComplete(lesson.id) && <span className="lesson-nav-check">✓</span>}
            </button>
          ))}
        </div>
      </nav>

      {/* Lesson Content */}
      {currentLesson ? (
        <div className="lesson-content">
          <div className="lesson-content-header">
            <h2>{currentLesson.title}</h2>
            {isLessonComplete(currentLesson.id) && (
              <span className="lesson-complete-badge">Completed</span>
            )}
          </div>

          {/* Introduction Text */}
          {currentLesson.intro && (
            <div className="lesson-intro">
              <div className="lesson-intro-content">
                {currentLesson.intro.split('\n\n').map((paragraph, index) => {
                  // Check if this paragraph is a markdown table
                  if (paragraph.includes('|') && paragraph.includes('---')) {
                    const lines = paragraph.trim().split('\n')
                    const headerRow = lines[0]
                    const dataRows = lines.slice(2) // Skip header and separator

                    const headers = headerRow.split('|').filter(cell => cell.trim())
                    const rows = dataRows.map(row =>
                      row.split('|').filter(cell => cell.trim())
                    )

                    return (
                      <table key={index} className="lesson-table">
                        <thead>
                          <tr>
                            {headers.map((header, i) => (
                              <th key={i}>{header.trim()}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex}>{cell.trim()}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )
                  }

                  // Regular paragraph
                  return (
                    <p key={index} dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                        .replace(/^- (.+)$/gm, '<span class="lesson-intro-bullet">$1</span>')
                        .replace(/^\d+\. (.+)$/gm, '<span class="lesson-intro-numbered">$1</span>')
                    }} />
                  )
                })}
              </div>
            </div>
          )}

          {/* Study Guide */}
          {currentLesson.studyGuide && currentLesson.studyGuide.length > 0 && (
            <StudyGuide
              items={currentLesson.studyGuide}
              title="Vocabulary & Key Points"
            />
          )}

          {/* Dialogue */}
          {currentLesson.dialogue && (
            <Dialogue dialogue={currentLesson.dialogue} />
          )}

          {/* Content (for lessons with markdown-style content) */}
          {currentLesson.content && (
            <div className="lesson-markdown">
              <div dangerouslySetInnerHTML={{
                __html: currentLesson.content
                  .replace(/^## (.*$)/gm, '<h3>$1</h3>')
                  .replace(/^### (.*$)/gm, '<h4>$1</h4>')
                  .replace(/^\*\*(.*)\*\*/gm, '<strong>$1</strong>')
                  .replace(/^- (.*$)/gm, '<li>$1</li>')
                  .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/^(.+)$/gm, '<p>$1</p>')
              }} />
            </div>
          )}

          {/* Quiz */}
          {currentLesson.quiz && currentLesson.quiz.length > 0 && (
            <div className="lesson-quiz-section">
              <h3>Quiz</h3>
              <Quiz
                questions={currentLesson.quiz}
                onComplete={(score, total) => {
                  if (score >= total * 0.6) {
                    handleLessonComplete()
                  }
                }}
              />
            </div>
          )}

          {/* Output Practice */}
          {currentLesson.outputPractice && currentLesson.outputPractice.length > 0 && (
            <OutputPractice exercises={currentLesson.outputPractice} />
          )}

          {/* Complete Button */}
          {!isLessonComplete(currentLesson.id) && (
            <button className="lesson-complete-btn" onClick={handleLessonComplete}>
              Mark Lesson Complete
            </button>
          )}
        </div>
      ) : (
        <div className="lesson-overview">
          <h2>Select a lesson to begin</h2>
          <p>This module contains {module.lessons.length} lessons. Click on a lesson above to start learning.</p>
        </div>
      )}
    </div>
  )
}

export default Lesson
