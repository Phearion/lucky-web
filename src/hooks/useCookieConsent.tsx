import { useState, useEffect } from 'react'

const COOKIE_CONSENT_KEY = 'cookie-consent'

interface CookieOptions {
  analytics: boolean
  preferences: boolean
}

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null)

  useEffect(() => {
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (storedConsent) {
      setHasConsent(storedConsent === 'accepted')
    }
  }, [])

  const acceptCookies = () => {
    setHasConsent(true)
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')

    // Set cookie in Chrome storage
    const cookieOptions: CookieOptions = {
      analytics: true,
      preferences: true
    }

    document.cookie = `cookieConsent=accepted; path=/; max-age=${60 * 60 * 24 * 365}` // 1 year
    document.cookie = `cookieOptions=${JSON.stringify(cookieOptions)}; path=/; max-age=${60 * 60 * 24 * 365}`

    // Enable analytics if accepted
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      })
    }
  }

  const declineCookies = () => {
    setHasConsent(false)
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined')

    // Clear existing cookies
    document.cookie = 'cookieConsent=declined; path=/; max-age=0'
    document.cookie = 'cookieOptions=; path=/; max-age=0'

    // Disable analytics if declined
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      })
    }
  }

  return {
    hasConsent,
    acceptCookies,
    declineCookies
  }
}