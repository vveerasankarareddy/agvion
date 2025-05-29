"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Determine active section
      const sections = [
        { id: "#hero", offset: 0 },
        { id: "#about", offset: 200 },
        { id: "#features", offset: 200 },
        { id: "#use-cases", offset: 200 },
        { id: "#benefits", offset: 200 },
        { id: "#waiting-list", offset: 200 },
      ]

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.querySelector(sections[i].id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= sections[i].offset) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Fixed for mobile */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl sm:rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
                <Image 
                  src="/images/agvion-logo.png" 
                  alt="A.G.V.I.O.N Logo" 
                  width={24} 
                  height={24} 
                  className="w-5 h-5 sm:w-6 sm:h-6 object-contain" 
                />
              </div>
            </div>
            <span className="font-conthrax text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent whitespace-nowrap">
              A.G.V.I.O.N
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <NavItem title="Home" href="#hero" isActive={activeSection === "#hero"} onClick={scrollToSection} />
            <NavItem title="About" href="#about" isActive={activeSection === "#about"} onClick={scrollToSection} />
            <NavDropdown
              title="Platform"
              isActive={["#features", "#use-cases", "#benefits"].includes(activeSection)}
              items={[
                { label: "Features", href: "#features" },
                { label: "Use Cases", href: "#use-cases" },
                { label: "Benefits", href: "#benefits" },
              ]}
              onClick={scrollToSection}
            />
            <NavItem title="Documentation" href="/terms-of-service" />
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button
              variant="ghost"
              className="hidden sm:flex text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-xl px-4 py-2 transition-all duration-200"
              onClick={() => scrollToSection("#waiting-list")}
            >
              Contact
            </Button>
            {/* Mobile-optimized Join Waitlist button */}
            <Button
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-3 py-2 sm:px-6 sm:py-2.5 rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              onClick={() => scrollToSection("#waiting-list")}
            >
              <span className="sm:hidden">Join</span>
              <span className="hidden sm:inline">Join Waitlist</span>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all duration-200 flex-shrink-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Fixed positioning and functionality */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-4 right-4 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-2xl z-50 md:hidden"
            >
              <div className="px-4 py-4 space-y-1">
                <MobileNavItem
                  title="Home"
                  href="#hero"
                  onClick={scrollToSection}
                  setMobileMenuOpen={setMobileMenuOpen}
                  isActive={activeSection === "#hero"}
                />
                <MobileNavItem
                  title="About"
                  href="#about"
                  onClick={scrollToSection}
                  setMobileMenuOpen={setMobileMenuOpen}
                  isActive={activeSection === "#about"}
                />
                <MobileNavItem
                  title="Features"
                  href="#features"
                  onClick={scrollToSection}
                  setMobileMenuOpen={setMobileMenuOpen}
                  isActive={activeSection === "#features"}
                />
                <MobileNavItem
                  title="Use Cases"
                  href="#use-cases"
                  onClick={scrollToSection}
                  setMobileMenuOpen={setMobileMenuOpen}
                  isActive={activeSection === "#use-cases"}
                />
                <MobileNavItem
                  title="Benefits"
                  href="#benefits"
                  onClick={scrollToSection}
                  setMobileMenuOpen={setMobileMenuOpen}
                  isActive={activeSection === "#benefits"}
                />
                <MobileNavItem 
                  title="Documentation" 
                  href="/terms-of-service" 
                  setMobileMenuOpen={setMobileMenuOpen} 
                />
                
                <div className="pt-3 border-t border-gray-100 mt-3">
                  <Button
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white w-full py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => {
                      scrollToSection("#waiting-list")
                      setMobileMenuOpen(false)
                    }}
                  >
                    Join Waitlist
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

const NavItem = ({ title, href, isActive, onClick }: any) => {
  if (href.startsWith("#")) {
    return (
      <button
        onClick={() => onClick(href)}
        className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
          isActive
            ? "text-orange-600 bg-orange-50 shadow-sm"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        {isActive && (
          <motion.div
            layoutId="activeTab"
            className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-100"
            initial={false}
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}
        <span className="relative z-10">{title}</span>
      </button>
    )
  } else {
    return (
      <Link
        href={href}
        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200"
      >
        {title}
      </Link>
    )
  }
}

const NavDropdown = ({ title, isActive, items, onClick }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className={`flex items-center px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
          isActive
            ? "text-orange-600 bg-orange-50 shadow-sm"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
        }`}
      >
        {title}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl"
          >
            <div className="py-2">
              {items.map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={() => onClick(item.href)}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-600 hover:text-orange-600 hover:bg-orange-50 transition-all duration-150 first:rounded-t-2xl last:rounded-b-2xl mx-1 rounded-xl"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const MobileNavItem = ({ title, href, onClick, setMobileMenuOpen, isActive }: any) => {
  if (href.startsWith("#")) {
    return (
      <button
        onClick={() => {
          onClick(href)
          setMobileMenuOpen(false)
        }}
        className={`block w-full text-left py-3 px-4 rounded-xl transition-all duration-200 font-medium ${
          isActive
            ? "text-orange-600 bg-orange-50"
            : "text-gray-600 hover:text-orange-600 hover:bg-orange-50"
        }`}
      >
        {title}
      </button>
    )
  } else {
    return (
      <Link
        href={href}
        onClick={() => setMobileMenuOpen(false)}
        className="block w-full text-left text-gray-600 hover:text-orange-600 hover:bg-orange-50 py-3 px-4 rounded-xl transition-all duration-200 font-medium"
      >
        {title}
      </Link>
    )
  }
}

export default Navbar