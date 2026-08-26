"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import * as Lucide from "lucide-react"

export default function TermsAndConditions() {
  const { 
    Shield, 
    Scale, 
    FileText, 
    Zap, 
    Lock, 
    Globe, 
    MessageSquare, 
    AlertCircle, 
    HelpCircle,
    CircleAlert,
    CircleHelp
  } = Lucide as any

  // Fallbacks for icon name changes in newer versions
  const AlertIcon = CircleAlert || AlertCircle || Shield
  const SupportIcon = CircleHelp || HelpCircle || MessageSquare
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      <Navbar />
      
      {/* Background elements */}
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
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/40 font-bold block">Legal Protocol</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-light mb-8 leading-tight italic">
            Terms and <span className="not-italic text-white/90">Condition</span>
          </h1>
          
          <p className="text-white/40 text-sm md:text-base max-w-2xl mb-20 font-light tracking-wide">
            Our legal framework ensures transparency, protection, and excellence in every interaction. Please review our terms of use carefully.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-20">
            {/* Sidebar / Sticky TOC */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 space-y-10">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-8">Navigation</h3>
                  <nav className="flex flex-col gap-4">
                    {[
                      "OUR SERVICES",
                      "INTELLECTUAL PROPERTY",
                      "USER REPRESENTATIONS",
                      "PROHIBITED ACTIVITIES",
                      "GOVERNING LAW",
                      "DISPUTE RESOLUTION",
                      "DISCLAIMER",
                      "CONTACT US"
                    ].map((item, index) => (
                      <a 
                        key={index} 
                        href={`#${index + 1}`} 
                        className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-all duration-300 flex items-center gap-3 group"
                      >
                        <span className="h-[1px] w-0 bg-white group-hover:w-4 transition-all duration-300" />
                        {item}
                      </a>
                    ))}
                  </nav>
                </div>
                
                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <SupportIcon className="w-5 h-5 text-white/20 mb-4" />
                  <p className="text-xs text-white/40 leading-relaxed">
                    Need clarification on our terms? Reach out to our legal department.
                  </p>
                  <a href="mailto:support@myagriscore.com" className="text-[10px] text-white uppercase tracking-widest font-bold mt-4 block hover:underline">
                    Get Support
                  </a>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="space-y-24 text-white/70 font-light leading-relaxed text-base md:text-lg">
              <section className="space-y-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[10px] uppercase tracking-widest text-white/60 font-medium">
                  {Shield && <Shield className="w-3 h-3" />}
                  AGREEMENT TO OUR LEGAL TERMS
                </div>
                
                <div className="space-y-6">
                  <p className="text-xl md:text-2xl text-white font-serif leading-relaxed italic">
                    We are AGRISCORE PRIVATE LIMITED ("Company," "we," "us," "our").
                  </p>
                  <p>
                    We operate, as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                  </p>
                  <p>
                    These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms.
                  </p>
                  <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                    <p className="text-sm uppercase tracking-[0.2em] font-bold text-white mb-4 flex items-center gap-2">
                       {AlertIcon && <AlertIcon className="w-4 h-4 text-white/40" />}
                       Critical Notice
                    </p>
                    <p className="text-sm leading-relaxed text-white/60">
                      IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
                    </p>
                  </div>
                  <p className="text-sm text-white/30 italic">Last updated January 15, 2026</p>
                </div>
              </section>

              <section id="1" className="space-y-6 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">01</span>
                  <div className="space-y-6">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic leading-snug">Our <span className="not-italic">Services</span></h2>
                    <p>
                      The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
                    </p>
                  </div>
                </div>
              </section>

              <section id="2" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">02</span>
                  <div className="space-y-10">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic leading-snug">Intellectual <span className="not-italic">Property Rights</span></h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                          {Zap && <Zap className="w-6 h-6 text-white/40 mb-6" />}
                          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Our Status</h3>
                          <p className="text-sm leading-relaxed">
                            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics.
                          </p>
                       </div>
                       <div className="p-8 rounded-3xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
                          {FileText && <FileText className="w-6 h-6 text-white/40 mb-6" />}
                          <h3 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Your License</h3>
                          <p className="text-sm leading-relaxed">
                            We grant you a non-exclusive, non-transferable, revocable license to access the Services and download content for personal, non-commercial use only.
                          </p>
                       </div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-white/90 font-medium">Any breach of these Intellectual Property Rights will constitute a material breach and your right to use our Services will terminate immediately.</p>
                      <p>
                        If you wish to make any use of the Services, Content, or Marks other than as set out in this section, please address your request to: <a href="mailto:support@myagriscore.com" className="text-white underline decoration-white/20 underline-offset-4 hover:decoration-white transition-colors">support@myagriscore.com</a>.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="3" className="space-y-6 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">03</span>
                  <div className="space-y-6">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic leading-snug">User <span className="not-italic">Representations</span></h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Legal capacity to comply",
                        "Not a minor in your jurisdiction",
                        "No automated/bot access",
                        "No illegal purposes",
                        "Compliance with all laws"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-sm bg-white/[0.02] p-4 rounded-xl border border-white/5">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              <section id="4" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">04</span>
                  <div className="space-y-8">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic leading-snug">Prohibited <span className="not-italic">Activities</span></h2>
                    <p className="text-white/60">As a user of the Services, you agree not to engage in activities including but not limited to:</p>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        "Systematically retrieving data to compile databases",
                        "Defrauding or misleading other users",
                        "Circumventing security-related features",
                        "Disparaging or harming the Services",
                        "Using information to harass others",
                        "Uploading viruses or malicious code",
                        "Automated use of the systems (scripts/bots)",
                        "Impersonating another user",
                        "Unauthorized framing or linking"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-sm group/item">
                          <span className="text-white/20 text-[10px] group-hover/item:text-white transition-colors">#{i + 1}</span>
                          <p className="text-white/50 group-hover/item:text-white transition-colors">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section id="5" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">05</span>
                  <div className="space-y-8">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic leading-snug">Governing <span className="not-italic">Law</span></h2>
                    <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02] flex items-center gap-8">
                       {Globe && <Globe className="w-12 h-12 text-white/10 hidden md:block" />}
                       <div>
                          <p className="text-xl text-white font-serif italic mb-2">Jurisdiction of India</p>
                          <p className="text-sm text-white/40 leading-relaxed">
                            These Legal Terms shall be governed by and defined in accordance with the laws of India, and you irrevocably consent that the courts of West Bengal, India, shall have exclusive jurisdiction.
                          </p>
                       </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="6" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">06</span>
                  <div className="space-y-8">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic leading-snug">Dispute <span className="not-italic">Resolution</span></h2>
                    <div className="space-y-8">
                       <div className="space-y-4">
                          <h3 className="text-white font-bold uppercase text-[10px] tracking-[0.3em]">Informal Negotiations</h3>
                          <p className="text-sm">Parties agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating arbitration.</p>
                       </div>
                       <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]">
                          {Scale && <Scale className="w-6 h-6 text-white/40 mb-6" />}
                          <h3 className="text-white font-bold mb-4 text-lg">Binding Arbitration</h3>
                          <ul className="space-y-3 text-sm text-white/50">
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Arbitrators</span> <span className="text-white">One (1)</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Seat</span> <span className="text-white">Kolkata, WB, India</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>Language</span> <span className="text-white">English</span></li>
                            <li className="flex justify-between border-b border-white/5 pb-2"><span>ICAC Rules</span> <span className="text-white">European Arbitration Chamber</span></li>
                          </ul>
                       </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="7" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">07</span>
                  <div className="space-y-8">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic leading-snug">Legal <span className="not-italic">Disclosures</span></h2>
                    <div className="space-y-10">
                       <div className="space-y-4">
                          <h3 className="text-white font-bold uppercase text-[10px] tracking-[0.3em]">Disclaimer</h3>
                          <p className="text-[11px] leading-loose text-white/30 uppercase font-mono bg-white/[0.02] p-8 rounded-2xl border border-white/5">
                            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED...
                          </p>
                       </div>
                       <div className="space-y-4">
                          <h3 className="text-white font-bold uppercase text-[10px] tracking-[0.3em]">Liability</h3>
                          <p className="text-sm leading-relaxed">
                            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, OR PUNITIVE DAMAGES...
                          </p>
                       </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="8" className="space-y-12 pt-16 border-t border-white/5 group">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <span className="text-2xl md:text-4xl font-serif text-white/10 group-hover:text-white/30 transition-colors">08</span>
                  <div className="space-y-8 w-full">
                    <h2 className="text-white text-2xl md:text-3xl font-serif italic leading-snug">Contact <span className="not-italic">Us</span></h2>
                    <p className="text-sm md:text-base">In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, you may contact us at:</p>
                    <a 
                      href="mailto:support@myagriscore.com" 
                      className="group/mail flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-6 p-6 md:p-10 rounded-3xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-500 w-full overflow-hidden"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover/mail:scale-110 transition-transform duration-500 shrink-0">
                        {MessageSquare && <MessageSquare className="w-5 h-5 text-white/60" />}
                      </div>
                      <div className="text-center sm:text-left w-full overflow-hidden">
                        <p className="text-xs text-white/40 uppercase tracking-widest font-bold mb-1">Send an Enquiry</p>
                        <p className="text-lg sm:text-xl md:text-2xl text-white font-serif italic break-all sm:break-normal">support@myagriscore.com</p>
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

