"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, MapPin, Globe, ShieldCheck } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-[#1A3C34] overflow-x-hidden">
      <Navbar />

      {/* Cinematic Header */}
      <section className="relative pt-40 pb-20 px-6 bg-black text-white">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
               src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2600&auto=format&fit=crop" 
               alt="Aerial Field"
               className="w-full h-full object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-[#FAF9F6]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-6"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-[#D4AF37] font-bold">The AgriScore Entrance</span>
            <h1 className="text-6xl md:text-9xl font-serif font-light leading-tight">
              Contact <span className="italic">Us</span>
            </h1>
            <p className="text-xl text-white/40 max-w-2xl font-light leading-relaxed">
              We operate at the intersection of biological heritage and computational intelligence. Access to the AgriScore ecosystem is selective, ensuring the integrity of our global network.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mt-12 flex flex-wrap gap-12 border-t border-white/10 pt-12"
            >
               <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Secure Line Verified</span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Kolkata HQ: Operational</span>
               </div>
               <div className="flex items-center gap-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold">Cycle: Monsoon 2026</span>
               </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-light italic">Connect with the Mission</h2>
              <p className="text-lg text-[#1A3C34]/60 font-light leading-relaxed">
                Whether you are managing a heritage estate in Punjab or a high-yield operation in India, our team of bio-engineers and data scientists are ready to integrate with your workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <a 
                href="https://whatsapp.com/channel/0029VbC5yhMGE56kIAeyBi3K" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="space-y-4 group block"
              >
                 <div className="w-12 h-12 rounded-full border border-[#1A3C34]/10 flex items-center justify-center group-hover:bg-[#1A3C34] group-hover:text-white transition-all">
                    <MessageCircle className="h-5 w-5" />
                 </div>
                 <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37]">Secure Chat</h4>
                 <p className="text-sm font-medium">WhatsApp Integrated</p>
              </a>

              <a href="mailto:support@myagriscore.com" className="space-y-4 group block">
                 <div className="w-12 h-12 rounded-full border border-[#1A3C34]/10 flex items-center justify-center group-hover:bg-[#1A3C34] group-hover:text-white transition-all">
                    <Mail className="h-5 w-5" />
                 </div>
                 <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37]">Neural Mail</h4>
                 <p className="text-sm font-medium">support@myagriscore.com</p>
              </a>

              <a 
                href="https://maps.app.goo.gl/1ikWFwJ1Mh1k9Z5a9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="space-y-4 group block"
              >
                 <div className="w-12 h-12 rounded-full border border-[#1A3C34]/10 flex items-center justify-center group-hover:bg-[#1A3C34] group-hover:text-white transition-all">
                    <Globe className="h-5 w-5" />
                 </div>
                 <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#D4AF37]">Mission HQ</h4>
                 <p className="text-sm font-medium">Kolkata, West Bengal, India</p>
              </a>
            </div>

            <div className="p-8 bg-[#1A3C34] text-white rounded-sm space-y-4 relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <ShieldCheck className="h-20 w-20" />
               </div>
               <h3 className="text-xl font-serif italic">The Integrity Guarantee</h3>
               <p className="text-sm text-white/60 font-light leading-relaxed">
                  All communications are encrypted using our proprietary soil-to-cloud security system. Your data inheritance remains yours, forever.
               </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-12">
               <div className="space-y-1">
                  <div className="text-3xl font-serif text-[#1A3C34]">12</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">State Hubs</div>
               </div>
               <div className="space-y-1">
                  <div className="text-3xl font-serif text-[#1A3C34]">500+</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">Partner Estates</div>
               </div>
               <div className="space-y-1">
                  <div className="text-3xl font-serif text-[#1A3C34]">24/7</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">Soil Support</div>
               </div>
               <div className="space-y-1">
                  <div className="text-3xl font-serif text-[#1A3C34]">Zero</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF37] font-bold">Chemical Input</div>
               </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-white p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-sm border border-[#1A3C34]/5"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Full Legal Name</label>
                <Input className="border-0 border-b border-[#1A3C34]/10 rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-[#1A3C34] transition-all bg-transparent italic font-serif text-lg" placeholder="Estate Manager or Owner" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Communication ID</label>
                  <Input className="border-0 border-b border-[#1A3C34]/10 rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-[#1A3C34] bg-transparent" placeholder="Email or Phone" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Estate Location</label>
                  <Input className="border-0 border-b border-[#1A3C34]/10 rounded-none px-0 py-6 focus-visible:ring-0 focus-visible:border-[#1A3C34] bg-transparent" placeholder="Region / Country" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Objective</label>
                <Textarea className="border-1 border-[#1A3C34]/10 rounded-none p-4 focus-visible:ring-0 focus-visible:border-[#1A3C34] bg-neutral-50 min-h-[150px]" placeholder="Briefly describe your agricultural vision..." />
              </div>

              <Button className="w-full bg-[#1A3C34] hover:bg-[#1A3C34]/90 text-white rounded-full h-16 text-[12px] uppercase tracking-[0.4em] font-bold transition-transform active:scale-95">
                Submit Inquiry
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
