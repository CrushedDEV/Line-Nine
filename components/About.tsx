'use client'

import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="py-32 bg-deep-black text-white px-4 relative overflow-hidden">
            {/* Background Texture for Detail */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20 pointer-events-none" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h2 className="text-sm font-mono text-neon-green tracking-widest mb-4">/// SYSTEM STATUS: ONLINE</h2>
                    <h3 className="text-4xl md:text-5xl font-bold leading-tight uppercase relative z-10">
                        THE DEEPEST <br />
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px #39FF14' }}>UNDERGROUND STOP</span>
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        <span className="text-neon-green">LINE NINE</span> is the hidden terminus of the VRChat metro system. A persistent digital rave space located deep beneath the surface grid.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed font-light">
                        We operate on the Third Rail. High voltage audio, industrial aesthetics, and a community that rides the late train. Mind the gap between reality and simulation.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-square md:aspect-video bg-zinc-900 border border-white/10 p-2"
                >
                    {/* Placeholder for Club Image/Video */}
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="text-neon-green/30 font-mono text-xl uppercase tracking-widest">[ CLUB FOOTAGE ]</span>

                        {/* Animated corners */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-green" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-green" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
