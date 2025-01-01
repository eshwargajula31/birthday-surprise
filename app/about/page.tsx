'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const qualities = [
  'Sweet', 'Smart', 'Funny', 'Strong', 'Loving', 'Cute'
]

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 relative overflow-hidden bg-gradient-to-br from-pink-100 to-purple-100">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-7xl font-bold mb-8 sm:mb-12 text-center text-pink-600"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Why You&apos;re Amazing
      </motion.h1>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {qualities.map((quality, index) => (
          <motion.div
            key={quality}
            className="bg-white bg-opacity-50 rounded-lg p-4 sm:p-6 shadow-lg text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-pink-600">{quality}</h2>
          </motion.div>
        ))}
      </motion.div>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-center mb-8 sm:mb-12 max-w-2xl text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        These are just some of the things that make you so special, Ammu.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <Link href="/memories">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-500 text-white rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
            See Your Beautiful Pics 📸💖 
          </button>
        </Link>
      </motion.div>
    </main>
  )
}

