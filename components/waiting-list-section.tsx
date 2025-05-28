"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, ArrowRight, Mail, Sparkles, Zap, Bot } from "lucide-react"

const WaitingListSection = () => {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      setEmail("")

      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <section id="waiting-list" className="section-gray py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 orange-text" />
            </div>
            <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-6">Join the Waitlist</h2>
            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Be the first to experience the future of AI automation. Get early access and exclusive updates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="clean-card rounded-2xl p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="clean-input h-12 px-4 rounded-lg"
                    disabled={isLoading || isSubmitted}
                  />
                  {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                </div>
                <Button
                  type="submit"
                  className="btn-primary h-12 px-8 rounded-lg font-medium"
                  disabled={isLoading || isSubmitted}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Join Waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center mb-12"
                >
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-green-800 mb-2">Successfully Joined!</h3>
                  <p className="text-green-700">You'll be the first to know when we launch.</p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Early Access",
                  desc: "Be among the first to try A.G.V.I.O.N",
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Exclusive Updates",
                  desc: "Get insider news and development insights",
                },
                {
                  icon: <Bot className="w-6 h-6" />,
                  title: "Special Offers",
                  desc: "Receive launch discounts and bonuses",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 orange-text">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WaitingListSection
