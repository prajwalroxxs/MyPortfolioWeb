"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    title: "AI Research Intern",
    company: "Honda Cars Ltd. India",
    duration: "Aug 2025 – Present",
    points: [
      "Engaged in developing AI-powered chatbots for business use cases.",
      "Created conversational workflows and flowcharts to improve efficiency.",
      "Used Excel for data analysis, reporting, and tracking.",
      "Collaborated with cross-functional teams to deliver high-quality technical solutions",
    ],
  },
  {
    title: "Summer Intern - Data Science",
    company: "Celebal Technologies",
    duration: "Jun 2025 – Aug 2025",
    points: [
      "Worked on real-world data analysis and machine learning projects in a remote, collaborative environment",
      "Applied practical skills to industry-oriented problems involving data preprocessing and predictive modeling",
      "Gained hands-on experience with advanced ML algorithms and data visualization techniques",
      "Contributed to team projects focused on business intelligence and data-driven decision making",
    ],
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight text-center"
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gray-900 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors mb-1">
                  {exp.title}
                </h3>
                <p className="text-purple-400 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-6">{exp.duration}</p>

                <ul className="space-y-3 flex-grow">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex gap-3">
                      <span className="text-purple-400 font-bold mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
