"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, HelpCircle, X } from "lucide-react"

const PricingSection = () => {
  const [annual, setAnnual] = useState(true)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses just getting started with chatbots.",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "1 chatbot",
        "2 channels",
        "Visual workflow builder",
        "Basic AI capabilities",
        "500 conversations/month",
        "Email support",
        "Basic analytics",
      ],
      limitations: ["No custom integrations", "No team collaboration", "Limited templates"],
    },
    {
      name: "Professional",
      description: "For growing businesses that need more advanced features and capacity.",
      monthlyPrice: 79,
      annualPrice: 69,
      popular: true,
      features: [
        "5 chatbots",
        "All channels",
        "Advanced AI capabilities",
        "5,000 conversations/month",
        "Custom integrations",
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
        "Workflow templates",
      ],
      limitations: ["Limited role-based access"],
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs and high volume.",
      custom: true,
      features: [
        "Unlimited chatbots",
        "All channels",
        "Advanced AI capabilities",
        "Unlimited conversations",
        "Custom integrations",
        "Team collaboration",
        "Advanced analytics",
        "Dedicated support",
        "Custom templates",
        "Role-based access control",
        "SLA guarantees",
        "Custom training",
        "White labeling",
      ],
    },
  ]

  return (
    <section ref={sectionRef} id="pricing" className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Pricing</h2>
        <p className="text-xl text-gray-400 mb-8">
          Choose the plan that's right for your business. All plans include a 14-day free trial.
        </p>

        <div className="flex items-center justify-center mb-8">
          <div className="bg-gray-900 p-1 rounded-full flex">
            <button
              className={`px-4 py-2 rounded-full text-sm ${!annual ? "bg-teal-600 text-white" : "text-gray-400"}`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm ${annual ? "bg-teal-600 text-white" : "text-gray-400"}`}
              onClick={() => setAnnual(true)}
            >
              Annual <span className="text-xs opacity-75">Save 15%</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className={`bg-gray-900/30 border ${
              plan.popular ? "border-teal-600" : "border-gray-800"
            } rounded-xl overflow-hidden relative`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                MOST POPULAR
              </div>
            )}

            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6 h-12">{plan.description}</p>

              {plan.custom ? (
                <div className="text-3xl font-bold mb-6">Custom Pricing</div>
              ) : (
                <div className="mb-6">
                  <div className="text-3xl font-bold">
                    ${annual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="text-lg text-gray-400 font-normal">/mo</span>
                  </div>
                  {annual && plan.annualPrice && (
                    <div className="text-sm text-gray-400">billed annually (${plan.annualPrice * 12}/year)</div>
                  )}
                </div>
              )}

              <Button
                className={`w-full mb-8 ${
                  plan.popular
                    ? "bg-teal-600 hover:bg-teal-700"
                    : plan.custom
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {plan.custom ? "Contact Sales" : "Join Waiting List"}
              </Button>

              <div className="space-y-4">
                <div className="font-medium">Includes:</div>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations && (
                  <>
                    <div className="font-medium mt-6">Limitations:</div>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, i) => (
                        <li key={i} className="flex items-start">
                          <X className="w-5 h-5 text-gray-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 bg-gray-900/30 border border-gray-800 rounded-xl p-8">
        <div className="flex items-start gap-4">
          <HelpCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
            <p className="text-gray-400 mb-4">
              We offer custom solutions for businesses with specific requirements. Contact our sales team to discuss
              your needs.
            </p>
            <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
