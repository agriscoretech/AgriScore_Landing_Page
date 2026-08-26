"use client"

import { motion } from "framer-motion"

export function BlogSection() {
  const posts = [
    {
      title: "Restoring the Heritage: The Path to Chemical-Free Indian Soils",
      category: "Mission",
      date: "Jan 2026",
      image: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=987&auto=format&fit=crop",
    },
    {
      title: "Economics of the Earth: Reducing Input Costs for the Smallholder",
      category: "Strategy",
      date: "Feb 2026",
      image: "https://images.unsplash.com/photo-1696371269777-88d1ce71642c?q=80&w=987&auto=format&fit=crop",
      position: "object-top"
    },
    {
      title: "The Pesticide-Free Mandate: A Wellness Blueprint for the Nation",
      category: "Mission",
      date: "March 2026",
      image: "https://images.unsplash.com/photo-1711900177029-93798ef45bb7?q=80&w=2070&auto=format&fit=crop",
    }
  ]

  return (
    <section className="py-40 bg-white text-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-8 mb-32">
          <span className="text-[10px] uppercase tracking-[0.6em] text-neutral-400 font-bold italic">Field Insights</span>
          <h2 className="text-5xl md:text-8xl font-serif font-light tracking-tight">Mission <span className="italic">Insights</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {posts.map((post, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className="flex flex-col space-y-10 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-[5/4] shadow-lg border border-neutral-100">
                <img 
                  src={post.image}
                  alt={post.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 ${post.position || 'object-center'}`}
                />
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-serif font-light leading-tight group-hover:text-neutral-600 transition-colors">{post.title}</h3>
                <div className="w-0 h-[1px] bg-black group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
