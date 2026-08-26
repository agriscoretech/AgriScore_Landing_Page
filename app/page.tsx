import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { MarketsSection } from "@/components/markets-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AgriScore – Precision Agriculture for Sustainable Estates",
  description: "AgriScore is redefining the global standard in agriculture. Specialized in soil intelligence, toxin-free farming, and high-yield engineering for elite estates.",
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white relative">
      <Navbar />
      <HeroSection />
      
      {/* Trust & Local Focus Section */}
      <section className="bg-white py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="space-y-4 max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.4em] text-emerald-600 font-bold">Rooted in Bengal, Serving India</span>
              <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 italic">Our goal is simple: Better Yield, Safer Food.</h2>
              <p className="text-neutral-500 font-light leading-relaxed">
                By focusing on soil health and reducing the burden of chemical costs, we are helping Indian farmers reclaim their land and their livelihood.
              </p>
            </div>
            <div className="flex gap-8 border-l-0 md:border-l border-neutral-100 pl-0 md:pl-12 justify-center md:justify-start w-full md:w-auto mt-8 md:mt-0">
               <div className="text-center">
                  <span className="block text-3xl font-serif text-neutral-900 italic">100%</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400">Pesticide Free</span>
               </div>
               <div className="text-center">
                  <span className="block text-3xl font-serif text-neutral-900 italic">Save</span>
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400">Our Soil</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <FeaturesSection />
      </div>
      <MarketsSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  )
}
