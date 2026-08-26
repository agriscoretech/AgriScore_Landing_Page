"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import * as Lucide from "lucide-react"

export default function PrivacyNotice() {
  const { 
    Shield, 
    Lock, 
    Eye, 
    Database, 
    Share2, 
    Smartphone, 
    Globe, 
    MessageSquare, 
    CircleAlert, 
    AlertCircle,
    FileText,
    Users
  } = Lucide as any

  const AlertIcon = CircleAlert || AlertCircle || Shield

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Background mesh */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] -ml-32 -mt-32" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] -mr-32 -mb-32" />
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-32 md:pt-48 pb-32 relative">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 font-bold block">Security Protocol</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light mb-8 leading-tight italic">
            Privacy <span className="not-italic text-white/90">Notice</span>
          </h1>

          <p className="text-white/40 text-sm md:text-base max-w-2xl mb-20 font-light tracking-wide">
            Your trust is our most valuable asset. This notice outlines our rigorous standards for data protection and your fundamental privacy rights.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
            {/* Sidebar TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-10">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-8">Navigation</h3>
                  <nav className="flex flex-col gap-4">
                    {[
                      { id: "1", label: "DATA COLLECTION" },
                      { id: "2", label: "DATA PROCESSING" },
                      { id: "3", label: "DATA SHARING" },
                      { id: "4", label: "TRACKING TECH" },
                      { id: "8", label: "SECURITY STEPS" },
                      { id: "10", label: "YOUR RIGHTS" },
                      { id: "13", label: "CONTACT DPO" }
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
                  {Lock && <Lock className="w-5 h-5 text-white/20 mb-4" />}
                  <p className="text-xs text-white/40 leading-relaxed">
                    All data is encrypted following industry-standard AES-256 protocols.
                  </p>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="space-y-24 text-white/70 font-light leading-relaxed text-base md:text-lg">
              <section className="space-y-8">
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-white font-serif leading-relaxed italic">
                    This Privacy Notice for AGRISCORE PRIVATE LIMITED ("we," "us," or "our"), describes how we process your personal information.
                  </p>
                  <p>
                    Reading this will help you understand your privacy rights and choices. If you do not agree with our policies, please do not use our Services.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                       <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Scope</p>
                       <p className="text-sm">Visit our website at <a href="https://myagriscore.com" className="text-white underline underline-offset-4 decoration-white/20">myagriscore.com</a></p>
                    </div>
                    <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                       <p className="text-[10px] uppercase tracking-widest font-bold text-white/40 mb-2">Engagement</p>
                       <p className="text-sm">Interactions via marketing, events, or official support.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="space-y-12 bg-white/[0.03] p-8 md:p-16 rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  {Shield && <Shield size={120} />}
                </div>
                <h2 className="text-white text-3xl font-serif italic mb-8">Summary of <span className="not-italic">Key Points</span></h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <p className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
                       <Database className="w-4 h-4 text-white/30" /> COLLECTION
                    </p>
                    <p className="text-sm leading-relaxed text-white/50">We process information depending on how you interact with us and the features you use.</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
                       <Eye className="w-4 h-4 text-white/30" /> SENSITIVE DATA
                    </p>
                    <p className="text-sm leading-relaxed text-white/50">We do not process sensitive personal information like racial or ethnic origins.</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
                       <Share2 className="w-4 h-4 text-white/30" /> THIRD PARTIES
                    </p>
                    <p className="text-sm leading-relaxed text-white/50">We do not collect any information from third parties unless explicitly stated.</p>
                  </div>
                  <div className="space-y-3">
                    <p className="text-white font-bold text-sm tracking-wide flex items-center gap-2">
                       <Lock className="w-4 h-4 text-white/30" /> SECURITY
                    </p>
                    <p className="text-sm leading-relaxed text-white/50">We have adequate organizational and technical processes in place to protect your data.</p>
                  </div>
                </div>
              </section>

              <section id="1" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                   <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">01</span>
                   <div className="space-y-10 w-full">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic mb-8 leading-snug">What information <span className="not-italic">we collect</span></h2>
                    
                    <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.01]">
                      <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Personal Information Disclosed</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-8">
                        {["Names", "Phone numbers", "Email addresses", "Mailing addresses", "Usernames", "Passwords", "Billing addresses"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-white/40">
                            <div className="w-1 h-1 bg-white/20 rounded-full" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                       <div className="flex-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                          <p className="text-white font-bold text-xs mb-2">GOOGLE API</p>
                          <p className="text-sm text-white/40">Adherence to Google API Services User Data Policy and Limited Use requirements.</p>
                       </div>
                       <div className="flex-1 p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                          <p className="text-white font-bold text-xs mb-2">SOCIAL LOGINS</p>
                          <p className="text-sm text-white/40">Optional registration using existing social media account details.</p>
                       </div>
                    </div>
                   </div>
                </div>
              </section>

              <section id="2" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                   <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">02</span>
                   <div className="space-y-8">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic mb-8 leading-snug">How we <span className="not-italic">process data</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Facilitate account creation",
                        "Respond to inquiries",
                        "Send administrative info",
                        "Request user feedback",
                        "Deliver targeted advertising",
                        "Protect our Services",
                        "Evaluate usage trends",
                        "Improve user experience"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-sm bg-white/[0.02] p-4 rounded-xl border border-white/5 group/item cursor-default">
                           <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[10px] font-bold text-white/20 group-hover/item:bg-white/10 group-hover/item:text-white transition-all">
                             {i + 1}
                           </div>
                           <p className="text-white/60 group-hover/item:text-white">{item}</p>
                        </div>
                      ))}
                    </div>
                   </div>
                </div>
              </section>

              <section id="4" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                   <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">04</span>
                   <div className="space-y-8 w-full">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic mb-8 leading-snug">Tracking <span className="not-italic">Technologies</span></h2>
                    <div className="p-10 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-md">
                       <p className="mb-6">We use cookies and similar technologies (like web beacons and pixels) to gather information when you interact with our Services.</p>
                       <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                          {Globe && <Globe className="w-5 h-5 text-white/30" />}
                          <div>
                            <p className="text-white font-bold text-xs">Google Analytics</p>
                            <p className="text-xs text-white/40 mt-1">Visit <a href="https://tools.google.com/dlpage/gaoptout" className="underline underline-offset-4 decoration-white/20">Google Opt-out</a> to disable tracking.</p>
                          </div>
                       </div>
                    </div>
                   </div>
                </div>
              </section>

              <section id="8" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                   <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">08</span>
                   <div className="space-y-8">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic mb-8 leading-snug">Safety <span className="not-italic">& Security</span></h2>
                    <div className="p-10 rounded-[2rem] border border-white/10 bg-white/[0.03] flex items-center gap-10">
                       <div className="hidden md:flex w-20 h-20 rounded-full bg-white/5 items-center justify-center shrink-0">
                          {Shield && <Shield className="w-8 h-8 text-white/20" />}
                       </div>
                       <p className="text-sm leading-relaxed">
                         We use organizational and technical measures designed to protect your information. However, despite our efforts, no electronic transmission over the Internet can be guaranteed to be 100% secure. Transmission is at your own risk.
                       </p>
                    </div>
                   </div>
                </div>
              </section>

              <section id="10" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                   <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">10</span>
                   <div className="space-y-10">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic mb-8 leading-snug">Your <span className="not-italic">Privacy Rights</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <h3 className="text-white font-bold uppercase text-[10px] tracking-widest bg-white/5 w-fit px-3 py-1 rounded">Consent</h3>
                          <p className="text-sm text-white/50">You have the right to withdraw your consent at any time. This will not affect the lawfulness of processing before its withdrawal.</p>
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-white font-bold uppercase text-[10px] tracking-widest bg-white/5 w-fit px-3 py-1 rounded">Marketing</h3>
                          <p className="text-sm text-white/50">You can unsubscribe from marketing communications by clicking our unsubscribe link or replying "STOP" to SMS.</p>
                       </div>
                    </div>
                   </div>
                </div>
              </section>

              <section id="13" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                   <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">13</span>
                   <div className="space-y-8 w-full">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic mb-8 leading-snug">Contact <span className="not-italic">DPO</span></h2>
                    <p className="text-sm md:text-base">For questions or comments about this notice, you may contact our Data Protection Officer by email:</p>
                    <a 
                      href="mailto:dpo@myagriscore.com" 
                      className="group/mail flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 p-6 md:p-10 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 w-full overflow-hidden"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover/mail:scale-110 transition-transform duration-500 shrink-0">
                        {MessageSquare && <MessageSquare className="w-5 h-5 text-white/60" />}
                      </div>
                      <div className="text-center sm:text-left w-full overflow-hidden">
                        <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-1">Send an Enquiry</p>
                        <p className="text-lg sm:text-xl md:text-2xl text-white font-serif italic break-all sm:break-normal">dpo@myagriscore.com</p>
                      </div>
                    </a>
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
