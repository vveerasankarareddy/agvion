"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  Zap,
  Layers,
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
    <div className="flex min-h-screen flex-col bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="container mx-auto px-4 pt-32 pb-20 relative">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: heroInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="inline-flex items-center bg-opacity-20 bg-teal-900 text-teal-400 px-3 py-1 rounded-full text-xs mb-6 font-ui">
              <span className="mr-2 inline-block w-2 h-2 bg-teal-400 rounded-full"></span>
              Launching soon - Join our waiting list for early access
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h1 className="font-conthrax text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              The Complete
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-600">
                Chatbot & Workflow
              </span>
              <br />
              Automation Platform
            </h1>

            <p className="font-body text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              A.G.V.I.O.N is a no-code/low-code platform for building intelligent chatbots and automation workflows
              across messaging channels like WhatsApp, Facebook, Instagram, and Telegram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-md relative overflow-hidden group font-ui"
              >
                Join Waiting List
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-gray-700 hover:bg-gray-800 font-ui">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            style={{ y }}
            className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-gray-800"
          >
            <div className="aspect-[16/9] bg-gray-900 relative">
              {/* Browser mockup header */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gray-800 flex items-center px-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="ml-4 text-xs text-gray-400 font-ui">A.G.V.I.O.N Studio</div>
              </div>

              {/* Platform UI mockup */}
              <div className="absolute top-8 left-0 right-0 bottom-0 p-4">
                <div className="grid grid-cols-12 h-full gap-2">
                  {/* Left sidebar */}
                  <div className="col-span-2 bg-gray-950 rounded-md p-2">
                    <div className="flex flex-col gap-2">
                      <div className="bg-teal-600/20 rounded-sm h-8 w-full flex items-center px-2">
                        <span className="text-xs text-teal-400 font-ui">Workflows</span>
                      </div>
                      <div className="bg-gray-900 rounded-sm h-8 w-full flex items-center px-2">
                        <span className="text-xs text-gray-400 font-ui">Main</span>
                      </div>
                      <div className="bg-gray-900 rounded-sm h-8 w-full flex items-center px-2">
                        <span className="text-xs text-gray-400 font-ui">Error</span>
                      </div>
                      <div className="bg-gray-900 rounded-sm h-8 w-full flex items-center px-2">
                        <span className="text-xs text-gray-400 font-ui">Timeout</span>
                      </div>
                      <div className="bg-gray-900 rounded-sm h-8 w-full flex items-center px-2">
                        <span className="text-xs text-gray-400 font-ui">Browse</span>
                      </div>
                      <div className="bg-gray-900 rounded-sm h-8 w-full flex items-center px-2">
                        <span className="text-xs text-gray-400 font-ui">Search</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle content - Workflow Builder */}
                  <div className="col-span-7 bg-gray-950 rounded-md p-2">
                    <div className="border border-gray-800 h-full rounded-md p-3 relative">
                      {/* Trigger Node */}
                      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2">
                        <div className="w-16 h-16 rounded-md bg-purple-600/20 flex items-center justify-center border border-purple-600/30">
                          <span className="text-xs text-white font-ui">Trigger</span>
                        </div>
                      </div>

                      {/* Connection line */}
                      <svg width="100" height="2" className="absolute top-1/2 left-1/4">
                        <line x1="0" y1="1" x2="100" y2="1" stroke="#ffffff" strokeWidth="1" strokeDasharray="4" />
                      </svg>

                      {/* Hello Message Node */}
                      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                        <div className="w-24 h-16 rounded-md bg-teal-600/20 flex flex-col items-center justify-center border border-teal-600/30 p-2">
                          <span className="text-xs text-white font-ui">Hello Message</span>
                          <div className="text-[8px] text-gray-400 text-center mt-1 font-ui">Send greeting to user</div>
                        </div>
                      </div>

                      {/* Simple instruction */}
                      <div className="absolute top-4 left-4 text-xs text-gray-400 font-ui">
                        Simple workflow: When triggered, send hello message
                      </div>
                    </div>
                  </div>

                  {/* Right panel */}
                  <div className="col-span-3 bg-gray-950 rounded-md p-2">
                    <div className="h-full bg-gray-900 rounded-md p-2">
                      <div className="p-2 rounded bg-teal-500/10 border border-teal-500/20 mb-2">
                        <div className="text-xs text-white font-ui">Chat Preview</div>
                      </div>

                      <div className="flex flex-col gap-2 mt-4">
                        <div className="bg-gray-800 rounded-md p-2 text-xs font-ui">
                          Hello! How can I assist you today?
                        </div>
                        <div className="bg-teal-600/20 rounded-md p-2 text-xs font-ui">
                          I'd like to book an appointment
                        </div>
                        <div className="bg-gray-800 rounded-md p-2 text-xs font-ui">
                          I'd be happy to help you book an appointment. What day works best for you?
                        </div>
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
      <section id="about" className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-6">What is A.G.V.I.O.N?</h2>
          <p className="font-body text-xl text-gray-400 leading-relaxed">
            A.G.V.I.O.N is a no-code/low-code platform that enables users to build, deploy, and manage intelligent
            chatbots and automation workflows. It combines a visual drag-and-drop builder, AI capabilities, and
            third-party integrations to simplify how businesses interact with their customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-conthrax text-2xl font-bold mb-4">Automate conversations with</h3>
            <div className="h-16 mb-6">
              <TypewriterEffect words={["WhatsApp", "Facebook Messenger", "Instagram", "Telegram", "Web Chat"]} />
            </div>
            <p className="font-body text-gray-400 mb-8 leading-relaxed">
              Deploy your chatbots across multiple messaging channels to reach your customers wherever they are.
              A.G.V.I.O.N makes it easy to build once and deploy everywhere.
            </p>
            <ul className="space-y-4">
              {[
                "No coding required",
                "Visual drag-and-drop builder",
                "AI-powered natural language understanding",
                "Seamless handoff to human agents",
                "Powerful analytics and insights",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="font-body">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
            <div className="p-1">
              <video className="w-full rounded-lg" autoPlay loop muted playsInline>
                <source src="/placeholder.svg?height=300&width=500" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section id="features" ref={featuresRef} className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-6">Key Features</h2>
          <p className="font-body text-xl text-gray-400 leading-relaxed">
            A.G.V.I.O.N provides everything you need to create powerful chatbots and automation workflows that engage
            customers and streamline operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <FeatureCard
              icon={<Layers className="w-6 h-6 text-white" strokeWidth={1.5} />}
              title="Visual Workflow Builder"
              description="Design automation logic without coding using our intuitive drag-and-drop interface."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FeatureCard
              icon={<Globe className="w-6 h-6 text-white" strokeWidth={1.5} />}
              title="Multi-Channel Messaging"
              description="Deploy bots on Facebook, Instagram, WhatsApp, and Telegram from a single platform."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FeatureCard
              icon={<Sparkles className="w-6 h-6 text-white" strokeWidth={1.5} />}
              title="AI/NLP Chat Engine"
              description="Understand and respond in natural language with our advanced AI engine."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-white" strokeWidth={1.5} />}
              title="Integration Hub"
              description="Connect to tools like CRMs, email, databases, and APIs to extend functionality."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <FeatureCard
              icon={<BarChart3 className="w-6 h-6 text-white" strokeWidth={1.5} />}
              title="Analytics Dashboard"
              description="Track engagement, conversions, and performance with detailed analytics."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FeatureCard
              icon={<Users className="w-6 h-6 text-white" strokeWidth={1.5} />}
              title="Role-Based Access Control"
              description="Manage permissions for teams with customizable access levels."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <FeatureCard
              icon={<MessageSquare className="w-6 h-6 text-white" strokeWidth={1.5} />}
              title="Live Chat Support"
              description="Seamlessly hand off from bot to human agents when needed."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <FeatureCard
              icon={<Lock className="w-6 h-6 text-white" strokeWidth={1.5} />}
              title="Enterprise Security"
              description="Keep your data secure with enterprise-grade security features."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <FeatureCard
              icon={<Zap className="w-6 h-6 text-white" strokeWidth={1.5} />}
              title="Add-ons & Customization"
              description="Extend functionality with add-ons and custom integrations."
            />
          </motion.div>
        </div>
      </section>

      {/* Who Uses A.G.V.I.O.N Section - Redesigned */}
      <section
        id="use-cases"
        ref={useCasesRef}
        className="container mx-auto px-4 py-24 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-6">Who Uses A.G.V.I.O.N?</h2>
          <p className="font-body text-xl text-gray-400 leading-relaxed">
            Businesses across industries use A.G.V.I.O.N to automate conversations, engage customers, and streamline
            operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <UseCaseCard
              icon={ShoppingCart}
              title="E-commerce"
              description="Automate product inquiries, order tracking, and customer support to improve shopping experiences and reduce response times."
              features={["Product recommendations", "Order status updates", "Return processing"]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <UseCaseCard
              icon={Building2}
              title="Agencies"
              description="Manage chatbots for multiple clients from a single platform with white-label options and customized branding opportunities."
              features={["Client management", "White-label solutions", "Multi-account dashboard"]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <UseCaseCard
              icon={Laptop}
              title="SaaS Companies"
              description="Onboard users, provide instant support, and guide customers through your product with intelligent conversational interfaces."
              features={["User onboarding", "Feature tutorials", "Technical support"]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <UseCaseCard
              icon={Stethoscope}
              title="Healthcare & Services"
              description="Book appointments, handle FAQs, and provide information about services and procedures while maintaining privacy compliance."
              features={["Appointment scheduling", "Patient follow-ups", "Medical information"]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <UseCaseCard
              icon={Factory}
              title="Enterprise Teams"
              description="Centralize communications and automate workflows across departments and channels for improved efficiency and coordination."
              features={["Cross-department automation", "Secure data handling", "Custom integrations"]}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <UseCaseCard
              icon={GraduationCap}
              title="Education"
              description="Support students, answer common questions, and automate administrative processes to enhance the learning experience."
              features={["Student enrollment", "Course information", "Administrative support"]}
            />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Redesigned */}
      <section id="benefits" ref={benefitsRef} className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-6">Benefits</h2>
          <p className="font-body text-xl text-gray-400 leading-relaxed">
            A.G.V.I.O.N helps businesses save time, reduce costs, and improve customer experiences through intelligent
            automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: benefitsInView ? 1 : 0, x: benefitsInView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BenefitCard
              icon={Clock}
              title="Save Time & Reduce Manual Workload"
              description="Automate repetitive tasks and customer interactions to free up your team for more valuable work and strategic initiatives."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: benefitsInView ? 1 : 0, x: benefitsInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BenefitCard
              icon={Users2}
              title="Improve Customer Engagement"
              description="Provide instant responses and personalized experiences to keep customers satisfied and engaged throughout their journey."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: benefitsInView ? 1 : 0, x: benefitsInView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <BenefitCard
              icon={TrendingUp}
              title="Increase Lead Capture & Conversion"
              description="Qualify leads, answer questions, and guide prospects through your sales funnel automatically with intelligent conversation flows."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: benefitsInView ? 1 : 0, x: benefitsInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <BenefitCard
              icon={Globe2}
              title="Enable 24/7 Customer Support"
              description="Provide round-the-clock assistance to customers without increasing staffing costs or compromising on quality."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: benefitsInView ? 1 : 0, x: benefitsInView ? 0 : -20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <BenefitCard
              icon={CheckCheck}
              title="Reduce Human Error"
              description="Ensure consistent, accurate responses and processes with automated workflows designed for reliability and precision."
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: benefitsInView ? 1 : 0, x: benefitsInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <BenefitCard
              icon={Scales}
              title="Scale Operations Efficiently"
              description="Handle growing volumes of customer interactions without proportionally increasing costs while maintaining service quality."
            />
          </motion.div>
        </div>
      </section>

      {/* Waiting List Section (Replacing Pricing) */}
      <WaitingListSection />

      {/* CTA Section */}
      <section id="contact" className="container mx-auto py-24 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
          <div className="p-12 flex flex-col justify-center">
            <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-4">Build Better with A.G.V.I.O.N</h2>
            <p className="font-body text-gray-400 mb-8 leading-relaxed">
              Join the waiting list to be among the first to experience A.G.V.I.O.N.
            </p>

            <div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white group font-ui">
                Join Waiting List
                <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
          </div>

          <div className="p-12 flex flex-col justify-center gap-8">
            <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:bg-gray-800/30 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
                    <path
                      d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium font-body">Learn more at A.G.V.I.O.N Academy</h3>
                  <p className="text-sm text-gray-400 font-body">
                    Build chatbots better and faster with our curated collection of courses, guides, and tutorials.
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
            </div>

            <div className="flex items-center justify-between p-4 border border-gray-800 rounded-lg hover:bg-gray-800/30 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="text-white">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={1.5}>
                    <path
                      d="M15.5 7.5C15.5 9.433 13.933 11 12 11C10.067 11 8.5 9.433 8.5 7.5C8.5 5.567 10.067 4 12 4C13.933 4 15.5 5.567 15.5 7.5Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium font-body">Request a Demo</h3>
                  <p className="text-sm text-gray-400 font-body">
                    Schedule a personalized demo to see how A.G.V.I.O.N can help your business.
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-gray-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Status Bar */}
      <div className="border-t border-gray-800 py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-green-400 font-ui">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Coming Soon
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-400 font-ui">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" strokeWidth={1.5} />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" strokeWidth={1.5} />
                <span>Enterprise Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
