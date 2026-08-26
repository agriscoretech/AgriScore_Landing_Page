"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import * as Lucide from "lucide-react"

export default function GeneticRights() {
  const { 
    Dna, 
    Shield, 
    Globe, 
    Lock, 
    FileText, 
    Scale,
    CircleAlert,
    AlertCircle,
    Database,
    GripVertical
  } = Lucide as any

  const AlertIcon = CircleAlert || AlertCircle || Shield

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Background mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] -ml-64 -mb-64" />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-32 md:pt-48 pb-32 relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 font-bold block">Legal Protocol - India</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light mb-8 leading-tight italic">
            Genetic <span className="not-italic text-white/90">Rights</span>
          </h1>
          
          <p className="text-white/40 text-sm md:text-base max-w-2xl mb-20 font-light tracking-wide">
            Governing biological sovereignty and Farmers' Rights under the Indian legal framework.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-10">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-8">Navigation</h3>
                  <nav className="flex flex-col gap-4">
                    {[
                      { id: "1", label: "PPV&FR ACT 2001" },
                      { id: "2", label: "FARMERS' RIGHTS" },
                      { id: "3", label: "BIODIVERSITY ACT" },
                      { id: "4", label: "BENEFIT SHARING" }
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
                  {Scale && <Scale className="w-5 h-5 text-white/20 mb-4" />}
                  <p className="text-xs text-white/40 leading-relaxed font-serif italic">
                    "Protecting India's Agricultural Heritage through modern technology."
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="space-y-24 text-white/70 font-light leading-relaxed text-base md:text-lg">
              <section className="space-y-8 text-balance">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-widest text-white/60 font-medium">
                  {Shield && <Shield className="w-3 h-3" />}
                  INDIAN REGULATORY COMPLIANCE
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-white font-serif leading-relaxed italic">
                    AGRISCORE PRIVATE LIMITED operates in strict accordance with the "Sui Generis" system of protection provided by India.
                  </p>
                  <p>
                    The Indian framework uniquely prioritizes the contribution of farmers alongside breeders. Our platform is engineered to facilitate compliance with these national mandates.
                  </p>
                  <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-4">Statutory Reference</p>
                    <p className="text-sm leading-relaxed text-white/80 font-medium">
                      All activities involving crop varieties are governed by the Protection of Plant Varieties and Farmers' Rights Act, 2001 (PPV&FR Act).
                    </p>
                  </div>
                </div>
              </section>

              <section id="1" className="space-y-6 pt-16 border-t border-white/5 group text-pretty">
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">01</span>
                  <div className="space-y-6">
                    <h2 className="text-white text-3xl font-serif italic">PPV&FR Act <span className="not-italic text-sm uppercase tracking-widest opacity-40 ml-4 font-sans">2001</span></h2>
                    <p>
                      We facilitate the registration of "Farmers' Varieties" and "Extant Varieties." Our technical protocols ensure that the DUS (Distinctiveness, Uniformity, and Stability) status of any record is maintained for potential submission to the PPV&FR Authority, Government of India.
                    </p>
                  </div>
                </div>
              </section>

              <section id="2" className="space-y-12 pt-16 border-t border-white/5 group text-pretty">
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">02</span>
                   <div className="space-y-10">
                    <h2 className="text-white text-3xl font-serif italic">Farmers' <span className="not-italic text-sm uppercase tracking-widest opacity-40 ml-4 font-sans">Inalienable Rights</span></h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors relative overflow-hidden">
                          <h3 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Section 39(1)(iv)</h3>
                          <p className="text-sm leading-relaxed text-white/50 italic">
                            A farmer shall be entitled to save, use, sow, resow, exchange, share, or sell his farm produce including seed of a variety protected under this Act.
                          </p>
                       </div>
                       <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors relative overflow-hidden">
                          <h3 className="text-white font-bold mb-4 uppercase text-[10px] tracking-widest">Digital Safeguard</h3>
                          <p className="text-sm leading-relaxed text-white/50 italic">
                            Agriscore utilizes data to empower farmers, never to restrict their statutory right to re-sow or exchange seeds.
                          </p>
                       </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="3" className="space-y-6 pt-16 border-t border-white/5 group text-pretty">
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">03</span>
                  <div className="space-y-6">
                    <h2 className="text-white text-3xl font-serif italic">Biological <span className="not-italic text-sm uppercase tracking-widest opacity-40 ml-4 font-sans">Diversity Act</span></h2>
                    <p>
                      Access to Indian biological resources is managed under the Biological Diversity Act, 2002. Any commercial utilization derived from Indian genetic material is subject to the guidelines of the National Biodiversity Authority (NBA).
                    </p>
                    <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.02] flex flex-col md:flex-row items-center gap-10">
                       {Globe && <Globe className="w-16 h-16 text-white/5" />}
                       <div className="space-y-4">
                          <p className="text-xl text-white font-serif italic">Benefit Sharing (ABS)</p>
                          <p className="text-sm text-white/40 leading-relaxed">
                            We support fair Access and Benefit Sharing (ABS) to ensure that agricultural innovation contributes back to the National Gene Fund of India.
                          </p>
                       </div>
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
