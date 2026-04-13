"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Heart, Droplets, BookOpen, ShieldCheck, Home, Sprout, 
  ArrowRight, Users, Scale, Globe, Layers, ArrowUpRight
} from "lucide-react";

/* =========================================================
   ANIMATION CONSTANTS
========================================================= */
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const programs = [
  { id: "health", title: "Health Services", icon: Heart, stat: "15+ Facilities", desc: "Life-saving clinical interventions and mobile health services for underserved rural populations." },
  { id: "wash", title: "WASH", icon: Droplets, stat: "50k+ Access", desc: "Sustainable water infrastructure and hygiene education to drive public health outcomes." },
  { id: "education", title: "Education", icon: BookOpen, stat: "12 Schools", desc: "Empowering communities through inclusive learning and vocational development frameworks." },
  { id: "protection", title: "Protection", icon: ShieldCheck, stat: "Crisis-Ready", desc: "Safeguarding human rights and providing trauma-informed care for vulnerable groups." },
  { id: "shelter-nfi", title: "Shelter & NFIs", icon: Home, stat: "Emergency Aid", desc: "Rapid response kits and essential household items for displaced households." },
  { id: "food-security", title: "Food Security", icon: Sprout, stat: "Agri-Resilience", desc: "Transitioning communities from aid dependency to sustainable agricultural production." }
];

export default function ProgramsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  return (
    <main ref={containerRef} className="bg-[#fcfdfd] text-[#0a2647] font-sans overflow-x-hidden">
      
      {/* --- 1. HERO --- */}
      <section className="pt-48 pb-40 bg-[#0a2647] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Globe size={1000} className="absolute -top-40 -right-40 text-white/5 rotate-12" strokeWidth={0.5} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.span variants={revealVariants} className="inline-block px-5 py-2 rounded-full border border-primary-green/30 bg-primary-green/10 text-primary-green text-[11px] font-bold uppercase tracking-[0.3em] mb-10">
              Technical Framework
            </motion.span>
            <motion.h1 variants={revealVariants} className="text-5xl md:text-8xl font-serif leading-[0.95] tracking-tighter mb-10">
              Integrated <br /> <span className="italic text-white/70">Impact Systems.</span>
            </motion.h1>
            <motion.p variants={revealVariants} className="text-xl text-white/60 font-light leading-relaxed">
              CCDA’s operational strategy is built on multi-sectoral integration. We don't treat symptoms; we build the systemic resilience required for sustainable peace and development in South Sudan.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE GRID --- */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
            {programs.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 group hover:bg-[#0a2647] transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <p.icon className="w-10 h-10 text-[#0a2647] group-hover:text-primary-green transition-colors" strokeWidth={1} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 group-hover:text-white/50 transition-colors">
                    {p.stat}
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-[#0a2647] group-hover:text-white mb-4 transition-colors">
                  {p.title}
                </h3>
                <p className="text-slate-500 group-hover:text-white/70 text-sm leading-relaxed mb-8 transition-colors">
                  {p.desc}
                </p>
                <Link href={`/programs/${p.id}`} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0a2647] group-hover:text-primary-green transition-colors">
                  Learn Framework <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. MODUS OPERANDI --- */}
      <section className="py-32 bg-[#eaeff5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-5xl font-serif leading-tight">The CCDA <br/> Methodology.</h2>
            <p className="text-slate-600 leading-relaxed">
              Every program is governed by a rigorous set of cross-cutting priorities. We align our field presence with international humanitarian standards, ensuring that our interventions are scalable, transparent, and—above all—human-centric.
            </p>
            <div className="flex gap-4">
              <div className="h-px w-20 bg-[#0a2647] my-auto" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Standards & Compliance</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Gender Equality", icon: Users },
              { title: "Conflict Sensitive", icon: Scale },
              { title: "Disability Inclusion", icon: Layers },
              { title: "Climate Resilience", icon: Globe }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 border border-slate-200">
                <item.icon className="w-6 h-6 text-[#0a2647] mb-6" />
                <h4 className="font-bold text-sm uppercase tracking-[0.1em]">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. CTA --- */}
      <section className="py-40 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to align your mission?</h2>
          <p className="text-slate-500 mb-12">
            Explore our technical frameworks and impact data to see how we are building the future of South Sudan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="px-10 py-5 bg-[#0a2647] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary-green transition-colors">
              Collaborate
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}