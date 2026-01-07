import { NavLink } from 'react-router-dom'
import { useProgress } from '../../hooks/useProgress'
import { useLanguage } from '../../hooks/useLanguage'
import './Sidebar.css'

function Sidebar({ isOpen, onClose }) {
  const { progress } = useProgress()
  const { currentLanguage, curriculum } = useLanguage()

  // Get modules from current language's curriculum
  const modules = curriculum?.modules || []

  return (
    <aside className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="sidebar-logo-text">{currentLanguage?.nativeName || 'Language'}</span>
          <span className="sidebar-logo-sub">{currentLanguage?.name || ''} Fluency</span>
        </div>
        <button className="sidebar-close" onClick={onClose} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="sidebar-stats">
        <div className="stat">
          <span className="stat-value">{progress.streak}</span>
          <span className="stat-label">Day Streak</span>
        </div>
        <div className="stat">
          <span className="stat-value">{progress.vocabLearned}</span>
          <span className="stat-label">Words</span>
        </div>
        <div className="stat">
          <span className="stat-value">W{progress.currentWeek}</span>
          <span className="stat-label">Week</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-section-title">Quick Access</h3>
          <NavLink to="/" className="nav-link" onClick={onClose}>
            <span className="nav-icon">🏠</span>
            <span>Today's Session</span>
          </NavLink>
          <NavLink to="/review" className="nav-link" onClick={onClose}>
            <span className="nav-icon">🔄</span>
            <span>Review Cards</span>
          </NavLink>
          <NavLink to="/schedule" className="nav-link" onClick={onClose}>
            <span className="nav-icon">📅</span>
            <span>24-Week Plan</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <h3 className="nav-section-title">Modules</h3>
          {modules.map(module => (
            <NavLink
              key={module.id}
              to={`/lesson/${module.id}`}
              className="nav-link"
              onClick={onClose}
            >
              <span className="nav-icon">{module.icon}</span>
              <span>{module.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="sidebar-footer">
        <NavLink to="/settings" className="nav-link" onClick={onClose}>
          <span className="nav-icon">⚙️</span>
          <span>Settings</span>
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar
