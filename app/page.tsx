'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Staff from '@/components/Staff'
import EventList from '@/components/EventList'
import TrainLore from '@/components/TrainLore'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className="bg-background min-h-screen text-foreground relative selection:bg-neon-green selection:text-black">
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Hero />
          <About />
          <Staff />
          <EventList />
          <TrainLore />
          <Footer />
        </>
      )}
    </main>
  )
}
