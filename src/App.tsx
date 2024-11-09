import { useEffect, useState } from 'react'
import LuckyInterface from './components/LuckyInterface'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import CookieConsent from './components/CookieConsent'
import CookiesBlocked from './components/CookiesBlocked'
import { useCookieConsent } from './hooks/useCookieConsent'

function App() {
  const { hasConsent, acceptCookies, declineCookies } = useCookieConsent()
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

  // Show blocked page if cookies were explicitly declined
  if (hasConsent === false) {
    return <CookiesBlocked />
  }

  return (
    <div className="App">
      {currentRoute === '/' && <LuckyInterface />}
      {currentRoute === '/privacy' && <PrivacyPolicy />}
      {currentRoute === '/terms' && <TermsOfService />}

      {hasConsent === null && (
        <CookieConsent
          onAccept={acceptCookies}
          onDecline={declineCookies}
        />
      )}
    </div>
  )
}

export default App