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
    <section id="waiting-list" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f97316%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22%2F%3E%3C%2F%3E%3C%2F%3E%3C%2Fsvg%3E')] opacity-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-orange-200 to-red-200 rounded-3xl blur-xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-xl opacity-20 animate-float-delayed"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-lg opacity-20"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl flex items-center justify-center mx-auto border border-orange-200/50 shadow-lg">
                <Mail className="w-10 h-10 text-orange-600" />
              </div>
            </div>
            
            <h2 className="font-conthrax text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
              Join the Waitlist
            </h2>
            <p className="font-body text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be the first to experience the future of AI automation. Get early access and exclusive updates.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Card */}
            <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-red-200 to-orange-200 rounded-3xl opacity-20 blur-sm"></div>
              <div className="relative">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-16">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-14 px-6 rounded-2xl bg-white/80 backdrop-blur-sm border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 text-lg placeholder:text-gray-400 shadow-lg transition-all duration-200"
                        disabled={isLoading || isSubmitted}
                      />
                      {error && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-3 ml-2"
                        >
                          {error}
                        </motion.p>
                      )}
                    </div>
                    <Button
                      type="submit"
                      className="h-14 px-8 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none"
                      disabled={isLoading || isSubmitted}
                    >
                      {isLoading ? (
                        <span className="flex items-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                          Processing
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Join Waitlist
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </span>
                      )}
                    </Button>
                  </div>
                </form>

                <AnimatePresence>
                  {isSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -20 }}
                      className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center mb-16 shadow-lg"
                    >
                      <div className="relative inline-block mb-4">
                        <div className="absolute inset-0 bg-green-400 rounded-full blur opacity-20"></div>
                        <CheckCircle className="relative w-12 h-12 text-green-600 mx-auto" />
                      </div>
                      <h3 className="font-bold text-xl text-green-800 mb-3">Successfully Joined!</h3>
                      <p className="text-green-700 text-lg">You'll be the first to know when we launch.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <Sparkles className="w-7 h-7" />,
                      title: "Early Access",
                      desc: "Be among the first to try A.G.V.I.O.N with exclusive beta access",
                      gradient: "from-purple-100 to-pink-100",
                      iconColor: "text-purple-600",
                    },
                    {
                      icon: <Zap className="w-7 h-7" />,
                      title: "Exclusive Updates",
                      desc: "Get insider news, development insights, and feature previews",
                      gradient: "from-yellow-100 to-orange-100",
                      iconColor: "text-yellow-600",
                    },
                    {
                      icon: <Bot className="w-7 h-7" />,
                      title: "Special Offers",
                      desc: "Receive launch discounts, premium bonuses, and VIP support",
                      gradient: "from-blue-100 to-cyan-100",
                      iconColor: "text-blue-600",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="group text-center p-6 rounded-2xl hover:bg-white/50 transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      <div className={`relative inline-block mb-6`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                        <div className={`relative w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg border border-white/50`}>
                          <span className={item.iconColor}>{item.icon}</span>
                        </div>
                      </div>
                      <h4 className="font-bold text-xl mb-4 text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: -2s;
        }
      `}</style>
    </section>
  )
}

export default WaitingListSection