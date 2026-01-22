'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Terminal } from 'lucide-react'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
    const [progress, setProgress] = useState(0)
    const [statusText, setStatusText] = useState('INITIALIZING...')

    // Boot sequence steps
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval)
                    setTimeout(onComplete, 500) // Delay before unmount
                    return 100
                }

                // Update text based on progress
                if (prev === 20) setStatusText('CHECKING THIRD RAIL VOLTAGE...')
                if (prev === 45) setStatusText('SYNCING WITH VRCHET NETWORK...')
                if (prev === 70) setStatusText('ESTABLISHING UPLINK TO SECTOR 9...')
                if (prev === 90) setStatusText('OPENING STATION GATES...')

                return prev + 1
            })
        }, 30) // Speed of load

        return () => clearInterval(interval)
    }, [onComplete])

    return (
        <motion.div
            className="fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center font-mono text-neon-green p-4"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="w-full max-w-md space-y-8">
                {/* Header */}
                <div className="flex items-center gap-2 border-b border-neon-green/30 pb-2 mb-8">
                    <Terminal className="w-5 h-5 animate-pulse" />
                    <span className="text-xs tracking-widest uppercase">Line Nine SysBoot v9.0</span>
                </div>

                {/* Main Status */}
                <div className="h-16 flex items-end">
                    <h2 className="text-xl md:text-2xl font-bold uppercase glitch-text leading-none">
                        {statusText}
                    </h2>
                </div>

                {/* Progress Bar (Train Line Style) */}
                <div className="space-y-2">
                    <div className="relative h-1 w-full bg-zinc-900 overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-neon-green box-shadow-[0_0_10px_#39FF14]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between text-xs text-zinc-500">
                        <span>0%</span>
                        <span className="text-neon-green">{progress}%</span>
                        <span>100%</span>
                    </div>
                </div>

                {/* System Logs (Decoratiion) */}
                <div className="text-[10px] text-zinc-600 space-y-1 pt-8 border-t border-zinc-900 border-dashed opacity-50">
                    <p>{'>'} MOUNTING VIRTUAL DRIVES... OK</p>
                    <p>{'>'} SUBNET MASK: 255.255.255.0... OK</p>
                    <p>{'>'} AUDIO ENGINE: READY</p>
                    <p className="animate-pulse">{'>'} WAITING FOR TRAIN...]</p>
                </div>
            </div>
        </motion.div>
    )
}
