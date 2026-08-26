"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import * as Lucide from "lucide-react"

export default function InnovationPage() {
  const { 
    Zap, 
    Cpu, 
    Database, 
    Microscope, 
    Waves, 
    Activity, 
    ArrowRight, 
    ShieldCheck 
  } = Lucide as any

  const technologies = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Neural Soil Interface",
      description: "Our proprietary hardware embeds directly into the soil matrix, streaming trillion-point biological data to our computational core in real-time.",
      metric: "99.9% Precision"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Harvest Quantum Core",
      description: "Predictive yield modeling using quantum-inspired algorithms that stabilize the volatile variables of nature into consistent, high-yield protocols.",
      metric: "14-Day Foresight"
    },
    {
      icon: <Waves className="h-6 w-6" />,
      title: "Autonomous Irrigation",
      description: "Phase-locked irrigation systems that react to biological stress at the cellular level before it becomes visible to the human eye.",
      metric: "40% Water Saving"
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* Hero Section: The Edge of Possible */}
      <section className="relative pt-48 pb-32 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[120px] opacity-20 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="space-y-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-[1px] w-12 bg-[#D4AF37]" />
                  <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-bold">Mission Lab</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-serif font-light leading-none tracking-tighter">
                  Architecting <br />
                  <span className="italic">The Restore.</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.2 }}
                className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-xl"
              >
                At AgriScore, innovation isn't a department—it's our DNA. We are dismantling the barrier between biological heritage and digital intelligence.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="relative aspect-square rounded-full border border-white/5 bg-white/[0.02] flex items-center justify-center p-10 md:p-20"
            >
               <div className="absolute inset-0 rounded-full border-[1px] border-[#D4AF37]/20 animate-[spin_20s_linear_infinite]" />
               <div className="absolute inset-10 rounded-full border-[1px] border-white/5 animate-[spin_30s_linear_infinite_reverse]" />
               <Activity className="h-20 w-20 md:h-40 md:w-40 text-[#D4AF37] opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 md:py-40 border-y border-white/5">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, i) => (
              <div key={i} className="bg-white/[0.03] p-8 md:p-12 space-y-12 border border-white/10 rounded-[2rem] hover:bg-white/[0.05] transition-all group">
                <div className="text-[#D4AF37]">{tech.icon}</div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-serif">{tech.title}</h3>
                  <p className="text-white/40 font-light leading-relaxed text-sm">{tech.description}</p>
                </div>
                <div className="pt-6 border-t border-white/10 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em]">
                   <span className="text-white/30">Validation</span>
                   <span className="text-[#D4AF37]">{tech.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Lab View */}
      <section className="py-40 bg-black overflow-hidden pointer-events-none">
        <div className="container px-6 mx-auto">
          <div className="relative h-[600px] w-full border border-white/10 rounded-2xl overflow-hidden grayscale brightness-50 contrast-125">
             <img 
               src="https://plus.unsplash.com/premium_photo-1663011236143-62855453066b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt="Lab Interface" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay" />
             <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-black to-transparent">
                <span className="text-[10px] uppercase tracking-[0.5em] text-emerald-500 font-bold">Confidential Access Only</span>
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
