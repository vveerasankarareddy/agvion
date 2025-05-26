"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Image from "next/image"

const TestimonialsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })
  const controls = useAnimation()
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "E-commerce Manager",
      company: "StyleBoutique",
      quote:
        "A.G.V.I.O.N has transformed how we handle customer inquiries. Our response time has decreased by 80% and customer satisfaction has increased significantly.",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "TechSolutions Inc.",
      quote:
        "The visual workflow builder is incredibly intuitive. We were able to create complex conversation flows without any coding knowledge in just a few days.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Jessica Martinez",
      role: "Customer Support Lead",
      company: "HealthPlus",
      quote:
        "Being able to automate appointment bookings across multiple channels has been a game-changer for our healthcare practice. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "David Wilson",
      role: "Marketing Director",
      company: "GrowthLabs",
      quote:
        "The analytics dashboard gives us valuable insights into customer interactions, helping us continuously improve our chatbot's performance.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "InnovateX",
      quote:
        "A.G.V.I.O.N's integration capabilities have allowed us to connect our chatbot with our CRM and appointment booking system seamlessly.",
      avatar:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
    {
      name: "Robert Kim",
      role: "Customer Experience Lead",
      company: "TechRetail",
      quote:
        "As an e-commerce business, A.G.V.I.O.N has helped us automate product inquiries and order tracking, freeing up our team for complex customer needs.",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    },
  ]

  const logos = [
    { name: "TechCorp", logo: "/placeholder.svg?height=40&width=120" },
    { name: "Innovate Inc", logo: "/placeholder.svg?height=40&width=120" },
    { name: "FutureTech", logo: "/placeholder.svg?height=40&width=120" },
    { name: "GlobalSoft", logo: "/placeholder.svg?height=40&width=120" },
    { name: "NextGen", logo: "/placeholder.svg?height=40&width=120" },
    { name: "SmartSolutions", logo: "/placeholder.svg?height=40&width=120" },
  ]

  // Duplicate testimonials for continuous scrolling effect
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            hidden: { opacity: 0, y: 20 },
          }}
          className="text-center"
        >
          <h2 className="font-conthrax text-4xl md:text-5xl font-bold mb-6">Trusted by Innovative Teams</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what our early access customers are saying about A.G.V.I.O.N.
          </p>
        </motion.div>
      </div>

      <div
        className="relative w-full overflow-hidden py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex ${isPaused ? "" : "testimonial-scroll"}`}
          style={{
            width: `${allTestimonials.length * 400}px`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {allTestimonials.map((testimonial, idx) => (
            <div key={idx} className="w-[350px] flex-shrink-0 mx-6">
              <div className="bg-gray-900/30 p-6 rounded-xl border border-gray-800 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {logos.map((company, idx) => (
            <div key={idx} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                width={120}
                height={40}
                className="opacity-50 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
