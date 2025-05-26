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
      className="p-8 rounded-xl card-gradient h-full flex flex-col group hover:glow-effect transition-all duration-300"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-500/20 to-teal-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon
          className="w-7 h-7 text-white group-hover:text-teal-400 transition-colors duration-300"
          strokeWidth={1.5}
        />
      </motion.div>

      <h3 className="font-conthrax text-xl font-medium mb-3 group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="font-body text-gray-400 text-base mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>

      <div className="mt-auto">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-start group-hover:translate-x-1 transition-transform duration-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <CheckCircle2
                className="w-4 h-4 text-teal-400 mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <span className="font-body text-sm text-gray-300">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default UseCaseCard
