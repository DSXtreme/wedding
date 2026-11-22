'use client'

import Card from '@/components/Cards'
import Splash from '@/components/Splash'
import { Model } from '@/components/WeadingRing'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { AnimatePresence, motion } from 'framer-motion'
import { Suspense, useEffect, useState } from 'react'
import * as THREE from 'three'

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
    window.scrollTo(0, 0);
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setScrollProgress(scrollTop)

    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
              dpr={[1, 2]}
              performance={{ min: 0.5 }} // Automatically scales down performance if the device drops frames
              gl={{
                powerPreference: "high-performance",
                antialias: true,
                stencil: false,
                depth: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                toneMappingExposure: 1.5,
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
                <Model />
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
              className="flex items-center justify-center fixed bottom-[30vh] left-0 right-0 z-50 ">
              <div className={"text-bold text-[clamp(1.5rem,1.5vw,2rem)]"}>
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
        className="mt-[200vh] px-20 !text-[4rem] md:!text-[7rem] z-10 relative"
      >
        And here we go with a small story about us...
      </motion.h1>
      <div className="mt-[30vh]">
        <Card
          screenSize={screenSize}
          title="The Bride-to-Be "
          description="Back then, this little girl was just living in her own cheerful world, completely unaware of the big plot twist waiting ahead. She had no idea that years later, in March 2026, she’d meet the one she’d choose to share a lifetime of laughter with. "
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
          maxWidth='700px'
        />
      </div>
      <div className="mt-[10vh]">
        <Card
          screenSize={screenSize}
          title="March 28, 2026: The Beginning"
          description="What started as a simple meeting in March 2026 quickly turned into something effortless. From our very first conversation to our first ride together—where roles were quickly assigned: the groom as the rider and the bride as the navigator—we decided to happily get lost on our own sweet adventure. Miles of open road, endless talks, and the quiet realization that we had found our favorite travel partner for life."
          src="/bike.jpeg"
          // maxWidth='450px'
        />
      </div>
      <div className="mt-[10vh]">
        <Card
          screenSize={screenSize}
          title="October 12, 2026: Chapters in Frame"
          description="Seven months after our story began, October gave us a chance to pause before the wedding celebrations take over. People say you can’t travel in time, so we chose to freeze these moments in our memories forever—capturing us just as we are, deeply in love and ready for a lifetime together."
          src="/prewed.jpeg"
          maxWidth='700px'
          reverse
        />
      </div>
      <div className="mt-[10vh]">
        <Card
          screenSize={screenSize}
          title="October 30, 2026: Surrounded by Love"
          description="Surrounded by the warmth, laughter, and blessings of our families, October 30th marked our next big step together. From the moment we exchanged rings to the celebrations that followed, every hug and happy tear reminded us how lucky we are to have everyone by our side as we step into forever."
          src="/eng.jpeg"
          maxWidth="450px"
        />
      </div>

      <div

        className="w-full relative h-screen px-7 flex justify-center items-center bg-cover bg-center z-10 overflow-hidden"
      >
        <motion.img
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 1, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: .6 }}
          src="/Invite.png"
          className="w-full max-w-[450px] rounded-[1rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3),0_8px_24px_-6px_rgba(0,0,0,0.2)] overflow-clip"
        />
      </div>
    </div>
  )
}