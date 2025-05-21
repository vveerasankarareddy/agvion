"use client"

import { useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowRight, Mail } from "lucide-react"

const WaitingListSection = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="waiting-list" ref={sectionRef} className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" strokeWidth={1.5} />
            </div>
            <h2 className="font-conthrax text-3xl md:text-4xl font-bold mb-4">Join Our Waiting List</h2>
            <p className="font-body text-gray-400 max-w-lg mx-auto leading-relaxed">
              Be the first to know when A.G.V.I.O.N launches. Get early access and exclusive updates on our progress.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="no-outline-input font-ui"
                  disabled={isLoading || isSubmitted}
                />
                {error && <p className="text-red-400 text-sm mt-1 font-ui">{error}</p>}
              </div>
              <Button
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 h-12 font-ui"
                disabled={isLoading || isSubmitted}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing
                  </span>
                ) : (
                  <span className="flex items-center">
                    Join Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-green-500/10 border border-green-500/20 rounded-lg p-4 text-center"
              >
                <div className="flex items-center justify-center">
                  <CheckCircle className="text-green-400 mr-2 h-5 w-5" strokeWidth={1.5} />
                  <span className="text-green-400 font-body">Thank you! You've been added to our waiting list.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-teal-400 mb-1 font-conthrax">Early Access</div>
              <p className="text-sm text-gray-400 font-body">Be among the first to try A.G.V.I.O.N</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-teal-400 mb-1 font-conthrax">Exclusive Updates</div>
              <p className="text-sm text-gray-400 font-body">Get product news and development insights</p>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-teal-400 mb-1 font-conthrax">Special Offers</div>
              <p className="text-sm text-gray-400 font-body">Receive launch discounts and promotions</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default WaitingListSection
