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
    <header className="fixed top-0 left-0 right-0 z-50 nav-solid">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/agvion-logo.png" alt="A.G.V.I.O.N Logo" width={32} height={32} className="w-8 h-8" />
            <span className="font-conthrax text-xl font-bold text-black">A.G.V.I.O.N</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
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
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden sm:flex text-gray-600 hover:text-orange-600"
              onClick={() => scrollToSection("#waiting-list")}
            >
              Contact
            </Button>
            <Button
              className="btn-primary px-6 py-2 rounded-lg font-medium"
              onClick={() => scrollToSection("#waiting-list")}
            >
              Join Waitlist
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              <MobileNavItem
                title="Home"
                href="#hero"
                onClick={scrollToSection}
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileNavItem
                title="About"
                href="#about"
                onClick={scrollToSection}
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileNavItem
                title="Features"
                href="#features"
                onClick={scrollToSection}
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileNavItem
                title="Use Cases"
                href="#use-cases"
                onClick={scrollToSection}
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileNavItem
                title="Benefits"
                href="#benefits"
                onClick={scrollToSection}
                setMobileMenuOpen={setMobileMenuOpen}
              />
              <MobileNavItem title="Documentation" href="/terms-of-service" setMobileMenuOpen={setMobileMenuOpen} />
              <Button
                className="btn-primary w-full py-3 rounded-lg font-medium"
                onClick={() => {
                  scrollToSection("#waiting-list")
                  setMobileMenuOpen(false)
                }}
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const NavItem = ({ title, href, isActive, onClick }: any) => (
  <button
    onClick={() => (href.startsWith("#") ? onClick(href) : (window.location.href = href))}
    className={`text-sm font-medium transition-colors ${
      isActive ? "text-orange-600" : "text-gray-600 hover:text-black"
    }`}
  >
    {title}
  </button>
)

const NavDropdown = ({ title, isActive, items, onClick }: any) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button
        className={`flex items-center text-sm font-medium transition-colors ${
          isActive ? "text-orange-600" : "text-gray-600 hover:text-black"
        }`}
      >
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg"
          >
            <div className="py-2">
              {items.map((item: any, index: number) => (
                <button
                  key={index}
                  onClick={() => onClick(item.href)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-orange-600 hover:bg-gray-50"
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

const MobileNavItem = ({ title, href, onClick, setMobileMenuOpen }: any) => (
  <button
    onClick={() => {
      if (href.startsWith("#")) {
        onClick(href)
      } else {
        window.location.href = href
      }
      setMobileMenuOpen(false)
    }}
    className="block w-full text-left text-gray-600 hover:text-orange-600 py-2"
  >
    {title}
  </button>
)

export default Navbar
