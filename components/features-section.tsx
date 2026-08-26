"use client"

import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Zap, Activity, Microscope } from "lucide-react"
import Link from "next/link"

export function FeaturesSection() {
  return (
    <section className="bg-[#FAF9F6] py-32 md:py-48 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Minimal & Unique Header Section */}
        <div className="flex flex-col gap-8 mb-24">
          <div className="flex items-center gap-4">
             <div className="h-[1px] w-8 bg-[#D4AF37]" />
             <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#1A3C34]/40">
                Functional Framework
             </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
             <h2 className="text-5xl md:text-8xl font-serif font-light text-[#1A3C34] leading-[1.1] md:leading-[0.95] tracking-tighter py-2">
                The Engine of <br />
                <span className="italic text-[#D4AF37] pr-4">Regeneration</span>
             </h2>
             
             <p className="text-xl text-[#1A3C34]/60 font-light leading-relaxed max-w-sm pb-2">
                Merging biological intelligence with the high-fidelity precision of modern computational engineering.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* 01. REDESIGNED: Soil Restoration - Minimal Editorial Layout */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 group relative min-h-[600px] lg:min-h-[950px] rounded-[3rem] bg-white border border-[#1A3C34]/10 flex flex-col overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500 shadow-sm"
          >
            {/* Visual Side */}
            <div className="h-2/5 lg:h-1/2 relative overflow-hidden">
               <img 
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070&auto=format&fit=crop"
                  className="w-full h-full object-cover grayscale brightness-95 group-hover:scale-105 transition-all duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
            </div>

            {/* Content Side */}
            <div className="flex-1 p-10 lg:p-14 flex flex-col justify-between bg-white">
               <div className="space-y-6">
                  <div className="space-y-4">
                     <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D4AF37]">Restoration Protocol</span>
                     <h3 className="text-4xl lg:text-7xl font-serif font-light text-[#1A3C34] leading-[1.1] lg:leading-[0.95] tracking-tighter py-2">
                        Soil <br />
                        <span className="italic pr-4">Vitality</span>
                     </h3>
                  </div>

                  <p className="text-[#1A3C34]/50 font-light text-lg leading-relaxed max-w-sm py-1">
                     Architecting a nationwide return to biological sovereignty—detoxifying India's land by eliminating high-load chemical dependency.
                  </p>
               </div>

               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mt-auto">
                  <div className="flex gap-12">
                     <div className="space-y-1">
                        <span className="block text-3xl font-serif text-[#1A3C34] leading-tight py-1">92%</span>
                        <span className="block text-[8px] uppercase tracking-[0.2em] text-[#1A3C34]/40 font-bold">Recovery</span>
                     </div>
                     <div className="space-y-1">
                        <span className="block text-3xl font-serif text-[#1A3C34] leading-tight py-1">Zero</span>
                        <span className="block text-[8px] uppercase tracking-[0.2em] text-[#1A3C34]/40 font-bold">Residue</span>
                     </div>
                  </div>

                  <Link href="/research-labs" className="group/btn flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.3em] text-[#1A3C34]">
                     <span className="w-14 h-14 rounded-full border border-[#1A3C34]/10 flex items-center justify-center group-hover/btn:bg-[#1A3C34] group-hover/btn:text-white transition-all duration-500">
                        <ArrowRight className="h-5 w-5" />
                     </span>
                     Initiate Research
                  </Link>
               </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-12">
            {/* 02. REDESIGNED: Toxin-Free Promise - High-End Dark Concept */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative min-h-[480px] rounded-[3rem] bg-[#1A3C34] p-8 lg:p-12 flex flex-col justify-between overflow-hidden shadow-2xl"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                 <div className="flex justify-between items-start mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                       <ShieldCheck className="h-3 w-3 text-[#D4AF37]" />
                       <span className="text-[8px] uppercase tracking-[0.2em] text-white/60 font-bold">Bio-Security Level I</span>
                    </div>
                    <div className="text-right">
                       <span className="text-4xl md:text-5xl font-serif italic text-white/5 transition-colors duration-700 group-hover:text-[#D4AF37]/20 leading-[1.2] block pr-2">0.00%</span>
                       <span className="text-[8px] uppercase tracking-[0.3em] text-white/30 font-bold">Chemical Load</span>
                    </div>
                 </div>

                 <h3 className="text-5xl lg:text-7xl font-serif font-light text-white leading-[1.1] lg:leading-[0.95] tracking-tighter py-2">
                    Toxin-Free <br />
                    <span className="italic text-[#D4AF37] pr-4">Pledge</span>
                 </h3>
              </div>

              <div className="relative z-10 mt-6 flex flex-col lg:flex-row gap-8 items-end justify-between">
                 <div className="space-y-6 flex-1">
                    <p className="text-white/50 font-light text-base lg:text-lg leading-relaxed max-w-[280px] py-1">
                       Upholding produce sanctity through rigorous laboratory bio-control and regenerative excellence.
                    </p>
                    <Link href="/genetic-rights" className="group/link inline-flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4AF37]">
                       <span className="w-10 h-10 rounded-full border border-[#D4AF37]/20 flex items-center justify-center group-hover/link:bg-[#D4AF37] group-hover/link:text-[#1A3C34] transition-all duration-500">
                          <ArrowRight className="h-4 w-4" />
                       </span>
                       Explore Ethics
                    </Link>
                 </div>
                 
                 <div className="w-full lg:w-36 h-36 lg:h-32 rounded-2xl overflow-hidden border border-white/10 transition-all duration-700 flex-shrink-0">
                    <img 
                       src="https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=1974&auto=format&fit=crop"
                       className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-110 transition-all duration-1000 object-center"
                    />
                 </div>
              </div>
            </motion.div>

            {/* 03. Yield Engineering - The Lower Small Card */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group relative min-h-[480px] rounded-[3rem] bg-white border border-[#1A3C34]/10 p-8 lg:p-12 flex flex-col justify-between overflow-hidden hover:shadow-[0_40px_80px_-15px_rgba(26,60,52,0.05)] transition-all duration-700"
            >
              <div className="relative z-10 flex justify-between items-start">
                 <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center">
                       <Zap className="h-7 w-7 text-[#D4AF37]" />
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-serif font-light text-[#1A3C34] leading-[1.1] lg:leading-[0.95] tracking-tighter py-2">
                       Yield <br />
                       <span className="italic text-[#D4AF37] pr-4">Engineering</span>
                    </h3>
                 </div>
                 <div className="text-right">
                    <span className="text-5xl font-serif text-[#1A3C34] leading-tight block py-1">+34.2%</span>
                    <span className="block text-[8px] uppercase tracking-widest text-[#1A3C34]/40 font-bold">Profit Target</span>
                 </div>
              </div>

              <div className="relative z-10 mt-auto pt-8 space-y-6">
                 <div className="flex items-center gap-4">
                    <div className="flex-1 h-[2px] bg-[#1A3C34]/5 relative">
                       <motion.div 
                          className="absolute inset-y-0 left-0 bg-[#D4AF37]"
                          initial={{ width: 0 }}
                          whileInView={{ width: "88%" }}
                          transition={{ duration: 1.5 }}
                       />
                    </div>
                    <span className="text-xs font-bold text-[#1A3C34]">Effindex: 0.88</span>
                 </div>

                 <div className="flex justify-between items-end">
                    <div className="flex gap-1">
                       {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-1 h-8 bg-[#1A3C34]/5 rounded-full overflow-hidden">
                             <motion.div 
                                className="w-full bg-[#D4AF37]"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${20 + i * 20}%` }}
                                transition={{ duration: 1, delay: i * 0.1 }}
                             />
                          </div>
                       ))}
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
