import { FC } from 'react'

interface VideoModalProps {
    videoSrc: string
    isOpen: boolean
    onClose: () => void
}

const VideoModal: FC<VideoModalProps> = ({ videoSrc, isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-50 flex animate-fadeIn items-center justify-center bg-black/95 backdrop-blur-xl"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose()
            }}
        >
            <div className="relative mx-4 w-full max-w-4xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute -top-12 right-0 flex items-center gap-2 text-white transition-colors hover:text-gray-300"
                >
                    <span>Close</span>
                </button>

                {/* Video Container */}
                <div className="aspect-video overflow-hidden rounded-2xl border border-white/10 bg-black/80">
                    <video
                        className="h-full w-full"
                        src={videoSrc}
                        controls
                        muted
                        playsInline
                        onError={(e) => console.error('Video error:', e)}
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoModal
