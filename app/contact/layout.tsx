import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact AgriScore | Talk to Our Agriculture Experts",
  description: "Get in touch with AgriScore for precision farming solutions, partnership inquiries, and soil intelligence services.",
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
