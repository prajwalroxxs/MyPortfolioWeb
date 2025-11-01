"use client"

import { motion } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"

export default function Footer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const socialLinks = [
    { name: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prajwal-srivastava-363575361" },
    { name: "LeetCode", url: "https://leetcode.com/u/Prajwal_07x/" },
    { name: "GitHub", url: "https://github.com/prajwalroxxs" },
  ]

  const handleMusicToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.currentTime = 0
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  return (
    <footer id="contact" className="bg-black py-16 px-4">
      <audio
        ref={audioRef}
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/made_for_loving_you-tZULDn6tL8lUJQIzW2VXej9kUwfH6I.mp3"
      />

      <div className="max-w-7xl mx-auto">
        {/* Top Section with Music Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-20"
        >
          {/* Left Section - Contact Info */}
          <div className="space-y-2 text-center md:text-left">
            <motion.div whileHover={{ scale: 1.05 }} className="font-sans">
              <a
                href="mailto:hello@prajwal.com"
                className="text-white font-semibold text-base sm:text-xl md:text-2xl hover:text-purple-400 transition-colors break-words"
              >
                hello@prajwal.com
              </a>
            </motion.div>
            <motion.div className="text-white/60 font-normal text-sm sm:text-base md:text-lg">
              Located in Delhi NCR, India
            </motion.div>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex flex-col items-center justify-start gap-4 md:gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                whileHover={{ color: "#a78bfa" }}
                className="text-white hover:text-purple-400 transition-colors font-bold text-lg sm:text-xl md:text-2xl"
                rel="noreferrer"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-start justify-center md:justify-end">
            <motion.button
              onClick={handleMusicToggle}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              aria-label={isPlaying ? "Stop music" : "Play music"}
            >
              <Image
                src="/images/design-mode/image.png"
                alt="Music toggle"
                width={64}
                height={64}
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Username - Large Text with responsive sizing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-purple-500/20 pt-8 md:pt-12 text-center"
        >
          <h2
            className="text-4xl sm:text-6xl md:text-9xl font-black text-white/80 tracking-tight text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            @prajwalroxxs
          </h2>
        </motion.div>
      </div>
    </footer>
  )
}
