import { RefreshCw, Cookie, Heart } from 'lucide-react'

const CookiesBlocked = () => {
  const handleReload = () => {
    // Clear the declined cookie consent before reloading
    localStorage.removeItem('cookie-consent')
    document.cookie = 'cookieConsent=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'
    document.cookie = 'cookieOptions=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;'

    // Reload the page
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-800 to-pink-700 text-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="container mx-auto px-4 py-8 relative">
        <div className="flex min-h-[80vh] flex-col items-center justify-center">
          {/* Icon Section */}
          <div className="relative mb-8">
            {/* Glowing effect */}
            <div className="absolute -inset-4 animate-pulse rounded-full bg-purple-500/20 blur-xl" />

            {/* Cookie image */}
            <div className="relative">
              <img
                src="/cookies.png"
                alt="Cookies Blocked"
                className="h-40 w-40 object-contain drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />

              {/* Floating hearts */}
              <div className="absolute -right-4 -top-4 animate-float-1">
                <Heart className="h-6 w-6 text-pink-400" />
              </div>
              <div className="absolute -left-4 bottom-4 animate-float-2">
                <Heart className="h-4 w-4 text-pink-400" />
              </div>
              <div className="absolute right-0 -bottom-2 animate-float-3">
                <Heart className="h-5 w-5 text-pink-400" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center space-y-6 max-w-xl mx-auto">
            <h1 className="text-4xl font-bold">
              <span className="block mb-2 text-lg text-purple-300">
                またね！
              </span>
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                Bye Bye!
              </span>
            </h1>

            <p className="text-lg text-gray-300">
              Lucky-chan needs cookies to help us grow and improve our content. If you don't want to enable cookies, that's okay! We respect your privacy and hope to see you again soon! 🍪
            </p>

            <div className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <Cookie className="h-6 w-6 text-purple-400 mx-auto mb-4" />
              <p className="text-gray-200">
                If you change your mind and want to enable cookies, just click the button below to reload the page and accept them!
              </p>
            </div>

            {/* Reload Button */}
            <button
              onClick={handleReload}
              className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white font-semibold backdrop-blur-sm transition-all hover:from-purple-400/80 hover:to-pink-400/80 hover:scale-105"
            >
              <span className="absolute inset-0 rounded-xl bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:8px_8px]"></span>
              <span className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 transition-transform group-hover:rotate-180" />
                Try Again
              </span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-400 mt-8">
          <p>© 2024 Lucky-chan</p>
        </footer>
      </div>
    </div>
  )
}

export default CookiesBlocked