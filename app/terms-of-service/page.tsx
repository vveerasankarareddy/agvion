"use client"
import { useState } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  ArrowLeft,
  FileText,
  Shield,
  CreditCard,
  Users,
  Bot,
  AlertTriangle,
  Scale,
  Globe,
  ChevronRight,
  Search,
  BookOpen,
} from "lucide-react"

const sections = [
  { id: "introduction", title: "Introduction", icon: <FileText className="w-4 h-4" /> },
  { id: "definitions", title: "Definitions", icon: <BookOpen className="w-4 h-4" /> },
  { id: "service", title: "Service Description", icon: <Bot className="w-4 h-4" /> },
  { id: "account", title: "Account Management", icon: <Users className="w-4 h-4" /> },
  { id: "obligations", title: "User Obligations", icon: <Shield className="w-4 h-4" /> },
  { id: "payment", title: "Payment Terms", icon: <CreditCard className="w-4 h-4" /> },
  { id: "ip", title: "Intellectual Property", icon: <Scale className="w-4 h-4" /> },
  { id: "privacy", title: "Data & Privacy", icon: <Shield className="w-4 h-4" /> },
  { id: "integrations", title: "Third-Party Integrations", icon: <Globe className="w-4 h-4" /> },
  { id: "ai", title: "AI Features", icon: <Bot className="w-4 h-4" /> },
  { id: "liability", title: "Liability", icon: <AlertTriangle className="w-4 h-4" /> },
]

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("introduction")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSections = sections.filter((section) => section.title.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-teal-400 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-body">Back to Home</span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="docs-sidebar rounded-xl p-6 sticky top-24">
                <h3 className="font-conthrax text-lg font-bold mb-4 text-gradient">Documentation</h3>

                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search sections..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-sm focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <nav className="space-y-2">
                  {filteredSections.map((section, index) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-all duration-300 group ${
                        activeSection === section.id
                          ? "bg-teal-500/20 text-teal-400 border-l-2 border-teal-500"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="mr-3 group-hover:scale-110 transition-transform">{section.icon}</span>
                      {section.title}
                      <ChevronRight
                        className={`ml-auto w-4 h-4 transition-transform ${
                          activeSection === section.id ? "rotate-90" : ""
                        }`}
                      />
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="docs-content rounded-xl p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="font-conthrax text-4xl md:text-5xl font-bold mb-4 text-gradient">
                    Terms and Conditions
                  </h1>
                  <p className="font-body text-gray-400 mb-8 text-lg">Last Updated: May 21, 2025</p>
                </motion.div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    {activeSection === "introduction" && (
                      <SectionContent
                        title="1. Introduction"
                        content={
                          <div className="space-y-4">
                            <motion.div
                              className="gradient-border rounded-lg p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <p className="font-body text-gray-300 leading-relaxed">
                                Welcome to <span className="text-teal-400 font-semibold">A.G.V.I.O.N</span>, the
                                next-generation AI-powered chatbot and workflow automation platform. These Terms and
                                Conditions ("Terms") govern your access to and use of our revolutionary Service.
                              </p>
                            </motion.div>
                            <motion.p
                              className="font-body text-gray-300 leading-relaxed"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                            >
                              By creating an account or using the Service, you agree to be bound by these Terms. If you
                              do not agree, please do not use the Service.
                            </motion.p>
                          </div>
                        }
                      />
                    )}

                    {activeSection === "definitions" && (
                      <SectionContent
                        title="2. Definitions"
                        content={
                          <div className="space-y-4">
                            {[
                              {
                                term: "Agvion",
                                definition: "refers to A.G.V.I.O.N, the provider of the AI-powered automation Service.",
                              },
                              {
                                term: "User",
                                definition: "refers to the individual or entity using our intelligent platform.",
                              },
                              {
                                term: "Service",
                                definition:
                                  "refers to the A.G.V.I.O.N platform, including all AI features, tools, and integrations.",
                              },
                              {
                                term: "User Content",
                                definition:
                                  "refers to any workflows, chatbot scripts, chat logs, or other materials you create.",
                              },
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                className="card-gradient rounded-lg p-4 border-l-4 border-teal-500"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                              >
                                <span className="font-semibold text-teal-400">"{item.term}"</span>
                                <span className="font-body text-gray-300"> {item.definition}</span>
                              </motion.div>
                            ))}
                          </div>
                        }
                      />
                    )}

                    {activeSection === "service" && (
                      <SectionContent
                        title="3. AI-Powered Service Description"
                        content={
                          <div className="space-y-6">
                            <motion.div
                              className="hero-gradient rounded-xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <p className="font-body text-gray-300 leading-relaxed mb-4">
                                A.G.V.I.O.N provides an advanced AI-powered chatbot and workflow automation platform
                                designed to revolutionize how businesses automate customer interactions across multiple
                                messaging platforms.
                              </p>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {[
                                { title: "Visual AI Builder", desc: "Drag-and-drop editor with AI assistance" },
                                { title: "Multi-Channel Integration", desc: "Facebook, Instagram, WhatsApp, Telegram" },
                                { title: "Intelligent Backend", desc: "AI responses, smart sessions, secure storage" },
                                { title: "Enterprise Features", desc: "Role-based access, audit logs, live support" },
                              ].map((feature, index) => (
                                <motion.div
                                  key={index}
                                  className="card-gradient rounded-lg p-4 shimmer"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <h4 className="font-semibold text-teal-400 mb-2">{feature.title}</h4>
                                  <p className="text-sm text-gray-400">{feature.desc}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        }
                      />
                    )}

                    {activeSection === "payment" && (
                      <SectionContent
                        title="6. Payment Terms"
                        content={
                          <div className="space-y-6">
                            <motion.div
                              className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-lg p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="font-semibold text-red-400 mb-4 flex items-center">
                                <CreditCard className="w-5 h-5 mr-2" />
                                Important Payment Information
                              </h4>
                              <ul className="space-y-3 font-body text-gray-300">
                                <li className="flex items-start">
                                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  Subscription fees are billed in advance on a monthly or annual basis
                                </li>
                                <li className="flex items-start">
                                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  Payments are non-refundable except as required by law
                                </li>
                                <li className="flex items-start">
                                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  Late payments may result in service suspension
                                </li>
                              </ul>
                            </motion.div>
                          </div>
                        }
                      />
                    )}

                    {activeSection === "ai" && (
                      <SectionContent
                        title="11. AI-Powered Features"
                        content={
                          <div className="space-y-6">
                            <motion.div
                              className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-lg p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="font-semibold text-purple-400 mb-4 flex items-center">
                                <Bot className="w-5 h-5 mr-2" />
                                Artificial Intelligence Disclaimer
                              </h4>
                              <div className="space-y-4 font-body text-gray-300">
                                <p>
                                  Our Service uses cutting-edge artificial intelligence to generate responses and
                                  automate workflows.
                                </p>
                                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                                  <p className="text-yellow-400 font-medium">
                                    ⚠️ While we strive for accuracy, we do not guarantee the correctness or
                                    appropriateness of AI-generated content.
                                  </p>
                                </div>
                                <p>
                                  You are responsible for reviewing and approving any automated actions or responses.
                                </p>
                              </div>
                            </motion.div>
                          </div>
                        }
                      />
                    )}

                    {/* Add more sections as needed */}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <motion.div
                  className="flex justify-between items-center mt-12 pt-8 border-t border-gray-800"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="text-sm text-gray-400">
                    Section {sections.findIndex((s) => s.id === activeSection) + 1} of {sections.length}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        const currentIndex = sections.findIndex((s) => s.id === activeSection)
                        if (currentIndex > 0) {
                          setActiveSection(sections[currentIndex - 1].id)
                        }
                      }}
                      disabled={sections.findIndex((s) => s.id === activeSection) === 0}
                      className="px-4 py-2 bg-gray-800 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => {
                        const currentIndex = sections.findIndex((s) => s.id === activeSection)
                        if (currentIndex < sections.length - 1) {
                          setActiveSection(sections[currentIndex + 1].id)
                        }
                      }}
                      disabled={sections.findIndex((s) => s.id === activeSection) === sections.length - 1}
                      className="px-4 py-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

const SectionContent = ({ title, content }: { title: string; content: React.ReactNode }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="space-y-6"
  >
    <h2 className="font-conthrax text-2xl font-bold text-gradient">{title}</h2>
    {content}
  </motion.section>
)
