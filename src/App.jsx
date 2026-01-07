import { Routes, Route } from 'react-router-dom'
import { useAuth } from './hooks/useAuth'
import { useLanguage } from './hooks/useLanguage'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import Review from './pages/Review'
import Schedule from './pages/Schedule'
import Settings from './pages/Settings'
import Login from './pages/Login'

function App() {
  const { user, loading } = useAuth()
  const { currentLanguage, isLoading: langLoading } = useLanguage()

  if (loading || langLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">{currentLanguage?.flag || '🌐'}</div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Login />
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lesson/:weekId/:dayId" element={<Lesson />} />
        <Route path="/lesson/:moduleId" element={<Lesson />} />
        <Route path="/review" element={<Review />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Layout>
  )
}

export default App
