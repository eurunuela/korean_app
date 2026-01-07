import { useState } from 'react'
import { useSRS } from '../../hooks/useSRS'
import './StudyGuide.css'

function StudyGuideCard({ item, onAddToSRS }) {
  const [expanded, setExpanded] = useState(false)
  const [added, setAdded] = useState(false)

  const handleAddToSRS = () => {
    onAddToSRS(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className={`study-card ${expanded ? 'study-card--expanded' : ''}`}>
      <div className="study-card-header" onClick={() => setExpanded(!expanded)}>
        <div className="study-card-main">
          <span className="study-card-korean">{item.korean}</span>
          {item.romanization && (
            <span className="study-card-roman">{item.romanization}</span>
          )}
        </div>
        <div className="study-card-meaning">{item.meaning}</div>
        <button className="study-card-expand" aria-label={expanded ? 'Collapse' : 'Expand'}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points={expanded ? "18,15 12,9 6,15" : "6,9 12,15 18,9"} />
          </svg>
        </button>
      </div>

      {expanded && (
        <div className="study-card-details">
          {item.usage && (
            <div className="study-card-section">
              <h4>Usage</h4>
              <p>{item.usage}</p>
            </div>
          )}

          {item.example && (
            <div className="study-card-section">
              <h4>Example</h4>
              <p className="study-card-example-text">{item.example}</p>
            </div>
          )}

          {item.commonMistake && (
            <div className="study-card-section study-card-section--warning">
              <h4>Common Mistake</h4>
              <p>{item.commonMistake}</p>
            </div>
          )}

          {item.memoryAid && (
            <div className="study-card-section study-card-section--tip">
              <h4>Memory Aid</h4>
              <p>{item.memoryAid}</p>
            </div>
          )}

          <button
            className={`study-card-srs ${added ? 'study-card-srs--added' : ''}`}
            onClick={handleAddToSRS}
            disabled={added}
          >
            {added ? 'Added!' : '+ Add to Review Cards'}
          </button>
        </div>
      )}
    </div>
  )
}

function StudyGuide({ items, title }) {
  const { addCard, hasCard } = useSRS()
  const [addedCount, setAddedCount] = useState(0)

  const handleAddToSRS = (item) => {
    if (!hasCard(item.korean, item.meaning)) {
      addCard({
        front: item.korean,
        back: `${item.meaning}${item.romanization ? ` (${item.romanization})` : ''}`,
        audio: item.audio
      })
      setAddedCount(prev => prev + 1)
    }
  }

  const handleAddAll = () => {
    let count = 0
    items.forEach(item => {
      if (!hasCard(item.korean, item.meaning)) {
        addCard({
          front: item.korean,
          back: `${item.meaning}${item.romanization ? ` (${item.romanization})` : ''}`,
          audio: item.audio
        })
        count++
      }
    })
    setAddedCount(prev => prev + count)
  }

  return (
    <div className="study-guide">
      <div className="study-guide-header">
        <h3>{title || 'Study Guide'}</h3>
        <button className="study-guide-add-all" onClick={handleAddAll}>
          Add All to SRS
        </button>
      </div>

      {addedCount > 0 && (
        <div className="study-guide-notification">
          {addedCount} card{addedCount > 1 ? 's' : ''} added to review deck
        </div>
      )}

      <div className="study-guide-cards">
        {items.map((item, index) => (
          <StudyGuideCard
            key={item.korean + index}
            item={item}
            onAddToSRS={handleAddToSRS}
          />
        ))}
      </div>
    </div>
  )
}

export default StudyGuide
