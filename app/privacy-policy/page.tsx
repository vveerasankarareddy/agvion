"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPolicy() {
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
              <h1 className="font-conthrax text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
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
                  At Agvion, we respect your privacy and are committed to protecting your personal data. This Privacy
                  Policy explains how we collect, use, and safeguard your information when you use our Service.
                </p>
              </div>
            </motion.section>

            {/* Information We Collect */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">2. Information We Collect</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>We collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li className="border-l-4 border-red-500 pl-3">
                    <strong>Account Information:</strong> Name, email address, company name, and billing details.
                  </li>
                  <li>
                    <strong>Chat and Workflow Data:</strong> Chat logs, interaction data, and workflow configurations.
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about how you use the Service, such as features accessed
                    and time spent.
                  </li>
                  <li>
                    <strong>Third-Party Platform Data:</strong> Data from integrated messaging platforms (e.g.,
                    Facebook, Instagram), with your authorization.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* How We Collect Information */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">3. How We Collect Information</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>We collect information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Directly from you when you create an account or use the Service.</li>
                  <li>Automatically through cookies and similar technologies.</li>
                  <li>From third-party messaging platforms, with your consent.</li>
                </ul>
              </div>
            </motion.section>

            {/* Use of Information */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">4. Use of Information</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve the Service.</li>
                  <li className="border-l-4 border-red-500 pl-3">
                    Personalize your experience and communicate with you.
                  </li>
                  <li>Analyze usage patterns and performance.</li>
                  <li>Comply with legal obligations.</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Storage and Security */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">5. Data Storage and Security</h2>
              <div className="font-body text-gray-300 space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Your data is stored on secure servers with encryption and role-based access controls.</li>
                    <li>
                      We retain data only as long as necessary for the purposes described in this Policy (e.g., chat
                      logs are retained for 12 months for quality assurance).
                    </li>
                    <li>
                      Audit logs are maintained for security and compliance purposes and are accessible only to
                      authorized personnel.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Sharing of Information */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">6. Sharing of Information</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>We share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Integrated messaging platforms, as necessary to provide the Service.</li>
                  <li>Service providers (e.g., hosting, analytics) under strict confidentiality agreements.</li>
                  <li>Legal authorities, if required by law.</li>
                </ul>
                <p className="font-medium text-red-400 border-b border-red-500 pb-2 mt-4">
                  We do not sell your personal information to third parties.
                </p>
              </div>
            </motion.section>

            {/* Your Rights and Choices */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">7. Your Rights and Choices</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have the right to access, correct, delete, or port your data.</li>
                  <li>To exercise these rights, contact us at privacy@agvion.com.</li>
                  <li>Under GDPR, you may also have additional rights, such as the right to object to processing.</li>
                  <li>
                    California residents have specific rights under CCPA, including the right to opt-out of data sales
                    (note: we do not sell your data).
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Cookies and Tracking Technologies */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">8. Cookies and Tracking Technologies</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We use essential cookies for the operation of the Service and non-essential cookies for analytics.
                  </li>
                  <li>
                    You can manage your cookie preferences through your browser settings or our cookie consent tool.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Compliance with Laws */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">9. Compliance with Laws</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>We comply with GDPR, CCPA, and other applicable data protection laws.</li>
                  <li>
                    For inquiries related to data protection, contact our Data Protection Officer at dpo@agvion.com.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* International Data Transfers */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">10. International Data Transfers</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Your data may be transferred to and processed in countries outside your jurisdiction.</li>
                  <li>
                    We ensure that such transfers comply with applicable laws, using mechanisms like Standard
                    Contractual Clauses.
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* AI Training */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">11. AI Training</h2>
              <div className="font-body text-gray-300 space-y-4">
                <div className="bg-gray-800 border-l-4 border-red-500 rounded-r-lg p-4">
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We may use aggregated and anonymized data to train and improve our AI models.</li>
                    <li>This data does not identify individual users.</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Changes to This Policy */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">12. Changes to This Policy</h2>
              <div className="font-body text-gray-300 space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>We may update this Policy from time to time.</li>
                  <li>We will notify you of significant changes via email or through the Service.</li>
                </ul>
              </div>
            </motion.section>

            {/* Contact Us */}
            <motion.section
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <h2 className="font-conthrax text-2xl font-bold mb-4">13. Contact Us</h2>
              <div className="font-body text-gray-300 space-y-4">
                <p>
                  For questions or concerns, please contact us at{" "}
                  <a href="mailto:privacy@agvion.com" className="text-teal-400 hover:underline">
                    privacy@agvion.com
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
