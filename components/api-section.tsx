"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

const ApiSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-24 flex flex-col md:flex-row items-center gap-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2"
      >
        <div className="w-12 h-12 rounded-md bg-teal-500/20 flex items-center justify-center mb-6">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-teal-500"
          >
            <path
              d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path d="M8.5 14L15.5 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path
              d="M10.5 17.5L8.5 20M8.5 17.5L10.5 20"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.5 4.5L8.5 7M8.5 4.5L10.5 7"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M13.5 14L13.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M15.5 12L15.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M10.5 12L10.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8.5 12L8.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>

        <h2 className="text-4xl font-bold mb-6">
          Integration <span className="text-teal-500">Hub</span> for everything
        </h2>

        <p className="text-gray-400 mb-8">
          Connect your chatbots to CRMs, email, databases, and APIs with our easy-to-use Integration Hub.
        </p>

        <Button variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
          Read docs
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="md:w-1/2"
      >
        <div className="bg-gray-900 rounded-md p-4 border border-gray-800">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          <pre className="text-sm font-mono overflow-x-auto">
            <code>
              <span className="text-purple-400">import</span> {"{"} <span className="text-blue-400">Integration</span>{" "}
              {"}"} <span className="text-purple-400">from</span> <span className="text-green-400">"@agvion/sdk"</span>
              {"\n"}
              <span className="text-purple-400">import</span> <span className="text-blue-400">whatsappChannel</span>{" "}
              <span className="text-purple-400">from</span>{" "}
              <span className="text-green-400">"./channels/whatsapp"</span>
              {"\n\n"}
              <span className="text-purple-400">export default</span> <span className="text-purple-400">new</span>{" "}
              <span className="text-blue-400">Integration</span>
              {"("}
              {"{"}
              {"\n"}
              {"  "}
              <span className="text-blue-400">channels</span>: {"{"}
              {"\n"}
              {"    "}
              <span className="text-blue-400">whatsapp</span>: <span className="text-blue-400">whatsappChannel</span>,
              {"\n"}
              {"  "}
              {"}"},{"\n"}
              {"  "}
              <span className="text-blue-400">actions</span>: {"{"}
              {"\n"}
              {"    "}
              <span className="text-blue-400">bookAppointment</span>: <span className="text-purple-400">async</span>{" "}
              {"("}
              <span className="text-blue-400">ctx</span>
              {")"} {"=>"} {"{"}
              {"\n"}
              {"      "}
              <span className="text-blue-400">console</span>.<span className="text-blue-400">info</span>
              {"("}
              <span className="text-green-400">"booking appointment for user"</span>,{" "}
              <span className="text-blue-400">ctx</span>.<span className="text-blue-400">userId</span>
              {")"};{"\n"}
              {"    "}
              {"}"},{"\n"}
              {"  "}
              {"}"},{"\n"}
              {"  "}
              <span className="text-blue-400">register</span>: <span className="text-purple-400">async</span> {"("}
              <span className="text-blue-400">ctx</span>
              {")"} {"=>"} {"{"}
              {"\n"}
              {"    "}
              <span className="text-blue-400">console</span>.<span className="text-blue-400">info</span>
              {"("}
              <span className="text-green-400">"Integration installed for chatbot"</span>,{" "}
              <span className="text-blue-400">ctx</span>.<span className="text-blue-400">botId</span>
              {")"};{"\n"}
              {"  "}
              {"}"},{"\n"}
              {"  "}
              <span className="text-blue-400">handler</span>: <span className="text-purple-400">async</span> {"("}
              <span className="text-blue-400">req</span>
              {")"} {"=>"} {"{"}
              {"\n"}
              {"    "}
              <span className="text-blue-400">console</span>.<span className="text-blue-400">info</span>
              {"("}
              <span className="text-green-400">"received webhook from calendar"</span>,{" "}
              <span className="text-blue-400">req</span>
              {")"};{"\n"}
              {"  "}
              {"}"},{"\n"}
              {"}"}
              {")"}
            </code>
          </pre>
        </div>
      </motion.div>
    </section>
  )
}

export default ApiSection
