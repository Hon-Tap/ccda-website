"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Heart, Droplets, BookOpen, ShieldCheck, Home, Sprout, 
  ArrowUpRight, Layers, Workflow, Activity
} from "lucide-react";

const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const programs = [
  { id: "health", title: "Clinical Health", icon: Heart, stat: "15+ Facilities", desc: "Life-saving clinical interventions, maternal care, and mobile health units for remote populations." },
  { id: "wash", title: "WASH Engineering", icon: Droplets, stat: "50k+ Access", desc: "Hydraulic infrastructure and sustainable sanitation systems driving public health outcomes." },
  { id: "education", title: "Education Systems", icon: BookOpen, stat: "12 Schools", desc: "Pedagogical frameworks, safe learning environments, and vocational capacity building." },
  { id: "protection", title: "Human Protection", icon: ShieldCheck, stat: "Crisis-Ready", desc: "Trauma-informed case management and safeguarding rights for highly vulnerable demographics." },
  { id: "shelter-nfi", title: "Shelter & NFIs", icon: Home, stat: "Emergency Aid", desc: "Rapid-deployment housing structures and essential domestic kits for displaced households." },
  { id: "food-security", title: "Agronomic Resilience", icon: Sprout, stat: "Agri-Resilience", desc: "Transitioning communities from aid protocols to sovereign, climate-resilient food production." }
];

export default function ProgramsPage() {
  return (
    <main className="bg-[#fcfcfc] text-[#0b132b] font-sans min-h-screen">
      
      {/* --- HERO: WHERE PROJECTS ARE BORN --- */}
      <section className="pt-48 pb-32 px-6 max-w-7xl mx-auto">
        <motion.div initial="hidden" animate="visible" variants={revealVariants} className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <Activity className="text-[#1e8b35]" size={20} />
            <span className="text-[#1e8b35] text-[10px] font-bold uppercase tracking-[0.3em]">
              The Impact Incubator
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight mb-8">
            Where projects <br />
            <span className="italic text-slate-400 font-light">are born.</span>
          </h1>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl">
            This is the engine room of CCDA. We do not just execute programs; we architect scalable frameworks. Explore the six core sectors where our interventions are designed, tested, and deployed.
          </p>
        </motion.div>
      </section>

      {/* --- THE FRAMEWORK GRID --- */}
      <section className="pb-40 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link 
                href={`/programs/${p.id}`} 
                className="group block h-full bg-white p-10 rounded-3xl border border-slate-200 hover:border-[#1e8b35] hover:shadow-2xl hover:shadow-[#1e8b35]/5 transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[380px]"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e8b35]/0 to-[#1e8b35]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-[#1e8b35] transition-colors duration-500">
                      <p.icon className="w-6 h-6 text-[#0b132b] group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 bg-slate-50 px-3 py-1 rounded-full group-hover:text-[#1e8b35] group-hover:bg-[#1e8b35]/10 transition-colors">
                      {p.stat}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-serif text-[#0b132b] mb-4">
                    {p.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-8 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0b132b] group-hover:text-[#1e8b35] transition-colors">
                  View Framework <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CROSS-CUTTING THEMES --- */}
      <section className="py-32 bg-[#0b132b] text-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <Workflow className="text-[#1e8b35] w-10 h-10" />
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">The Integration Matrix.</h2>
            <p className="text-slate-400 font-light leading-relaxed text-lg">
              No project is born in isolation. Every sector framework is rigorously vetted against our cross-cutting compliance themes to ensure sustainable, equitable, and zero-harm execution in the field.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: "Gender Integration", icon: Layers },
              { title: "Conflict Sensitivity", icon: ShieldCheck },
              { title: "Climate Resilience", icon: Sprout },
              { title: "Data Accountability", icon: Activity }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <item.icon className="w-6 h-6 text-[#1e8b35] mb-6" strokeWidth={1.5} />
                <h4 className="font-bold text-xs uppercase tracking-[0.1em] text-white/90">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}