"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import * as Lucide from "lucide-react"
import { InternshipCredential, getVerificationUrl } from "@/lib/internship-registry"
import { CertificateModal } from "@/components/certificate-modal"

import { useRouter } from "next/navigation"

const {
  ShieldCheck,
  ShieldAlert,
  Search,
  CheckCircle2,
  Award,
  Calendar,
  Building2,
  ExternalLink,
  Copy,
  Check,
  AlertCircle,
  X,
  Lock,
  Printer,
  ArrowLeft,
  Share2
} = Lucide as any

interface CredentialDetailViewProps {
  credential: InternshipCredential | null
  id: string
}

export function CredentialDetailView({ credential, id }: CredentialDetailViewProps) {
  const router = useRouter()
  const [copiedLink, setCopiedLink] = useState(false)
  const [showCertificateModal, setShowCertificateModal] = useState(false)
  const [retryId, setRetryId] = useState("")

  const verificationUrl = credential 
    ? getVerificationUrl(credential.id) 
    : `${typeof window !== "undefined" ? window.location.origin : "https://myagriscore.com"}/verify/${id}`

  const handleCopy = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(verificationUrl)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2500)
    }
  }

  const handleRetrySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!retryId.trim()) return
    router.push(`/verify/${retryId.trim().toUpperCase()}`)
  }

  // Not Found State
  if (!credential) {
    return (
      <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black flex flex-col justify-between relative overflow-hidden">
        {/* Ambient Subtle Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/5 blur-[160px] pointer-events-none rounded-full" />
        <div className="absolute top-2/3 right-10 w-96 h-96 bg-[#D4AF37]/5 blur-[160px] pointer-events-none rounded-full" />

        <header className="p-6 border-b border-white/10 flex justify-between items-center max-w-7xl mx-auto w-full relative z-10">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="AgriScore" className="h-10 w-auto object-contain" />
          </Link>
          <Link
            href="/careers#internship-validation"
            className="text-xs uppercase tracking-widest text-[#D4AF37] hover:text-white flex items-center gap-2 font-medium transition-colors"
          >
            {ArrowLeft && <ArrowLeft className="h-3.5 w-3.5" />}
            <span>Back to Portal</span>
          </Link>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-12 md:py-16 w-full relative z-10 space-y-8">
          {/* Glassmorphism Luxury Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2.5rem] bg-gradient-to-b from-white/[0.04] via-black/80 to-black border border-white/10 p-8 sm:p-12 md:p-14 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.8)] relative overflow-hidden space-y-8 text-center"
          >
            {/* Top Accent Line */}
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

            {/* Glowing Security Badge */}
            <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-red-500/10 animate-ping" />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-950/40 border border-red-500/40 flex items-center justify-center text-red-400 shadow-[0_0_35px_rgba(239,68,68,0.25)]">
                {ShieldAlert ? <ShieldAlert className="h-8 w-8" /> : (AlertCircle && <AlertCircle className="h-8 w-8" />)}
              </div>
            </div>

            {/* Header & Unrecognized ID Display */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-400 text-[10px] uppercase tracking-[0.3em] font-mono font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                <span>Registry Lookup • Unrecognized ID</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light text-white tracking-tight leading-tight">
                No Record Found for <br />
                <span className="font-mono text-[#D4AF37] font-semibold text-2xl sm:text-3xl md:text-4xl bg-[#D4AF37]/10 px-4 py-1.5 rounded-2xl border border-[#D4AF37]/25 inline-block mt-3 tracking-wider">
                  {id}
                </span>
              </h1>

              <p className="text-white/60 text-sm sm:text-base font-light leading-relaxed max-w-lg mx-auto">
                We could not locate an official research fellowship or internship credential matching this reference ID in the AgriScore cryptographic registry.
              </p>
            </div>

            {/* Direct Retry Search Form */}
            <div className="pt-2 max-w-lg mx-auto">
              <form onSubmit={handleRetrySubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  value={retryId}
                  onChange={(e) => setRetryId(e.target.value)}
                  placeholder="AGS-INT-20XX-XXXX"
                  className="flex-1 h-14 px-5 bg-black/70 border border-white/15 focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] text-white placeholder:text-white/20 rounded-2xl font-mono text-sm tracking-wider uppercase transition-all"
                />
                <button
                  type="submit"
                  disabled={!retryId.trim()}
                  className="h-14 px-8 rounded-2xl bg-[#D4AF37] hover:bg-[#c49f30] text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0 cursor-pointer shadow-lg"
                >
                  {Search && <Search className="h-4 w-4" />}
                  <span>Verify</span>
                </button>
              </form>
            </div>

            {/* Diagnostic Guidance Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] font-semibold font-mono block">
                  01. Reference Format
                </span>
                <p className="text-xs text-white/50 leading-relaxed">
                  Ensure the code follows <strong className="text-white/80 font-mono">AGS-INT-20XX-XXXX</strong> as printed on top-left of the certificate.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold font-mono block">
                  02. QR Code Scanned
                </span>
                <p className="text-xs text-white/50 leading-relaxed">
                  Verify that the physical certificate QR scanner opened the genuine official <strong className="text-white/80">myagriscore.com</strong> URL.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-blue-400 font-semibold font-mono block">
                  03. Direct Support
                </span>
                <p className="text-xs text-white/50 leading-relaxed">
                  For university clearance or manual registry inquiries, our institutional verification desk is available 24/7.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-white/10">
              <a
                href={`mailto:careers@myagriscore.com?subject=Certificate%20Verification%20Inquiry%20-%20${encodeURIComponent(id)}`}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white hover:text-[#D4AF37] text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer"
              >
                careers@myagriscore.com
              </a>
              <Link
                href="/careers#internship-validation"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#c49f30] text-black text-xs uppercase tracking-widest font-semibold transition-all shadow-lg"
              >
                Search Registry Portal
              </Link>
            </div>
          </motion.div>
        </main>

        <footer className="p-6 border-t border-white/5 text-center text-xs text-white/30 font-mono relative z-10">
          AgriScore Private Limited • Secure Credential Registry
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black">
      {/* Top Header */}
      <header className="border-b border-white/10 bg-black/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="AgriScore" className="h-10 w-auto object-contain" />
          </Link>

          <div className="flex items-center gap-4">
            <button
              onClick={handleCopy}
              className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white/80 flex items-center gap-2 transition-all cursor-pointer"
              title="Copy public verification link"
            >
              {copiedLink ? (
                <>
                  {Check && <Check className="h-3.5 w-3.5 text-emerald-400" />}
                  <span className="text-emerald-400">Link Copied</span>
                </>
              ) : (
                <>
                  {Share2 && <Share2 className="h-3.5 w-3.5" />}
                  <span className="hidden sm:inline">Share Link</span>
                </>
              )}
            </button>

            <Link
              href="/careers#internship-validation"
              className="px-4 py-2 rounded-full bg-[#D4AF37] hover:bg-[#c49f30] text-black text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all"
            >
              <span>Registry Portal</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-12">
        {/* Verification Status Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-r from-emerald-950/40 via-black to-black border border-emerald-500/40 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
              {ShieldCheck && <ShieldCheck className="h-8 w-8" />}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-[0.25em]">
                  Physical Certificate Authenticated
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping hidden sm:inline-block" />
              </div>
              <h1 className="text-xl md:text-2xl font-serif text-white">
                Official AgriScore Research & Fellowship Registry
              </h1>
              <p className="text-xs text-white/50 font-mono">
                Anchored to AgriScore Private Cryptographic Ledger • 256-Bit Signed
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full md:w-auto justify-end border-t md:border-t-0 border-white/10 pt-4 md:pt-0">
            {credential.pdfUrl ? (
              <a
                href={credential.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#c49f30] text-black text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-[#D4AF37]/25"
              >
                {Award && <Award className="h-4 w-4" />}
                <span>View Full Certificate</span>
              </a>
            ) : (
              <button
                onClick={() => setShowCertificateModal(true)}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#c49f30] text-black text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:shadow-[#D4AF37]/25"
              >
                {Award && <Award className="h-4 w-4" />}
                <span>View Full Certificate</span>
              </button>
            )}
          </div>
        </motion.div>

        {/* Dossier Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 md:p-14 space-y-10 backdrop-blur-xl"
        >
          {/* Header: Candidate & Track */}
          <div className="space-y-4 pb-8 border-b border-white/10">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-semibold block">
              Official Credential Holder
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light text-white tracking-tight">
              {credential.name}
            </h2>
            <div className="space-y-1">
              <p className="text-xl text-emerald-400 font-medium">
                {credential.role}
              </p>
              <p className="text-sm text-white/50 font-light">
                {credential.department}
              </p>
            </div>
          </div>

          {/* Credential Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold block">
                Cohort & Duration
              </span>
              <p className="text-base text-white font-medium">
                {credential.cohort}
              </p>
              <p className="text-xs text-white/50 font-mono">
                {credential.duration}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold block">
                Tenure Period
              </span>
              <p className="text-base text-white font-medium">
                {credential.period}
              </p>
              <p className="text-xs text-emerald-400 font-semibold">
                Status: {credential.status}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold block">
                Certificate Reference ID
              </span>
              <p className="text-base text-white/90 font-mono font-bold tracking-wider">
                {credential.id}
              </p>
              <p className="text-xs text-white/40 font-mono">
                Issued on {credential.issueDate}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-semibold block">
                Research Mentor
              </span>
              <p className="text-base text-white font-medium">
                {credential.mentor}
              </p>
              <p className="text-xs text-white/40">
                AgriScore Research Directorate
              </p>
            </div>
          </div>

          {/* Research & Contribution Highlights */}
          <div className="pt-8 border-t border-white/10 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-semibold block">
              Accredited Deliverables & Research Scope
            </span>
            <ul className="space-y-3">
              {credential.keyContributions.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-white/80 font-light">
                  <span className="text-[#D4AF37] mt-1">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Signatories */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-white/40 font-semibold block">
                Executive Signatory
              </span>
              <p className="text-sm font-serif text-white">Soham Das</p>
              <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium">
                Director & Founder
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-[9px] uppercase tracking-widest text-white/40 font-semibold block">
                Executive Signatory
              </span>
              <p className="text-sm font-serif text-white">Piyush</p>
              <p className="text-[10px] uppercase tracking-wider text-emerald-400 font-medium">
                Director & Co-Founder
              </p>
            </div>
          </div>

          {/* Hash Footprint */}
          <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-white/40 truncate">
            {Lock && <Lock className="h-3.5 w-3.5 text-emerald-400 shrink-0" />}
            <span className="truncate">{credential.verificationHash}</span>
          </div>
        </motion.div>

        {/* Institutional Inquiries Card */}
        <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h4 className="text-sm uppercase tracking-[0.2em] text-white/80 font-semibold">
              Institutional & Background Verification
            </h4>
            <p className="text-xs text-white/40 font-light leading-relaxed max-w-xl">
              Background verification agencies, university placement cells, or corporate recruiters requiring a certified letter of recommendation or official transcript dossier:
            </p>
          </div>
          <a
            href={`mailto:careers@myagriscore.com?subject=Transcript%20Verification%20-%20${encodeURIComponent(credential.id)}`}
            className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white hover:text-[#D4AF37] font-medium transition-all shrink-0 cursor-pointer"
          >
            careers@myagriscore.com
          </a>
        </div>
      </main>

      {/* Official Authentic Physical Certificate Preview Modal */}
      <CertificateModal
        isOpen={showCertificateModal}
        onClose={() => setShowCertificateModal(false)}
        credential={credential}
      />
    </div>
  )
}
