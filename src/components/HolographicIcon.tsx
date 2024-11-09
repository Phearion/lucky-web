import { FC } from 'react'

interface HolographicIconProps {
  src: string
  alt: string
  size?: number
}

const HolographicIcon: FC<HolographicIconProps> = ({ src, alt, size = 40 }) => {
  return (
    <div className="relative group" style={{ width: size, height: size }}>
      {/* Holographic container */}
      <div className="relative w-full h-full mx-auto">
        {/* Animated rainbow rings */}
        <div className="absolute inset-0 animate-spin-slow rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur-md" />
        <div className="absolute inset-0 animate-spin-reverse-slow rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-30 blur-md" />

        {/* Glowing effect */}
        <div className="absolute inset-0 animate-pulse rounded-full bg-purple-500/20 blur-xl" />

        {/* Main image container */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-black/80 to-purple-900/80 backdrop-blur-sm p-2">
          {/* Image with preserved aspect ratio */}
          <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              className="w-auto h-auto max-w-full max-h-full object-contain"
            />

            {/* Holographic overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-cyan-500/20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.3)_50%,transparent_60%)] animate-holo" />
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute -inset-4 animate-pulse-slow">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-purple-400 rounded-full animate-float-${i + 1}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HolographicIcon