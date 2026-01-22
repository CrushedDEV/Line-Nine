'use client'

import { motion } from 'framer-motion'
import { Activity, Wifi, Users, Server, AlertTriangle } from 'lucide-react'

export default function TrainLore() {
    return (
        <section className="py-24 bg-zinc-950 text-white px-4 relative overflow-hidden font-mono">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Section 1: System Diagnostics (Group Info) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="border-2 border-zinc-800 bg-black/50 p-8 relative"
                >
                    <div className="absolute top-0 left-0 bg-neon-green text-black text-xs font-bold px-2 py-1 uppercase">
                        System Status /// Online
                    </div>

                    <h2 className="text-3xl font-black uppercase mb-8 mt-4 tracking-tighter text-zinc-300">
                        Network <span className="text-neon-green">Diagnostics</span>
                    </h2>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                            <div className="flex items-center gap-3 text-zinc-400">
                                <Users className="w-5 h-5 text-neon-green" />
                                <span className="uppercase tracking-widest text-sm">Active Units</span>
                            </div>
                            <span className="text-2xl font-bold font-mono">8,420</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                            <div className="flex items-center gap-3 text-zinc-400">
                                <Wifi className="w-5 h-5 text-neon-green" />
                                <span className="uppercase tracking-widest text-sm">Signal Strength</span>
                            </div>
                            <span className="text-2xl font-bold font-mono text-neon-green animate-pulse">100%</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
                            <div className="flex items-center gap-3 text-zinc-400">
                                <Server className="w-5 h-5 text-neon-green" />
                                <span className="uppercase tracking-widest text-sm">Instance Cap</span>
                            </div>
                            <span className="text-2xl font-bold font-mono">80</span>
                        </div>
                        <div className="flex justify-between items-center pb-2">
                            <div className="flex items-center gap-3 text-zinc-400">
                                <Activity className="w-5 h-5 text-neon-green" />
                                <span className="uppercase tracking-widest text-sm">Uptime</span>
                            </div>
                            <span className="text-2xl font-bold font-mono">99.9%</span>
                        </div>
                    </div>
                </motion.div>

                {/* Section 2: Transit Protocol (Rules/Lore) */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="border border-neon-green/30 bg-neon-green/5 p-6 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <AlertTriangle className="w-12 h-12 text-neon-green" />
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-4 text-neon-green tracking-widest">
                            /// TRANSIT PROTOCOL
                        </h3>
                        <ul className="space-y-4 text-sm text-zinc-300 font-mono list-disc pl-4">
                            <li>Respect fellow passengers. No unauthorized mods.</li>
                            <li>Do not obstruct the closing doors.</li>
                            <li>Avatar performance must be rated Medium or better during peak hours.</li>
                            <li>Reports of anomalies should be directed to Station Staff immediately.</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold uppercase tracking-widest text-zinc-500">
                            /// TRACK HISTORY LOG
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            <span className="text-neon-green">[LOG 001]</span> The Line Nine expansion project was initiated to connect the fragmented sectors of the VRChat underground. Construction began in sector 7G, repurposing abandoned industrial tunnels for high-fidelity audio transmission.
                        </p>
                        <p className="text-zinc-400 leading-relaxed text-sm">
                            <span className="text-neon-green">[LOG 042]</span> "The Void" station discovered. Anomalous reverb detected. Designated as primary rave terminal.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
