import { useEffect, useState } from 'react'
import LuckyInterface from './components/LuckyInterface'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'

function App() {
  const [currentRoute, setCurrentRoute] = useState('/')

  useEffect(() => {
    const handleRoute = () => {
      const hash = window.location.hash || '#/'
      setCurrentRoute(hash.slice(1))
    }

    window.addEventListener('hashchange', handleRoute)
    handleRoute()

    return () => window.removeEventListener('hashchange', handleRoute)
  }, [])

  return (
    <div className="App">
      {currentRoute === '/' && <LuckyInterface />}
      {currentRoute === '/privacy' && <PrivacyPolicy />}
      {currentRoute === '/terms' && <TermsOfService />}
    </div>
  )
}

export default App