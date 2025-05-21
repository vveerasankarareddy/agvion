import type React from "react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="p-8 rounded-xl bg-gray-900/20 border border-gray-800 h-full flex flex-col">
      <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-6">{icon}</div>
      <h3 className="font-conthrax text-xl font-medium mb-3">{title}</h3>
      <p className="font-body text-gray-400 text-base leading-relaxed">{description}</p>
    </div>
  )
}

export default FeatureCard
