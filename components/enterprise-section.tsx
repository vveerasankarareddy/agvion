"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Activity, LockKeyhole, Rocket, Shield, Timer, FileCheck } from "lucide-react"
import CountUp from "@/components/count-up"

const EnterpriseSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-24">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-md bg-teal-500/20 flex items-center justify-center">
              <Rocket className="w-6 h-6 text-teal-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Agvion Enterprise</h2>
          </div>

          <p className="text-gray-400 mb-8">
            Build, deploy, and manage intelligent chatbots and automation workflows at enterprise scale.
          </p>

          <Button className="bg-teal-600 hover:bg-teal-700 text-white">Get started</Button>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            <FeatureCard
              icon={<Shield className="w-6 h-6 text-teal-400" />}
              title="Security"
              description="Secure your data with enterprise-grade security features for sensitive conversations."
              delay={0.1}
              isInView={isInView}
            />

            <FeatureCard
              icon={<Timer className="w-6 h-6 text-teal-400" />}
              title="24/7 Availability"
              description="Ensure your chatbots are always online and available to assist customers."
              delay={0.2}
              isInView={isInView}
            />

            <FeatureCard
              icon={<Activity className="w-6 h-6 text-teal-400" />}
              title="Activity"
              description="Monitor and analyze chatbot activity and customer interactions in real-time."
              delay={0.3}
              isInView={isInView}
            />

            <FeatureCard
              icon={<LockKeyhole className="w-6 h-6 text-teal-400" />}
              title="Compliance"
              description="Ensure your chatbots are compliant with GDPR and other regulations."
              delay={0.4}
              isInView={isInView}
            />

            <FeatureCard
              icon={<Shield className="w-6 h-6 text-teal-400" />}
              title="Multi-Channel Support"
              description="Deploy your chatbots across Facebook, WhatsApp, Instagram, and Telegram."
              delay={0.5}
              isInView={isInView}
            />

            <FeatureCard
              icon={<FileCheck className="w-6 h-6 text-teal-400" />}
              title="Support"
              description="Get dedicated support from our team of chatbot experts."
              delay={0.6}
              isInView={isInView}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          <div className="absolute right-0 top-20 p-6 bg-black/80 backdrop-blur-sm border border-gray-800 rounded-xl w-64">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">
                <CountUp end={1052445162} separator="," isInView={isInView} />
              </div>
              <div className="text-xs text-gray-400">messages processed</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const FeatureCard = ({ icon, title, description, delay, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col"
    >
      <div className="mb-2">{icon}</div>
      <h3 className="text-lg font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </motion.div>
  )
}

export default EnterpriseSection
