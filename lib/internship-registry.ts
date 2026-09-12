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
  },
  "AGS-INT-2026-1135": {
    id: "AGS-INT-2026-1135",
    name: "Yogesh Patil",
    role: "Market Research Intern",
    department: "Market Research & Strategy",
    domain: "Agricultural Market Intelligence & Strategic Growth",
    cohort: "Summer Cohort 2026",
    duration: "3 Months (Full-time)",
    period: "11 June 2026 – 10 September 2026",
    issueDate: "11.09.2026",
    companyName: "AgriScore Pvt. Ltd.",
    pdfUrl: "/certificates/AGS-INT-2026-1135.pdf",
    status: "Verified & Active",
    verificationHash: "SHA256: e5119fdb26d0e9f16c5a9e2ce840d02f0a576b8572f57579cbe89615a230902c",
    mentor: "Soham Das, Founder & Director",
    signatories: {
      director: "Soham Das (Founder & Director)",
      coFounder: "Piyush (Co-Founder & Director)",
      directorTitle: "Founder & Director",
      coFounderTitle: "Co-Founder & Director"
    },
    keyContributions: [
      "Conducted comprehensive market research and competitive benchmarking across Indian Agritech landscapes",
      "Formulated rural grower persona intelligence, pricing sensitivity models, and adoption roadmaps",
      "Collaborated cross-functionally with Market Research & Strategy on AgriScore product-market fit"
    ]
  },
  "AGS-INT-2026-1468": {
    id: "AGS-INT-2026-1468",
    name: "Kalyani Malik",
    role: "Junior Software Engineer Intern",
    department: "Technology & Product Development",
    domain: "Software Systems & Precision Cloud Engineering",
    cohort: "Summer Cohort 2026",
    duration: "7 Weeks (Full-time)",
    period: "6 July 2026 – 21 August 2026",
    issueDate: "22.08.2026",
    companyName: "AgriScore Pvt. Ltd.",
    pdfUrl: "/certificates/AGS-INT-2026-1468.pdf",
    status: "Verified & Active",
    verificationHash: "SHA256: 03fa7584e6e97056739663c021de0ccd037be66fafcb32537da029af162b582b",
    mentor: "Soham Das, Founder & Director",
    signatories: {
      director: "Soham Das (Founder & Director)",
      coFounder: "Piyush (Co-Founder & Director)",
      directorTitle: "Founder & Director",
      coFounderTitle: "Co-Founder & Director"
    },
    keyContributions: [
      "Developed robust core software modules and responsive data components for AgriScore platform services",
      "Integrated backend API endpoints, telemetry processing handlers, and automated test coverage",
      "Collaborated cross-functionally with Technology & Product Development on sprint deliverables and product reliability"
    ]
  },
  "AGS-INT-2026-1246": {
    id: "AGS-INT-2026-1246",
    name: "Gopal Singh",
    role: "React Native Developer Intern",
    department: "Technology & Product Development",
    domain: "Mobile Architecture & Precision Agritech Applications",
    cohort: "Summer Cohort 2026",
    duration: "3 Months (Full-time)",
    period: "11 June 2026 – 10 September 2026",
    issueDate: "11.09.2026",
    companyName: "AgriScore Pvt. Ltd.",
    pdfUrl: "/certificates/AGS-INT-2026-1246.pdf",
    status: "Verified & Active",
    verificationHash: "SHA256: e904a413c3651e25aaf368f84ff82ad0b94aab52c0bf8a9b9892cec5a4a14d30",
    mentor: "Soham Das, Founder & Director",
    signatories: {
      director: "Soham Das (Founder & Director)",
      coFounder: "Piyush (Co-Founder & Director)",
      directorTitle: "Founder & Director",
      coFounderTitle: "Co-Founder & Director"
    },
    keyContributions: [
      "Engineered cross-platform mobile application modules using React Native for farmer telemetry and precision agriculture workflows",
      "Implemented responsive mobile UI components, native device integrations, and optimized offline-first caching mechanisms",
      "Collaborated cross-functionally with Technology & Product Development on mobile app performance and production stability"
    ]
  }
}

export function getCredentialById(id: string): InternshipCredential | null {
  if (!id) return null
  const cleanId = id.trim()
  const normalized = cleanId.toUpperCase().replace(/\s+/g, "")

  // 1. Direct match by Certificate ID
  if (REGISTRY_DATABASE[normalized]) return REGISTRY_DATABASE[normalized]

  // 2. Resilient certificate prefix handling (e.g. AGRI-INT-2026-1246 or INT-2026-1246)
  if (normalized.startsWith("AGRI-")) {
    const agsId = normalized.replace(/^AGRI-/, "AGS-")
    if (REGISTRY_DATABASE[agsId]) return REGISTRY_DATABASE[agsId]
  }
  if (normalized.startsWith("INT-")) {
    const agsId = `AGS-${normalized}`
    if (REGISTRY_DATABASE[agsId]) return REGISTRY_DATABASE[agsId]
  }

  // 3. Match numeric Certificate ID suffix (e.g. '1135', '1246', '1357', '1468')
  if (/^\d{4}$/.test(normalized)) {
    for (const cred of Object.values(REGISTRY_DATABASE)) {
      if (cred.id.endsWith(normalized)) {
        return cred
      }
    }
  }

  // 4. Track reference aliases (e.g. AGS-PE-2601, AGS-PE-2602, AGS-BSO-2601, AGS-AIDS-2601)
  if (normalized === "AGS-PE-2601" || normalized === "PE-2601") {
    return REGISTRY_DATABASE["AGS-INT-2026-1246"]
  }
  if (normalized === "AGS-PE-2602" || normalized === "PE-2602") {
    return REGISTRY_DATABASE["AGS-INT-2026-1468"]
  }
  if (normalized === "AGS-BSO-2601" || normalized === "BSO-2601") {
    return REGISTRY_DATABASE["AGS-INT-2026-1135"]
  }
  if (normalized === "AGS-AIDS-2601" || normalized === "AIDS-2601") {
    return REGISTRY_DATABASE["AGS-INT-2026-1357"]
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
