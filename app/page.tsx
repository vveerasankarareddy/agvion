"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  ArrowRight,
  MessageSquare,
  Zap,
  BarChart3,
  Lock,
  Globe,
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
  Sparkles,
  Play,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WaitingListSection from "@/components/waiting-list-section"
import FeatureCard from "@/components/feature-card"
import UseCaseCard from "@/components/use-case-card"
import BenefitCard from "@/components/benefit-card"
import PlatformShowcase from "@/components/platform-showcase"

export default function Home() {
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const featuresRef = useRef(null)
  const useCasesRef = useRef(null)
  const benefitsRef = useRef(null)

  const heroInView = useInView(heroRef, { once: true })
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 })
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 })
  const useCasesInView = useInView(useCasesRef, { once: true, amount: 0.2 })
  const benefitsInView = useInView(benefitsRef, { once: true, amount: 0.2 })

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="section-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 20 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="status-indicator">
                <div className="status-dot"></div>
                Launching Soon - Join Early Access
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: heroInView ? 1 : 0, y: heroInView ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="hero-title font-conthrax text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                The Future of
                <br />
                <span className="orange-text">AI Agents</span> &
                <br />
                Automation
              </h1>

              <p className="font-body text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Build intelligent AI agents that automate conversations across WhatsApp, Facebook, Instagram, and
                Telegram with our no-code platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button
                  className="btn-primary px-8 py-4 text-lg rounded-lg font-medium"
                  onClick={() => scrollToSection("#waiting-list")}
                >
                  <Bot className="mr-2 h-5 w-5" />
                  Start Building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="btn-secondary px-8 py-4 text-lg rounded-lg font-medium">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </motion.div>

            {/* Hero Image/Demo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: heroInView ? 1 : 0, scale: heroInView ? 1 : 0.95 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative max-w-5xl mx-auto"
            >
              <div className="clean-card rounded-2xl overflow-hidden">
                <div className="aspect-[16/9] bg-gray-50 relative">
                  {/* Browser Header */}
                  <div className="absolute top-0 left-0 right-0 h-12 bg-gray-100 flex items-center px-4 border-b border-gray-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-sm text-gray-600 font-ui">A.G.V.I.O.N Studio</div>
                  </div>

                  {/* Platform UI */}
                  <div className="absolute top-12 left-0 right-0 bottom-0 p-6">
                    <div className="grid grid-cols-12 h-full gap-4">
                      {/* Sidebar */}
                      <div className="col-span-3 bg-white border border-gray-200 rounded-lg p-4">
                        <div className="space-y-3">
                          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 text-center">
                            <Bot className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                            <span className="text-sm font-medium text-orange-600">AI Workflows</span>
                          </div>
                          {["Main Flow", "Error Handler", "Timeout", "Browse"].map((item, i) => (
                            <div key={item} className="bg-gray-50 rounded-lg p-3 text-center">
                              <span className="text-xs text-gray-600">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Main Canvas */}
                      <div className="col-span-6 bg-white border border-gray-200 rounded-lg p-4">
                        <div className="h-full border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center relative">
                          {/* AI Nodes */}
                          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 -translate-x-1/2">
                            <div className="w-16 h-16 bg-orange-100 border-2 border-orange-300 rounded-lg flex items-center justify-center">
                              <Zap className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="text-xs text-center mt-1 text-gray-600">Trigger</div>
                          </div>

                          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                            <div className="w-20 h-16 bg-orange-100 border-2 border-orange-300 rounded-lg flex items-center justify-center">
                              <Brain className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="text-xs text-center mt-1 text-gray-600">AI Response</div>
                          </div>

                          {/* Connection Line */}
                          <div className="absolute top-1/2 left-1/4 w-24 h-0.5 bg-orange-300"></div>

                          <div className="text-center text-gray-500">
                            <Sparkles className="w-8 h-8 mx-auto mb-2 text-orange-400" />
                            <p className="text-sm">Visual AI Workflow Builder</p>
                          </div>
                        </div>
                      </div>

                      {/* Chat Preview */}
                      <div className="col-span-3 bg-white border border-gray-200 rounded-lg p-4">
                        <div className="bg-gray-50 rounded-lg p-3 mb-3 text-center">
                          <MessageSquare className="w-4 h-4 text-gray-600 mx-auto mb-1" />
                          <span className="text-xs text-gray-600">Live Preview</span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-gray-100 rounded-lg p-2 text-xs">Hello! How can I help?</div>
                          <div className="bg-orange-100 rounded-lg p-2 text-xs text-right">Book appointment</div>
                          <div className="bg-gray-100 rounded-lg p-2 text-xs">I'll help you schedule that!</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section with Platform Showcase */}
      <section id="about" ref={aboutRef} className="section-gray py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: aboutInView ? 1 : 0, y: aboutInView ? 0 : 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-6">What is A.G.V.I.O.N?</h2>
              <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A revolutionary no-code platform that enables businesses to build, deploy, and manage intelligent AI
                agents across multiple messaging channels.
              </p>
            </motion.div>

            <PlatformShowcase />
          </div>
        </div>
      </section>

      {/* Features Section */}
<section id="features" ref={featuresRef} className="section-white py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 30 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-6">Powerful AI Features</h2>
      <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Everything you need to create intelligent AI agents that engage customers and automate workflows.
      </p>
    </motion.div>
    
    {/* Mobile: Auto-scrolling with manual override, Desktop: Grid */}
    <div className="md:hidden">
      <div className="relative overflow-x-auto scrollbar-hide">
        <div 
          className="flex gap-6 pb-4 auto-scroll-container"
          style={{
            width: 'calc(280px * 12)', // 6 items * 2 for seamless loop
          }}
          onTouchStart={(e) => {
            e.currentTarget.style.animationPlayState = 'paused';
          }}
          onTouchEnd={(e) => {
            setTimeout(() => {
              e.currentTarget.style.animationPlayState = 'running';
            }, 3000); // Resume auto-scroll after 3 seconds of no interaction
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.animationPlayState = 'paused';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.animationPlayState = 'running';
          }}
        >
          {/* First set of cards */}
          {[
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Visual AI Builder",
              desc: "Design intelligent workflows with our intuitive drag-and-drop interface.",
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Multi-Channel Support",
              desc: "Deploy across WhatsApp, Facebook, Instagram, and Telegram simultaneously.",
            },
            {
              icon: <Sparkles className="w-6 h-6" />,
              title: "Advanced NLP",
              desc: "Understand natural language with state-of-the-art AI processing.",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Smart Integrations",
              desc: "Connect with CRMs, databases, and APIs seamlessly.",
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              title: "Real-time Analytics",
              desc: "Track performance and optimize with detailed insights.",
            },
            {
              icon: <Lock className="w-6 h-6" />,
              title: "Enterprise Security",
              desc: "Bank-level security with compliance and data protection.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-[280px] flex-shrink-0"
            >
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.desc}
              />
            </motion.div>
          ))}
          {/* Duplicate set for seamless loop */}
          {[
            {
              icon: <Brain className="w-6 h-6" />,
              title: "Visual AI Builder",
              desc: "Design intelligent workflows with our intuitive drag-and-drop interface.",
            },
            {
              icon: <Globe className="w-6 h-6" />,
              title: "Multi-Channel Support",
              desc: "Deploy across WhatsApp, Facebook, Instagram, and Telegram simultaneously.",
            },
            {
              icon: <Sparkles className="w-6 h-6" />,
              title: "Advanced NLP",
              desc: "Understand natural language with state-of-the-art AI processing.",
            },
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Smart Integrations",
              desc: "Connect with CRMs, databases, and APIs seamlessly.",
            },
            {
              icon: <BarChart3 className="w-6 h-6" />,
              title: "Real-time Analytics",
              desc: "Track performance and optimize with detailed insights.",
            },
            {
              icon: <Lock className="w-6 h-6" />,
              title: "Enterprise Security",
              desc: "Bank-level security with compliance and data protection.",
            },
          ].map((feature, index) => (
            <motion.div
              key={`duplicate-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-[280px] flex-shrink-0"
            >
              <FeatureCard 
                icon={feature.icon} 
                title={feature.title} 
                description={feature.desc}
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .auto-scroll-container {
          animation: slowScroll 40s linear infinite;
        }
        
        @keyframes slowScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>

    {/* Desktop: Grid layout */}
    <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: <Brain className="w-6 h-6" />,
          title: "Visual AI Builder",
          desc: "Design intelligent workflows with our intuitive drag-and-drop interface.",
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Multi-Channel Support",
          desc: "Deploy across WhatsApp, Facebook, Instagram, and Telegram simultaneously.",
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Advanced NLP",
          desc: "Understand natural language with state-of-the-art AI processing.",
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Smart Integrations",
          desc: "Connect with CRMs, databases, and APIs seamlessly.",
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Real-time Analytics",
          desc: "Track performance and optimize with detailed insights.",
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "Enterprise Security",
          desc: "Bank-level security with compliance and data protection.",
        },
      ].map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: featuresInView ? 1 : 0, y: featuresInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <FeatureCard 
            icon={feature.icon} 
            title={feature.title} 
            description={feature.desc}
          />
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Use Cases Section */}
      <section id="use-cases" ref={useCasesRef} className="section-light-orange py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-6">Who Uses A.G.V.I.O.N?</h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Businesses across industries trust A.G.V.I.O.N to automate conversations and streamline operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShoppingCart,
                title: "E-commerce",
                desc: "Automate product inquiries, order tracking, and customer support.",
                features: ["Product recommendations", "Order tracking", "Return processing"],
              },
              {
                icon: Building2,
                title: "Agencies",
                desc: "Manage multiple client chatbots with white-label solutions.",
                features: ["Multi-client management", "White-label options", "Centralized dashboard"],
              },
              {
                icon: Laptop,
                title: "SaaS Companies",
                desc: "Onboard users and provide instant technical support.",
                features: ["User onboarding", "Feature tutorials", "Technical support"],
              },
              {
                icon: Stethoscope,
                title: "Healthcare",
                desc: "Schedule appointments and provide patient information.",
                features: ["Appointment booking", "Patient follow-ups", "Health information"],
              },
              {
                icon: Factory,
                title: "Enterprise",
                desc: "Centralize communications across departments and channels.",
                features: ["Department automation", "Secure data handling", "Custom integrations"],
              },
              {
                icon: GraduationCap,
                title: "Education",
                desc: "Support students and automate administrative processes.",
                features: ["Student enrollment", "Course information", "Administrative support"],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: useCasesInView ? 1 : 0, y: useCasesInView ? 0 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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

      {/* Benefits Section */}
      <section id="benefits" ref={benefitsRef} className="section-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: benefitsInView ? 1 : 0, y: benefitsInView ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-6">Why Choose A.G.V.I.O.N?</h2>
            <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your business with AI-powered automation that saves time, reduces costs, and improves customer
              experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Clock,
                title: "Save Time & Resources",
                desc: "Automate repetitive tasks and free up your team for strategic work.",
              },
              {
                icon: Users2,
                title: "Enhance Customer Experience",
                desc: "Provide instant, personalized responses 24/7 across all channels.",
              },
              {
                icon: TrendingUp,
                title: "Increase Conversions",
                desc: "Guide prospects through optimized conversation flows that convert.",
              },
              {
                icon: Globe2,
                title: "Scale Globally",
                desc: "Handle unlimited conversations without increasing operational costs.",
              },
              {
                icon: CheckCheck,
                title: "Ensure Consistency",
                desc: "Deliver accurate, on-brand responses every time with AI precision.",
              },
              {
                icon: Scales,
                title: "Grow Efficiently",
                desc: "Scale your operations without proportional increases in overhead.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: benefitsInView ? 1 : 0, x: benefitsInView ? 0 : index % 2 === 0 ? -20 : 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BenefitCard icon={benefit.icon} title={benefit.title} description={benefit.desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waiting List Section */}
      <WaitingListSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
