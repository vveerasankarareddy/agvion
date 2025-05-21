import type { LucideIcon } from "lucide-react"
import { CheckCircle2 } from "lucide-react"

interface UseCaseCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
}

const UseCaseCard = ({ icon: Icon, title, description, features }: UseCaseCardProps) => {
  return (
    <div className="p-8 rounded-xl bg-gray-900/20 border border-gray-800 h-full flex flex-col">
      <div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-6">
        <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
      </div>

      <h3 className="font-conthrax text-xl font-medium mb-3">{title}</h3>
      <p className="font-body text-gray-400 text-base mb-8 leading-relaxed">{description}</p>

      <div className="mt-auto">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <CheckCircle2 className="w-4 h-4 text-white mr-3 flex-shrink-0 mt-1" strokeWidth={1.5} />
              <span className="font-body text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UseCaseCard
