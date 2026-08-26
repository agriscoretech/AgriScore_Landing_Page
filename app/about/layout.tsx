import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About AgriScore | Precision Agriculture Platform",
  description: "Learn about AgriScore's mission to revolutionize Indian agriculture through soil intelligence and high-yield engineering.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
