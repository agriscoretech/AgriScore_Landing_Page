"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function MarketsSection() {
  const markets = [
    {
      title: "Soil Revitalization",
      category: "Mother Earth Restoration",
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=987&auto=format&fit=crop",
    },
    {
      title: "Yield Optimization",
      category: "Input Cost Control",
      image: "https://images.unsplash.com/photo-1763397929062-eb0582008877?q=80&w=2532&auto=format&fit=crop",
    },
    {
      title: "Toxin-Free Living",
      category: "National Wellness",
      image: "https://images.unsplash.com/photo-1518994603110-1912b3272afd?q=80&w=1024&auto=format&fit=crop",
    }
  ]

  return (
    <section className="py-40 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 md:mb-32 items-end">
          <div className="space-y-6">
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/20 font-bold mb-4 block">Agricultural Resilience</span>
            <h2 className="text-4xl md:text-8xl font-serif font-light leading-[1.1] tracking-tighter">
              Precision <span className="italic text-white/40">Impact</span> <br />
              <span className="text-white/20 font-sans uppercase text-sm tracking-[0.4em] font-bold not-italic">On Indian Soil</span>
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-xl md:text-4xl font-serif italic text-white/40 leading-[1.3] tracking-tight max-w-lg md:ml-auto">
              We deliver strategic solutions to increase farmer profitability and secure a pesticide-free future for India.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {markets.map((market, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover="hover"
              className="relative aspect-[3/4] overflow-hidden group rounded-[2rem] md:rounded-[3rem] border border-white/5"
            >
              <motion.img 
                variants={{
                  hover: { scale: 1.1 }
                }}
                transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
                src={market.image}
                alt={market.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-8 md:p-10 space-y-4">
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">{market.category}</span>
                <div className="flex justify-between items-end">
                  <h3 className="text-2xl md:text-3xl font-serif font-light">{market.title}</h3>
                  <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md opacity-100 md:opacity-0 group-hover:opacity-100 transition-all translate-y-0 md:translate-y-4 group-hover:translate-y-0 duration-500">
                    <ArrowRight className="h-5 w-5 -rotate-45" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
