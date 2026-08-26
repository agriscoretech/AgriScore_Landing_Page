"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import * as Lucide from "lucide-react"

export function Footer() {
  const { 
    Instagram, 
    Linkedin, 
    Youtube 
  } = Lucide as any

  const XIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
    </svg>
  )

  const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.031 2c-5.508 0-9.985 4.477-9.985 9.985 0 1.761.459 3.414 1.264 4.856L2 22l5.31-1.393c1.396.762 2.99 1.196 4.691 1.196 5.508 0 10.015-4.477 10.015-9.985S17.539 2 12.031 2zm5.235 14.22c-.225.63-1.303 1.155-1.777 1.23-.405.06-1.353.111-2.946-.532-3.132-1.263-5.115-4.444-5.265-4.65-.15-.203-1.222-1.635-1.222-3.12 0-1.485.765-2.212 1.035-2.512.27-.3.585-.375.78-.375.195 0 .39.015.555.023.165.007.39-.06.615.48.225.54.765 1.86.832 2 .067.143.112.308.015.5-.097.195-.15.315-.292.48l-.443.51c-.135.15-.285.315-.12.6.165.285.735 1.215 1.575 1.965.735.66 1.365.87 1.665.99.3.12.48.105.66-.105.18-.21.765-.885.968-1.185.203-.3.405-.255.675-.15s1.71.81 2.01.96c.3.15.502.225.577.352.075.127.075.727-.15 1.357z"/>
    </svg>
  )

  const links = {
    Missions: ["Research Labs", "Yield Engineering"],
    Inquiries: ["Direct Access", "Partnership", "Investor Relations", "Media Room"],
    Legal: ["Privacy Notice", "Terms and Condition", "Genetic Rights", "Patents"]
  }

  return (
    <footer className="bg-black text-white py-12 md:py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <img src="/logo.png" alt="AgriScore Logo" className="h-16 md:h-24 w-auto object-contain mx-auto md:mx-0" />
              <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed max-w-md mx-auto md:mx-0 text-center md:text-left">
                We define the global standard in precision agriculture. Headquartered in Kolkata, blending advanced technology with the nation’s rich agricultural heritage.
              </p>
            </div>

            <div className="space-y-6 max-w-md mx-auto md:mx-0">
              <span className="block text-[10px] uppercase tracking-[0.4em] text-white/30 text-center md:text-left font-bold">Join the Mission</span>
              <div className="flex border-b border-white/20 pb-4 group hover:border-white transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/20 py-2"
                />
                <button className="text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] hover:text-white transition-colors">Join</button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-16">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-8">
                {Object.entries(links).map(([title, items]) => (
                   <div key={title} className="space-y-6 md:space-y-8 text-center sm:text-left">
                      <h4 className="text-[11px] md:text-[12px] uppercase tracking-[0.4em] text-white/40 font-bold">{title}</h4>
                      <ul className="space-y-3 md:space-y-4">
                         {items.map(item => {
                           let href = "#";
                           if (item === "Privacy Notice") href = "/privacy-notice";
                           if (item === "Terms and Condition") href = "/terms-and-condition";
                           if (item === "Genetic Rights") href = "/genetic-rights";
                           if (item === "Patents") href = "/patents";
                           if (item === "Direct Access") href = "/direct-access";
                           if (item === "Partnership") href = "/partnership";
                           if (item === "Investor Relations") href = "/investor-relations";
                           if (item === "Media Room") href = "/media-room";
                           if (item === "Research Labs") href = "/research-labs";
                           if (item === "Yield Engineering") href = "/yield-engineering";
                           
                           return (
                             <li key={item}>
                                <Link href={href} className="relative text-base sm:text-sm font-light text-white/60 hover:text-white transition-colors tracking-wide group/link inline-block">
                                   {item}
                                   <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover/link:w-full transition-all duration-500" />
                                </Link>
                             </li>
                           )
                         })}
                      </ul>
                   </div>
                ))}
             </div>

             <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="relative group">
                  <div className="absolute inset-x-0 -bottom-2 h-px bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <img 
                    src="/DPIIT.png" 
                    alt="DPIIT Recognized Startup" 
                    className="h-12 md:h-20 w-auto object-contain" 
                  />
                </div>
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-serif italic text-white/90 leading-tight">
                    Officially Recognized by DPIIT, Government of India
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/40 font-light uppercase tracking-[0.2em]">
                    Transforming Agriculture Through Smart Innovation
                  </p>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
           <div className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-light text-center md:text-left text-white/30 leading-relaxed">
              © 2026 AgriScore Private Limited. <br className="md:hidden" /> All Rights Reserved.
           </div>

           <div className="flex justify-center md:justify-end gap-x-10 md:gap-x-8">
              <Link href="https://www.instagram.com/agriscore.official?igsh=MW5uM2dkanQ0MGZiaA==" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors p-2" title="Instagram">
                <Instagram className="h-5 w-5 md:h-4 md:w-4" />
              </Link>
              <Link href="https://x.com/AgriScore" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors p-2" title="X (Twitter)">
                <XIcon className="h-5 w-5 md:h-4 md:w-4" />
              </Link>
              <Link href="https://www.linkedin.com/company/myagriscore/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors p-2" title="LinkedIn">
                <Linkedin className="h-5 w-5 md:h-4 md:w-4" />
              </Link>
              <Link href="https://www.whatsapp.com/channel/0029VbC5yhMGE56kIAeyBi3K" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors p-2" title="WhatsApp">
                <WhatsAppIcon className="h-5 w-5 md:h-4 md:w-4" />
              </Link>
              <Link href="https://www.youtube.com/channel/UCx_GxBEKWy9ZT_-gXpZ1k5w" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#D4AF37] transition-colors p-2" title="YouTube">
                <Youtube className="h-5 w-5 md:h-4 md:w-4" />
              </Link>
           </div>
        </div>
      </div>
    </footer>
  )
}
