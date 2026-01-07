import { useProgress } from '../../hooks/useProgress'
import { useSRS } from '../../hooks/useSRS'
import { useLanguage } from '../../hooks/useLanguage'
import './Header.css'

function Header({ onMenuClick }) {
  const { progress } = useProgress()
  const { getStats } = useSRS()
  const { currentLanguage } = useLanguage()
  const stats = getStats()

  return (
    <header className="header">
      <button className="header-menu" onClick={onMenuClick} aria-label="Open menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      <div className="header-title">
        <span className="header-flag">{currentLanguage?.flag}</span>
        <span>{currentLanguage?.nativeName || 'Language'}</span>
      </div>

      <div className="header-stats">
        {progress.streak > 0 && (
          <div className="header-stat" title="Day streak">
            <span className="header-stat-icon">🔥</span>
            <span className="header-stat-value">{progress.streak}</span>
          </div>
        )}
        {stats.due > 0 && (
          <div className="header-stat header-stat--due" title="Cards due for review">
            <span className="header-stat-value">{stats.due}</span>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
