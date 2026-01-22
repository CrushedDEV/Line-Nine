'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Logo from './Logo'

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center py-20">

            {/* Abstract Tunnel Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Central Glow / Fog */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-neon-green/5 rounded-full blur-[150px] animate-pulse-slow" />

                {/* Speed Lines (Radial) */}
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(57,255,20,0.05)_10deg,transparent_20deg)] animate-spin-slow opacity-30 scale-[2]" />

                {/* Vignette */}
                <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/50 to-black" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-7xl px-4 space-y-4 md:space-y-8 pt-12">

                {/* Main Title Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full max-w-5xl flex items-center justify-center py-8 md:py-12"
                >
                    <Logo />
                    {/* Glitch Overlay on Logo */}
                    <div className="absolute inset-0 bg-neon-green/10 mix-blend-overlay opacity-0 animate-glitch pointer-events-none" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col items-center gap-4"
                >
                    <div className="flex items-center gap-4 text-xs md:text-sm font-mono tracking-[0.3em] text-zinc-500 uppercase">
                        <span className="w-8 md:w-12 h-px bg-zinc-800" />
                        <span>Est. 2024</span>
                        <span className="text-neon-green">•</span>
                        <span>VRChat Underground</span>
                        <span className="w-8 md:w-12 h-px bg-zinc-800" />
                    </div>

                    <h1 className="sr-only">LINE NINE</h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="pt-4"
                >
                    <Button
                        onClick={() => window.open('https://vrchat.com/home/group/grp_3812e88c-081f-4d05-b05b-b3be5ab802be', '_blank')}
                        className="group relative overflow-hidden bg-transparent border border-neon-green/30 text-neon-green hover:bg-neon-green hover:text-black hover:border-neon-green transition-all duration-500 px-12 py-8 rounded-full"
                    >
                        <span className="relative z-10 flex items-center gap-3 text-lg font-bold tracking-widest uppercase">
                            Enter The Void <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>

                        {/* Hover Fill Effect */}
                        <div className="absolute inset-0 bg-neon-green translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </Button>
                </motion.div>
            </div>

            {/* Bottom Status Bar */}
            <div className="absolute bottom-8 left-0 w-full flex justify-between px-8 md:px-12 text-[10px] md:text-xs font-mono text-zinc-600 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                    <span>System Online</span>
                </div>
                <div className="hidden md:block">
                    /// Authorized Personnel Only ///
                </div>
                <div>
                    Loc: Sector 9
                </div>
            </div>

            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 20s linear infinite;
                }
                .animate-pulse-slow {
                    animation: pulse 5s ease-in-out infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg) scale(2); }
                    to { transform: rotate(360deg) scale(2); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.05; transform: translate(-50%, -50%) scale(1); }
                    50% { opacity: 0.1; transform: translate(-50%, -50%) scale(1.2); }
                }
            `}</style>
        </section>
    )
}
