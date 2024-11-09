import { type FC, useState } from 'react'
import { Sparkles, Heart, Star, Command, Mail, Coffee, Play, Shield, Scroll } from 'lucide-react'
import HolographicIcon from './HolographicIcon'
import VideoModal from './VideoModal'
import demoVideo from '../assets/demo.mp4'
import '../styles/animations.css'

const LuckyInterface: FC = () => {
  const [showVideo, setShowVideo] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-800 to-pink-700 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

      <div className="container mx-auto px-4 py-8 relative">
        {/* Navigation */}
        <nav className="mb-8 flex justify-end space-x-4">
          <a
            href="#/privacy"
            className="group flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md transition-all hover:bg-white/20"
          >
            <Shield className="h-4 w-4" />
            <span>Data policy</span>
          </a>
          <a
            href="#/terms"
            className="group flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur-md transition-all hover:bg-white/20"
          >
            <Scroll className="h-4 w-4" />
            <span>Terms</span>
          </a>
        </nav>

        <div className="flex flex-col items-center gap-12">
          {/* Hero Section */}
          <div className="text-center relative w-full max-w-4xl mx-auto">
            {/* Lucky-chan Icon */}
            <div className="relative w-full flex justify-center items-center mb-12">
              <div className="absolute top-0 left-1/2 -translate-x-1/2">
                <HolographicIcon src="/lucky.png" alt="Lucky-chan" size={160} />
              </div>
            </div>

            {/* Add spacing to prevent icon overlap with text */}
            <div className="pt-40">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="rounded-full bg-purple-500/80 p-3 backdrop-blur-sm animate-bounce-slow">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="rounded-full bg-pink-500/80 p-3 backdrop-blur-sm animate-pulse">
                  <Heart className="h-6 w-6" />
                </div>
                <div className="rounded-full bg-purple-500/80 p-3 backdrop-blur-sm animate-bounce-slow">
                  <Star className="h-6 w-6" />
                </div>
              </div>

              <h1 className="mb-4 text-5xl font-bold font-japanese">
                Welcome to
                <span
                  className="block bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-6xl text-transparent drop-shadow-lg">
                  Lucky-chan
                </span>
              </h1>
              <p className="text-xl text-gray-200">あなたの学校のアーカイブアシスタント</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="w-full max-w-4xl space-y-8">
            {/* Command Demo */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                <Command className="text-purple-300" />
                Simple Command
              </h2>

              <div
                className="rounded-xl border border-white/10 bg-black/20 p-6 transition-all hover:border-purple-400/50 hover:bg-purple-900/20">
                <div className="mb-3 font-mono text-xl text-purple-200">/archive</div>
                <p className="text-gray-300">
                  Access all your school's resources with a single command!
                </p>
              </div>
            </div>

            {/* Video Demo Section */}
            <div className="group relative overflow-hidden rounded-2xl">
              <div className="relative aspect-video overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">
                {/* Video Preview Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50" />
                <div
                  className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Preview Video */}
                <video
                  className="absolute inset-0 h-full w-full object-cover opacity-50"
                  src={demoVideo}
                  muted
                  loop
                  playsInline
                  autoPlay
                  onLoadedData={() => setIsVideoLoaded(true)}
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="h-20 w-20 rounded-full bg-purple-500/80 backdrop-blur-sm transition-all hover:bg-purple-400/80 flex items-center justify-center"
                  >
                    <Play className="ml-1 h-10 w-10 text-white" />
                  </button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="flex items-center gap-4">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-purple-400" />
                    <p
                      className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-lg font-semibold text-transparent">
                      {isVideoLoaded ? 'Watch Demo' : 'Loading...'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <Star className="mb-4 h-8 w-8 text-purple-300" />
                <h3 className="mb-2 text-xl font-bold">Easy Access</h3>
                <p className="text-gray-200">Quick access to all your school's resources in one place.</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <Command className="mb-4 h-8 w-8 text-purple-300" />
                <h3 className="mb-2 text-xl font-bold">Simple Commands</h3>
                <p className="text-gray-200">Intuitive Discord commands for seamless interaction.</p>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <a
                href="https://www.paypal.com/paypalme/phearion?country.x=FR&locale.x=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-xl bg-blue-500/80 backdrop-blur-sm p-4 transition-all hover:bg-blue-400/80"
              >
                <Coffee className="h-6 w-6 transition-transform group-hover:rotate-12" />
                <span className="font-semibold text-white">Support Us</span>
              </a>

              <a
                href="mailto:hestia@phearion.fr"
                className="group flex items-center justify-center gap-3 rounded-xl bg-purple-500/80 backdrop-blur-sm p-4 transition-all hover:bg-purple-400/80"
              >
                <Mail className="h-6 w-6" />
                <span className="font-semibold text-white">Contact Us</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-300">
          <p>© 2024 Lucky-chan. All rights reserved. デザイン by Phearion</p>
        </footer>
      </div>

      {/* Video Modal */}
      <VideoModal
        videoSrc={demoVideo}
        isOpen={showVideo}
        onClose={() => setShowVideo(false)}
      />
    </div>
  )
}

export default LuckyInterface