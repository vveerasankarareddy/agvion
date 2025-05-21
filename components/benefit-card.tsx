import type { LucideIcon } from "lucide-react"

interface BenefitCardProps {
  icon: LucideIcon
  title: string
  description: string
}

const BenefitCard = ({ icon: Icon, title, description }: BenefitCardProps) => {
  return (
    <div className="p-8 rounded-xl bg-gray-900/20 border border-gray-800 h-full flex flex-col">
      <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
      </div>
      <h3 className="font-conthrax text-xl font-medium mb-3">{title}</h3>
      <p className="font-body text-gray-400 text-base leading-relaxed">{description}</p>
    </div>
  )
}

export default BenefitCard
