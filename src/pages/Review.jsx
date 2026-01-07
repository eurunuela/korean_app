import { Link } from 'react-router-dom'
import FlashcardDeck from '../components/SRS/FlashcardDeck'
import { useSRS } from '../hooks/useSRS'
import './Review.css'

function Review() {
  const { getStats } = useSRS()
  const stats = getStats()

  return (
    <div className="review">
      <header className="review-header">
        <Link to="/" className="review-back">← Back</Link>
        <h1>Review Cards</h1>
        <p>Strengthen your memory with spaced repetition</p>
      </header>

      <div className="review-stats">
        <div className="review-stat">
          <span className="review-stat-value">{stats.total}</span>
          <span className="review-stat-label">Total Cards</span>
        </div>
        <div className="review-stat review-stat--due">
          <span className="review-stat-value">{stats.due}</span>
          <span className="review-stat-label">Due Today</span>
        </div>
        <div className="review-stat">
          <span className="review-stat-value">{stats.new}</span>
          <span className="review-stat-label">New Cards</span>
        </div>
        <div className="review-stat">
          <span className="review-stat-value">{stats.learned}</span>
          <span className="review-stat-label">Learning</span>
        </div>
      </div>

      <FlashcardDeck />

      <div className="review-tips">
        <h3>Tips for Effective Review</h3>
        <ul>
          <li><strong>Be honest</strong> - Rate cards based on how well you truly knew them</li>
          <li><strong>Say it aloud</strong> - Speaking helps reinforce pronunciation</li>
          <li><strong>Review daily</strong> - Consistency is more important than session length</li>
          <li><strong>Add context</strong> - Try to recall example sentences for each word</li>
        </ul>
      </div>
    </div>
  )
}

export default Review
