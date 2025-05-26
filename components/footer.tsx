import Link from "next/link"
import Image from "next/image"
import { Github, Youtube, Twitter, Linkedin, DiscIcon as Discord } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 border-t border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center mb-6">
              <Image
                src="/images/agvion-logo.png"
                alt="A.G.V.I.O.N Logo"
                width={40}
                height={40}
                className="w-auto h-8 mr-3"
              />
              <span className="font-conthrax text-xl tracking-wider">A.G.V.I.O.N</span>
            </div>

            <p className="font-body text-gray-400 mb-6 max-w-md leading-relaxed">
              A.G.V.I.O.N is an AI-powered chatbot and workflow automation platform designed to help businesses automate
              conversations, engage customers, and streamline operations.
            </p>

            <div className="flex space-x-4 mb-8">
              <Link href="https://github.com/agvion" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="https://youtube.com/agvion" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="https://twitter.com/agvion" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link
                href="https://linkedin.com/company/agvion"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <Link href="https://discord.gg/agvion" className="text-gray-400 hover:text-white transition-colors">
                <Discord className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-conthrax uppercase mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white text-sm transition-colors font-body">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#use-cases" className="text-gray-400 hover:text-white text-sm transition-colors font-body">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-body">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-body">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-body">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-conthrax uppercase mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white text-sm transition-colors font-body">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-body">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors font-body">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#waiting-list"
                  className="text-gray-400 hover:text-white text-sm transition-colors font-body"
                >
                  Join Waiting List
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-400 hover:text-white text-sm transition-colors font-body"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-400 hover:text-white text-sm transition-colors font-body"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0 font-ui">
            © {currentYear} A.G.V.I.O.N. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors font-ui"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors font-ui"
            >
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm transition-colors font-ui">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
