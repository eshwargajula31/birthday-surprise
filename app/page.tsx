'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-01-03T00:00:00')

    const updateCountdown = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="text-3xl sm:text-4xl md:text-6xl font-bold bg-white bg-opacity-30 rounded-lg p-2 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
            {value.toString().padStart(2, '0')}
          </div>
          <div className="text-sm sm:text-base md:text-xl mt-2 capitalize">{unit}</div>
        </div>
      ))}
    </div>
  )
}

const Confetti = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {[...Array(100)].map((_, i) => (
        <motion.div
          key={i}
          className="confetti"
          style={{
            left: `${Math.random() * 100}%`,
          }}
          initial={{ y: -10, opacity: 0 }}
          animate={{
            y: windowSize.height,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </>
  )
}

const Fireworks = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * windowSize.width,
            y: windowSize.height,
            scale: 0,
          }}
          animate={{
            y: Math.random() * windowSize.height,
            scale: [0, 4, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      ))}
    </>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-24 relative overflow-hidden">
      <Confetti />
      <Fireworks />
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8 text-center" style={{ fontFamily: "'Dancing Script', cursive" }}>
        Countdown to Ammu&apos;s Birthday!
      </h1>
      <CountdownTimer />
      <Link href="/welcome" className="mt-8 sm:mt-12 px-6 py-3 bg-pink-500 text-white rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
        Let&apos;s Celebrate!
      </Link>
    </main>
  )
}

