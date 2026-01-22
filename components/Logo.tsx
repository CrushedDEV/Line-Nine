'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Logo() {
    return (
        <div className="w-full h-full flex items-center justify-center relative select-none pointer-events-none">
            <motion.div
                className="relative z-10 w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="relative">
                    {/* Main Text */}
                    <h1 className="text-[15vw] md:text-[8vw] font-black tracking-tighter leading-[0.85] text-white mix-blend-difference z-20 relative text-center">
                        LINE
                        <br />
                        <span className="text-neon-green">NINE</span>
                    </h1>

                    {/* Glitch Shadows Removed */}
                </div>
            </motion.div>
        </div>
    )
}
