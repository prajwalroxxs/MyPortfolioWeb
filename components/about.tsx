"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight text-center"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            I am a Computer Science undergraduate at Bennett University (2022–2026), specializing in Artificial
            Intelligence and Machine Learning. With a strong foundation in Deep Learning, NLP, Computer Vision, and
            Generative AI, I enjoy solving real-world problems and building intelligent systems that bridge research
            with practical applications.
          </p>

          <p>
            My journey so far includes projects on fake news detection, hyperspectral image classification, and
            real-time driver drowsiness detection, reflecting my passion for applied AI. I aim to create solutions that
            not only innovate but also make a meaningful impact on society through the power of artificial intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
