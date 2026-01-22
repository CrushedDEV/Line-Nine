'use client'

import { motion } from 'framer-motion'

const images = [
    'https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&q=80', // Laser lights
    'https://images.unsplash.com/photo-1514525253440-b393452e8d26?w=800&q=80', // Crowd
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80', // Event atmosphere
    'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80', // DJ
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80', // Techno vibe
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&q=80', // Festival
]

export default function Gallery() {
    return (
        <section className="py-24 bg-deep-black text-white px-4 relative overflow-hidden">
            {/* Scrolling Text Background */}
            <div className="absolute top-20 left-0 w-full overflow-hidden opacity-10 pointer-events-none">
                <motion.div
                    className="whitespace-nowrap text-[10rem] font-black leading-none text-transparent stroke-text"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    LINE NINE VISUALS LINE NINE VISUALS
                </motion.div>
            </div>

            <div className="max-w-[1920px] mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-4xl md:text-6xl font-black mb-16 uppercase tracking-tighter"
                >
                    VISUAL <span className="text-neon-green">FEEDBACK</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.4 }}
                            className="relative aspect-square overflow-hidden group cursor-none bg-black"
                        >
                            {/* Overlay that vanishes on hover */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />

                            {/* Neon Overlay on hover */}
                            <div className="absolute inset-0 bg-neon-green/20 mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none" />

                            <img
                                src={src}
                                alt="Rave visual"
                                className="relative z-0 object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                            />

                            {/* RGB Shift Effect (Simulated with pseudo-elements for now, or just colored borders) */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-green/50 transition-colors duration-300 z-30" />

                            {/* Scanline effect */}
                            <div className="absolute inset-0 bg-[url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')] opacity-[0.05] pointer-events-none mix-blend-screen" />
                        </motion.div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 2px #333;
                }
            `}</style>
        </section>
    )
}
