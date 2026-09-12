"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import * as Lucide from "lucide-react"
import { 
  REGISTRY_DATABASE, 
  InternshipCredential, 
  getVerificationUrl,
  getCredentialById 
} from "@/lib/internship-registry"
import { CertificateModal } from "@/components/certificate-modal"

const {
  ShieldCheck,
  ShieldAlert,
  CheckCircle2,
  Search,
  Award,
  Calendar,
  Building2,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  X,
  Sparkles,
  Lock,
  Printer
} = Lucide as any

export function InternshipValidationSection() {
  const [searchId, setSearchId] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchedRecord, setSearchedRecord] = useState<InternshipCredential | null>(null)
  const [hasSearched, setHasSearched] = useState(false)
  const [notFoundId, setNotFoundId] = useState<string | null>(null)
  const [showCertificateModal, setShowCertificateModal] = useState(false)

  const handleValidate = (credentialIdToSearch?: string) => {
    const rawId = (credentialIdToSearch !== undefined ? credentialIdToSearch : searchId).trim().toUpperCase()
    if (!rawId) return

    setIsSearching(true)
    setHasSearched(false)
    setNotFoundId(null)

    setTimeout(() => {
      setIsSearching(false)
      setHasSearched(true)
      const found = getCredentialById(rawId)
      if (found) {
        setSearchedRecord(found)
        setNotFoundId(null)
      } else {
        setSearchedRecord(null)
        setNotFoundId(rawId)
      }
    }, 450)
  }

  const handleQuickSelect = (id: string) => {
    setSearchId(id)
    handleValidate(id)
  }

  useEffect(() => {
    if (typeof window === "undefined") return
    try {
      const urlParams = new URLSearchParams(window.location.search)
      const queryId = urlParams.get("verify") || urlParams.get("id") || urlParams.get("credential")
      if (queryId) {
        handleQuickSelect(queryId)
        return
      }

      const hash = window.location.hash
      if (hash.includes("id=")) {
        const idMatch = hash.split("id=")[1]?.split("&")[0]
        if (idMatch) {
          handleQuickSelect(decodeURIComponent(idMatch))
        }
      }
    } catch {
      // Safe fallback
    }
  }, [])

  return (
    <section id="internship-validation" className="py-32 bg-[#060606] relative overflow-hidden border-t border-white/5 scroll-mt-24">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#D4AF37]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-[10px] uppercase tracking-[0.4em] font-bold backdrop-blur-md">
            {ShieldCheck && <ShieldCheck className="h-3.5 w-3.5" />}
            <span>Institutional Credential Registry</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight text-white">
            Validate <span className="italic text-[#D4AF37]">Internship</span> Credentials
          </h2>

          <p className="text-lg md:text-xl text-white/50 font-light leading-relaxed">
            Verify the authenticity of AgriScore research fellowships, engineering internships, and certificates of excellence issued to student innovators and scientists.
          </p>
        </div>

        {/* Verification Terminal Card */}
        <div className="max-w-4xl mx-auto bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-14 backdrop-blur-2xl shadow-2xl relative">
          {/* Top Bar / Terminal Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.3em] font-mono text-white/60">
                Official Verification Node • Active
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-white/40 font-mono">
              {Lock && <Lock className="h-3 w-3 text-emerald-400" />}
              <span>256-Bit Cryptographic Ledger</span>
            </div>
          </div>

          {/* Search Input Box */}
          <div className="mt-8 space-y-6">
            <label htmlFor="credential-id-input" className="block text-xs uppercase tracking-[0.25em] text-white/60 font-semibold">
              Enter Certificate ID / Credential Reference
            </label>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  id="credential-id-input"
                  type="text"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleValidate()}
                  placeholder="AGS-INT-20XX-XXXX"
                  className="w-full h-16 px-6 bg-black/60 border border-white/15 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37] text-white placeholder:text-white/20 rounded-2xl font-mono text-base tracking-wider uppercase transition-all"
                />
                {searchId && (
                  <button
                    onClick={() => {
                      setSearchId("")
                      setSearchedRecord(null)
                      setHasSearched(false)
                      setNotFoundId(null)
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    {X && <X className="h-4 w-4" />}
                  </button>
                )}
              </div>

              <button
                onClick={() => handleValidate()}
                disabled={!searchId.trim() || isSearching}
                className="h-16 px-8 rounded-2xl bg-[#D4AF37] hover:bg-[#c49f30] text-black font-semibold text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0 group cursor-pointer"
              >
                {isSearching ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    {Search && <Search className="h-4 w-4 transition-transform group-hover:scale-110" />}
                    <span>Validate</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Verification Results Panel */}
          <div className="mt-10">
            <AnimatePresence mode="wait">
              {/* Case 1: Verified Record Found */}
              {searchedRecord && (
                <motion.div
                  key={searchedRecord.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl bg-black/80 border border-emerald-500/30 p-8 md:p-10 space-y-8 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] pointer-events-none" />

                  {/* Verification Status Banner */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        {CheckCircle2 && <CheckCircle2 className="h-6 w-6" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-bold uppercase tracking-[0.25em] text-xs">
                            Officially Verified & Authenticated
                          </span>
                        </div>
                        <p className="text-xs text-white/40 font-mono mt-0.5">
                          Issued by AgriScore Private Limited
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {searchedRecord.pdfUrl ? (
                        <a
                          href={searchedRecord.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#c49f30] text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-[#D4AF37]/25"
                        >
                          {Award && <Award className="h-3.5 w-3.5" />}
                          <span>View Full Certificate</span>
                        </a>
                      ) : (
                        <button
                          onClick={() => setShowCertificateModal(true)}
                          className="px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#c49f30] text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-[#D4AF37]/25"
                        >
                          {Award && <Award className="h-3.5 w-3.5" />}
                          <span>View Full Certificate</span>
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Candidate Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Details */}
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold block">
                          Fellow / Intern Name
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif text-white font-light mt-1">
                          {searchedRecord.name}
                        </h3>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold block">
                          Designation & Track
                        </span>
                        <p className="text-base text-[#D4AF37] font-medium mt-1">
                          {searchedRecord.role}
                        </p>
                        <p className="text-xs text-white/50 mt-0.5 font-light">
                          {searchedRecord.department}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold block">
                          Domain Focus
                        </span>
                        <p className="text-sm text-white/80 mt-1">
                          {searchedRecord.domain}
                        </p>
                      </div>
                    </div>

                    {/* Right Details */}
                    <div className="space-y-6 md:border-l md:border-white/10 md:pl-8">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold block">
                          Tenure & Cohort
                        </span>
                        <p className="text-sm text-white font-medium mt-1">
                          {searchedRecord.cohort} • {searchedRecord.duration}
                        </p>
                        <p className="text-xs text-white/40 font-mono mt-0.5">
                          {searchedRecord.period}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold block">
                          Credential ID & Date of Issuance
                        </span>
                        <p className="text-sm text-white/90 font-mono mt-1 font-semibold">
                          {searchedRecord.id}
                        </p>
                        <p className="text-xs text-white/40 mt-0.5">
                          Issued on {searchedRecord.issueDate}
                        </p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold block">
                          Authorized Signatories
                        </span>
                        <p className="text-xs text-white/80 mt-1">
                          {searchedRecord.signatories.director}
                        </p>
                        <p className="text-xs text-white/80">
                          {searchedRecord.signatories.coFounder}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Research & Contribution Highlights */}
                  <div className="pt-6 border-t border-white/10 space-y-3">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold block">
                      Key Fellowship Contributions
                    </span>
                    <ul className="space-y-2">
                      {searchedRecord.keyContributions.map((point, index) => (
                        <li key={index} className="flex items-start gap-3 text-xs text-white/70 font-light">
                          <span className="text-emerald-400 mt-0.5">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tamper-Proof Cryptographic Hash */}
                  <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[11px] font-mono text-white/40">
                    <div className="flex items-center gap-2 truncate">
                      {Lock && <Lock className="h-3 w-3 text-emerald-400 shrink-0" />}
                      <span className="truncate">{searchedRecord.verificationHash}</span>
                    </div>
                    <span className="text-emerald-400 shrink-0 font-sans text-[10px] uppercase tracking-wider font-semibold">
                      Status: {searchedRecord.status}
                    </span>
                  </div>
                </motion.div>
              )}

              {/* Case 2: Not Found State */}
              {hasSearched && notFoundId && (
                <motion.div
                  key="not-found"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-3xl bg-gradient-to-b from-red-950/25 via-black/90 to-black border border-red-500/30 p-8 md:p-10 space-y-6 relative overflow-hidden backdrop-blur-xl"
                >
                  <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

                  <div className="flex flex-col sm:flex-row items-start gap-5">
                    <div className="p-3.5 rounded-2xl bg-red-500/10 text-red-400 border border-red-500/30 shrink-0 shadow-[0_0_25px_rgba(239,68,68,0.2)]">
                      {ShieldAlert ? <ShieldAlert className="h-7 w-7" /> : (AlertCircle && <AlertCircle className="h-7 w-7" />)}
                    </div>
                    <div className="space-y-3 flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] uppercase tracking-[0.25em] font-mono font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                        <span>Unregistered Credential</span>
                      </div>
                      <h4 className="text-2xl sm:text-3xl font-serif text-white font-light">
                        No Verified Record Found for{" "}
                        <span className="font-mono text-[#D4AF37] font-semibold bg-[#D4AF37]/10 px-3 py-0.5 rounded-xl border border-[#D4AF37]/20 inline-block">
                          {notFoundId}
                        </span>
                      </h4>
                      <p className="text-sm text-white/60 font-light leading-relaxed max-w-2xl">
                        We could not locate an active or completed internship certificate corresponding to this reference ID in the registry. 
                        Please verify that the ID matches the format <strong className="text-white/80 font-mono">AGS-INT-20XX-XXXX</strong> as displayed on the top-left corner of your official certificate.
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-white/40">
                      Need expedited background check assistance or university clearance?
                    </p>
                    <a
                      href={`mailto:careers@myagriscore.com?subject=Internship%20Verification%20Inquiry%20-%20${encodeURIComponent(notFoundId)}`}
                      className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-black text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shrink-0"
                    >
                      careers@myagriscore.com
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 3 Pillars of AgriScore Credentials */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4 hover:border-white/15 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
              {Lock && <Lock className="h-5 w-5" />}
            </div>
            <h4 className="text-lg font-serif text-white">Cryptographic Tamper-Proofing</h4>
            <p className="text-sm text-white/40 font-light leading-relaxed">
              Every certificate issued is assigned a deterministic digital hash anchored to our private archive, preventing fabrication or altered tenure claims.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4 hover:border-white/15 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              {Building2 && <Building2 className="h-5 w-5" />}
            </div>
            <h4 className="text-lg font-serif text-white">Direct Academic & HR Clearance</h4>
            <p className="text-sm text-white/40 font-light leading-relaxed">
              University placement cells, corporate recruiters, and background screening agencies can validate candidate authenticity 24/7 without delays.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4 hover:border-white/15 transition-all">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              {Award && <Award className="h-5 w-5" />}
            </div>
            <h4 className="text-lg font-serif text-white">Recognized Research Contributions</h4>
            <p className="text-sm text-white/40 font-light leading-relaxed">
              Internships at AgriScore represent hands-on work across biological soil science, satellite hyperspectral pipelines, and precision rural robotics.
            </p>
          </div>
        </div>

        {/* Verification Assistance Contact */}
        <div className="mt-16 text-center space-y-3">
          <p className="text-sm text-white/40 font-light">
            Need an official transcript or confidential background verification dossier?
          </p>
          <a
            href="mailto:careers@myagriscore.com?subject=Institutional%20Verification%20Request"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37] hover:text-white font-semibold transition-colors"
          >
            <span>Reach our Verification Desk: careers@myagriscore.com</span>
            {ExternalLink && <ExternalLink className="h-3 w-3" />}
          </a>
        </div>
      </div>

      {/* Official Authentic Physical Certificate Preview Modal */}
      <CertificateModal
        isOpen={showCertificateModal}
        onClose={() => setShowCertificateModal(false)}
        credential={searchedRecord}
      />
    </section>
  )
}
