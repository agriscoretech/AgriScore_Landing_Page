"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import * as Lucide from "lucide-react"

export default function Patents() {
  const [currentDate, setCurrentDate] = useState("January 15, 2026")

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    }))
  }, [])

  const { 
    Cpu, 
    Shield, 
    Award, 
    Search, 
    FileText, 
    Scale,
    CircleDashed,
    RefreshCcw,
    Zap
  } = Lucide as any

  const PendingIcon = CircleDashed || RefreshCcw || Award

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      {/* Background mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] -ml-64 -mt-64" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] -mr-64 -mb-64" />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-32 md:pt-48 pb-20 md:pb-32 relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 font-bold block">Intellectual Property</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-light mb-8 leading-tight italic">
            Patent <span className="not-italic text-white/90">Portfolio</span>
          </h1>
          
          <p className="text-white/40 text-sm md:text-base max-w-2xl mb-20 font-light tracking-wide">
            Our commitment to transparency and innovation through a public registry of protected agricultural technologies.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-10">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-8">Navigation</h3>
                  <nav className="flex flex-col gap-4">
                    {[
                      { id: "registry", label: "ACTIVE REGISTRY" },
                      { id: "licensing", label: "LICENSING" }
                    ].map((item) => (
                      <a 
                        key={item.id} 
                        href={`#${item.id}`} 
                        className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-all duration-300 flex items-center gap-3 group"
                      >
                        <span className="h-[1px] w-0 bg-white group-hover:w-4 transition-all duration-300" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
                
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  {Award && <Award className="w-5 h-5 text-white/20 mb-4" />}
                  <p className="text-xs text-white/40 leading-relaxed">
                    Innovation protection is central to our mission of advancing global food security.
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="space-y-24 text-white/70 font-light leading-relaxed text-base md:text-lg">
              <section id="registry" className="space-y-12">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-widest text-white/60 font-medium">
                  {Search && <Search className="w-3 h-3" />}
                  ACTIVE REGISTRY
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-white font-serif leading-relaxed italic">
                    Status Report: Current Portfolio
                  </p>
                  
                  <div className="relative group overflow-hidden p-8 md:p-12 rounded-[2rem] border border-white/10 bg-white/[0.02] flex flex-col items-center justify-center text-center">
                     <div className="absolute inset-0 bg-radial-gradient from-white/[0.03] to-transparent opacity-50" />
                     {PendingIcon && <PendingIcon className="w-12 h-12 text-white/10 mb-6 animate-pulse" />}
                     <h3 className="text-xl text-white font-serif italic mb-4">No Active Patents</h3>
                     <p className="text-sm text-white/40 max-w-md leading-relaxed">
                        As of <span className="text-white">{currentDate}</span>, Agriscore Private Limited does not hold any active patent registrations. 
                        We are currently in the research and development phase of several proprietary technologies.
                     </p>
                  </div>
                </div>
              </section>

              <section id="licensing" className="space-y-6 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">01</span>
                  <div className="space-y-6">
                    <h2 className="text-white text-3xl font-serif italic">IP Licensing <span className="not-italic">Framework</span></h2>
                    <p>
                      Our intellectual property strategy is built on the principles of "Open Innovation." Once patents are granted, we aim to offer licensing terms that prioritize smallholder farmers and agricultural cooperatives to ensure equitable access to technology.
                    </p>
                    <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
                       <p className="text-sm text-white/40 leading-relaxed italic">
                         "To protect innovation is to feed the future. Our IP policy ensures that technology serves humanity, not just shareholders."
                       </p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="pt-24 border-t border-white/10 mt-32">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-[10px] uppercase tracking-[0.3em] font-bold">
                  <div className="space-y-4">
                    <span className="text-white/20 block">Protocol Entity</span>
                    <span className="text-white/60 leading-relaxed text-balance">Agriscore Private Limited<br />Compliance Division</span>
                  </div>
                  <div className="space-y-4">
                    <span className="text-white/20 block">Jurisdiction</span>
                    <span className="text-white/60 leading-relaxed text-balance">Kolkata, West Bengal<br />Republic of India</span>
                  </div>
                  <div className="space-y-4 md:text-right">
                    <span className="text-white/20 block">Audit Status</span>
                    <span className="text-white/60 leading-relaxed text-balance">Revision 1.0.0<br />Last Updated: Jan 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
