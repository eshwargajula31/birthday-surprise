import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface MediaModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  type: 'image' | 'video'
  caption: string
}

const MediaModal: React.FC<MediaModalProps> = ({ isOpen, onClose, src, type, caption }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative flex-grow">
            {type === 'image' ? (
              <div className="relative w-full h-[60vh]">
                <Image
                  src={src}
                  alt={caption}
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            ) : (
              <video
                src={src}
                controls
                autoPlay
                className="w-full h-full max-h-[80vh] object-contain"
              />
            )}
          </div>
          {caption && (
            <div className="p-2 sm:p-4 bg-white border-t">
              <p className="text-center text-gray-700">{caption}</p>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default MediaModal

