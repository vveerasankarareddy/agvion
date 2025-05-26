"use client"

import type React from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <motion.div
      className="p-8 rounded-xl card-gradient h-full flex flex-col group hover:glow-effect transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <h3 className="font-conthrax text-xl font-medium mb-3 group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="font-body text-gray-400 text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  )
}

export default FeatureCard
