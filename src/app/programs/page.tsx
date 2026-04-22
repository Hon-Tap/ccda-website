"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Heart, Droplets, BookOpen, ShieldCheck, Home, Sprout, 
  ArrowUpRight, Workflow, Zap, Microscope, Globe,
  MoveRight
} from "lucide-react";

// Unified monochromatic icon style to avoid "rainbow" effect
const iconProps = {
  size: 20,
  strokeWidth: 1.5,
  className: "text-emerald-600"
};

const programs = [
  { id: "health", title: "Health", icon: Heart, stat: "HealthFacilities", desc: "Our interventions focus on early diagnosis, treatment of common illnesses, and referral systems to ensure continuity of care" },
  { id: "wash", title: "WASH", icon: Droplets, stat: "Clean Access", desc: "CCDA’s WASH interventions are designed to improve public health outcomes while empowering communities to manage their own water and sanitation systems." },
  { id: "education", title: "Education", icon: BookOpen, stat: "Students", desc: "Christian Community Development Agency (CCDA) works to improve access to inclusive and equitable education for underserved populations across South Sudan. " },
  { id: "protection", title: "Protection", icon: ShieldCheck, stat: "Crisis-Ready", desc: "Safeguarding Dignity and Protecting Vulnerable Communities prior to Child Protection and Family Support" },
  { id: "shelter", title: "Shelter & NFIs", icon: Home, stat: "Rapid Response", desc: " CCDA works to support vulnerable communities by providing emergency shelter assistance and improving living conditions for displaced and crisis-affected populations." },
  { id: "food", title: "Food Security", icon: Sprout, stat: "Sovereign Growth", desc: "Food insecurity remains one of the most pressing challenges facing many communities in South Sudan" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.08 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ProgramsPage() {
  return (
    <main className="bg-[#fcfcfc] text-[#0b132b] selection:bg-emerald-600 selection:text-white">
      
      {/* --- HERO: ARCHITECTURAL PRECISION --- */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-emerald-600" />
              <span className="text-emerald-600 text-[10px] font-black uppercase tracking-[0.4em]">Strategy Framework</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif tracking-tight leading-none">
              Impact <span className="text-slate-300 italic font-light font-sans">by</span> Design.
            </h1>
            <p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed">
              CCDA strengthens access to essential primary healthcare services by supporting community health facilities and outreach
programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- COMPACT PROGRAM GRID --- */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {programs.map((p) => (
              <motion.div key={p.id} variants={itemVariants}>
                <Link href={`/programs/${p.id}`} className="group block h-full">
                  <div className="h-full bg-white border border-slate-100 p-8 rounded-3xl transition-all duration-300 group-hover:border-emerald-200 group-hover:shadow-xl group-hover:shadow-emerald-900/5">
                    <div className="flex justify-between items-start mb-10">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-emerald-50 transition-colors">
                        <p.icon {...iconProps} />
                      </div>
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter bg-slate-50 px-2 py-1 rounded">
                        {p.stat}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-700 transition-colors">{p.title}</h3>
                    <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">
                      {p.desc}
                    </p>

                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-emerald-600 transition-colors">
                      Protocol <MoveRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- THE INTEGRATION MATRIX (COMPACT DARK) --- */}
      <section className="py-24 bg-[#0b132b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-serif text-white mb-6">Cross-cutting <br/><span className="text-emerald-500 italic font-sans font-light">Compliance.</span></h2>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Interventions are cross-vetted through four critical lenses to ensure zero-harm and long-term viability.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
              {[
                { title: "Gender Integration", icon: Zap, body: "Ensuring equitable agency for women and girls." },
                { title: "Conflict Sensitivity", icon: ShieldCheck, body: "Fostering peace and social cohesion." },
                { title: "Climate Resilience", icon: Microscope, body: "Engineering to withstand environmental shocks." },
                { title: "Data Accountability", icon: Globe, body: "Evidence-based planning via real-time data." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <item.icon className="text-emerald-500 shrink-0" size={18} />
                  <div>
                    <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-slate-500 text-xs font-light leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA: MINIMALIST --- */}
      <section className="py-32 px-6">
        <div className="max-w-3xl mx-auto text-center border-t border-slate-100 pt-32">
          <h2 className="text-3xl md:text-5xl font-serif mb-12">Ready to support a <br/> resilient South Sudan?</h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <Link 
              href="/contact" 
              className="px-10 py-5 bg-emerald-700 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10"
            >
              Partner With Us
            </Link>
            <Link 
              href="/reports" 
              className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-emerald-700 transition-colors"
            >
              Annual Reports <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}