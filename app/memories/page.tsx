'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import MediaModal from '../../components/MediaModal'
import Sparkles from '../../components/Sparkles'

interface Memory {
  type: 'image' | 'video'
  src: string
  thumbnail?: string
  alt: string
  caption: string
}

const memories: Memory[] = [
  { 
    type: 'image', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cute...jpg-n2Xx29fzdzJU8hwLPvVRDR0pWO8XMR.jpeg', 
    alt: 'Baby in Pink Traditional Dress',
    caption: 'Cute Papa😚💗'
  },
  { 
    type: 'video', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue-zn0Pel9lKG2MYaTY599N9OsBoPpAZp.mp4', 
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/blue_t1-fiuUNVduYsAzG8tWPgvIBlHE2D6lal.png',
    alt: 'Video Memory 1',
    caption: 'Blue 💙'
  },
  { 
    type: 'image', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/retro.jpg-zjD49SKtWvl2PtJFnJwHdydXdVCgEp.jpeg', 
    alt: 'Elegant Saree Look',
    caption: '🫠🩷'
  },
  { 
    type: 'image', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chinnapapa.jpg-qoh9xxUjJKws5rfcBBHtj6wHR8oOV0.jpeg', 
    alt: 'Young Child in Blue',
    caption: '👑'
  },
  { 
    type: 'video', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_nikithaaa.__-20230103-0001-QxETtIxXe2LF5gg1NqixrmeIYAZQoq.mp4', 
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pink_t2-SqKbYToRAVOqgLOYrdB36LLYly1SOm.png',
    alt: 'Video Memory 2',
    caption: 'Your eyes and Smile makes me 🫠'
  },
  { 
    type: 'image', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/edited.jpg-iBKK41Wfbw355Itf151wIyiaVI1r0A.jpeg', 
    alt: 'Elegant Traditional Outfit',
    caption: 'Beautiful in this ❤'
  },
  { 
    type: 'video', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/your%20eyes-X88vYjhYum5eW2fOgEpyFuolDNTIf6.mp4', 
    thumbnail: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/back_t3-MHix7vKiXkS9O7uvPzRKJiNxc3EKxr.png',
    alt: 'Video Memory 3',
    caption: 'Black 🖤'
  },
  { 
    type: 'image', 
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dada.jpg-IawNnfP6yagZGqIn02rwrIirRbVFW3.jpeg', 
    alt: 'Family Photo',
    caption: 'Family Love ❤'
  }
]

export default function MemoriesPage() {
  const [selectedMedia, setSelectedMedia] = useState<Memory | null>(null)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      audioRef.current.play().catch(error => console.log("Audio playback failed:", error))
    }
  }, [])

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <main className="min-h-screen p-4 sm:p-8 relative overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
      <audio ref={audioRef} loop>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Inthandham-q56Zszdhl81Hs2OXvWJF6XNyQbiMlC.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="fixed top-4 right-4 z-50">
        <label htmlFor="volume-control" className="sr-only">Volume</label>
        <input
          id="volume-control"
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
          className="w-24 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>
      <Sparkles />
      <motion.h1
        className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 sm:mb-12 text-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Girl&apos;s Beautiful Pics 
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            onClick={() => setSelectedMedia(memory)}
          >
            <div className="relative w-full h-80 sm:h-96 md:h-80 overflow-hidden rounded-lg border-4 border-white shadow-inner">
              <Image
                src={memory.type === 'video' ? memory.thumbnail || memory.src : memory.src}
                alt={memory.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                style={{ objectFit: 'cover' }}
                priority
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <p className="text-white text-lg font-semibold mb-2">Tap to expand</p>
                {memory.type === 'video' && (
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" fillRule="evenodd"></path>
                  </svg>
                )}
                <p className="text-white text-center text-sm px-2 mt-2">
                  {memory.caption}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedMedia && (
        <MediaModal
          isOpen={!!selectedMedia}
          onClose={() => setSelectedMedia(null)}
          src={selectedMedia.src}
          type={selectedMedia.type}
          caption={selectedMedia.caption}
        />
      )}
      <motion.div
        className="mt-8 sm:mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Link href="/wish">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-500 text-white rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
            Read My Note
          </button>
        </Link>
      </motion.div>
    </main>
  )
}

