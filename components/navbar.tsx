"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X, Sparkles, Zap, Bot } from "lucide-react"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "nav-blur" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="flex items-center group">
              <motion.div
                className="flex items-center mr-3"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src="/images/agvion-logo.png"
                  alt="A.G.V.I.O.N Logo"
                  width={40}
                  height={40}
                  className="w-auto h-8"
                />
              </motion.div>
              <span className="font-conthrax text-xl tracking-wider group-hover:text-gradient transition-all duration-300">
                A.G.V.I.O.N
              </span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-1">
            <NavItem
              title="Home"
              href="#hero"
              isActive={activeSection === "#hero"}
              icon={<Bot className="w-4 h-4" />}
            />
            <NavItem title="About" href="#about" isActive={activeSection === "#about"} />
            <NavItem title="Platform" isActive={["#features", "#use-cases", "#benefits"].includes(activeSection)}>
              <NavSubmenu
                items={[
                  { label: "AI Features", href: "#features", icon: <Sparkles className="w-4 h-4" /> },
                  { label: "Use Cases", href: "#use-cases", icon: <Zap className="w-4 h-4" /> },
                  { label: "Benefits", href: "#benefits", icon: <Bot className="w-4 h-4" /> },
                ]}
              />
            </NavItem>
            <NavItem title="Documentation" href="/terms-of-service" />
            <NavItem title="Join Waitlist" href="#waiting-list" isActive={activeSection === "#waiting-list"} />
          </nav>

          <div className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                className="hidden sm:flex hover:bg-teal-500/10 hover:text-teal-400 transition-all duration-300"
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
                Contact
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white shadow-lg hover:shadow-teal-500/25 transition-all duration-300 animate-pulse-glow rounded-[22px]"
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
                <Sparkles className="w-4 h-4 mr-2" />
                Join Waitlist
              </Button>
            </motion.div>

            <motion.button
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </motion.button>
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
            transition={{ duration: 0.3 }}
            className="md:hidden nav-blur border-t border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <MobileNavItem title="Home" href="#hero" setMobileMenuOpen={setMobileMenuOpen} />
                <MobileNavItem title="About" href="#about" setMobileMenuOpen={setMobileMenuOpen} />
                <MobileNavItem
                  title="Platform"
                  items={[
                    { label: "AI Features", href: "#features" },
                    { label: "Use Cases", href: "#use-cases" },
                    { label: "Benefits", href: "#benefits" },
                  ]}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
                <MobileNavItem title="Documentation" href="/terms-of-service" setMobileMenuOpen={setMobileMenuOpen} />
                <MobileNavItem title="Join Waitlist" href="#waiting-list" setMobileMenuOpen={setMobileMenuOpen} />
                <Button
                  className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white w-full mt-4"
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
                  <Sparkles className="w-4 h-4 mr-2" />
                  Join Waitlist
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
  icon,
}: { title: string; children?: React.ReactNode; href?: string; isActive?: boolean; icon?: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault()
      if (href.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          })
        }
      } else {
        window.location.href = href
      }
    }
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      {href ? (
        <motion.a
          href={href}
          onClick={handleClick}
          className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
            isActive ? "text-teal-400 bg-teal-500/10" : "text-gray-400 hover:text-white hover:bg-gray-800/50"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {title}
          {children && <ChevronDown className="ml-1 h-4 w-4" />}
        </motion.a>
      ) : (
        <motion.button
          className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
            isActive ? "text-teal-400 bg-teal-500/10" : "text-gray-400 hover:text-white hover:bg-gray-800/50"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {icon && <span className="mr-2">{icon}</span>}
          {title}
          <ChevronDown className="ml-1 h-4 w-4" />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-56 card-gradient rounded-xl shadow-xl z-50 overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const NavSubmenu = ({ items }: { items: { label: string; href: string; icon?: React.ReactNode }[] }) => {
  return (
    <div className="py-2 px-2">
      {items.map((item, index) => (
        <motion.a
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
          className="flex items-center px-4 py-3 text-sm rounded-lg hover:bg-teal-500/10 hover:text-teal-400 transition-all duration-300 group"
          whileHover={{ x: 5 }}
        >
          {item.icon && <span className="mr-3 group-hover:scale-110 transition-transform">{item.icon}</span>}
          {item.label}
        </motion.a>
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
      if (href.startsWith("#")) {
        const element = document.querySelector(href)
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          })
        }
      } else {
        window.location.href = href
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
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium hover:text-teal-400 transition-colors"
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
          className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium hover:text-teal-400 transition-colors"
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
            className="pl-4 border-l border-teal-500/30 ml-3"
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
                className="block px-4 py-2 text-sm text-gray-400 hover:text-teal-400 transition-colors"
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
