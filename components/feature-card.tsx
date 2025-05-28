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
      className="clean-card rounded-xl p-6 h-full shadow-sm border border-gray-100"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 orange-text">
        {icon}
      </div>
      <h3 className="font-conthrax text-xl font-semibold mb-3 text-black">{title}</h3>
      <p className="font-body text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default FeatureCard