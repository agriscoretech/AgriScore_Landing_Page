"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Leaf, Shield, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1A3C34] overflow-x-hidden">
      <Navbar />

      {/* Cinematic Hero Header */}
      <section className="relative h-[90vh] flex items-center justify-center bg-black overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1600150806237-a7dffed6b53c?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Soil Texture" 
            className="w-full h-full object-cover opacity-70 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-[#FAF9F6]" />
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="space-y-6"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/60 font-bold block mb-4 md:mb-0 drop-shadow-lg">The Heart of Indian Agriculture</span>
            <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-serif font-light text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Our <span className="italic text-[#D4AF37]">Mission</span>
            </h1>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
        </motion.div>
      </section>

      {/* The Narrative Part 1: The Soil Restoration */}
      <section className="py-24 md:py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2 }}
             className="space-y-8 md:space-y-10 text-center md:text-left"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D4AF37] block">Chapter I: Soil Sovereignty</span>
            <h2 className="text-4xl md:text-7xl font-serif font-light leading-[1.1]">Restoring <br /><span className="italic">Mother Earth</span></h2>
            <p className="text-lg md:text-xl text-[#1A3C34]/60 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              Across the vast plains of India, our soil is tired. We are on a mission to save the land by eliminating chemical dependency and restoring biological vitality—ensuring every acre thrives for generations.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-6 pt-4">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1A3C34]/10 flex items-center justify-center">
                <Leaf className="h-5 w-5 text-[#D4AF37]" />
              </div>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Chemical-Free Integrity</span>
            </div>
          </motion.div>
          
          <div className="relative aspect-[4/5] rounded-2xl md:rounded-sm overflow-hidden shadow-2xl scale-95 md:scale-100">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1597474417024-3ca3baa9fb13?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
              className="w-full h-full object-cover"
              alt="Indian farmer in mustard field"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
          </div>
        </div>
      </section>

      {/* Parallax Interstitial */}
      <section className="relative h-[60vh] bg-black overflow-hidden flex items-center justify-center">
         <motion.div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2670&auto=format&fit=crop" 
              className="w-full h-full object-cover grayscale"
              alt="Aerial farm"
            />
         </motion.div>
         <div className="relative z-10 text-center">
            <h3 className="text-white text-3xl md:text-5xl font-serif font-light italic tracking-tight opacity-80">
              "We do not inherit the land from our ancestors; we borrow it from our children."
            </h3>
         </div>
      </section>

      {/* The Narrative Part 2: The Yield Revolution */}
      <section className="py-24 md:py-40 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="order-2 md:order-1 relative aspect-square rounded-full overflow-hidden border-[10px] md:border-[20px] border-[#FAF9F6] shadow-xl scale-90 md:scale-100">
             <img 
               src="https://images.unsplash.com/photo-1708417149058-9f185f97fb76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
               alt="Bountiful Harvest in India"
               className="w-full h-full object-cover"
             />
          </div>

          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1.2 }}
             className="space-y-8 md:space-y-10 order-1 md:order-2 text-center md:text-left"
          >
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#D4AF37] block">Chapter II: Economic Empowerment</span>
            <h2 className="text-4xl md:text-7xl font-serif font-light leading-[1.1]">Maximizing <br /><span className="italic">Every Acre</span></h2>
            <p className="text-lg md:text-xl text-[#1A3C34]/60 font-light leading-relaxed max-w-lg mx-auto md:mx-0">
              Our technology is built specifically for the Indian farmer. By reducing expensive chemical inputs and optimizing yield through biological intelligence, we ensure farming remains a dignified and profitable legacy for the nation.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 pt-4 justify-center md:justify-start">
              <div className="flex items-center space-x-4">
                <Shield className="h-5 w-5 md:h-6 md:w-6 text-[#D4AF37]" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">+35% Profitability</span>
              </div>
              <div className="flex items-center space-x-4">
                <Heart className="h-5 w-5 md:h-6 md:w-6 text-[#D4AF37]" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Pesticide-Free</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Invitation */}
      <section className="py-24 md:py-40 bg-[#1A3C34] text-white text-center">
         <div className="max-w-4xl mx-auto space-y-8 md:space-y-12 px-6">
            <h2 className="text-4xl md:text-8xl font-serif font-light tracking-tight italic leading-tight">Rooted in India. <br className="md:hidden" /> Growing the Nation.</h2>
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed">
               We are partnering with Krishi Vigyan Kendras and progressive Indian farmers for the 2026 monsoon cycle. Secure a toxin-free future for your family and your land.
            </p>
            <Link href="/contact" className="inline-block mt-8">
               <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-10 py-5 md:px-12 md:py-6 bg-[#D4AF37] text-[#1A3C34] rounded-full text-[11px] md:text-[12px] uppercase tracking-[0.3em] font-bold shadow-2xl transition-all"
               >
                  Join the Mission <ArrowRight className="ml-4 h-4 w-4" />
               </motion.button>
            </Link>
         </div>
      </section>

      <Footer />
    </main>
  )
}
