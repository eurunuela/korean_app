import { useState } from 'react'
import './Dialogue.css'

function Dialogue({ dialogue }) {
  const [showTranslation, setShowTranslation] = useState(true)
  const [currentLine, setCurrentLine] = useState(null)

  if (!dialogue) return null

  return (
    <div className="dialogue">
      <div className="dialogue-header">
        <h3>{dialogue.title}</h3>
        <button
          className="dialogue-toggle"
          onClick={() => setShowTranslation(!showTranslation)}
        >
          {showTranslation ? 'Hide' : 'Show'} Translation
        </button>
      </div>

      <div className="dialogue-lines">
        {dialogue.lines.map((line, index) => (
          <div
            key={index}
            className={`dialogue-line ${
              line.speaker === 'A' || line.speaker === 'You' || line.speaker === 'Customer'
                ? 'dialogue-line--left'
                : 'dialogue-line--right'
            } ${currentLine === index ? 'dialogue-line--active' : ''}`}
            onClick={() => setCurrentLine(currentLine === index ? null : index)}
          >
            <div className="dialogue-speaker">{line.speaker}</div>
            <div className="dialogue-bubble">
              <p className="dialogue-text">{line.korean}</p>
              {showTranslation && (
                <p className="dialogue-english">{line.english}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="dialogue-actions">
        <button className="dialogue-action">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="5,3 19,12 5,21" />
          </svg>
          Play Audio
        </button>
        <button className="dialogue-action">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
            <path d="M19 10v2a7 7 0 01-14 0v-2" />
            <line x1="12" y1="19" x2="12" y2="23" />
            <line x1="8" y1="23" x2="16" y2="23" />
          </svg>
          Practice Speaking
        </button>
      </div>
    </div>
  )
}

export default Dialogue
