"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <motion.div className="clean-card rounded-xl p-6 h-full" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 orange-text" />
      </div>
      <h3 className="font-conthrax text-xl font-semibold mb-3 text-black">{title}</h3>
      <p className="font-body text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default BenefitCard
