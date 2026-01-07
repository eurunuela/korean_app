import { useState } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import './Flashcard.css'

function Flashcard({ card, onRate }) {
  const { currentLanguage } = useLanguage()
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleRate = (quality) => {
    setIsFlipped(false)
    onRate(card.id, quality)
  }

  return (
    <div className="flashcard-container">
      <div
        className={`flashcard ${isFlipped ? 'flashcard--flipped' : ''}`}
        onClick={handleFlip}
      >
        <div className="flashcard-front">
          <span className="flashcard-label">{currentLanguage?.name || 'Term'}</span>
          <p className="flashcard-text flashcard-front-text">{card.front}</p>
          <span className="flashcard-tap">Tap to reveal</span>
        </div>

        <div className="flashcard-back">
          <span className="flashcard-label">Meaning</span>
          <p className="flashcard-text">{card.back}</p>
          {card.pronunciation && (
            <p className="flashcard-pronunciation">/{card.pronunciation}/</p>
          )}
          <p className="flashcard-original">{card.front}</p>
        </div>
      </div>

      {isFlipped && (
        <div className="flashcard-ratings">
          <p className="flashcard-ratings-label">How well did you know it?</p>
          <div className="flashcard-buttons">
            <button
              className="flashcard-btn flashcard-btn--again"
              onClick={() => handleRate(1)}
            >
              <span className="flashcard-btn-label">Again</span>
              <span className="flashcard-btn-time">&lt;1m</span>
            </button>
            <button
              className="flashcard-btn flashcard-btn--hard"
              onClick={() => handleRate(3)}
            >
              <span className="flashcard-btn-label">Hard</span>
              <span className="flashcard-btn-time">1d</span>
            </button>
            <button
              className="flashcard-btn flashcard-btn--good"
              onClick={() => handleRate(4)}
            >
              <span className="flashcard-btn-label">Good</span>
              <span className="flashcard-btn-time">{card.interval ? `${Math.round(card.interval * card.easeFactor)}d` : '4d'}</span>
            </button>
            <button
              className="flashcard-btn flashcard-btn--easy"
              onClick={() => handleRate(5)}
            >
              <span className="flashcard-btn-label">Easy</span>
              <span className="flashcard-btn-time">{card.interval ? `${Math.round(card.interval * card.easeFactor * 1.3)}d` : '7d'}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Flashcard
