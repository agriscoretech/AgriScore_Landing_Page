"use client";

import { motion } from "framer-motion";
import { Users, Mail, ArrowRight, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const FileIconSvg = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const LinkedinIconSvg = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const WhatsappIconSvg = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const XIconSvg = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function AnalysisPage() {
  const options = [
    {
      id: "nano",
      title: "AgriScore Nano Demo Report",
      subtitle: "Explore Nano Capabilities",
      href: "/agriscore-nano_sample_report.pdf",
      icon: <FileIconSvg className="w-6 h-6 text-emerald-400" />,
      gradient: "from-emerald-500/20 to-teal-500/20",
      external: true,
    },
    {
      id: "terra",
      title: "AgriScore Terra Demo Report",
      subtitle: "Explore Terra Capabilities",
      href: "/agriscore_sample_report.pdf",
      icon: <FileIconSvg className="w-6 h-6 text-blue-400" />,
      gradient: "from-blue-500/20 to-indigo-500/20",
      external: true,
    },
    {
      id: "team",
      title: "Career Opportunities",
      subtitle: "Join the AgriScore Team",
      href: "/apply",
      icon: <Users className="w-6 h-6 text-purple-400" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      external: false,
    },
    {
      id: "inquiry",
      title: "Sales & Business Inquiries",
      subtitle: "Contact us about Nano & Terra",
      href: "/analysis/inquiry",
      icon: <Mail className="w-6 h-6 text-[#D4AF37]" />,
      gradient: "from-[#D4AF37]/20 to-amber-500/20",
      external: false,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-emerald-900/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      <div className="w-full max-w-md relative z-10 space-y-8">
        <header className="flex flex-col items-center text-center space-y-4 pt-2 z-10 relative">
          <Link href="/">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src="/logo.png" 
              alt="AgriScore Logo" 
              className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] mb-2 cursor-pointer hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all"
            />
          </Link>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            System Online & Ready
          </motion.div>
          
          <div className="max-w-sm mx-auto mt-2">
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-zinc-400 text-sm md:text-base leading-relaxed"
            >
              Engineering the future of farming with advanced soil intelligence. Explore our Nano and Terra capabilities.
            </motion.p>
          </div>
        </header>

        <div className="space-y-4">
          {options.map((option, index) => {
            const CardContent = (
              <>
                <div className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 bg-linear-to-r ${option.gradient}`} />
                <div className="relative z-10 flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all mr-4">
                  {option.icon}
                </div>
                <div className="relative z-10 flex-1">
                  <h2 className="text-mm md:text-lg font-bold">{option.title}</h2>
                  <p className="text-sm text-zinc-400">{option.subtitle}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-white group-hover:translate-x-1 transition-all relative z-10" />
              </>
            );

            const cardClasses = "group relative flex items-center p-4 bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/20 transition-all overflow-hidden cursor-pointer";

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {option.external ? (
                  <a href={option.href} target="_blank" rel="noopener noreferrer" className={cardClasses}>
                    {CardContent}
                  </a>
                ) : (
                  <Link href={option.href} className={cardClasses}>
                    {CardContent}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex justify-center items-center gap-4 pt-6 mt-4"
        >
          <a href="https://whatsapp.com/channel/0029VbC5yhMGE56kIAeyBi3K" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]/30 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,211,102,0.2)]">
            <span className="sr-only">WhatsApp</span>
            <WhatsappIconSvg className="w-5 h-5 transition-transform group-hover:scale-110" />
          </a>
          <a href="https://www.instagram.com/agriscore.official" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-[#E1306C] hover:bg-[#E1306C]/10 hover:border-[#E1306C]/30 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(225,48,108,0.2)]">
            <span className="sr-only">Instagram</span>
            <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
          </a>
          <a href="https://x.com/AgriScore" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="sr-only">X (Twitter)</span>
            <XIconSvg className="w-5 h-5 transition-transform group-hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/company/myagriscore/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-[#0077b5] hover:bg-[#0077b5]/10 hover:border-[#0077b5]/30 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,119,181,0.2)]">
            <span className="sr-only">LinkedIn</span>
            <LinkedinIconSvg className="w-5 h-5 transition-transform group-hover:scale-110" />
          </a>
          <a href="https://www.youtube.com/channel/UCx_GxBEKWy9ZT_-gXpZ1k5w" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-[#FF0000] hover:bg-[#FF0000]/10 hover:border-[#FF0000]/30 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(255,0,0,0.2)]">
            <span className="sr-only">YouTube</span>
            <Youtube className="w-5 h-5 transition-transform group-hover:scale-110" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
