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

                    {/* Glitch Shadow 1 */}
                    <h1 className="absolute top-0 left-0 w-full text-[15vw] md:text-[8vw] font-black tracking-tighter leading-[0.85] text-red-500 mix-blend-screen z-10 animate-pulse opacity-30 translate-x-[1px] text-center">
                        LINE
                        <br />
                        NINE
                    </h1>

                    {/* Glitch Shadow 2 */}
                    <h1 className="absolute top-0 left-0 w-full text-[15vw] md:text-[8vw] font-black tracking-tighter leading-[0.85] text-blue-500 mix-blend-screen z-10 animate-pulse opacity-30 -translate-x-[1px] translate-y-[1px] text-center" style={{ animationDelay: '0.1s' }}>
                        LINE
                        <br />
                        NINE
                    </h1>
                </div>
            </motion.div>
        </div>
    )
}
