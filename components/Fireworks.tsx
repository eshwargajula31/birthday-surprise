'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const Fireworks = () => {
  const [fireworks, setFireworks] = useState<JSX.Element[]>([])

  useEffect(() => {
    const createFireworks = () => {
      const newFireworks = Array(20).fill(null).map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight,
            scale: 0,
          }}
          animate={{
            y: Math.random() * window.innerHeight,
            scale: [0, 4, 0],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            repeatDelay: Math.random() * 2,
          }}
        />
      ))
      setFireworks(newFireworks)
    }

    createFireworks()
    window.addEventListener('resize', createFireworks)

    return () => window.removeEventListener('resize', createFireworks)
  }, [])

  return <>{fireworks}</>
}

export default Fireworks

