'use client'

import { Model } from '@/components/WeadingRing'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { Suspense, useEffect, useState } from 'react'
import Splash from '@/components/Splash'
import { AnimatePresence, motion } from 'framer-motion'
import { throttle } from 'lodash'
import Card from '@/components/Cards'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

export default function Home() {

  const [showSplash, setShowSplash] = useState(true)
  const [scrollProgress, setScrollProgress] = useState<number>(0)
  const [screenSize, setScreenSize] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollProgress(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  console.log("screenSize", screenSize)
  return (
    <div className="w-screen">
      {!showSplash && <div className="fixed w-[100vw] h-full top-0 lef-0 z-0">
        <img
          src="./bg.png"
          className="w-[570px] rotate-130 relative -left-50 opacity-30"
        />
        <img
          src="./bg.png"
          className="w-[500px] -rotate-90 absolute -right-30 opacity-30 bottom-0"
        />
      </div>}
      <div className="fixed top-0 left-0 w-full h-full ">
        {
          !showSplash && (
            <Canvas
              camera={{ position: [0, 0, 10], fov: 45 }}
              gl={{
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.5,
                antialias: true
              }}
            >
              <Suspense fallback={null}>
                <Environment preset="studio" />
              </Suspense>

              <ambientLight intensity={1.5} />
              <directionalLight position={[5, 8, 5]} intensity={1.5} />
              <directionalLight position={[-5, -2, -5]} intensity={1.0} />

              <pointLight position={[0, 3, 2]} intensity={3} color="#bdbdbd" />

              <Suspense fallback={null}>
                <Model scrollProgress={scrollProgress} />
              </Suspense>

            </Canvas>
          )
        }
      </div>
      {/* Hint */}
      <AnimatePresence>
        {
          scrollProgress < .2 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="flex items-center justify-center fixed bottom-56 left-0 right-0 z-50">
              <div className={"text-bold text-2xl"}>
                SCROLL TO BEGIN
              </div>

            </motion.div>
          )
        }
      </AnimatePresence>


      <AnimatePresence>
        {
          showSplash && (
            <motion.div
              className="fixed inset-0 z-50 bg-[var(--bg-color)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Splash />
            </motion.div>
          )}
      </AnimatePresence>

      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mt-[200vh] px-20 !text-[3rem] md:!text-[7rem] z-1"
      >
        And here we go with a small story abotu us...
      </motion.h1>
      <div className="mt-[30vh]">
        <Card
          screenSize={screenSize}
          title="The Bride-to-Be "
          description="Back then, this little lady was just living in her own cheerful world, completely unaware of the big plot twist waiting ahead. She had no idea that years later, in March 2026, she’d meet the one she’d choose to share a lifetime of laughter with. "
          src="/baby_riya.png"
        />
      </div>
      <div className="mt-[10vh]">
        <Card
          screenSize={screenSize}
          title="The Groom-to-Be"
          description="Meanwhile, this little guy was busy enjoying his own adventures miles away, clueless that his future was already written. Little did he know, March 2026 would bring him face-to-face with the girl in the photo next to him—turning two separate stories into one."
          src="/baby_subham.png"
          reverse
          maxWidth='600px'
        />
      </div>
      <div className="mt-[10vh]">
        <Card
          screenSize={screenSize}
          title="March 2026: The Beginning"
          description="What started as a simple meeting in March 2026 quickly turned into something effortless. From our very first conversation to our first ride together—where roles were quickly assigned: the groom as the rider and the bride as the navigator—we decided to happily get lost on our own sweet adventure. Miles of open road, endless talks, and the quiet realization that we had found our favorite travel partner for life."
          src="/bike.jpeg"
          maxWidth='600px'
        />
      </div>



    </div>
  )
}