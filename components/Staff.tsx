'use client'

import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const staffMembers = [
    { id: '8492', name: 'KROM', role: 'FOUNDER // HEAD DJ', image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=800&q=80' },
    { id: '3301', name: 'SYNTHIA', role: 'VISUAL DIRECTOR', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80' },
    { id: '7734', name: 'VOIDWALKER', role: 'COMMUNITY MANAGER', image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80' },
    { id: '9021', name: 'NEON', role: 'RESIDENT DJ', image: 'https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=800&q=80' },
    { id: '1010', name: 'ECHO', role: 'AUDIO ENGINEER', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' },
    { id: '5505', name: 'PIXEL', role: 'LIGHTING TECH', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80' },
]

export default function Staff() {
    const containerRef = useRef<HTMLDivElement>(null)
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth)
        }
    }, [])

    return (
        <section className="py-12 bg-deep-black relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-[1920px] mx-auto px-4 md:px-12">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-8 gap-8">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-center md:text-left"
                    >
                        LINE NINE <span className="text-neon-green stroke-text">CREW</span>
                    </motion.h2>

                    <div className="bg-neon-green text-black px-4 py-1 text-xs font-bold uppercase tracking-wider rot-90">
                        Authorized Personnel Only
                    </div>
                </div>

                <motion.div
                    ref={containerRef}
                    className="overflow-hidden"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-4 w-fit pb-8"
                    >
                        {staffMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="relative bg-zinc-900 border-t-4 border-neon-green w-[200px] md:w-[240px] flex-shrink-0 select-none shadow-[0_10px_20px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="absolute top-2 right-2 z-20">
                                    <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                                </div>

                                <div className="aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 relative">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                    {/* Scanlines */}
                                    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_4px,6px_100%] pointer-events-none" />
                                </div>

                                <div className="p-4 bg-zinc-900 relative">
                                    <div className="absolute -top-3 left-4 bg-black text-white px-2 text-xs font-mono border border-neon-green">
                                        ID: {member.id}
                                    </div>
                                    <h3 className="text-xl font-black uppercase text-white mb-1 tracking-tighter">{member.name}</h3>
                                    <p className="text-xs font-mono text-neon-green uppercase border-l-2 border-neon-green pl-2">{member.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
