'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingElements = () => {
  const [elements, setElements] = useState<JSX.Element[]>([])

  useEffect(() => {
    const handleResize = () => {
      const windowSize = { width: window.innerWidth, height: window.innerHeight }
      const flowers = ['🌸', '🌺', '🌼', '🌻', '🌹']
      const hearts = ['❤️', '💖', '💕', '💗', '💓']
      const hugs = ['🤗', '🫂']
      const newElements = []

      for (let i = 0; i < 40; i++) {
        const elementType = Math.random()
        let element
        if (elementType < 0.4) {
          element = flowers[Math.floor(Math.random() * flowers.length)]
        } else if (elementType < 0.8) {
          element = hearts[Math.floor(Math.random() * hearts.length)]
        } else {
          element = hugs[Math.floor(Math.random() * hugs.length)]
        }
        const size = Math.random() * 30 + 20 // 20-50px

        newElements.push(
          <motion.div
            key={i}
            className="absolute text-2xl pointer-events-none"
            initial={{
              x: Math.random() * windowSize.width,
              y: windowSize.height,
              scale: 0,
            }}
            animate={{
              y: -100,
              scale: 1,
            }}
            transition={{
              duration: Math.random() * 3 + 2, // 2-5 seconds
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear',
            }}
            style={{ fontSize: `${size}px` }}
          >
            {element}
          </motion.div>
        )
      }

      setElements(newElements)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return <>{elements}</>
}

export default FloatingElements

