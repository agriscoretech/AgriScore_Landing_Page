"use client"

import { motion, AnimatePresence } from "framer-motion"
import * as Lucide from "lucide-react"
import { InternshipCredential } from "@/lib/internship-registry"

const { X, Printer, Download, FileText } = Lucide as any

interface CertificateModalProps {
  isOpen: boolean
  onClose: () => void
  credential: InternshipCredential | null
}

export function CertificateModal({ isOpen, onClose, credential }: CertificateModalProps) {
  if (!credential) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
          {/* Outer Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-5xl my-auto space-y-4"
          >
            {/* Top Toolbar (hidden when printing) */}
            <div className="flex items-center justify-between px-2 text-white no-print">
              <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="hidden sm:inline">Official Digitized Physical Certificate Preview</span>
                <span className="sm:hidden">Certificate Preview</span>
              </div>

              <div className="flex items-center gap-3">
                {credential.pdfUrl && (
                  <a
                    href={credential.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    download={`${credential.id}-Certificate.pdf`}
                    className="px-4 py-2 rounded-full bg-[#D4AF37] hover:bg-[#c49f30] text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg"
                    title="Download certified PDF file"
                  >
                    {Download && <Download className="h-3.5 w-3.5" />}
                    <span>Official PDF</span>
                  </a>
                )}

                <button
                  onClick={() => typeof window !== "undefined" && window.print()}
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  {Printer && <Printer className="h-3.5 w-3.5" />}
                  <span>Print</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-black transition-all cursor-pointer"
                  title="Close"
                >
                  {X && <X className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* The Authentic Physical Certificate Container */}
            <div
              className="printable-certificate relative w-full bg-[#FAF8F2] text-[#111827] shadow-[0_25px_80px_rgba(0,0,0,0.6)] rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-10 overflow-hidden border border-[#D4AF37]/50"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at center, #FFFFFF 0%, #FAF8F2 70%, #F4EEDF 100%)",
              }}
            >
              {/* Outer Guilloché Border Frame */}
              <div className="border-[3px] border-[#C5A059] rounded-xl sm:rounded-2xl p-2 sm:p-3 relative">
                {/* SVG Guilloché Pattern Strip */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-xl" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="guillocheBand" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="7" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.45" />
                      <circle cx="4" cy="10" r="7" fill="none" stroke="#C5A059" strokeWidth="0.75" strokeOpacity="0.3" />
                      <circle cx="16" cy="10" r="7" fill="none" stroke="#C5A059" strokeWidth="0.75" strokeOpacity="0.3" />
                    </pattern>
                  </defs>
                  <rect x="4" y="4" width="calc(100% - 8px)" height="calc(100% - 8px)" fill="url(#guillocheBand)" rx="10" opacity="0.4" />
                </svg>

                {/* Decorative Inner White Parchment Inset */}
                <div
                  className="border-[1.5px] border-[#D4AF37] rounded-lg sm:rounded-xl p-4 sm:p-8 md:p-12 relative space-y-5 sm:space-y-7 bg-[#FAF8F2]/90"
                  style={{
                    boxShadow: "inset 0 0 25px rgba(197, 160, 89, 0.15)",
                  }}
                >
                  {/* Classical Corner Flourishes */}
                  <div className="absolute top-2 left-2 w-7 h-7 border-t-2 border-l-2 border-[#C5A059] pointer-events-none" />
                  <div className="absolute top-2 right-2 w-7 h-7 border-t-2 border-r-2 border-[#C5A059] pointer-events-none" />
                  <div className="absolute bottom-2 left-2 w-7 h-7 border-b-2 border-l-2 border-[#C5A059] pointer-events-none" />
                  <div className="absolute bottom-2 right-2 w-7 h-7 border-b-2 border-r-2 border-[#C5A059] pointer-events-none" />

                  {/* Top Header Row: Certificate ID & Issue Date */}
                  <div className="flex justify-between items-center text-[10px] sm:text-xs text-[#4B5563] tracking-wider px-1">
                    <span>
                      Certificate ID:{" "}
                      <strong className="font-mono text-[#111827] font-semibold">{credential.id}</strong>
                    </span>
                    <span>
                      Date of Issue:{" "}
                      <strong className="font-mono text-[#111827] font-semibold">{credential.issueDate}</strong>
                    </span>
                  </div>

                  {/* Organization Logo & Title */}
                  <div className="text-center space-y-1 sm:space-y-2 pt-1 sm:pt-2">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <svg className="w-7 h-7 sm:w-9 sm:h-9" viewBox="0 0 100 100" fill="none">
                        <path d="M50 15 C30 20 15 45 25 75 C45 65 55 40 50 15 Z" fill="#2E7D32" />
                        <path d="M52 35 C70 30 85 50 78 78 C58 75 48 55 52 35 Z" fill="#4CAF50" />
                      </svg>
                      <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#16382c] font-sans">
                        Agri<span className="text-[#205240]">Score</span>
                      </span>
                    </div>

                    <h2
                      className="text-3xl sm:text-5xl md:text-6xl text-[#111827] font-normal tracking-[0.06em] uppercase"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      CERTIFICATE
                    </h2>
                    <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#374151] font-light -mt-2">
                      of Internship
                    </p>
                  </div>

                  {/* Presentation Banner */}
                  <div className="text-center pt-1 sm:pt-2">
                    <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.32em] text-[#4B5563]">
                      THIS CERTIFICATE IS PROUDLY PRESENTED TO
                    </p>

                    {/* Candidate Name in Grand Calligraphy */}
                    <div className="py-2 sm:py-3">
                      <h3
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111827] tracking-wide leading-none select-none"
                        style={{ fontFamily: "'Great Vibes', cursive" }}
                      >
                        {credential.name}
                      </h3>
                    </div>

                    {/* Recognition Body Text */}
                    <p className="text-xs sm:text-sm md:text-base text-[#374151] leading-relaxed max-w-2xl mx-auto font-light pt-1">
                      In recognition of your successful completion of the internship at{" "}
                      <strong className="font-bold text-[#111827]">
                        {credential.companyName || "AgriScore Pvt. Ltd."}
                      </strong>{" "}
                      as an <strong className="font-bold text-[#111827]">{credential.role}</strong>. The internship was
                      conducted from{" "}
                      <strong className="font-bold text-[#111827]">{credential.period}</strong>.
                    </p>
                  </div>

                  {/* Signatures & Seal Section: Always 3 columns */}
                  <div className="pt-6 sm:pt-10 grid grid-cols-3 gap-2 sm:gap-4 items-end text-center">
                    {/* Left Signatory: Soham Das */}
                    <div className="space-y-1">
                      <div className="h-10 sm:h-12 flex items-center justify-center">
                        <span
                          className="text-2xl sm:text-3xl md:text-4xl text-[#111827] italic select-none"
                          style={{ fontFamily: "'Great Vibes', cursive" }}
                        >
                          Soham Das
                        </span>
                      </div>
                      <div className="h-[1.5px] w-24 sm:w-36 md:w-44 bg-[#111827] mx-auto my-1" />
                      <p className="text-xs sm:text-sm font-medium text-[#111827]">Soham Das</p>
                      <p className="text-[9px] sm:text-xs text-[#6B7280]">
                        {credential.signatories.directorTitle || "Founder & Director"}
                      </p>
                    </div>

                    {/* Center Official Gold Medallion Seal */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center">
                        {/* Outer Glow */}
                        <div className="absolute inset-0 rounded-full bg-[#D4AF37]/20 blur-md" />

                        {/* Metallic Gold Medallion SVG */}
                        <svg className="w-full h-full drop-shadow-md" viewBox="0 0 120 120">
                          <defs>
                            <radialGradient id="sealGold" cx="38%" cy="38%" r="62%">
                              <stop offset="0%" stopColor="#FFF3C4" />
                              <stop offset="30%" stopColor="#E5C158" />
                              <stop offset="70%" stopColor="#B38728" />
                              <stop offset="100%" stopColor="#7A5612" />
                            </radialGradient>
                            <linearGradient id="rimGold" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#D4AF37" />
                              <stop offset="50%" stopColor="#FFF9E6" />
                              <stop offset="100%" stopColor="#996515" />
                            </linearGradient>

                            {/* Top arc (clockwise) */}
                            <path id="sealArcTop" d="M 22 60 A 38 38 0 0 1 98 60" fill="none" />
                            {/* Bottom arc (left to right, curved down so text points inward/upright) */}
                            <path id="sealArcBottom" d="M 22 60 A 38 38 0 0 0 98 60" fill="none" />
                          </defs>

                          {/* Sunburst Beaded Border */}
                          <circle
                            cx="60"
                            cy="60"
                            r="56"
                            fill="none"
                            stroke="url(#rimGold)"
                            strokeWidth="2.5"
                            strokeDasharray="2,2"
                          />
                          {/* Outer Solid Ring */}
                          <circle cx="60" cy="60" r="52" fill="url(#sealGold)" stroke="#996515" strokeWidth="1" />
                          {/* Inner Beaded Ring */}
                          <circle
                            cx="60"
                            cy="60"
                            r="47"
                            fill="none"
                            stroke="#FFF9E6"
                            strokeWidth="1"
                            strokeDasharray="1.5,1.5"
                          />
                          {/* Core Circle */}
                          <circle cx="60" cy="60" r="41" fill="#7A5612" fillOpacity="0.18" />

                          {/* Seal Text: AGRISCORE (top) */}
                          <text fontSize="7" fill="#3D2600" fontWeight="bold" letterSpacing="1.2">
                            <textPath href="#sealArcTop" startOffset="50%" textAnchor="middle">
                              AGRISCORE
                            </textPath>
                          </text>

                          {/* Seal Text: PRIVATE LIMITED (bottom upright) */}
                          <text fontSize="6" fill="#3D2600" fontWeight="bold" letterSpacing="1">
                            <textPath href="#sealArcBottom" startOffset="50%" textAnchor="middle">
                              PRIVATE LIMITED
                            </textPath>
                          </text>

                          {/* Center Emblem Leaves */}
                          <g transform="translate(60, 60) scale(0.62) translate(-25, -25)">
                            <path
                              d="M25 7 C14 10 7 24 12 40 C23 35 28 22 25 7 Z"
                              fill="#2E7D32"
                              stroke="#FFF9E6"
                              strokeWidth="0.8"
                            />
                            <path
                              d="M26 18 C36 15 44 26 40 41 C29 39 24 28 26 18 Z"
                              fill="#4CAF50"
                              stroke="#FFF9E6"
                              strokeWidth="0.8"
                            />
                          </g>

                          {/* Small Decorative Stars */}
                          <circle cx="19" cy="60" r="1.3" fill="#3D2600" />
                          <circle cx="101" cy="60" r="1.3" fill="#3D2600" />
                        </svg>
                      </div>
                    </div>

                    {/* Right Signatory: Piyush */}
                    <div className="space-y-1">
                      <div className="h-10 sm:h-12 flex items-center justify-center">
                        <span
                          className="text-2xl sm:text-3xl md:text-4xl text-[#111827] italic select-none"
                          style={{ fontFamily: "'Great Vibes', cursive" }}
                        >
                          Piyush
                        </span>
                      </div>
                      <div className="h-[1.5px] w-24 sm:w-36 md:w-44 bg-[#111827] mx-auto my-1" />
                      <p className="text-xs sm:text-sm font-medium text-[#111827]">Piyush</p>
                      <p className="text-[9px] sm:text-xs text-[#6B7280]">
                        {credential.signatories.coFounderTitle || "Co-Founder & Director"}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Footprint */}
                  <div className="pt-4 sm:pt-6 border-t border-[#D4AF37]/30 flex flex-col sm:flex-row justify-between items-center text-[9px] sm:text-[10px] font-mono text-[#6B7280] gap-1 sm:gap-2">
                    <span className="truncate max-w-[200px] sm:max-w-none">
                      Ledger Hash: {credential.verificationHash.slice(0, 28)}...
                    </span>
                    <span className="text-emerald-700 font-semibold uppercase tracking-wider">
                      ✓ Authenticated by AgriScore Registry
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Modal Actions (hidden when printing) */}
            <div className="flex flex-wrap justify-end gap-3 pt-2 no-print">
              {credential.pdfUrl && (
                <a
                  href={credential.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={`${credential.id}-Certificate.pdf`}
                  className="px-6 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#c49f30] text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg"
                >
                  {Download && <Download className="h-3.5 w-3.5" />}
                  <span>Download Official PDF</span>
                </a>
              )}

              <button
                onClick={() => typeof window !== "undefined" && window.print()}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/15 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg"
              >
                {Printer && <Printer className="h-3.5 w-3.5" />}
                <span>Print</span>
              </button>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
