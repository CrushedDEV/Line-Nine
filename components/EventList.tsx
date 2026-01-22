'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const events = [
    { date: '14 DEC', time: '22:00', name: 'NEON GENESIS', platform: '1', status: 'ON TIME' },
    { date: '21 DEC', time: '23:00', name: 'ACID RAIN', platform: '2', status: 'DELAYED' },
    { date: '31 DEC', time: '21:00', name: 'YEAR ZERO', platform: '9', status: 'ON TIME' },
    { date: '07 JAN', time: '22:30', name: 'HYPER REALITY', platform: '3', status: 'SCHEDULED' },
]

export default function EventList() {
    return (
        <section className="py-24 bg-zinc-900 text-white px-4 md:px-12 relative overflow-hidden font-mono">

            <div className="max-w-6xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                    <h2 className="text-2xl md:text-4xl font-black tracking-widest uppercase">Departures</h2>
                </div>

                <div className="bg-black border-4 border-zinc-800 p-2 md:p-6 rounded-sm shadow-2xl">
                    {/* Header */}
                    <div className="grid grid-cols-[1fr_2fr_1fr_1fr] md:grid-cols-[1fr_1fr_3fr_1fr_1fr] gap-4 text-neon-green/60 text-xs uppercase tracking-widest border-b-2 border-zinc-800 pb-4 mb-4 px-2 md:px-4">
                        <span className="hidden md:block">Date</span>
                        <span>Time</span>
                        <span>Destination (Event)</span>
                        <span className="text-center">Plat.</span>
                        <span className="text-right">Status</span>
                    </div>

                    <div className="space-y-1">
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                className="grid grid-cols-[1fr_2fr_1fr_1fr] md:grid-cols-[1fr_1fr_3fr_1fr_1fr] gap-4 items-center bg-zinc-900/50 p-3 md:p-4 border-l-4 hover:bg-zinc-800 transition-colors cursor-pointer group"
                                style={{ borderLeftColor: event.status === 'DELAYED' ? '#ef4444' : '#39FF14' }}
                            >
                                <span className="text-zinc-400 hidden md:block">{event.date}</span>
                                <span className="text-white font-bold text-lg">{event.time}</span>
                                <span className="text-white font-bold uppercase truncate group-hover:text-neon-green transition-colors">{event.name}</span>
                                <div className="text-center flex justify-center">
                                    <span className="bg-white text-black w-6 h-6 flex items-center justify-center font-bold text-sm rounded-full">{event.platform}</span>
                                </div>
                                <span className={`text-right text-sm font-bold ${event.status === 'DELAYED' ? 'text-red-500' : 'text-neon-green'}`}>
                                    {event.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 flex justify-end">
                    <p className="text-xs text-zinc-600 uppercase tracking-widest">
                        * All times are in VRChat Standard Time
                    </p>
                </div>
            </div>
        </section>
    )
}
