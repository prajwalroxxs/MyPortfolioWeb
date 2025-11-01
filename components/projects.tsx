"use client"

import { motion } from "framer-motion"
import { Github } from "lucide-react"

const projects = [
  {
    title: "HyperSpectral Image Classification",
    description:
      "Used SVM, RF, CNN, 3D-CNN to classify HSI data from Bennett University. Applied PCA, dimensionality reduction, and enhanced feature extraction. Tackled class imbalance using hybrid models and customized metrics.",
    repo: "https://github.com/prajwalroxxs/HyperSpectral-ImageClassification",
  },
  {
    title: "Multimodal Fake News Detection",
    description:
      "Developed a multi-modal model combining NLP and Computer Vision to detect fake news. Enhanced classification accuracy by leveraging multi-modal feature extraction on image and text data.",
    repo: "https://github.com/prajwalroxxs/MMFakeNewsDetection",
  },
  {
    title: "Drowsiness Detector",
    description:
      "Real-time drowsiness detection using computer vision and facial landmarks with OpenCV and TensorFlow.Designed a safety system to detect drowsiness using Eye Aspect Ratio (EAR) and head pose estimation. Alert mechanism with sound/message for real-time driver monitoring.",
    repo: "https://github.com/prajwalroxxs/Drowsiness-Detector",
  },
  {
    title: "KnightClash",
    description:
      "Interactive chess game with AI opponent featuring minimax algorithm and alpha-beta pruning. Provides difficulty levels and intuitive UI for chess enthusiasts. Implements advanced game theory algorithms for strategic decision-making.",
    repo: "https://github.com/prajwalroxxs/KnightClash",
  },
  {
    title: "Loan Approval Prediction",
    description:
      "Loan Prediction system using Machine Learning to classify loan approvals based on applicant details. Includes data preprocessing, feature engineering, and model building with evaluation for accurate predictions. Built in Jupyter Notebook for experimentation and analysis.",
    repo: "https://github.com/prajwalroxxs/Loan-approval-prediction",
  },
  {
    title: "TestMyHonda",
    description:
      "A web-based Honda Test Drive Booking System where users can schedule test drives at Noida, Gurgaon, or Central Delhi branches. Managers can confirm bookings, collect user feedback, and view analytics on car sales trends through an interactive dashboard.",
    repo: "https://github.com/prajwalroxxs/TestMyHonda",
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-4 relative" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight text-center"
        >
          Projects & Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative bg-gray-900 border border-purple-500/20 rounded-lg p-4 md:p-6 hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mb-4 md:mb-6 flex-grow line-clamp-4">
                  {project.description}
                </p>

                <motion.a
                  href={project.repo}
                  target="_blank"
                  whileHover={{ scale: 1.2 }}
                  className="inline-flex text-purple-400 hover:text-purple-300 transition-colors w-fit"
                  rel="noreferrer"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
