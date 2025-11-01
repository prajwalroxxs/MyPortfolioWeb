"use client"

import { motion } from "framer-motion"
import TechIconsLoop from "./tech-icons-loop"

const skillsData = [
  {
    category: "Programming Languages",
    items: ["React", "Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["TensorFlow", "PyTorch", "OpenCV", "NumPy", "Pandas", "Dlib", "FastAPI", "Node.js", "Git/GitHub"],
  },
  {
    category: "Soft Skills",
    items: [
      "Effective Communication",
      "Team Collaboration",
      "Analytical Thinking",
      "Adaptability",
      "Leadership & Initiative",
    ],
  },
  {
    category: "AI & ML Specialisation",
    items: [
      "Neural Networks",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Generative AI",
      "Large Language Models (LLMs)",
      "Prompt Engineering",
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight text-center"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillsData.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-purple-300 mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <TechIconsLoop />
      </div>
    </section>
  )
}
