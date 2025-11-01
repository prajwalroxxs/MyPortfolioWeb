"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Code2 } from "lucide-react"
import ColorBends from "./color-bends"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative pt-20 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ColorBends
          colors={["#a855f7", "#06b6d4", "#8b5cf6"]}
          rotation={45}
          speed={0.2}
          scale={1.2}
          frequency={1.5}
          warpStrength={1}
          mouseInfluence={0.8}
          parallax={0.5}
          noise={0.05}
          transparent={true}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-3xl"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight"
        >
          Prajwal Srivastava
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-2xl text-purple-300 mb-4 font-semibold"
        >
          Computer Science Student • AI & ML Specialisation
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 md:mb-12 leading-relaxed px-2"
        >
          Passionate about exploring the intersection of data and intelligence through AI, Machine Learning, and Deep
          Learning to create innovative solutions for tomorrow's challenges.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-16"
        >
          <motion.a
            href="https://drive.google.com/file/d/1AQYRoddCz_nURbbUIUAxGY3VGDyGpBf9/view?usp=sharing"
            target="_blank"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(167, 139, 250, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
            rel="noreferrer"
          >
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-4 sm:gap-6 justify-center">
          <motion.a
            href="https://github.com/prajwalroxxs"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#a78bfa" }}
            className="text-gray-300 hover:text-purple-400 transition-colors"
            rel="noreferrer"
          >
            <Github size={20} className="sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/prajwal-srivastava-363575361"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#a78bfa" }}
            className="text-gray-300 hover:text-purple-400 transition-colors"
            rel="noreferrer"
          >
            <Linkedin size={20} className="sm:w-6 sm:h-6" />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/Prajwal_07x/"
            target="_blank"
            whileHover={{ scale: 1.2, color: "#a78bfa" }}
            className="text-gray-300 hover:text-purple-400 transition-colors"
            rel="noreferrer"
          >
            <Code2 size={20} className="sm:w-6 sm:h-6" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
