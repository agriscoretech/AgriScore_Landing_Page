"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import * as Lucide from "lucide-react"

const { 
  ShieldCheck, 
  Zap, 
  Globe, 
  Cpu, 
  Microscope, 
  Sparkles, 
  Linkedin,
  Mail 
} = Lucide as any

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
  </svg>
)

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      <Navbar />

      {/* 1. The Call to Greatness (Hero) */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop" 
             alt="Deep Space Technology" 
             className="w-full h-full object-cover grayscale"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>

        <div className="container relative z-10 px-6">
           <div className="max-w-4xl mx-auto text-center space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex justify-center">
                  <span className="px-6 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-[10px] uppercase tracking-[0.5em] text-emerald-500 font-bold backdrop-blur-md">
                    Scaling Agricultural Resilience
                  </span>
                </div>
                <h1 className="text-6xl md:text-9xl font-serif font-light leading-[0.9] tracking-tighter">
                  Join the Mission. <br />
                  <span className="italic">Shape the Future.</span>
                </h1>
              </motion.div>

              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-2xl mx-auto"
              >
                Join the mission to redefine excellence in precision agriculture. We are engineering the biological resilience of our planet for future generations.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="flex items-center justify-center space-x-8"
              >
                <div className="h-[1px] w-12 bg-white/20" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold italic">Established 2026</span>
                <div className="h-[1px] w-12 bg-white/20" />
              </motion.div>
           </div>
        </div>
      </section>

      {/* 2. The Story: The Biological Imperative segment */}
      <section className="py-40 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-black/40">Our Narrative</span>
              <h2 className="text-5xl md:text-7xl font-serif font-light leading-tight">
                When the Earth <br /> <span className="italic">whispers,</span> <br /> we translate.
              </h2>
              <div className="space-y-6 text-xl font-light text-black/60 leading-loose">
                <p>
                  AgriScore started with a radical realization: the most sophisticated technology on Earth isn't code, it's carbon. 
                </p>
                <p>
                  Our story began in the dust of neglected fields. We saw the disconnect between human intuition and the silent language of the soil. We set out to build a bridge—a neural network that spans from the root to the cloud.
                </p>
                <p className="font-serif italic text-black/90">
                  Today, we are the guardians of digital heritage for the world's most elite estates.
                </p>
              </div>
            </div>
            <div className="relative aspect-square">
               <img 
                 src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2670&auto=format&fit=crop" 
                 alt="Microscopic Soil" 
                 className="w-full h-full object-cover grayscale brightness-90 shadow-2xl"
               />
               <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500/10 backdrop-blur-3xl hidden lg:block" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Larger Than Life Opportunities (Cards) */}
      <section className="py-40 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-32">
             <span className="text-[11px] uppercase tracking-[0.5em] text-[#D4AF37] font-bold">Mission Architecture</span>
             <h2 className="text-5xl md:text-6xl font-serif font-light">Lead the National Transformation</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border border-white/10 overflow-hidden">
             {[
               {
                 title: "Soil Science & Bio-Security",
                 icon: <Microscope className="h-6 w-6" />,
                 desc: "Restoring soil health and securing our bio-heritage. You aren't just a scientist; you are a guardian of India's agricultural future.",
                 tags: ["Bio-Restoration", "Soil Intelligence"]
               },
               {
                 title: "Mission Infrastructure",
                 icon: <Cpu className="h-6 w-6" />,
                 desc: "Building the digital backbone of the mission. Engineer systems that translate field data into actionable insights for millions of farmers.",
                 tags: ["Data Engineering", "Agricultural AI"]
               },
               {
                 title: "National Outreach",
                 icon: <Globe className="h-6 w-6" />,
                 desc: "Bringing the mission to the field. Partner with local communities and estates to implement toxin-free farming at scale.",
                 tags: ["Farmer Relations", "Mission Strategy"]
               }
             ].map((item, i) => (
               <div key={i} className="p-12 space-y-12 bg-black hover:bg-white/[0.02] transition-colors group">
                  <div className="text-[#D4AF37] group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-serif font-light">{item.title}</h3>
                    <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[9px] uppercase tracking-widest text-white/20 border border-white/5 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 4. The Elite Standard (Culture) */}
      <section className="py-40 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-40 opacity-5">
           <Zap className="h-[600px] w-[600px] text-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="max-w-4xl mx-auto space-y-24">
              <div className="space-y-8">
                 <h2 className="text-6xl md:text-8xl font-serif font-light italic leading-tight">
                    We hire <br /> the <span className="not-italic">Obsessed.</span>
                 </h2>
                 <p className="text-2xl text-white/50 font-light leading-relaxed">
                    At AgriScore, "work-life balance" means your work gives life more meaning. We are a collection of polymaths who see beauty in a binary stream and poetry in a harvest cycle.
                 </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                 <div className="space-y-6 border-l border-white/10 pl-8">
                    <h4 className="text-xl font-medium">True Autonomy</h4>
                    <p className="text-white/40 font-light">We don't track hours. We track impact. You are the architect of your own mission within the hive.</p>
                 </div>
                 <div className="space-y-6 border-l border-white/10 pl-8">
                    <h4 className="text-xl font-medium">Exponential Growth</h4>
                    <p className="text-white/40 font-light">You will work with tools that don't exist for the general public. Our R&D budget is your playground.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. Founders Section */}
      <section className="py-40 border-y border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl space-y-6">
              <h2 className="text-5xl md:text-7xl font-serif font-light tracking-tight">The <span className="italic">Architects</span></h2>
              <p className="text-xl text-white/40 font-light">Leading the convergence of silicon and soil.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            {/* Soham Das */}
            <div className="space-y-8 group max-w-sm mx-auto w-full">
              <div className="aspect-[4/5] relative overflow-hidden bg-white/5 border border-white/10 rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/team/soham.jpg" 
                  alt="Soham Das" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-light">Soham Das</h3>
                  <p className="text-emerald-500 uppercase tracking-[0.3em] text-[10px] mt-2">Director & Founder</p>
                </div>
                <div className="flex gap-3">
                  <a href="mailto:soham@myagriscore.com" className="p-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                    {Mail && <Mail className="h-3.5 w-3.5" />}
                  </a>
                  <a href="https://x.com/insohamdas" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                    <XIcon className="h-3.5 w-3.5" />
                  </a>
                  <a href="https://www.linkedin.com/in/sohamdasin?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                    {Linkedin && <Linkedin className="h-3.5 w-3.5" />}
                  </a>
                </div>
              </div>
            </div>

            {/* Piyush */}
            <div className="space-y-8 group max-w-sm mx-auto w-full">
              <div className="aspect-[4/5] relative overflow-hidden bg-white/5 border border-white/10 rounded-[2rem] grayscale hover:grayscale-0 transition-all duration-700">
                <Image 
                  src="/team/piyush.jpg" 
                  alt="Piyush" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-serif font-light">Piyush</h3>
                  <p className="text-emerald-500 uppercase tracking-[0.3em] text-[10px] mt-2">Director & Co-Founder</p>
                </div>
                <div className="flex gap-3">
                  <a href="mailto:piyush@myagriscore.com" className="p-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                    {Mail && <Mail className="h-3.5 w-3.5" />}
                  </a>
                  <a href="https://x.com/piyushsingh0069?s=11" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                    <XIcon className="h-3.5 w-3.5" />
                  </a>
                  <a href="https://www.linkedin.com/in/piyush1119?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full border border-white/10 hover:bg-white hover:text-black transition-all">
                    {Linkedin && <Linkedin className="h-3.5 w-3.5" />}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="py-40 px-6 relative overflow-hidden text-white">
        {/* Cinematic Backdrop */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1557233519-be3442ba7843?q=80&w=2670&auto=format&fit=crop" 
             alt="Future Agriculture" 
             className="w-full h-full object-cover grayscale opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12"
              >
                <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 backdrop-blur-md">
                   <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                   <span className="text-[10px] uppercase tracking-[0.5em] text-emerald-500/80 font-bold">Mission Enrollment Open</span>
                </div>

                <div className="space-y-6">
                  <h2 className="text-6xl md:text-8xl font-serif font-light leading-[1.1] tracking-tighter">
                    Join the <br /> 
                    <span className="italic text-[#D4AF37]">Architects.</span>
                  </h2>
                  <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-xl">
                    We aren't just building a company; we are engineering the biological resilience of our planet. Your legacy starts at the root.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                   <div className="space-y-2">
                      <span className="text-3xl font-serif text-[#D4AF37] italic">01</span>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Uncompromising Quality</p>
                   </div>
                   <div className="space-y-2">
                      <span className="text-3xl font-serif text-[#D4AF37] italic">02</span>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Radical Inclusion</p>
                   </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white/[0.03] border border-white/10 backdrop-blur-xl p-12 md:p-20 rounded-[3rem] space-y-10"
              >
                <div className="space-y-4">
                  <h3 className="text-3xl font-serif font-light">Initiate Your Journey</h3>
                  <p className="text-white/40 font-light">Send us your narrative. We are more interested in your obsession than your resume.</p>
                </div>

                <div className="space-y-6">
                  <Link 
                    href="/apply"
                    className="group/btn relative w-full h-20 rounded-full bg-[#D4AF37] text-[#1A3C34] text-[12px] uppercase tracking-[0.4em] font-bold hover:bg-white transition-all shadow-2xl flex items-center justify-center overflow-hidden"
                  >
                     <span className="relative z-10">Apply Now</span>
                     <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                  </Link>

                  <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Direct Channel</span>
                    <a href="mailto:careers@myagriscore.com" className="text-[#D4AF37] hover:text-white transition-colors">
                      careers@myagriscore.com
                    </a>
                  </div>
                </div>

                <div className="pt-8 flex justify-center gap-8 opacity-20">
                   <Microscope className="h-6 w-6" />
                   <Cpu className="h-6 w-6" />
                   <Globe className="h-6 w-6" />
                </div>
              </motion.div>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
