"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  Zap,
  BarChart3,
  Users,
  Lock,
  Globe,
  Sparkles,
  Clock,
  Users2,
  TrendingUp,
  Globe2,
  CheckCheck,
  ScaleIcon as Scales,
  ShoppingCart,
  Building2,
  Laptop,
  Stethoscope,
  Factory,
  GraduationCap,
  Bot,
  Brain,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WaitingListSection from "@/components/waiting-list-section"
import FeatureCard from "@/components/feature-card"
import UseCaseCard from "@/components/use-case-card"
import BenefitCard from "@/components/benefit-card"
import TypewriterEffect from "@/components/typewriter-effect"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const useCasesRef = useRef(null)
  const benefitsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const useCasesInView = useInView(useCasesRef, { once: true, amount: 0.2 })
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  useEffect(() => {
    setIsVisible(true)

    // Adding grid lines to body
    const body = document.querySelector("body")
    if (body) {
      body.classList.add("bg-grid")
      // Add smooth scrolling to the entire document
      document.documentElement.style.scrollBehavior = "smooth"
    }

    return () => {
      if (body) {
        body.classList.remove("bg-grid")
        document.documentElement.style.scrollBehavior = "auto"
      }
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="container mx-auto px-4 pt-32 pb-20 relative">
        <div className="hero-gradient absolute inset-0 -z-10"></div>

        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-flex items-center card-gradient text-teal-400 px-4 py-2 rounded-full text-sm mb-8 animate-pulse-glow"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="mr-2 w-4 h-4" />
              <span className="mr-2 inline-block w-2 h-2 bg-teal-400 rounded-full animate-pulse"></span>
              Launching soon - Join our waiting list for early access
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-conthrax text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              The Future of
              <br />
              <span className="text-gradient animate-gradient">AI Agents & Automation</span>
              <br />
              <motion.span
                className="inline-block"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
              >
                Starts Here
              </motion.span>
            </h1>

            <p className="font-body text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              A.G.V.I.O.N is the next-generation AI-powered platform for building intelligent agents and automation
              workflows across messaging channels like WhatsApp, Facebook, Instagram, and Telegram.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 via-teal-500 to-blue-500 hover:from-teal-500 hover:via-teal-400 hover:to-blue-400 text-white rounded-xl relative overflow-hidden group glow-effect text-lg px-8 py-4"
                >
                  <span className="relative z-10 flex items-center">
                    <Bot className="mr-3 h-5 w-5" 
                    onClick={() => {
                  const element = document.querySelector("#waiting-list")
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth",
                    })
                  }
                }}
                />
                    Join AI Revolution
                    <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-gray-600 hover:bg-teal-500/10 hover:border-teal-500 rounded-xl text-lg px-8 py-4 card-gradient"
                >
                  <Brain className="mr-3 h-5 w-5" />
                  Watch AI Demo
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            style={{ y }}
            className="relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden gradient-border glow-effect"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: heroInView ? 1 : 0, scale: heroInView ? 1 : 0.9 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-900 via-gray-800 to-black relative">
              {/* Enhanced Browser mockup header */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center px-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div
                    className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
                <div className="ml-6 text-sm text-gray-300 font-ui flex items-center">
                  <Cpu className="w-4 h-4 mr-2 text-teal-400" />
                  A.G.V.I.O.N AI Studio
                </div>
              </div>

              {/* Enhanced Platform UI mockup */}
              <div className="absolute top-10 left-0 right-0 bottom-0 p-6">
                <div className="grid grid-cols-12 h-full gap-3">
                  {/* Enhanced Left sidebar */}
                  <div className="col-span-3 card-gradient rounded-xl p-4">
                    <div className="flex flex-col gap-3">
                      <div className="bg-gradient-to-r from-teal-600/30 to-teal-500/20 rounded-lg h-10 w-full flex items-center px-3 border border-teal-500/30">
                        <Bot className="w-4 h-4 mr-2 text-teal-400" />
                        <span className="text-sm text-teal-300 font-ui">AI Workflows</span>
                      </div>
                      {["Main Flow", "Error Handler", "Timeout Logic", "Browse Intent", "Search Query"].map(
                        (item, i) => (
                          <motion.div
                            key={item}
                            className="bg-gray-800/50 rounded-lg h-10 w-full flex items-center px-3 hover:bg-gray-700/50 transition-colors cursor-pointer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                          >
                            <span className="text-xs text-gray-400 font-ui">{item}</span>
                          </motion.div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Enhanced Middle content - AI Workflow Builder */}
                  <div className="col-span-6 card-gradient rounded-xl p-4">
                    <div className="border border-teal-500/30 h-full rounded-xl p-4 relative bg-gradient-to-br from-teal-500/5 to-transparent">
                      {/* AI Trigger Node */}
                      <motion.div
                        className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                      >
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-600/30 to-purple-500/20 flex items-center justify-center border border-purple-500/40 glow-effect">
                          <div className="text-center">
                            <Zap className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                            <span className="text-xs text-white font-ui">AI Trigger</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Enhanced Connection line with animation */}
                      <motion.svg
                        width="120"
                        height="3"
                        className="absolute top-1/2 left-1/4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                      >
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#0ED3CF" />
                            <stop offset="100%" stopColor="#06B6D4" />
                          </linearGradient>
                        </defs>
                        <line
                          x1="0"
                          y1="1.5"
                          x2="120"
                          y2="1.5"
                          stroke="url(#lineGradient)"
                          strokeWidth="2"
                          strokeDasharray="6,3"
                        />
                      </motion.svg>

                      {/* Enhanced AI Response Node */}
                      <motion.div
                        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                      >
                        <div className="w-28 h-20 rounded-xl bg-gradient-to-br from-teal-600/30 to-teal-500/20 flex flex-col items-center justify-center border border-teal-500/40 p-3 glow-effect">
                          <Brain className="w-5 h-5 text-teal-400 mb-1" />
                          <span className="text-xs text-white font-ui text-center">AI Response</span>
                          <div className="text-[8px] text-gray-400 text-center mt-1 font-ui">Smart Reply Engine</div>
                        </div>
                      </motion.div>

                      {/* Enhanced instruction */}
                      <motion.div
                        className="absolute top-4 left-4 text-xs text-gray-400 font-ui bg-black/50 px-3 py-2 rounded-lg border border-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.5 }}
                      >
                        <Sparkles className="w-3 h-3 inline mr-2 text-teal-400" />
                        AI-powered workflow: Intelligent trigger → Smart response generation
                      </motion.div>
                    </div>
                  </div>

                  {/* Enhanced Right panel */}
                  <div className="col-span-3 card-gradient rounded-xl p-4">
                    <div className="h-full bg-gray-900/50 rounded-xl p-3">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500/20 to-teal-400/10 border border-teal-500/30 mb-4">
                        <div className="text-xs text-white font-ui flex items-center">
                          <MessageSquare className="w-3 h-3 mr-2 text-teal-400" />
                          Live AI Chat Preview
                        </div>
                      </div>

                      <div className="flex flex-col gap-3 mt-4">
                        {[
                          { text: "Hello! I'm your AI assistant. How can I help you today?", isBot: true },
                          { text: "I'd like to book an appointment", isBot: false },
                          {
                            text: "I'd be happy to help you schedule an appointment. What service are you interested in?",
                            isBot: true,
                          },
                        ].map((message, i) => (
                          <motion.div
                            key={i}
                            className={`rounded-lg p-3 text-xs font-ui ${
                              message.isBot
                                ? "bg-gray-800/70 border-l-2 border-teal-500"
                                : "bg-teal-600/20 border-l-2 border-teal-400"
                            }`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.6 + i * 0.3 }}
                          >
                            {message.text}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is A.G.V.I.O.N Section */}
      <section id="about" className="section-gradient py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              className="font-conthrax text-4xl md:text-5xl font-bold mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              What is A.G.V.I.O.N?
            </motion.h2>
            <motion.p
              className="font-body text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A.G.V.I.O.N is a revolutionary no-code/low-code platform that enables users to build, deploy, and manage
              intelligent AI agents and automation workflows. It combines cutting-edge AI technology, visual workflow
              design, and seamless integrations to transform how businesses interact with their customers.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="font-conthrax text-3xl font-bold mb-6">Automate conversations with AI across</h3>
              <div className="h-20 mb-8">
                <TypewriterEffect
                  words={["WhatsApp", "Facebook Messenger", "Instagram", "Telegram", "Web Chat", "Voice Assistants"]}
                />
              </div>
              <p className="font-body text-gray-300 mb-8 leading-relaxed text-lg">
                Deploy your AI agents across multiple messaging channels to reach your customers wherever they are.
                A.G.V.I.O.N makes it easy to build once and deploy everywhere with intelligent automation.
              </p>
              <ul className="space-y-4">
                {[
                  "No coding required - Visual AI workflow builder",
                  "Advanced natural language understanding",
                  "Seamless human handoff when needed",
                  "Real-time analytics and insights",
                  "Enterprise-grade security and compliance",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle2
                      className="w-6 h-6 text-teal-400 mr-3 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                      strokeWidth={1.5}
                    />
                    <span className="font-body text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="card-gradient rounded-2xl overflow-hidden glow-effect"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="p-2">
                <video className="w-full rounded-xl" autoPlay loop muted playsInline>
                  <source src="/placeholder.svg?height=400&width=600" type="video/mp4" />
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" ref={featuresRef} className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="font-conthrax text-4xl md:text-5xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            AI-Powered Features
          </motion.h2>
          <motion.p
            className="font-body text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A.G.V.I.O.N provides everything you need to create powerful AI agents and automation workflows that engage
            customers and streamline operations with cutting-edge artificial intelligence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Brain className="w-6 h-6 text-white" strokeWidth={1.5} />,
              title: "AI Workflow Builder",
              desc: "Design intelligent automation logic with our AI-assisted drag-and-drop interface.",
            },
            {
              icon: <Globe className="w-6 h-6 text-white" strokeWidth={1.5} />,
              title: "Multi-Channel AI",
              desc: "Deploy AI agents on Facebook, Instagram, WhatsApp, and Telegram from one platform.",
            },
            {
              icon: <Sparkles className="w-6 h-6 text-white" strokeWidth={1.5} />,
              title: "Advanced NLP Engine",
              desc: "Understand and respond in natural language with our state-of-the-art AI engine.",
            },
            {
              icon: <Zap className="w-6 h-6 text-white" strokeWidth={1.5} />,
              title: "Smart Integrations",
              desc: "Connect to CRMs, databases, and APIs with intelligent data processing.",
            },
            {
              icon: <BarChart3 className="w-6 h-6 text-white" strokeWidth={1.5} />,
              title: "AI Analytics",
              desc: "Track engagement and performance with AI-powered insights and predictions.",
            },
            {
              icon: <Users className="w-6 h-6 text-white" strokeWidth={1.5} />,
              title: "Intelligent Access Control",
              desc: "Manage team permissions with AI-driven security recommendations.",
            },
            {
              icon: <MessageSquare className="w-6 h-6 text-white" strokeWidth={1.5} />,
              title: "Smart Handoff",
              desc: "Seamlessly transfer from AI to human agents with context preservation.",
            },
            {
              icon: <Lock className="w-6 h-6 text-white" strokeWidth={1.5} />,
              title: "AI Security",
              desc: "Protect your data with AI-enhanced security monitoring and threat detection.",
            },
            {
              icon: <Cpu className="w-6 h-6 text-white" strokeWidth={1.5} />,
              title: "Custom AI Models",
              desc: "Train and deploy custom AI models tailored to your specific business needs.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <FeatureCard icon={feature.icon} title={feature.title} description={feature.desc} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Who Uses A.G.V.I.O.N Section - Redesigned */}
      <section id="use-cases" ref={useCasesRef} className="section-gradient py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2
              className="font-conthrax text-4xl md:text-5xl font-bold mb-6 text-gradient"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              Who Uses A.G.V.I.O.N AI?
            </motion.h2>
            <motion.p
              className="font-body text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Businesses across industries use A.G.V.I.O.N to automate conversations, engage customers, and streamline
              operations with intelligent AI agents.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "E-commerce",
                desc: "Automate product inquiries, order tracking, and customer support with AI-powered shopping assistants.",
                features: ["AI product recommendations", "Smart order tracking", "Automated return processing"],
              },
              {
                icon: Building2,
                title: "Agencies",
                desc: "Manage AI agents for multiple clients with white-label solutions and intelligent automation workflows.",
                features: ["Multi-client AI management", "White-label AI solutions", "Intelligent dashboard analytics"],
              },
              {
                icon: Laptop,
                title: "SaaS Companies",
                desc: "Onboard users and provide instant support with AI agents that understand your product ecosystem.",
                features: ["AI-powered onboarding", "Smart feature tutorials", "Intelligent technical support"],
              },
              {
                icon: Stethoscope,
                title: "Healthcare & Services",
                desc: "Book appointments and provide information with HIPAA-compliant AI agents for healthcare providers.",
                features: ["AI appointment scheduling", "Smart patient follow-ups", "Intelligent medical information"],
              },
              {
                icon: Factory,
                title: "Enterprise Teams",
                desc: "Centralize communications with enterprise-grade AI agents across departments and channels.",
                features: [
                  "Cross-department AI automation",
                  "Secure intelligent data handling",
                  "Custom AI integrations",
                ],
              },
              {
                icon: GraduationCap,
                title: "Education",
                desc: "Support students and automate administrative processes with intelligent educational AI assistants.",
                features: ["AI student enrollment", "Smart course information", "Intelligent administrative support"],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <UseCaseCard
                  icon={useCase.icon}
                  title={useCase.title}
                  description={useCase.desc}
                  features={useCase.features}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Redesigned */}
      <section id="benefits" ref={benefitsRef} className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="font-conthrax text-4xl md:text-5xl font-bold mb-6 text-gradient"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: benefitsInView ? 1 : 0, y: benefitsInView ? 0 : 20 }}
            transition={{ duration: 0.6 }}
          >
            AI-Powered Benefits
          </motion.h2>
          <motion.p
            className="font-body text-xl text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: benefitsInView ? 1 : 0, y: benefitsInView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A.G.V.I.O.N helps businesses save time, reduce costs, and improve customer experiences through intelligent
            AI automation that learns and adapts to your business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Clock,
              title: "AI-Powered Time Savings",
              desc: "Automate repetitive tasks with intelligent AI agents that learn from interactions and continuously improve efficiency.",
            },
            {
              icon: Users2,
              title: "Enhanced Customer Engagement",
              desc: "Provide instant, personalized responses with AI that understands context and customer preferences.",
            },
            {
              icon: TrendingUp,
              title: "Intelligent Lead Conversion",
              desc: "Qualify leads and guide prospects through sales funnels with AI-powered conversation flows.",
            },
            {
              icon: Globe2,
              title: "24/7 AI Support",
              desc: "Provide round-the-clock intelligent assistance with AI agents that never sleep and continuously learn.",
            },
            {
              icon: CheckCheck,
              title: "AI Quality Assurance",
              desc: "Ensure consistent, accurate responses with AI systems designed for reliability and continuous improvement.",
            },
            {
              icon: Scales,
              title: "Smart Scaling",
              desc: "Handle growing volumes of interactions with AI that scales intelligently without proportional cost increases.",
            },
          ].map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: benefitsInView ? 1 : 0, x: benefitsInView ? 0 : index % 2 === 0 ? -20 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <BenefitCard icon={benefit.icon} title={benefit.title} description={benefit.desc} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Waiting List Section */}
      <WaitingListSection />

      {/* CTA Section */}
      <section id="contact" className="container mx-auto py-24 px-4">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 card-gradient rounded-2xl overflow-hidden glow-effect"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="p-12 flex flex-col justify-center">
            <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-4 text-gradient">
              Build the Future with AI
            </h2>
            <p className="font-body text-gray-300 mb-8 leading-relaxed text-lg">
              Join the AI revolution and be among the first to experience the next generation of intelligent automation
              with A.G.V.I.O.N.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-gradient-to-r from-teal-600 to-blue-500 hover:from-teal-500 hover:to-blue-400 text-white group glow-effect">
                <Sparkles className="mr-2 h-5 w-5"
                onClick={() => {
                  const element = document.querySelector("#waiting-list")
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth",
                    })
                  }
                }}
                 />
                Join AI Waitlist
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </motion.div>
          </div>

          <div className="p-12 flex flex-col justify-center gap-6">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Academy",
                desc: "Learn to build better AI agents with our comprehensive guides and tutorials.",
              },
              {
                icon: <Bot className="w-6 h-6" />,
                title: "Request AI Demo",
                desc: "Schedule a personalized demo to see how A.G.V.I.O.N AI can transform your business.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center justify-between p-4 border border-gray-700/50 rounded-xl hover:bg-teal-500/5 hover:border-teal-500/30 transition-all duration-300 group cursor-pointer"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-teal-400 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div>
                    <h3 className="font-medium font-body text-white group-hover:text-teal-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 font-body">{item.desc}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-teal-400 transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Status Bar */}
      <motion.div
        className="border-t border-gray-800/50 py-3 bg-gradient-to-r from-black via-gray-900 to-black"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-green-400 font-ui">
              <motion.span
                className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              ></motion.span>
              AI Revolution Coming Soon
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-400 font-ui">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-teal-400" strokeWidth={1.5} />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-teal-400" strokeWidth={1.5} />
                <span>Enterprise AI Ready</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-teal-400" strokeWidth={1.5} />
                <span>SOC 2 Certified</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
