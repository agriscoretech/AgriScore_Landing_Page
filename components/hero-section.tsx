"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Menu, X, ArrowRight, Leaf, Cpu, Database, Globe } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000)

    let frameId: number;
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (frameId) cancelAnimationFrame(frameId);
      
      frameId = requestAnimationFrame(() => {
        if ('touches' in e) {
          setMousePosition({ x: e.touches[0].clientX, y: e.touches[0].clientY })
        } else {
          setMousePosition({ x: e.clientX, y: e.clientY })
        }
      });
    }
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("touchmove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleMouseMove)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"])
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
  
  return (
    <section ref={containerRef} className="relative w-full h-[110vh] flex items-center justify-center overflow-hidden bg-black cursor-none">
      <AnimatePresence>
        {showSplash && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] bg-black flex items-center justify-center overflow-hidden"
          >
            {/* Background Texture for Splash */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: [0, 1, 1, 0.9, 0],
                scale: [0.95, 1, 1, 1.02, 1.05],
              }}
              transition={{ 
                duration: 2.2,
                times: [0, 0.2, 0.6, 0.8, 1],
                ease: "easeInOut" 
              }}
              className="relative"
            >
              <img 
                src="/logo.png" 
                alt="AgriScore Logo" 
                className="h-24 md:h-40 w-auto object-contain relative z-10"
              />
              
              {/* Outstanding: Ring Explosion Effect */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.5, 2.2], opacity: [0, 0.5, 0] }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                className="absolute inset-0 border-2 border-[#D4AF37] rounded-full"
              />
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [0.8, 1.8, 3], opacity: [0, 0.3, 0] }}
                transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
                className="absolute inset-0 border border-white/20 rounded-full"
              />

              <motion.div 
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -inset-20 bg-[#D4AF37]/20 blur-[80px] rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
         {/* Noise Overlay */}
         <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none bg-[url('https://res.cloudinary.com/dff96sy9b/image/upload/v1689252329/noise_tx7lqb.png')] auto-animate-noise" />
         
         {/* Dynamic Grid */}
         <div 
           className="absolute inset-0 opacity-[0.15]" 
           style={{ 
             backgroundImage: `radial-gradient(circle at 2px 2px, rgba(212,175,55,0.15) 1px, transparent 0)`,
             backgroundSize: '40px 40px'
           }} 
         />
      </div>

      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

      {/* Decorative Interactive Background Elements */}
      <motion.div 
        animate={{ 
          x: (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 0) / 2) * 0.05,
          y: (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 0) / 2) * 0.05 
        }}
        className="absolute inset-0 z-0 pointer-events-none opacity-30 blur-[120px]"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full" />
      </motion.div>

      {/* Custom Cursor Follower */}
      <motion.div 
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        className="fixed top-0 left-0 w-6 h-6 border border-[#D4AF37] rounded-full z-[100] pointer-events-none hidden md:block mix-blend-difference"
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.1 }}
      />
      
      {/* Top Portion Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1627920769541-daa658ed6b59?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Top Background" 
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center justify-center h-full">
        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-12"
        >
          <h1 className="text-[clamp(2.5rem,8vw,8rem)] font-serif font-light text-white leading-[1.05] tracking-tight text-balance">
            Engineering a <span className="italic">Pesticide-Free</span> India
          </h1>

          <p className="text-lg md:text-2xl text-white/40 max-w-3xl mx-auto font-light leading-relaxed tracking-tight">
            We are redefining Indian agriculture by increasing yields and restoring soil health. Our mission: reducing input costs for farmers while delivering a toxin-free future to the nation.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 pt-8">
            <Link href="/contact">
              <Button size="lg" className="rounded-full bg-[#D4AF37] text-[#1A3C34] hover:bg-[#D4AF37]/90 h-16 md:h-20 px-10 md:px-16 text-[14px] uppercase tracking-[0.4em] font-bold transition-all shadow-[0_0_50px_rgba(212,175,55,0.2)] hover:shadow-[0_0_80px_rgba(212,175,55,0.4)] hover:scale-105 active:scale-95 group relative overflow-hidden border-none">
                <span className="relative z-10 flex items-center gap-4">
                  Join the Mission
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .auto-animate-noise {
          animation: noise-move 0.2s steps(2) infinite;
        }
        @keyframes noise-move {
          0% { transform: translate(0,0) }
          10% { transform: translate(-1%,-1%) }
          20% { transform: translate(1%,1%) }
          30% { transform: translate(-2%,1%) }
          40% { transform: translate(1%,-2%) }
          50% { transform: translate(-1%,2%) }
          60% { transform: translate(-2%,-1%) }
          70% { transform: translate(2%,1%) }
          80% { transform: translate(1%,2%) }
          90% { transform: translate(-1%,-2%) }
          100% { transform: translate(0,0) }
        }
      `}</style>
    </section>
  )
}
