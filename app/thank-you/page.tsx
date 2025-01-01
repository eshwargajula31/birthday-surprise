'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 md:p-24 relative overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-7xl font-bold mb-8 sm:mb-12 text-center"
        style={{ fontFamily: "'Dancing Script', cursive" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Thank You ..
      </motion.h1>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-center mb-8 sm:mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{fontFamily: "'Dancing Script', cursive"}}
      >
       Your kindness, warmth, and authenticity make the world a better place. I feel so lucky to know you, and nuv eppudu kanipisthavo naku aa roju ninu tight ga Hug cheskoni, then I&apos;ll slap you -- &quot;Enduku ila change aithunnav Ammu.. em aindhi neeku&quot; ani adagalanundhi..
       <br />
       <br />
       
      </motion.p>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-center mb-8 sm:mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{fontFamily: "'Dancing Script', cursive"}}
      >
        Eventhough I&apos;m not special to you, but na life lo ma mummy taravtha nuvve na special and important person.., natho matladadam istam ledu emo andhuke text cheyatle natho and inka nuv em aina cheppali ankunte naku cheppu nen em anukonu. That&apos;s it Ammu.  <br />
      </motion.p>
      <motion.p
        className="text-lg sm:text-xl md:text-2xl text-center mb-8 sm:mb-12 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <br />
        <strong style={{fontFamily: "'Dancing Script', cursive"}}>Once again Happy Birthday Ammu 💖</strong>
      </motion.p>
      <motion.div
        className="fireworks"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <div key={i} className="firework" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`
          }}></div>
        ))}
      </motion.div>
      <motion.div
        className="mt-8 sm:mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Link href="/">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-pink-500 text-white rounded-full text-lg sm:text-xl font-semibold transition-all duration-300 ease-in-out hover:bg-pink-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-50">
            Start Over
          </button>
        </Link>
      </motion.div>
    </main>
  )
}

