'use client'

import { useRef } from 'react'
import { easeInOut } from 'motion'
import { useTransform, motion, useScroll } from 'motion/react'

const IntroText = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: containerRef,
    })


    return (
        <div ref={containerRef}>
            div
        </div>
    )
}

export default IntroText