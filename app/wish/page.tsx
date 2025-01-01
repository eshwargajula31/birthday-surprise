'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const wishText = `
Ammu,

Happy Birthday! 🎉 You bring so much joy and positivity into my life, and I'm truly grateful for you.

Nenu eppudu respect chesta nuvvu cheppe matalu, and you are the most important person to me. Your thoughts and feelings matter more than anything, and I am grateful for everything you bring into my life. 💖 Even though I am not special to you yet, nuvvu naa life lo amma tarvata chala special.

Your laughter, your smile, and the way you brighten everything around you are things I'll always cherish. I hope ee birthday nee life lo chala special ga undali, just like you.

With warm wishes,
Eshwar 🩷🙃
`

export default function WishPage() {
  const [visibleText, setVisibleText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTextFullyLoaded, setIsTextFullyLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3 // Set volume to 30%
      audioRef.current.play().catch(error => console.log("Audio playback failed:", error))
    }

    const timer = setInterval(() => {
      if (currentIndex < wishText.length) {
        setVisibleText(prevText => prevText + wishText[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      } else {
        clearInterval(timer)
        setIsTextFullyLoaded(true)
      }
    }, 20) // Reduced from 50ms to 20ms for faster text appearance

    return () => clearInterval(timer)
  }, [currentIndex])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-24 relative overflow-hidden bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
      <audio ref={audioRef} loop>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lovemelikeyoudo-RtNeI2NbgREA2ObmMK9nWCi3VLAnOX.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div className="stars absolute inset-0"></div>
      <motion.h1
        className="text-3xl sm:text-4xl md:text-7xl font-bold mb-8 sm:mb-12 text-center z-10"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        A Special Note for You 💌
      </motion.h1>
      <motion.div
        className="bg-white bg-opacity-10 p-4 sm:p-8 rounded-lg shadow-lg max-w-2xl w-full z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p className="text-base sm:text-lg whitespace-pre-line">{visibleText}</p>
      </motion.div>
      {isTextFullyLoaded && (
        <motion.div
          className="mt-8 sm:mt-12 text-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/gift">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-500 text-white rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
              Ready for your Gift ?
            </button>
          </Link>
        </motion.div>
      )}
    </main>
  )
}

