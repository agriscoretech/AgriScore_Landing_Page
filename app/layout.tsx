import type React from "react"
import { Inter, Cormorant_Garamond } from "next/font/google"
import "./globals.css"
import { Metadata, Viewport } from "next"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: {
    default: "AgriScore – Precision Agriculture & Soil Intelligence Platform",
    template: "%s | AgriScore"
  },
  description: "AgriScore is a precision agriculture platform offering soil intelligence, sustainable farming solutions, and high-yield crop optimization for Indian farmers.",
  keywords: ["precision agriculture India", "soil intelligence", "smart farming solutions", "agritech Kolkata", "sustainable farming", "yield engineering"],
  authors: [{ name: "AgriScore" }],
  creator: "AgriScore",
  publisher: "AgriScore",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://myagriscore.com",
    title: "AgriScore – Precision Agriculture & Soil Intelligence Platform",
    description: "Engineering the future of farming with advanced soil intelligence and AI-driven precision agriculture.",
    siteName: "AgriScore",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "AgriScore - Precision Agriculture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AgriScore – Precision Agriculture",
    description: "Engineering the future of farming with advanced soil intelligence.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#1a3c34'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AgriScore",
    "url": "https://myagriscore.com",
    "logo": "https://myagriscore.com/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/myagriscore/",
      "https://www.instagram.com/agriscore.official",
      "https://x.com/AgriScore",
      "https://www.youtube.com/channel/UCx_GxBEKWy9ZT_-gXpZ1k5w"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "myagriscore.official@gmail.com",
      "contactType": "customer service"
    }
  }

  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-black text-white selection:bg-[#D4AF37] selection:text-black">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
