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
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-50 to-white">
      <Navbar />

      <main className="flex-1 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors group"
            >
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
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
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 sticky top-24 shadow-lg">
                <h3 className="text-lg font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Documentation
                </h3>

                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search sections..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                </div>

                <nav className="space-y-1">
                  {filteredSections.map((section, index) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-orange-50 to-red-50 text-orange-600 border border-orange-100 shadow-sm"
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ x: 2 }}
                    >
                      <span className="mr-3 group-hover:scale-110 transition-transform">{section.icon}</span>
                      {section.title}
                      <ChevronRight
                        className={`ml-auto w-4 h-4 transition-transform ${
                          activeSection === section.id ? "rotate-90 text-orange-500" : ""
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
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 shadow-lg">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Terms and Conditions
                  </h1>
                  <p className="text-gray-600 mb-8 text-lg">Last Updated: May 21, 2025</p>
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
                          <div className="space-y-6">
                            <motion.div
                              className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <p className="text-gray-700 leading-relaxed">
                                Welcome to <span className="text-orange-600 font-semibold">A.G.V.I.O.N</span>, the
                                next-generation AI-powered chatbot and workflow automation platform. These Terms and
                                Conditions ("Terms") govern your access to and use of our revolutionary Service.
                              </p>
                            </motion.div>
                            <motion.p
                              className="text-gray-700 leading-relaxed"
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
                                className="bg-white border border-gray-200 rounded-xl p-4 border-l-4 border-l-orange-500 shadow-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                              >
                                <span className="font-semibold text-orange-600">"{item.term}"</span>
                                <span className="text-gray-700"> {item.definition}</span>
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
                              className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <p className="text-gray-700 leading-relaxed mb-4">
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
                                  className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <h4 className="font-semibold text-orange-600 mb-2">{feature.title}</h4>
                                  <p className="text-sm text-gray-600">{feature.desc}</p>
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
                              className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="font-semibold text-red-600 mb-4 flex items-center">
                                <CreditCard className="w-5 h-5 mr-2" />
                                Important Payment Information
                              </h4>
                              <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  Subscription fees are billed in advance on a monthly or annual basis
                                </li>
                                <li className="flex items-start">
                                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  Payments are non-refundable except as required by law
                                </li>
                                <li className="flex items-start">
                                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
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
                              className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="font-semibold text-purple-600 mb-4 flex items-center">
                                <Bot className="w-5 h-5 mr-2" />
                                Artificial Intelligence Disclaimer
                              </h4>
                              <div className="space-y-4 text-gray-700">
                                <p>
                                  Our Service uses cutting-edge artificial intelligence to generate responses and
                                  automate workflows.
                                </p>
                                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                                  <p className="text-yellow-700 font-medium">
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

                    {/* Account Management Section */}
                    {activeSection === "account" && (
                      <SectionContent
                        title="4. Account Management"
                        content={
                          <div className="space-y-6">
                            <motion.div
                              className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                                <Users className="w-5 h-5 mr-2" />
                                Account Responsibilities
                              </h4>
                              <div className="space-y-4 text-gray-700">
                                <p>You are responsible for maintaining the security of your account and password.</p>
                                <ul className="space-y-2 ml-4">
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Use strong, unique passwords for your account
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Notify us immediately of any unauthorized access
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Keep your contact information up to date
                                  </li>
                                </ul>
                              </div>
                            </motion.div>
                          </div>
                        }
                      />
                    )}

                    {/* Add remaining sections with similar styling */}
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <motion.div
                  className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <div className="text-sm text-gray-500">
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
                      className="px-4 py-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors text-gray-700"
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
                      className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl transition-colors text-white shadow-lg hover:shadow-xl"
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
    <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{title}</h2>
    {content}
  </motion.section>
)