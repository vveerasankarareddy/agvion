"use client"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const StudioSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Agvion Studio is a visual workflow builder for chatbots and automation.
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-10 rounded-xl overflow-hidden border border-gray-800"
      >
        <div className="relative w-full aspect-[16/9] bg-gray-900">
          {/* This would be the Studio UI screenshot */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="ml-4 text-xs text-gray-400">Agvion Studio</div>
          </div>

          <div className="absolute top-8 left-0 right-0 bottom-0 p-4">
            <div className="grid grid-cols-10 h-full gap-2">
              {/* Left sidebar */}
              <div className="col-span-2 bg-gray-950 rounded-md p-2">
                <div className="flex flex-col gap-2">
                  <div className="bg-gray-800 rounded-sm h-8 w-full"></div>
                  <div className="bg-gray-900 rounded-sm h-8 w-full"></div>
                  <div className="bg-gray-900 rounded-sm h-8 w-full"></div>
                  <div className="bg-gray-900 rounded-sm h-8 w-full"></div>
                </div>
              </div>

              {/* Middle content - Workflow Builder */}
              <div className="col-span-5 bg-gray-950 rounded-md p-2">
                <div className="border-2 border-teal-500 h-full rounded-md p-3 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-teal-500 text-sm font-medium mb-2">Visual Workflow</div>
                    <div className="text-xs text-gray-400 max-w-xs">
                      Design your chatbot flow without coding.
                      <br />
                      Connect nodes to create conversation paths.
                      <br />
                      Add conditions, actions, and integrations.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right panel */}
              <div className="col-span-3 bg-gray-950 rounded-md p-2">
                <div className="h-full bg-gray-900 rounded-md p-2">
                  <div className="p-2 rounded bg-teal-500/10 border border-teal-500/20 mb-2">
                    <div className="text-xs text-teal-400">Chat Preview</div>
                  </div>

                  <div className="flex flex-col gap-2 mt-4">
                    <div className="bg-gray-800 rounded-md p-2 text-xs">Hello! How can I assist you today?</div>
                    <div className="bg-teal-600/20 rounded-md p-2 text-xs">I'd like to book an appointment</div>
                    <div className="bg-gray-800 rounded-md p-2 text-xs">
                      I'd be happy to help you book an appointment. What day works best for you?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default StudioSection
