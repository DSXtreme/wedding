'use client'

import { useRef } from 'react'
import { easeInOut } from 'motion'
import { useTransform, motion, useScroll } from 'motion/react'

const Card = ({
  title,
  description,
  src,
  screenSize,
  reverse = false,
  maxWidth ="500px", 
}: {
  title: string
  description: string
  src: string
  screenSize: number
  reverse?: boolean
  maxWidth?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const isMobile = screenSize < 768

  // Centered travel range around 0 so elements don't clip or push past page bounds
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40], {
    ease: easeInOut,
  })

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [-60, 120] : [-50, 50],
    { ease: easeInOut }
  )

  return (
    <div
      ref={containerRef}
      className={`h-fit justify-center  w-full flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} max-w-6xl mx-auto pt-16 pb-32`}
    >
      {/* Left Image */}
      <motion.div
        style={{ y: imageY }}
        className="relative flex items-center justify-center"
      >
        <img
          src={src}
          alt={title}
          className={`w-[80%] min-w-[300px] max-w-[${maxWidth}] h-auto object-cover rounded-[2rem]`}
        />
      </motion.div>

      {/* Right Text Content */}
      <motion.div
        style={{ y: textY }}
        className="w-full md:w-1/2 flex flex-col justify-center p-5"
      >
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700 leading-relaxed w-500px">{description}</p>
      </motion.div>
    </div>
  )
}

export default Card