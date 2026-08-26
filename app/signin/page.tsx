"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowLeft, Lock, Loader2, ShieldCheck } from "lucide-react"

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      <Navbar />
      
      <div className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] opacity-20" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
        </div>

        <div className="max-w-xl w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            {/* Login Form Content */}
            <div className="bg-white/[0.03] border border-white/10 p-10 md:p-14 rounded-[3rem] backdrop-blur-3xl shadow-2xl space-y-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-1000">
                <ShieldCheck className="h-64 w-64 text-[#D4AF37]" />
              </div>

              <div className="space-y-8 text-center relative z-10">
                <div className="flex items-center justify-center space-x-4">
                   <div className="h-[1px] w-8 bg-[#D4AF37]/30" />
                   <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D4AF37]">Reserved Access</span>
                   <div className="h-[1px] w-8 bg-[#D4AF37]/30" />
                </div>
                
                <h2 className="text-4xl md:text-5xl font-serif italic text-white/90 leading-tight">Awaiting the <br /> <span className="not-italic text-white underline decoration-[#D4AF37]/30 underline-offset-8">2026 Monsoon.</span></h2>
                
                <div className="space-y-6 max-w-sm mx-auto">
                   <p className="text-white/40 font-light leading-relaxed">
                      AgriScore is currently undergoing final calibration for the National Deployment Cycle. Full access for legacy estates and mission partners will reveal shortly.
                   </p>
                </div>
              </div>

              <div className="space-y-8 pt-4 relative z-10">
                <div className="space-y-3">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center space-x-3">
                      <Loader2 className="h-3 w-3 text-[#D4AF37] animate-spin" />
                      <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/50">Staging Environment: Final Phase</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#D4AF37]">94% Ready</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 3, delay: 0.5 }}
                      className="h-full bg-[#D4AF37]" 
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-8 items-center pt-4">
                   <div className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                      <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-medium">Coming Soon to Desktop & Mobile</span>
                   </div>
                   
                   <Link href="/" className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors group">
                      <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
                      <span>Return to Perimeter</span>
                   </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
