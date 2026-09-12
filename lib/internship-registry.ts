export interface InternshipCredential {
  id: string
  name: string
  role: string
  department: string
  domain: string
  cohort: string
  duration: string
  period: string
  issueDate: string
  status: "Verified & Active" | "Completed with Honors"
  verificationHash: string
  mentor: string
  companyName?: string
  pdfUrl?: string
  signatories: {
    director: string
    coFounder: string
    directorTitle?: string
    coFounderTitle?: string
  }
  keyContributions: string[]
}

export const REGISTRY_DATABASE: Record<string, InternshipCredential> = {
  "AGS-INT-2026-1357": {
    id: "AGS-INT-2026-1357",
    name: "Ishan Khan",
    role: "AI & ML Engineering Intern",
    department: "Technology & Product Development",
    domain: "Artificial Intelligence & Machine Learning Engineering",
    cohort: "Summer Cohort 2026",
    duration: "3 Months (Full-time)",
    period: "11 June 2026 – 10 September 2026",
    issueDate: "11.09.2026",
    companyName: "AgriScore Pvt. Ltd.",
    pdfUrl: "/certificates/AGS-INT-2026-1357.pdf",
    status: "Verified & Active",
    verificationHash: "SHA256: 3c8e71fa091b42d68e5190da54ef7122b109c855a4b7f439d01e289f81",
    mentor: "Soham Das, Founder & Director",
    signatories: {
      director: "Soham Das (Founder & Director)",
      coFounder: "Piyush (Co-Founder & Director)",
      directorTitle: "Founder & Director",
      coFounderTitle: "Co-Founder & Director"
    },
    keyContributions: [
      "Engineered machine learning pipelines and neural architectures for agricultural computer vision",
      "Developed edge-optimized crop health diagnostics and spectral anomaly detection algorithms",
      "Collaborated across Technology & Product Development on AgriScore core platform intelligence"
    ]
  }
}

export function getCredentialById(id: string): InternshipCredential | null {
  if (!id) return null
  const cleanId = id.trim()
  const normalized = cleanId.toUpperCase().replace(/\s+/g, "")

  // 1. Direct match by Certificate ID
  if (REGISTRY_DATABASE[normalized]) return REGISTRY_DATABASE[normalized]

  // 2. Resilient certificate prefix handling (e.g. AGRI-INT-2026-1357 or INT-2026-1357)
  if (normalized.startsWith("AGRI-")) {
    const agsId = normalized.replace(/^AGRI-/, "AGS-")
    if (REGISTRY_DATABASE[agsId]) return REGISTRY_DATABASE[agsId]
  }
  if (normalized.startsWith("INT-")) {
    const agsId = `AGS-${normalized}`
    if (REGISTRY_DATABASE[agsId]) return REGISTRY_DATABASE[agsId]
  }

  // 3. Match numeric Certificate ID suffix (e.g. '1357')
  if (/^\d{4}$/.test(normalized)) {
    for (const cred of Object.values(REGISTRY_DATABASE)) {
      if (cred.id.endsWith(normalized)) {
        return cred
      }
    }
  }

  return null
}

export function getAllCredentialIds(): string[] {
  return Object.keys(REGISTRY_DATABASE)
}

export function getVerificationUrl(id: string, baseUrl?: string): string {
  const host = baseUrl || (typeof window !== "undefined" ? window.location.origin : "https://myagriscore.com")
  return `${host}/verify/${id.trim().toUpperCase()}`
}

export function getQrCodeImageUrl(url: string, size = 300): string {
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}&color=000000&bgcolor=ffffff&margin=1`
}
