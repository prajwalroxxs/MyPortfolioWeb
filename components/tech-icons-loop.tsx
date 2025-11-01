"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function TechIconsLoop() {
  const [isPaused, setIsPaused] = useState(false)

  const techStack = [
    {
      name: "LeetCode",
      icon: "https://www.svgrepo.com/show/306328/leetcode.svg",
      link: "https://leetcode.com/",
    },
    {
      name: "Vercel",
      icon: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      link: "https://vercel.com/",
    },
    {
      name: "Supabase",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/supabase-icon.svg",
      link: "https://supabase.com/",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      link: "https://github.com/",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      link: "https://react.dev/",
    },
    {
      name: "TypeScript",
      icon: "https://www.svgrepo.com/show/374144/typescript.svg",
      link: "https://www.typescriptlang.org/",
    },
    {
      name: "Next.js",
      icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.svg",
      link: "https://nextjs.org/",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      link: "https://www.python.org/",
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      link: "https://code.visualstudio.com/",
    },
    {
      name: "TensorFlow",
      icon: "https://www.svgrepo.com/show/354440/tensorflow.svg",
      link: "https://www.tensorflow.org/",
    },
    {
      name: "PyTorch",
      icon: "https://www.svgrepo.com/show/306619/pytorch.svg",
      link: "https://pytorch.org/",
    },
  ]

  // Duplicate the array for seamless loop
  const duplicatedStack = [...techStack, ...techStack]

  return (
    <div
      className="w-full overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex gap-12"
        animate={{ x: [0, -1200] }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          paused: isPaused,
        }}
      >
        {duplicatedStack.map((tech, index) => (
          <motion.a
            key={index}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-w-[80px] cursor-pointer group"
            whileHover={{ scale: 1.15 }}
          >
            <div className="relative flex items-center justify-center">
              <Image
                src={tech.icon || "/placeholder.svg"}
                alt={tech.name}
                width={56}
                height={56}
                className="w-14 h-14 brightness-0 invert opacity-80 group-hover:opacity-100 transition-all group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"
              />
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Fade edges for smooth infinite loop effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black via-transparent to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black via-transparent to-transparent" />
      </div>
    </div>
  )
}
