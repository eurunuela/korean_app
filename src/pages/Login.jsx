import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useLanguage } from '../hooks/useLanguage'
import './Login.css'

function Login() {
  const { signIn, signUp } = useAuth()
  const { currentLanguage, languages, changeLanguage, selectedLanguage } = useLanguage()
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    try {
      if (isSignUp) {
        await signUp(email, password)
        setMessage('Check your email to confirm your account!')
      } else {
        await signIn(email, password)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">{currentLanguage?.flag}</div>
          <h1>{currentLanguage?.name} Fluency</h1>
          <p>Master {currentLanguage?.name} in 24 weeks</p>
        </div>

        {/* Language Selection */}
        <div className="login-language-select">
          {Object.values(languages).map(lang => (
            <button
              key={lang.id}
              className={`login-language-btn ${selectedLanguage === lang.id ? 'login-language-btn--active' : ''}`}
              onClick={() => changeLanguage(lang.id)}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>

          {error && <div className="login-error">{error}</div>}
          {message && <div className="login-message">{message}</div>}

          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              minLength={6}
              required
            />
          </div>

          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </button>

          <div className="login-switch">
            {isSignUp ? (
              <p>
                Already have an account?{' '}
                <button type="button" onClick={() => setIsSignUp(false)}>
                  Sign In
                </button>
              </p>
            ) : (
              <p>
                Don't have an account?{' '}
                <button type="button" onClick={() => setIsSignUp(true)}>
                  Sign Up
                </button>
              </p>
            )}
          </div>
        </form>

        <div className="login-features">
          <div className="login-feature">
            <span>📚</span>
            <span>24-week structured plan</span>
          </div>
          <div className="login-feature">
            <span>🔄</span>
            <span>Spaced repetition flashcards</span>
          </div>
          <div className="login-feature">
            <span>📱</span>
            <span>Sync across devices</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
