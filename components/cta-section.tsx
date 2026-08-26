"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="bg-black py-40 px-6 overflow-hidden relative border-t border-white/5">
      {/* Background with advanced overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
         <img 
            src="https://images.unsplash.com/photo-1736664123764-64f3a58aea5b?q=80&w=2532&auto=format&fit=crop" 
            alt="Aerial Field" 
            className="w-full h-full object-cover scale-110 grayscale"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent opacity-50" />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10 space-y-16">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
           className="space-y-8"
        >
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
             <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
             <span className="text-[10px] uppercase tracking-[0.5em] text-white/60 font-bold">National Deployment 2026</span>
          </div>

          <h2 className="text-5xl md:text-9xl font-serif font-light text-white leading-[1.1] tracking-tight">
            Design the <br />
            <span className="italic">Future of Food</span>
          </h2>
          
          <p className="text-lg md:text-2xl text-white/40 max-w-2xl mx-auto font-light leading-relaxed">
            We are selecting a community of visionaries to restore the purity of Indian soil. Secure your legacy in the next generation of agriculture.
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ delay: 0.4, duration: 1 }}
           className="flex flex-col items-center gap-10"
        >
          <Link href="/contact" className="group/cta">
            <Button size="lg" className="relative overflow-hidden rounded-full bg-[#D4AF37] text-[#1A3C34] hover:bg-white h-20 md:h-24 px-12 md:px-20 text-[12px] md:text-[14px] uppercase tracking-[0.3em] font-bold shadow-[0_20px_60px_rgba(212,175,55,0.3)] transition-all hover:scale-105 active:scale-95 group border-none">
              <span className="relative z-10">Join the Mission</span>
              <motion.div 
                 className="absolute inset-0 bg-white/40 opacity-0 group-hover/cta:opacity-100 transition-opacity"
                 initial={false}
                 animate={{ scale: [1, 1.3, 1] }}
                 transition={{ duration: 3, repeat: Infinity }}
              />
            </Button>
          </Link>

          <div className="flex items-center gap-6 md:gap-12 opacity-30 group-hover:opacity-100 transition-all duration-1000">
             <div className="flex flex-col items-center gap-2">
                <span className="text-xl md:text-2xl font-serif text-white">0%</span>
                <span className="text-[9px] uppercase tracking-widest font-bold">Toxins</span>
             </div>
             <div className="w-[1px] h-12 bg-white/20" />
             <div className="flex flex-col items-center gap-2">
                <span className="text-xl md:text-2xl font-serif text-white">100%</span>
                <span className="text-[9px] uppercase tracking-widest font-bold">Restored</span>
             </div>
             <div className="w-[1px] h-12 bg-white/20" />
             <div className="flex flex-col items-center gap-2">
                <span className="text-xl md:text-2xl font-serif text-white">2026</span>
                <span className="text-[9px] uppercase tracking-widest font-bold">Cycle</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
