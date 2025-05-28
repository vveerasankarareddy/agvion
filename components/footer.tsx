"use client"

import Link from "next/link"
import Image from "next/image"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section-white border-t border-gray-200 pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <Image src="/images/agvion-logo.png" alt="A.G.V.I.O.N Logo" width={32} height={32} className="w-8 h-8 flex-shrink-0" />
              <span className="font-conthrax text-lg sm:text-xl font-bold">A.G.V.I.O.N</span>
            </div>

            <p className="font-body text-gray-600 mb-4 sm:mb-6 max-w-md leading-relaxed text-sm sm:text-base">
              The future of AI-powered automation. Build intelligent agents that transform how businesses communicate
              with customers across all channels.
            </p>

            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-orange-600 transition-colors p-1">
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-600 transition-colors p-1">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-600 transition-colors p-1">
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-600 transition-colors p-1">
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          {/* Platform and Company Links - Side by side on mobile only */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2 grid grid-cols-2 gap-4 sm:gap-8 lg:gap-0 lg:grid-cols-2">
            {/* Platform Links */}
            <div>
              <h3 className="font-semibold text-black mb-3 sm:mb-4 text-sm sm:text-base">Platform</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="#features" className="text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base block py-1">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#use-cases" className="text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base block py-1">
                    Use Cases
                  </Link>
                </li>
                <li>
                  <Link href="#benefits" className="text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base block py-1">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base block py-1">
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-black mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base block py-1">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base block py-1">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base block py-1">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base block py-1">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-orange-600 transition-colors text-sm sm:text-base block py-1">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-between sm:items-center sm:space-y-0">
            <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} A.G.V.I.O.N. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
              <Link href="/privacy-policy" className="hover:text-orange-600 transition-colors whitespace-nowrap">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-orange-600 transition-colors whitespace-nowrap">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-orange-600 transition-colors whitespace-nowrap">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer