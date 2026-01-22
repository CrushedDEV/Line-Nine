'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [isHovering, setIsHovering] = useState(false)
    const [isDragging, setIsDragging] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            // Check if element is interactive
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer') ||
                target.closest('.cursor-pointer')

            setIsHovering(!!isInteractive)
        }

        const handleMouseDown = () => setIsDragging(true)
        const handleMouseUp = () => setIsDragging(false)

        window.addEventListener('mousemove', updateMousePosition)
        window.addEventListener('mouseover', handleMouseOver)
        window.addEventListener('mousedown', handleMouseDown)
        window.addEventListener('mouseup', handleMouseUp)

        // Force hide default cursor again just in case
        document.body.style.cursor = 'none'

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            window.removeEventListener('mouseover', handleMouseOver)
            window.removeEventListener('mousedown', handleMouseDown)
            window.removeEventListener('mouseup', handleMouseUp)
            document.body.style.cursor = 'auto'
        }
    }, [pathname])

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999] mix-blend-difference">
            <motion.div
                className="absolute top-0 left-0 w-4 h-4 bg-neon-green rounded-full"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isDragging ? 0.5 : isHovering ? 2.5 : 1,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
            />
            <motion.div
                className="absolute top-0 left-0 w-8 h-8 boundary border border-neon-green rounded-full"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isDragging ? 3 : isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 0.5,
                    borderWidth: isDragging ? "2px" : "1px",
                    borderColor: isDragging ? "#FACC15" : "#39FF14" // Turn yellow/caution when dragging
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
            />

            {/* Crosshair lines appearing on hover */}
            <motion.div
                className="absolute top-0 left-0 w-[40px] h-[1px] bg-neon-green"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y,
                    opacity: isHovering ? 1 : 0,
                    rotate: 90
                }}
                transition={{ duration: 0.2 }}
            />
            <motion.div
                className="absolute top-0 left-0 w-[40px] h-[1px] bg-neon-green"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y,
                    opacity: isHovering ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
            />
        </div>
    )
}
