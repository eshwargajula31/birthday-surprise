'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<JSX.Element[]>([])

  useEffect(() => {
    const createHearts = () => {
      const newHearts = Array(40).fill(null).map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
          }}
          transition={{
            repeat: Infinity,
            duration: 3 + Math.random() * 3,
            ease: 'linear',
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        >
          {Math.random() > 0.5 ? '❤️' : '💖'}
        </motion.div>
      ))
      setHearts(newHearts)
    }

    createHearts()
    window.addEventListener('resize', createHearts)

    return () => window.removeEventListener('resize', createHearts)
  }, [])

  return <>{hearts}</>
}

export default FloatingHearts

