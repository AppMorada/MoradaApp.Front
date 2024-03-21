'use client'

import { motion } from 'framer-motion'

const transition = {
  repeat: Infinity,
  duration: 20,
  ease: 'easeInOut'
}

export const HeroAnimation = () => {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [100, 0, -100, 0, 100]
        }}
        transition={transition}
        className="absolute size-[350px] rounded-full bg-gradient-to-b from-primary to-transparent to-90%"
      />
      <motion.div
        animate={{
          x: [100, 0, -100, 0, 100],
          y: [0, -100, 0, 100, 0]
        }}
        transition={transition}
        className="absolute size-[440px] rounded-full bg-gradient-to-b from-primary to-transparent to-90%"
      />
      <motion.div
        animate={{
          x: [0, -160, 0, 160, 0],
          y: [-160, 0, 160, 0, -160]
        }}
        transition={transition}
        className="absolute size-[280px] rounded-full bg-gradient-to-b from-primary to-transparent to-90%"
      />
    </div>
  )
}
