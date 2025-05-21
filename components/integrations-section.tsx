"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const IntegrationsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const integrations = [
    { name: "WhatsApp", icon: "✓", color: "bg-green-500" },
    { name: "Facebook Messenger", icon: "✓", color: "bg-blue-400" },
    { name: "Instagram", icon: "✓", color: "bg-purple-500" },
    { name: "Telegram", icon: "✓", color: "bg-blue-500" },
    { name: "Zapier", icon: "✓", color: "bg-yellow-500" },
  ]

  const providers = [
    { name: "CRM Systems", icon: "✓", color: "bg-black" },
    { name: "Email Services", icon: "✓", color: "bg-gray-700" },
    { name: "Payment Gateways", icon: "✓", color: "bg-red-500" },
    { name: "Database Systems", icon: "✓", color: "bg-blue-700" },
    { name: "Analytics Tools", icon: "✓", color: "bg-purple-600" },
  ]

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <div className="w-12 h-12 rounded-md bg-yellow-500/20 flex items-center justify-center mb-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-yellow-500"
            >
              <path
                d="M9.5 14.5L14.5 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.5 21.5C16.5 21.5 20.5 19.5 20.5 16.5C20.5 13.5 16.5 9.5 16.5 9.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 7.5C18.5 7.5 19 5.793 19 5C19 2.5 16.5 2.5 16.5 2.5C16.5 2.5 14 2.5 14 5C14 5.793 14.5 7.5 14.5 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.5 9.5C9.5 9.5 5.5 13.5 5.5 16.5C5.5 19.5 9.5 21.5 9.5 21.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.5 7.5C11.5 7.5 11 5.793 11 5C11 2.5 8.5 2.5 8.5 2.5C8.5 2.5 6 2.5 6 5C6 5.793 6.5 7.5 6.5 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2 className="text-3xl font-bold mb-4">Connect with Agvion</h2>
          <p className="text-gray-400 mb-6">
            The most powerful ecosystem to build production-ready chatbots and automation workflows.
          </p>

          <button className="py-2 px-4 border border-gray-700 rounded-md hover:bg-gray-800 transition-colors text-sm w-max mt-auto">
            Go to Hub
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col"
        >
          <h3 className="text-xl font-medium mb-6">Messaging Channels</h3>

          <div className="space-y-4">
            {integrations.map((integration, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 ${integration.color} rounded-full flex items-center justify-center text-white`}
                >
                  {integration.icon}
                </div>
                <span>{integration.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col"
        >
          <h3 className="text-xl font-medium mb-6">Integration Categories</h3>

          <div className="space-y-4">
            {providers.map((provider, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className={`w-8 h-8 ${provider.color} rounded-full flex items-center justify-center text-white`}>
                  {provider.icon}
                </div>
                <span>{provider.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default IntegrationsSection
