export default function Footer() {
    return (
        <footer className="bg-black text-white/50 py-12 border-t border-white/10 relative overflow-hidden">
            {/* Glowing bottom line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-green/50 shadow-[0_0_20px_#39FF14]" />

            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-2xl font-black text-white tracking-tighter">
                    LINE <span className="text-neon-green">NINE</span>
                </div>

                <div className="flex gap-8 text-sm tracking-widest uppercase">
                    <a href="#" className="hover:text-neon-green transition-colors">Instagram</a>
                    <a href="#" className="hover:text-neon-green transition-colors">Resident Advisor</a>
                    <a href="#" className="hover:text-neon-green transition-colors">Location</a>
                </div>

                <div className="text-xs font-mono">
                    &copy; 2025 LINE NINE. ALL RIGHTS RESERVED.
                </div>
            </div>
        </footer>
    )
}
