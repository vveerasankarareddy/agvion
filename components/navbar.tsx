"use client"

import type React from "react"
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
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Determine active section
      const sections = [
        { id: "#hero", offset: 0 },
        { id: "#about", offset: 200 },
        { id: "#features", offset: 200 },
        { id: "#use-cases", offset: 200 },
        { id: "#benefits", offset: 200 },
        { id: "#testimonials", offset: 200 },
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

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-gray-800" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="flex items-center mr-3">
                <Image
                  src="/images/agvion-logo.png"
                  alt="A.G.V.I.O.N Logo"
                  width={40}
                  height={40}
                  className="w-auto h-8"
                />
              </div>
              <span className="font-conthrax text-xl tracking-wider">A.G.V.I.O.N</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-1">
            <NavItem title="Home" href="#hero" isActive={activeSection === "#hero"} />
            <NavItem title="About" href="#about" isActive={activeSection === "#about"} />
            <NavItem title="Platform" isActive={["#features", "#use-cases", "#benefits"].includes(activeSection)}>
              <NavSubmenu
                items={[
                  { label: "Features", href: "#features" },
                  { label: "Use Cases", href: "#use-cases" },
                  { label: "Benefits", href: "#benefits" },
                ]}
              />
            </NavItem>
            <NavItem title="Testimonials" href="#testimonials" isActive={activeSection === "#testimonials"} />
            <NavItem title="Join Waitlist" href="#waiting-list" isActive={activeSection === "#waiting-list"} />
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="hidden sm:flex"
              onClick={() => {
                const element = document.querySelector("#contact")
                if (element) {
                  window.scrollTo({
                    top: element.getBoundingClientRect().top + window.scrollY - 100,
                    behavior: "smooth",
                  })
                }
              }}
            >
              Contact
            </Button>
            <Button
              className="bg-teal-600 hover:bg-teal-700"
              onClick={() => {
                const element = document.querySelector("#waiting-list")
                if (element) {
                  window.scrollTo({
                    top: element.getBoundingClientRect().top + window.scrollY - 100,
                    behavior: "smooth",
                  })
                }
              }}
            >
              Join Waiting List
            </Button>

            <button
              className="md:hidden p-2 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <MobileNavItem title="Home" href="#hero" setMobileMenuOpen={setMobileMenuOpen} />
                <MobileNavItem title="About" href="#about" setMobileMenuOpen={setMobileMenuOpen} />
                <MobileNavItem
                  title="Platform"
                  items={[
                    { label: "Features", href: "#features" },
                    { label: "Use Cases", href: "#use-cases" },
                    { label: "Benefits", href: "#benefits" },
                  ]}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
                <MobileNavItem title="Testimonials" href="#testimonials" setMobileMenuOpen={setMobileMenuOpen} />
                <MobileNavItem title="Join Waitlist" href="#waiting-list" setMobileMenuOpen={setMobileMenuOpen} />
                <MobileNavItem title="Contact" href="#contact" setMobileMenuOpen={setMobileMenuOpen} />
                <Button
                  className="bg-teal-600 hover:bg-teal-700 w-full"
                  onClick={() => {
                    const element = document.querySelector("#waiting-list")
                    if (element) {
                      window.scrollTo({
                        top: element.getBoundingClientRect().top + window.scrollY - 100,
                        behavior: "smooth",
                      })
                    }
                    setMobileMenuOpen(false)
                  }}
                >
                  Join Waiting List
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

const NavItem = ({
  title,
  children,
  href,
  isActive,
}: { title: string; children?: React.ReactNode; href?: string; isActive?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        })
      }
    }
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {href ? (
        <a
          href={href}
          onClick={handleClick}
          className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
            isActive ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {title}
          {children && <ChevronDown className="ml-1 h-4 w-4" />}
        </a>
      ) : (
        <button
          className={`flex items-center px-3 py-2 text-sm font-medium transition-colors ${
            isActive ? "text-white" : "text-gray-400 hover:text-white"
          }`}
        >
          {title}
          <ChevronDown className="ml-1 h-4 w-4" />
        </button>
      )}

      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-1 w-48 bg-gray-900 border border-gray-800 rounded-md shadow-lg z-50"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const NavSubmenu = ({ items }: { items: { label: string; href: string }[] }) => {
  return (
    <div className="py-2 px-2">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={(e) => {
            e.preventDefault()
            const element = document.querySelector(item.href)
            if (element) {
              window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 100,
                behavior: "smooth",
              })
            }
          }}
          className="block px-4 py-2 text-sm rounded-md hover:bg-gray-800 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  )
}

const MobileNavItem = ({
  title,
  items,
  href,
  setMobileMenuOpen,
}: { title: string; items?: { label: string; href: string }[]; href?: string; setMobileMenuOpen: any }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: "smooth",
        })
      }
      setMobileMenuOpen(false)
    }
  }

  return (
    <div>
      {href ? (
        <a
          href={href}
          onClick={handleClick}
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium hover:text-white transition-colors"
        >
          {title}
          {items && (
            <ChevronDown
              className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
            />
          )}
        </a>
      ) : (
        <button
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
      )}

      <AnimatePresence>
        {isOpen && items && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-4 border-l border-gray-800 ml-3"
          >
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  const element = document.querySelector(item.href)
                  if (element) {
                    window.scrollTo({
                      top: element.getBoundingClientRect().top + window.scrollY - 100,
                      behavior: "smooth",
                    })
                  }
                  setMobileMenuOpen(false)
                }}
                className="block px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
