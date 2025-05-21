"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="font-body">Back to Home</span>
            </Link>
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="font-conthrax text-4xl md:text-5xl font-bold mb-8">Terms and Conditions</h1>
              <p className="font-body text-gray-400 mb-12 text-lg">Last Updated: May 21, 2025</p>
            </motion.div>

            {/* Introduction */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">1. Introduction</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>
                  Welcome to Agvion. These Terms and Conditions ("Terms") govern your access to and use of the Agvion
                  platform ("Service"). By creating an account or using the Service, you agree to be bound by these
                  Terms. If you do not agree, please do not use the Service.
                </p>
              </div>
            </motion.section>

            {/* Definitions */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">2. Definitions</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>"Agvion," "we," "us," or "our" refers to Agvion, the provider of the Service.</li>
                  <li>"User," "you," or "your" refers to the individual or entity using the Service.</li>
                  <li>"Service" refers to the Agvion platform, including all features, tools, and integrations.</li>
                  <li>
                    "User Content" refers to any workflows, chatbot scripts, chat logs, or other materials you create or
                    upload to the Service.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Service Description */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">3. Service Description</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>
                  Agvion provides an AI-powered chatbot and workflow automation platform designed to help businesses
                  automate customer interactions on messaging platforms such as Facebook, Instagram, WhatsApp, and
                  Telegram. Key features include:
                </p>
                <div className="bg-gray-900/50 p-4 rounded-lg">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>A visual drag-and-drop editor for building chatbots and automating workflows.</li>
                    <li>Integration with multiple chat channels to centralize communication.</li>
                    <li>
                      Secure, scalable backend architecture managing AI responses, user sessions, and data storage.
                    </li>
                    <li>Role-based access control, notifications, audit logging, and live chat support.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Account Registration and Management */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">4. Account Registration and Management</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li className="border-l-4 border-red-500 pl-3">
                    You must create an account to use the Service by providing accurate and complete information.
                  </li>
                  <li>
                    You are responsible for maintaining the confidentiality of your account credentials and for all
                    activities under your account.
                  </li>
                  <li>Agvion reserves the right to suspend or terminate accounts for violations of these Terms.</li>
                </ul>
              </div>
            </motion.section>

            {/* User Obligations */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">5. User Obligations</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>You agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Use the Service only for lawful purposes and in compliance with all applicable laws and regulations.
                  </li>
                  <li>
                    Not use the Service to send spam, unsolicited messages, or engage in fraudulent or deceptive
                    practices.
                  </li>
                  <li>Not upload malicious code or violate third-party rights.</li>
                  <li>
                    Ensure your use of integrated messaging platforms complies with their respective terms and
                    conditions.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Payment Terms */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">6. Payment Terms</h2>
              <div className="font-body text-gray-300 space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Subscription fees are billed in advance on a monthly or annual basis, as selected by you.</li>
                    <li>Payments are non-refundable except as required by law.</li>
                    <li>If payment is not received by the due date, Agvion may suspend your access to the Service.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">7. Intellectual Property</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Agvion retains all rights to the Service, including its software, trademarks, and documentation.
                  </li>
                  <li>
                    You retain ownership of your User Content but grant Agvion a worldwide, non-exclusive, royalty-free
                    license to use, reproduce, modify, and display such content solely for the purpose of providing and
                    improving the Service.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Data Usage and Privacy */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">8. Data Usage and Privacy</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>
                  Your use of the Service is subject to our{" "}
                  <Link href="/privacy-policy" className="text-teal-400 hover:underline">
                    Privacy Policy
                  </Link>
                  , which details how we collect, use, and protect your data.
                </p>
              </div>
            </motion.section>

            {/* Third-Party Integrations */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">9. Third-Party Integrations</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2 border-l-4 border-red-500 pl-6 py-2">
                  <li>
                    The Service integrates with third-party messaging platforms (e.g., Facebook, Instagram, WhatsApp,
                    Telegram).
                  </li>
                  <li>You are responsible for complying with the terms and conditions of those platforms.</li>
                  <li>Agvion is not liable for any issues arising from your use of third-party services.</li>
                </ul>
              </div>
            </motion.section>

            {/* Security and Compliance */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">10. Security and Compliance</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Agvion implements industry-standard security measures, including encryption and access controls, to
                    protect your data.
                  </li>
                  <li>We comply with applicable data protection laws, including GDPR and CCPA.</li>
                  <li>
                    If you are a data controller under GDPR, a Data Processing Agreement (DPA) is available upon
                    request.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* AI-Powered Features */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">11. AI-Powered Features</h2>
              <div className="font-body text-gray-300 space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The Service uses artificial intelligence to generate responses and automate workflows.</li>
                    <li className="text-red-400 font-medium">
                      While we strive for accuracy, we do not guarantee the correctness or appropriateness of
                      AI-generated content.
                    </li>
                    <li>You are responsible for reviewing and approving any automated actions or responses.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Disclaimers and Limitation of Liability */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">12. Disclaimers and Limitation of Liability</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>The Service is provided "as is" without warranties of any kind.</li>
                  <li>Agvion's liability is limited to the maximum extent permitted by law.</li>
                  <li>We are not liable for any indirect, incidental, or consequential damages.</li>
                </ul>
              </div>
            </motion.section>

            {/* Indemnification */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">13. Indemnification</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>
                  You agree to indemnify and hold Agvion harmless from any claims, damages, or losses arising from your
                  use of the Service or violation of these Terms.
                </p>
              </div>
            </motion.section>

            {/* Dispute Resolution */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">14. Dispute Resolution</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>
                  Any disputes arising from these Terms shall be resolved through binding arbitration in San Francisco,
                  United States, in accordance with the rules of the American Arbitration Association.
                </p>
              </div>
            </motion.section>

            {/* Modifications to the Terms */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">15. Modifications to the Terms</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>We may update these Terms from time to time.</li>
                  <li>
                    We will notify you of changes by posting the updated Terms on our website and, for significant
                    changes, via email.
                  </li>
                  <li>Your continued use of the Service constitutes acceptance of the updated Terms.</li>
                </ul>
              </div>
            </motion.section>

            {/* Contact Us */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">16. Contact Us</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>
                  For questions or concerns, please contact us at{" "}
                  <a href="mailto:legal@agvion.com" className="text-teal-400 hover:underline">
                    legal@agvion.com
                  </a>
                  .
                </p>
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
