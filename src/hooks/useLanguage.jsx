import { createContext, useContext, useState, useEffect } from 'react'
import { koreanCurriculum } from '../data/curriculum-korean'
import { basqueCurriculum } from '../data/curriculum-basque'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'selected_language'

const languages = {
  korean: {
    id: 'korean',
    name: 'Korean',
    nativeName: '한국어',
    flag: '🇰🇷',
    curriculum: koreanCurriculum
  },
  basque: {
    id: 'basque',
    name: 'Basque',
    nativeName: 'Euskara',
    flag: '🇪🇸',
    curriculum: basqueCurriculum
  }
}

export function LanguageProvider({ children }) {
  const [selectedLanguage, setSelectedLanguage] = useState('korean')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && languages[saved]) {
      setSelectedLanguage(saved)
    }
    setIsLoading(false)
  }, [])

  const changeLanguage = (langId) => {
    if (languages[langId]) {
      setSelectedLanguage(langId)
      localStorage.setItem(STORAGE_KEY, langId)
    }
  }

  const currentLanguage = languages[selectedLanguage]
  const curriculum = currentLanguage.curriculum

  return (
    <LanguageContext.Provider value={{
      selectedLanguage,
      currentLanguage,
      languages,
      changeLanguage,
      curriculum,
      isLoading
    }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
