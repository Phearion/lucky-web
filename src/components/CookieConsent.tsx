import { useState, useEffect } from 'react'
import { Cookie, CheckCircle, XCircle } from 'lucide-react'

interface CookieConsentProps {
  onAccept: () => void
  onDecline: () => void
}

const CookieConsent = ({ onAccept, onDecline }: CookieConsentProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Check if consent was already given
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setTimeout(() => {
        setIsVisible(true)
        setIsAnimating(true)
      }, 1000)
    }
  }, [])

  const handleAccept = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      onAccept()
      localStorage.setItem('cookie-consent', 'accepted')
    }, 300)
  }

  const handleDecline = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
      onDecline()
      localStorage.setItem('cookie-consent', 'declined')
    }, 300)
  }

  if (!isVisible) return null

  return (
     <>
      {/* Overlay to disable interaction */}
      <div className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm" />

      {/* Cookie Consent Modal */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${isAnimating ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="mx-auto max-w-4xl p-4">
          <div className="relative overflow-hidden rounded-2xl border border-purple-500/20 bg-gray-900/95 p-6 backdrop-blur-xl">
          {/* Decorative grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]" />

          {/* Content */}
          <div className="relative flex items-center gap-6">
            {/* Cookie Image */}
            <div className="relative hidden sm:block">
              <div className="absolute -inset-2 animate-pulse rounded-full bg-purple-500/20 blur-xl" />
              <img
                src="/cookies.png"
                alt="Cookie Policy"
                className="relative h-24 w-24 object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 space-y-4">
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-purple-400" />
                <h3 className="text-lg font-bold text-white">
                  Cookie Settings
                </h3>
              </div>
              <p className="text-sm text-gray-300">
                Lucky-chan uses cookies to enhance your experience and analyze our traffic.
                Your data is handled with care and respect for privacy.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                onClick={handleAccept}
                className="flex items-center gap-2 rounded-xl bg-purple-500/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-purple-400/80"
              >
                <CheckCircle className="h-4 w-4" />
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="flex items-center gap-2 rounded-xl bg-gray-600/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-gray-500/50"
              >
                <XCircle className="h-4 w-4" />
                Decline
              </button>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -left-2 -top-2 h-16 w-16 animate-spin-slow rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl" />
          <div className="absolute -bottom-2 -right-2 h-16 w-16 animate-spin-reverse-slow rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl" />
        </div>
      </div>
    </div>
    </>
  )
}

export default CookieConsent