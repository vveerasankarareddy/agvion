"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"

const CommunitySection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const testimonials = [
    {
      username: "@SarahM",
      content:
        "Agvion has transformed how we handle customer inquiries. The visual workflow builder makes it so easy to create complex conversation flows without any coding.",
    },
    {
      username: "@DavidT",
      content:
        "The multi-channel support is a game-changer. We can build once and deploy across WhatsApp, Facebook, and Instagram, reaching our customers wherever they are.",
    },
    {
      username: "@JenniferL",
      content:
        "Agvion's integration capabilities have allowed us to connect our chatbot with our CRM and appointment booking system, creating a seamless experience for our customers.",
    },
    {
      username: "@MichaelR",
      content:
        "As an e-commerce business, Agvion has helped us automate product inquiries and order tracking, freeing up our team to focus on more complex customer needs.",
    },
    {
      username: "@RobertK",
      content:
        "The analytics dashboard gives us valuable insights into customer interactions, helping us continuously improve our chatbot's performance and effectiveness.",
    },
    {
      username: "@AmandaJ",
      content:
        "Agvion's AI capabilities are impressive. Our chatbot can understand natural language queries and provide helpful responses, making our customers feel understood.",
    },
    {
      username: "@ThomasP",
      content:
        "The seamless handoff from bot to human agent has been crucial for our support team. When conversations get complex, our agents can take over without any disruption.",
    },
  ]

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-teal-400">
              <path
                d="M12 10C14.2091 10 16 8.20914 16 6C16 3.79086 14.2091 2 12 2C9.79086 2 8 3.79086 8 6C8 8.20914 9.79086 10 12 10Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12H2C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-4xl font-bold mb-4">Join the fastest growing chatbot community</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A supportive network of automation experts that share ideas, troubleshoot issues, and foster collaboration.
        </p>

        <div className="mt-8">
          <Button variant="outline" className="bg-gray-900 border-gray-700 text-white hover:bg-gray-800">
            <svg viewBox="0 0 24 24" className="w-4 h-4 mr-2">
              <path
                d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"
                fill="currentColor"
              />
            </svg>
            Join our Discord
          </Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 * idx }}
            className="bg-gray-900/30 p-4 rounded-xl border border-gray-800"
          >
            <div className="mb-2 font-medium text-gray-300">{testimonial.username}</div>
            <p className="text-sm text-gray-400">{testimonial.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default CommunitySection
