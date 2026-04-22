"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Heart, Droplets, BookOpen, ShieldCheck, Home, Sprout, 
  ArrowUpRight, Workflow, Activity, Zap, Microscope, Globe 
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const programs = [
  { 
    id: "health", 
    title: "Health", 
    icon: Heart, 
    accent: "border-emerald-500", 
    stat: "Facilities", 
    desc: "Strengthening fragile health systems through maternal care, mobile units, and clinical excellence in hard-to-reach areas." 
  },
  { 
    id: "wash", 
    title: "WASH", 
    icon: Droplets, 
    accent: "border-blue-400", 
    stat: "Access", 
    desc: "Deploying hydraulic infrastructure and community-led sanitation protocols to eliminate waterborne vulnerabilities." 
  },
  { 
    id: "education", 
    title: "Education", 
    icon: BookOpen, 
    accent: "border-amber-400", 
    stat: "Schools", 
    desc: "Architecting safe learning environments and pedagogical frameworks that empower the next generation of South Sudanese leaders." 
  },
  { 
    id: "protection", 
    title: "Protection", 
    icon: ShieldCheck, 
    accent: "border-red-400", 
    stat: "Crisis-Ready", 
    desc: "Trauma-informed safeguarding and case management for displaced populations and survivors of conflict-related violence." 
  },
  { 
    id: "shelter-nfi", 
    title: "Shelter & NFIs", 
    icon: Home, 
    accent: "border-slate-400", 
    stat: "Rapid Response", 
    desc: "Providing dignified emergency housing and life-essential kits to households displaced by environmental or social shocks." 
  },
  { 
    id: "food-security", 
    title: "Food Security & Livelihoods", 
    icon: Sprout, 
    accent: "border-[#1e8b35]", 
    stat: "Sovereign Growth", 
    desc: "Transitioning communities from aid-dependency to climate-resilient, sovereign food production through agronomic innovation." 
  }
];

export default function ProgramsPage() {
  return (
    <main className="bg-[#fcfcfc] text-[#0b132b] font-sans selection:bg-[#1e8b35] selection:text-white">
      
      {/* --- 1. THE ARCHITECTURAL HERO --- */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1e8b35]/5 -skew-x-12 translate-x-20 z-0 hidden lg:block" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl">
            <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#1e8b35]" />
              <span className="text-[#1e8b35] text-xs font-bold uppercase tracking-[0.4em]">The Engine of Impact</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tight mb-10">
              Transformative <br />
              <span className="italic text-slate-400 font-light">Frameworks.</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl">
              At CCDA, we don&apos;t just deliver aid; we architect scalable systems for community resilience. Our programs are engineered to address the root causes of vulnerability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. THE CORE SECTOR GRID --- */}
      <section className="pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div 
              key={p.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.7 } }
              }}
            >
              <Link 
                href={`/programs/${p.id}`} 
                className="group relative flex flex-col justify-between h-full min-h-[420px] bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-200 transition-all duration-500 hover:border-[#1e8b35] hover:bg-slate-50"
              >
                {/* Visual Accent - Top Bar */}
                <div className={`absolute top-8 left-0 w-1.5 h-12 ${p.accent} border-l-4 rounded-r-full transition-all duration-500 group-hover:h-24`} />

                <div>
                  <div className="flex justify-between items-start mb-12">
                    <div className="p-4 bg-slate-50 rounded-2xl group-hover:bg-[#1e8b35] group-hover:text-white transition-all duration-500">
                      <p.icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#1e8b35] bg-[#1e8b35]/5 px-3 py-1.5 rounded-full">
                      {p.stat}
                    </span>
                  </div>

                  <h3 className="text-3xl font-serif text-[#0b132b] mb-4 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-[#0b132b] transition-colors">
                    Explore Strategy
                  </span>
                  <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-[#0b132b] group-hover:text-white group-hover:border-[#0b132b] transition-all">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 3. CROSS-CUTTING COMPLIANCE (THE MATRIX) --- */}
      <section className="py-24 bg-[#0b132b] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <Workflow className="text-[#1e8b35] w-4 h-4" />
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-[0.2em]">The Integration Matrix</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                Unified for <br />
                <span className="text-[#1e8b35]">Sustainable Impact.</span>
              </h2>
              <p className="text-slate-400 font-light leading-relaxed text-lg">
                No program exists in a vacuum. Every framework we deploy is cross-vetted through four critical compliance lenses to ensure zero-harm and long-term viability.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Gender Integration", icon: Zap, body: "Ensuring equitable access and agency for women and girls in all sectors." },
                { title: "Conflict Sensitivity", icon: ShieldCheck, body: "Analyzing local dynamics to ensure interventions foster peace and social cohesion." },
                { title: "Climate Resilience", icon: Microscope, body: "Adapting engineering and agronomy to withstand environmental shocks." },
                { title: "Data Accountability", icon: Globe, body: "Evidence-based planning driven by local feedback and real-time field data." }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-[#1e8b35] mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                  <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{item.body}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. CTA: FINAL COMMITMENT --- */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <Activity className="mx-auto text-[#1e8b35] w-12 h-12 opacity-30" />
          <h2 className="text-4xl md:text-6xl font-serif text-[#0b132b] leading-[1.1]">Ready to support a resilient South Sudan?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-[#1e8b35] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#0b132b] transition-all duration-300"
            >
              Partner With Us
            </Link>
            <Link 
              href="/reports" 
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 hover:text-[#0b132b] transition-colors"
            >
              View Annual Reports
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}