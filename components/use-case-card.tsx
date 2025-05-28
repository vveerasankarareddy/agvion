"use client"

import type { LucideIcon } from "lucide-react"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

interface UseCaseCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

const UseCaseCard = ({ icon: Icon, title, description, features }: UseCaseCardProps) => {
  return (
    <motion.div
      className="clean-card rounded-xl p-6 h-full flex flex-col"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 orange-text" />
      </div>

      <h3 className="font-conthrax text-xl font-semibold mb-3 text-black">{title}</h3>
      <p className="font-body text-gray-600 mb-6 leading-relaxed flex-grow">{description}</p>

      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 orange-text mt-0.5 flex-shrink-0" />
            <span className="font-body text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default UseCaseCard
