"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import * as Lucide from "lucide-react"

export default function MediaRoom() {
  const { 
    Newspaper, 
    Camera,
    Play,
    ArrowRight
  } = Lucide as any

  const Icon = Newspaper || Camera || Play

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Background mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] -ml-64 -mt-64" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] -mr-64 -mb-64" />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-32 md:pt-48 pb-32 relative min-h-[80vh] flex flex-col justify-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="text-center"
        >
          <div className="inline-flex items-center gap-3 mb-12">
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 font-bold block italic">Press & Insights</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-serif font-light mb-12 leading-tight italic text-balance">
            Media <span className="not-italic text-white/90">Room</span>
          </h1>
          
          <div className="flex flex-col items-center gap-12">
            <div className="p-8 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-xl relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent blur-xl" />
              {Icon && <Icon className="w-12 h-12 text-white/20 relative z-10 animate-pulse" />}
            </div>

            <div className="max-w-xl space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.4em] text-white/40 font-bold block tracking-[0.8em]">Brand Assets & News</span>
                <p className="text-4xl md:text-5xl font-serif italic text-white/90">Coming Soon</p>
              </div>
              
              <p className="text-white/40 text-sm md:text-base font-light tracking-wide leading-relaxed">
                Our press center is under construction. It will provide official press releases, brand guidelines, and high-resolution visual assets for media partners.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-8">
                <button className="px-10 py-4 border border-white/20 rounded-full text-white text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-3">
                    Download Press Kit
                    {ArrowRight && <ArrowRight className="w-3 h-3" />}
                </button>
            </div>
          </div>
        </motion.div>

        {/* Technical Footer */}
        <div className="mt-32 pt-12 border-t border-white/5 opacity-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[9px] uppercase tracking-[0.4em] font-bold text-center md:text-left">
                <div>Public Relations</div>
                <div className="md:text-center italic text-balance">Official Agriscore Media Updates</div>
                <div className="md:text-right">Global Press Center</div>
            </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
