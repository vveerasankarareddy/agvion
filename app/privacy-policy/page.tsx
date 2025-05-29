"use client"
import { useState } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  ArrowLeft,
  Shield,
  Database,
  Eye,
  Lock,
  Share2,
  Settings,
  Cookie,
  Globe,
  Gavel,
  Bot,
  Mail,
  ChevronRight,
  Search,
  BookOpen,
} from "lucide-react"

const sections = [
  { id: "introduction", title: "Introduction", icon: <BookOpen className="w-4 h-4" /> },
  { id: "collection", title: "Information We Collect", icon: <Database className="w-4 h-4" /> },
  { id: "how-collect", title: "How We Collect", icon: <Eye className="w-4 h-4" /> },
  { id: "use", title: "Use of Information", icon: <Settings className="w-4 h-4" /> },
  { id: "storage", title: "Data Storage & Security", icon: <Lock className="w-4 h-4" /> },
  { id: "sharing", title: "Sharing Information", icon: <Share2 className="w-4 h-4" /> },
  { id: "rights", title: "Your Rights & Choices", icon: <Shield className="w-4 h-4" /> },
  { id: "cookies", title: "Cookies & Tracking", icon: <Cookie className="w-4 h-4" /> },
  { id: "compliance", title: "Legal Compliance", icon: <Gavel className="w-4 h-4" /> },
  { id: "transfers", title: "International Transfers", icon: <Globe className="w-4 h-4" /> },
  { id: "ai-training", title: "AI Training", icon: <Bot className="w-4 h-4" /> },
  { id: "changes", title: "Policy Changes", icon: <Settings className="w-4 h-4" /> },
  { id: "contact", title: "Contact Us", icon: <Mail className="w-4 h-4" /> },
]

export default function PrivacyPolicy() {
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
                  Privacy Policy
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
                    Privacy Policy
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
                              className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <p className="text-gray-700 leading-relaxed">
                                At <span className="text-blue-600 font-semibold">A.G.V.I.O.N</span>, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our revolutionary AI-powered automation Service.
                              </p>
                            </motion.div>
                          </div>
                        }
                      />
                    )}

                    {activeSection === "collection" && (
                      <SectionContent
                        title="2. Information We Collect"
                        content={
                          <div className="space-y-6">
                            <motion.p
                              className="text-gray-700 leading-relaxed mb-6"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              We collect the following types of information to provide you with the best possible service:
                            </motion.p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {[
                                {
                                  title: "Account Information",
                                  desc: "Name, email address, company name, and billing details",
                                  highlight: true,
                                  icon: <Shield className="w-5 h-5" />
                                },
                                {
                                  title: "Chat & Workflow Data",
                                  desc: "Chat logs, interaction data, and workflow configurations",
                                  icon: <Database className="w-5 h-5" />
                                },
                                {
                                  title: "Usage Data",
                                  desc: "Information about features accessed and time spent",
                                  icon: <Eye className="w-5 h-5" />
                                },
                                {
                                  title: "Third-Party Platform Data",
                                  desc: "Data from integrated messaging platforms (with authorization)",
                                  icon: <Share2 className="w-5 h-5" />
                                },
                              ].map((item, index) => (
                                <motion.div
                                  key={index}
                                  className={`border rounded-xl p-4 shadow-sm hover:shadow-md transition-all ${
                                    item.highlight 
                                      ? "bg-gradient-to-r from-red-50 to-orange-50 border-red-200" 
                                      : "bg-white border-gray-200"
                                  }`}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                                  whileHover={{ scale: 1.02 }}
                                >
                                  <div className="flex items-center mb-2">
                                    <span className={`mr-3 ${item.highlight ? "text-red-600" : "text-blue-600"}`}>
                                      {item.icon}
                                    </span>
                                    <h4 className={`font-semibold ${item.highlight ? "text-red-600" : "text-blue-600"}`}>
                                      {item.title}
                                    </h4>
                                  </div>
                                  <p className="text-sm text-gray-600">{item.desc}</p>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        }
                      />
                    )}

                    {activeSection === "storage" && (
                      <SectionContent
                        title="5. Data Storage & Security"
                        content={
                          <div className="space-y-6">
                            <motion.div
                              className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                                <Lock className="w-5 h-5 mr-2" />
                                Security Measures
                              </h4>
                              <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  Your data is stored on secure servers with encryption and role-based access controls
                                </li>
                                <li className="flex items-start">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  We retain data only as long as necessary (chat logs retained for 12 months for quality assurance)
                                </li>
                                <li className="flex items-start">
                                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                  Audit logs are maintained for security and compliance, accessible only to authorized personnel
                                </li>
                              </ul>
                            </motion.div>
                          </div>
                        }
                      />
                    )}

                    {activeSection === "sharing" && (
                      <SectionContent
                        title="6. Sharing of Information"
                        content={
                          <div className="space-y-6">
                            <motion.div
                              className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="font-semibold text-purple-600 mb-4 flex items-center">
                                <Share2 className="w-5 h-5 mr-2" />
                                When We Share Your Information
                              </h4>
                              <div className="space-y-4 text-gray-700">
                                <p>We share your information with:</p>
                                <ul className="space-y-3">
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Integrated messaging platforms, as necessary to provide the Service
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Service providers (hosting, analytics) under strict confidentiality agreements
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Legal authorities, if required by law
                                  </li>
                                </ul>
                                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4">
                                  <p className="text-red-700 font-medium flex items-center">
                                    <Shield className="w-4 h-4 mr-2" />
                                    We do not sell your personal information to third parties.
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        }
                      />
                    )}

                    {activeSection === "ai-training" && (
                      <SectionContent
                        title="11. AI Training"
                        content={
                          <div className="space-y-6">
                            <motion.div
                              className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="font-semibold text-indigo-600 mb-4 flex items-center">
                                <Bot className="w-5 h-5 mr-2" />
                                AI Model Training
                              </h4>
                              <div className="space-y-4 text-gray-700">
                                <ul className="space-y-3">
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    We may use aggregated and anonymized data to train and improve our AI models
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    This data does not identify individual users and helps enhance our service quality
                                  </li>
                                </ul>
                              </div>
                            </motion.div>
                          </div>
                        }
                      />
                    )}

                    {activeSection === "rights" && (
                      <SectionContent
                        title="7. Your Rights & Choices"
                        content={
                          <div className="space-y-6">
                            <motion.div
                              className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="font-semibold text-teal-600 mb-4 flex items-center">
                                <Shield className="w-5 h-5 mr-2" />
                                Your Data Rights
                              </h4>
                              <div className="space-y-4 text-gray-700">
                                <ul className="space-y-3">
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    You have the right to access, correct, delete, or port your data
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Contact us at privacy@agvion.com to exercise these rights
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    Under GDPR, you may have additional rights, such as the right to object to processing
                                  </li>
                                  <li className="flex items-start">
                                    <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    California residents have specific rights under CCPA (note: we do not sell your data)
                                  </li>
                                </ul>
                              </div>
                            </motion.div>
                          </div>
                        }
                      />
                    )}

                    {/* Add other sections with similar interactive styling */}
                    {activeSection === "how-collect" && (
                      <SectionContent
                        title="3. How We Collect Information"
                        content={
                          <div className="space-y-4">
                            <p className="text-gray-700 leading-relaxed mb-4">We collect information through various methods:</p>
                            {[
                              "Directly from you when you create an account or use the Service",
                              "Automatically through cookies and similar technologies",
                              "From third-party messaging platforms, with your consent"
                            ].map((item, index) => (
                              <motion.div
                                key={index}
                                className="bg-white border border-gray-200 rounded-xl p-4 border-l-4 border-l-blue-500 shadow-sm"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                              >
                                <p className="text-gray-700">{item}</p>
                              </motion.div>
                            ))}
                          </div>
                        }
                      />
                    )}

                    {activeSection === "contact" && (
                      <SectionContent
                        title="13. Contact Us"
                        content={
                          <div className="space-y-6">
                            <motion.div
                              className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-6"
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                            >
                              <h4 className="font-semibold text-orange-600 mb-4 flex items-center">
                                <Mail className="w-5 h-5 mr-2" />
                                Get in Touch
                              </h4>
                              <p className="text-gray-700 leading-relaxed">
                                For questions or concerns about this Privacy Policy, please contact us at{" "}
                                <a 
                                  href="mailto:privacy@agvion.com" 
                                  className="text-orange-600 hover:text-orange-700 font-medium underline"
                                >
                                  privacy@agvion.com
                                </a>
                                .
                              </p>
                            </motion.div>
                          </div>
                        }
                      />
                    )}
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