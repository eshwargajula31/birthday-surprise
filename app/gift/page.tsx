'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import FloatingElements from '../../components/FloatingElements'

export default function GiftPage() {
  const [isOpen, setIsOpen] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3
      const playPromise = audioRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log("Audio playback failed:", error)
        })
      }
    }
  }, [])

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  }

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden bg-gradient-to-br from-purple-200 to-pink-200">
      <audio ref={audioRef} loop>
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/youreyes-slgjDL288ZrqmUKNsqdZ3LOReBBK13.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <FloatingElements />
      <motion.h1
        className="text-3xl sm:text-4xl md:text-7xl font-bold mb-8 sm:mb-12 text-center z-10"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Surprise Gift
      </motion.h1>
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 mb-8 z-10">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="gift-button"
              className="w-full h-full bg-pink-500 rounded-full text-white text-xl sm:text-2xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50"
              onClick={() => setIsOpen(true)}
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
            >
              Tap to reveal gift
            </motion.button>
          ) : (
            <motion.div
              key="gift-content"
              className="w-full h-full flex flex-col items-center justify-center"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="text-base sm:text-xl mb-4 sm:mb-6 text-center"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.8',
                }}
                variants={textVariants}
              >
                Nee kosam oka special gift plan chestunna, Ammu.
                Adhi nee next birthday ki ready avuthundhi.
              </motion.p>
              <motion.p
                className="text-base sm:text-xl text-center"
                style={{
                  fontFamily: "'Dancing Script', cursive",
                  whiteSpace: 'pre-wrap',
                  lineHeight: '1.8',
                }}
                variants={textVariants}
              >
                Appati varaku, naa prema, naa anuraagam, naa sneham - ive naa gifts neeku 🤗♥.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        className="mt-8 sm:mt-12 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/thank-you">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-500 text-white rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
            Final Message
          </button>
        </Link>
      </motion.div>
    </main>
  )
}

