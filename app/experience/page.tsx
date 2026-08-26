"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Database, 
  Zap, 
  Map as MapIcon, 
  Activity, 
  ArrowRight,
  ShieldCheck,
  Cpu
} from "lucide-react"
import { useRef } from "react"

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <main ref={containerRef} className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* 1. Territory Command (HUD Hero) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-40 md:pt-20 bg-black">
        {/* Subtle Gradient Glow */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#1A3C34]/20 to-transparent" />
        </div>

        {/* HUD Data Overlay */}
        <div className="max-w-7xl mx-auto relative z-10 px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left"
              >
                 <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[clamp(5rem,10vw,8rem)] font-serif font-light leading-[1.1] tracking-tight px-2 md:px-0">
                    Territory <br className="md:block" />
                    <span className="italic text-[#D4AF37]">Intelligence</span>
                 </h1>
                 
                 <p className="text-lg md:text-xl text-white/40 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                    Witness the convergence of genetics and data. Your estate isn&apos;t just land—it&apos;s a computational asset monitored in real-time.
                 </p>

                 <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-8 border-t border-white/10">
                    <div className="space-y-1">
                       <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/30">Micro-Biome Health</span>
                       <p className="text-xl md:text-2xl font-serif text-[#D4AF37]">98.4%</p>
                    </div>
                    <div className="space-y-1 border-l border-white/5 pl-6 md:pl-0 md:border-none">
                       <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/30">Yield Prediction</span>
                       <p className="text-xl md:text-2xl font-serif text-[#D4AF37]">+32%</p>
                    </div>
                    <div className="space-y-1 col-span-2 md:col-span-1 border-t border-white/5 md:border-none pt-4 md:pt-0">
                       <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/30 text-center md:text-left block">Node Status</span>
                       <p className="text-xl md:text-2xl font-serif text-emerald-500 text-center md:text-left">Active</p>
                    </div>
                 </div>
              </motion.div>

              {/* HUD Visualization Ring */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5 flex justify-center mt-12 lg:mt-0"
              >
                 <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center scale-75 md:scale-100">
                    <div className="absolute inset-0 border-[0.5px] border-white/10 rounded-full animate-spin-slow" />
                    <div className="absolute inset-4 border-[0.5px] border-emerald-500/20 rounded-full animate-reverse-spin" />
                    <div className="absolute inset-10 border-[1px] border-dashed border-white/5 rounded-full" />
                    <div className="relative z-10 flex flex-col items-center space-y-2">
                       <Activity className="h-8 w-8 md:h-10 md:w-10 text-[#D4AF37]" />
                       <span className="text-[9px] uppercase tracking-[0.5em] font-bold opacity-40">Neural Sync</span>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
        >
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/20">Explore Interface</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
        </motion.div>
      </section>

      {/* 2. The Yield Engine (Interactive Bento) */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 space-y-6 text-center md:text-left">
             <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4AF37] font-bold">The Architecture</span>
             <h2 className="text-4xl md:text-7xl font-serif font-light italic leading-tight">The High-Yield Ecosystem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Large Feature Card */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="md:col-span-2 relative h-[350px] sm:h-[450px] md:h-[600px] bg-white/5 border border-white/10 rounded-3xl md:rounded-sm overflow-hidden group p-8 md:p-12 flex flex-col justify-end"
            >
               <div className="absolute inset-0 opacity-30 md:opacity-20">
                  <img src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?q=80&w=2671&auto=format&fit=crop" alt="Soil Detail" className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
               </div>
               <div className="relative z-10 space-y-4 md:space-y-6">
                  <Cpu className="h-10 w-10 md:h-12 md:w-12 text-[#D4AF37]" />
                  <h3 className="text-2xl md:text-4xl font-serif font-light">Sub-Surface Intelligence</h3>
                  <p className="text-sm md:text-base text-white/40 max-w-sm md:max-w-md font-light leading-relaxed">Our nano-sensors operate 2 meters below the surface, capturing the chemical dialogue of your crops before they even emerge.</p>
               </div>
            </motion.div>

            {/* Side Column Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
               <motion.div 
                 whileHover={{ y: -10 }}
                 className="relative h-[250px] md:h-[290px] bg-[#1A3C34] border border-[#1A3C34]/10 rounded-2xl md:rounded-sm group p-8 flex flex-col justify-between"
               >
                  <Database className="h-8 w-8 text-[#D4AF37]" />
                  <div className="space-y-2">
                     <h4 className="text-xl font-serif">Legacy Library</h4>
                     <p className="text-white/40 text-sm font-light leading-relaxed">Genetic records of your estate spanning over a century.</p>
                  </div>
               </motion.div>

               <motion.div 
                 whileHover={{ y: -10 }}
                 className="relative h-[250px] md:h-[290px] bg-white/5 border border-white/10 rounded-2xl md:rounded-sm group p-8 flex flex-col justify-between"
               >
                  <MapIcon className="h-8 w-8 text-[#D4AF37]" />
                  <div className="space-y-2">
                     <h4 className="text-xl font-serif">Precision Mapping</h4>
                     <p className="text-white/40 text-sm font-light leading-relaxed">CM-level mapping for automated harvesters.</p>
                  </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Invitation (Pre-Access Flow) */}
      <section className="py-24 md:py-60 px-6 relative bg-white text-black overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
           <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" alt="pattern" className="w-full h-full" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-12 md:space-y-16 relative z-10">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
             className="space-y-10"
          >
            <div className="flex justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-black/5 bg-[#FAF9F6] shadow-xl flex items-center justify-center">
                <ShieldCheck className="h-8 w-8 md:h-10 md:w-10 text-[#D4AF37]" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full border border-black/5 bg-black/5 backdrop-blur-md">
                 <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                 <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#1A3C34]/60 font-bold whitespace-nowrap">Monsoon 2026 Enrollment</span>
              </div>
              
              <h2 className="text-[clamp(3rem,10vw,8rem)] font-serif font-light leading-[1.1] tracking-tight text-neutral-900">
                Apply for <br />
                <span className="italic text-[#D4AF37]">Membership</span>
              </h2>
            </div>
            
            <p className="text-lg md:text-2xl text-black/40 max-w-2xl mx-auto font-light leading-relaxed">
              Join the elite circle of farmers restoring the purity of India's bio-heritage. We are selecting limited partners for the upcoming agricultural cycle.
            </p>

            <div className="pt-4 md:pt-8 flex justify-center">
               <Link href="/contact" className="group/member w-full md:w-auto">
                  <Button size="lg" className="relative overflow-hidden rounded-full bg-[#D4AF37] text-[#1A3C34] hover:bg-black hover:text-white h-16 md:h-24 px-10 md:px-20 text-[12px] md:text-[14px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all hover:scale-105 active:scale-95 border-none w-full md:w-auto">
                    <span className="relative z-10 flex items-center justify-center gap-4">
                      Apply for Membership
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover/member:translate-x-2 transition-transform duration-500" />
                    </span>
                    <motion.div 
                       className="absolute inset-0 bg-white/40 opacity-0 group-hover/member:opacity-100 transition-opacity"
                       initial={false}
                       animate={{ scale: [1, 1.3, 1] }}
                       transition={{ duration: 3, repeat: Infinity }}
                    />
                  </Button>
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      {/* Custom Styles for Spinners */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 10s linear infinite;
        }
      `}</style>
    </main>
  )
}
