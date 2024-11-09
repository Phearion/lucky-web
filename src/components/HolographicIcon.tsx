import { FC } from 'react'

interface HolographicIconProps {
    src: string
    alt: string
    size?: number
}

const HolographicIcon: FC<HolographicIconProps> = ({ src, alt, size = 40 }) => {
    return (
        <div className="group relative" style={{ width: size, height: size }}>
            {/* Holographic container */}
            <div className="relative mx-auto h-full w-full">
                {/* Animated rainbow rings */}
                <div className="animate-spin-slow absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-30 blur-md" />
                <div className="animate-spin-reverse-slow absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-30 blur-md" />

                {/* Glowing effect */}
                <div className="absolute inset-0 animate-pulse rounded-full bg-purple-500/20 blur-xl" />

                {/* Main image container */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-black/80 to-purple-900/80 p-2 backdrop-blur-sm">
                    {/* Image with preserved aspect ratio */}
                    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full">
                        <img
                            src={src}
                            alt={alt}
                            className="h-auto max-h-full w-auto max-w-full object-contain"
                        />

                        {/* Holographic overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-cyan-500/20 mix-blend-overlay" />
                        <div className="animate-holo absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.3)_50%,transparent_60%)]" />
                    </div>
                </div>

                {/* Floating particles */}
                <div className="animate-pulse-slow absolute -inset-4">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute h-1 w-1 rounded-full bg-purple-400 animate-float-${i + 1}`}
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HolographicIcon
