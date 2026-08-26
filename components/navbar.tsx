"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight, ArrowUpRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navigation = [
    { name: "Innovation", href: "/innovation" },
    { name: "Our Mission", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2 md:py-4" : "py-4 md:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center px-6 md:px-10 h-20 rounded-full border border-white/10 transition-all duration-700 ${
          scrolled ? "bg-black/90 backdrop-blur-2xl shadow-2xl scale-[0.98]" : "bg-white/[0.03] backdrop-blur-md shadow-none"
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-opacity"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[13px] uppercase tracking-[0.2em] font-medium text-white/70 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/signin">
              <Button variant="ghost" className="text-[13px] uppercase tracking-[0.22em] text-white hover:bg-white/10 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="https://myagriscore.vercel.app/" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full bg-white text-black hover:bg-neutral-200 text-[12px] uppercase tracking-[0.2em] font-bold px-8 h-10 transition-all hover:scale-105">
                Experience
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-white/80 transition-colors">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-black md:hidden flex flex-col p-6"
          >
            <div className="flex justify-between items-center h-20">
               <img src="/logo.png" alt="Logo" className="h-10 w-auto object-contain" />
               <button onClick={() => setIsOpen(false)} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white">
                 <X className="h-6 w-6" />
               </button>
            </div>

            <div className="flex-1 flex flex-col justify-center space-y-6">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between py-4 border-b border-white/5"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-4xl font-serif font-light text-white tracking-tight">{item.name}</span>
                    <ArrowUpRight className="h-6 w-6 text-white/20 group-hover:text-white transition-colors" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-auto space-y-4 pb-10"
            >
              <Link href="/signin" onClick={() => setIsOpen(false)} className="block w-full">
                <Button className="w-full h-16 rounded-full border border-white/20 bg-transparent text-white text-[14px] uppercase tracking-[0.3em] font-bold hover:bg-white/10">
                  Sign In
                </Button>
              </Link>
              <Link href="https://myagriscore.vercel.app/" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block w-full">
                <Button className="w-full h-16 rounded-full bg-white text-black text-[14px] uppercase tracking-[0.3em] font-bold">
                  Experience
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
