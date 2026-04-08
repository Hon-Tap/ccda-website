"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Heart, 
  Droplets, 
  BookOpen, 
  ShieldCheck, 
  Home, 
  Sprout, 
  ArrowRight,
  Users, 
  Scale,
  Globe
} from "lucide-react";

/* =========================================================
   ANIMATION CONSTANTS
========================================================= */
const revealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

/* =========================================================
   PROGRAMS DATA (Mapped to your exact folder structure)
========================================================= */
const programs = [
  {
    id: "health",
    title: "Health Services",
    icon: Heart,
    image: "/img (1).jpeg",
    stat: "15+ Facilities",
    desc: "Delivering life-saving health interventions and clinical services to hard-to-reach rural communities."
  },
  {
    id: "wash",
    title: "WASH",
    icon: Droplets,
    image: "/img (4).jpeg",
    stat: "50k+ Clean Water Access",
    desc: "Providing sustainable water, sanitation, and hygiene solutions to prevent disease outbreaks."
  },
  {
    id: "education",
    title: "Education",
    icon: BookOpen,
    image: "/img (3).jpeg",
    stat: "12 Schools Supported",
    desc: "Promoting inclusive learning environments and youth empowerment through formal and vocational training."
  },
  {
    id: "protection",
    title: "Protection",
    icon: ShieldCheck,
    image: "/img (4).jpeg",
    stat: "Child-Friendly Spaces",
    desc: "Safeguarding the rights and dignity of women, children, and vulnerable groups in conflict zones."
  },
  {
    id: "shelter-nfi", // Matches your screenshot folder name
    title: "Shelter & NFIs",
    icon: Home,
    image: "/img (3).jpeg",
    stat: "Emergency Response",
    desc: "Providing emergency shelter kits and essential non-food items to displaced populations."
  },
  {
    id: "food-security", // Matches your screenshot folder name
    title: "Food Security & Livelihoods",
    icon: Sprout,
    image: "/img (4).jpeg",
    stat: "Sustainable Farming",
    desc: "Enhancing community resilience through agricultural support and economic empowerment initiatives."
  }
];

export default function ProgramsPage() {
  return (
    <main className="bg-[#fcfdfd] text-[#0a2647] font-sans overflow-x-hidden">
      
      {/* --- 1. EDITORIAL HEADER --- */}
      <section className="pt-44 pb-32 bg-[#0a2647] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <Globe size={800} className="absolute -top-40 -right-40 text-white" strokeWidth={1} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span variants={revealVariants} className="text-primary-green font-bold uppercase tracking-[0.25em] text-xs mb-6 inline-block">
              Core Interventions
            </motion.span>
            
            <motion.h1 variants={revealVariants} className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight mb-8">
              Our <span className="italic text-white/80 font-light">Impact Areas.</span>
            </motion.h1>
            
            <motion.p variants={revealVariants} className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-3xl">
              CCDA implements highly integrated, standards-driven programs across South Sudan to transition conflict-affected communities from emergency relief to long-term self-reliance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. PREMIUM PROGRAM GRID --- */}
      <section className="py-32 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {programs.map((program, idx) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.05, duration: 0.8 }}
                className="group flex flex-col h-full"
              >
                {/* Image Container with Sharp Corners */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-slate-100">
                  <Image 
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a2647]/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Subtle floating badge */}
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-sm">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white">
                      {program.stat}
                    </span>
                  </div>
                </div>

                {/* Content area elevated through typography */}
                <div className="pt-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <program.icon size={16} className="text-primary-green" strokeWidth={1.5} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      Sector Program
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-serif text-[#0a2647] mb-3 group-hover:text-primary-green transition-colors">
                    {program.title}
                  </h3>
                  
                  <p className="text-slate-500 font-light text-sm leading-relaxed mb-6 flex-grow">
                    {program.desc}
                  </p>

                  <Link 
                    href={`/programs/${program.id}`}
                    className="inline-flex items-center gap-3 font-bold text-xs uppercase tracking-[0.15em] text-[#0a2647] group/link border-b border-transparent hover:border-primary-green w-fit pb-1 transition-all"
                  >
                    View Framework
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. CROSS-CUTTING THEMES (Asymmetric Split) --- */}
      <section className="py-32 bg-[#eaeff5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-primary-green font-bold uppercase tracking-[0.25em] text-xs">Modus Operandi</span>
              <h2 className="text-4xl font-serif text-[#0a2647] leading-tight tracking-tight">Cross-Cutting Priorities</h2>
              <p className="text-slate-500 font-light leading-relaxed">
                Our field interventions do not exist in silos. We forcefully integrate specialized, internationally recognized cross-cutting priorities across every vertical program.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {["Gender Equality", "Conflict Sensitivity", "Disability Inclusion", "Environmental Protection"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#0a2647]">
                    <div className="w-1.5 h-1.5 bg-primary-green rounded-full flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-10 rounded-sm border border-slate-200/60 hover:border-primary-green transition-colors">
                <Users className="text-[#0a2647] w-6 h-6 mb-6" strokeWidth={1.5} />
                <h4 className="font-serif text-xl text-[#0a2647] mb-2">Community Led</h4>
                <p className="text-slate-500 font-light text-sm leading-relaxed">Local populations are active decision-makers, not passive recipients.</p>
              </div>
              
              <div className="bg-white p-10 rounded-sm border border-slate-200/60 hover:border-primary-green transition-colors">
                <Scale className="text-[#0a2647] w-6 h-6 mb-6" strokeWidth={1.5} />
                <h4 className="font-serif text-xl text-[#0a2647] mb-2">Rights Based</h4>
                <p className="text-slate-500 font-light text-sm leading-relaxed">We focus on securing basic human rights, international protections, and inherent dignity.</p>
              </div>

              <div className="sm:col-span-2 bg-[#0a2647] p-10 rounded-sm text-white relative overflow-hidden">
                <div className="relative z-10 max-w-lg">
                  <span className="text-primary-green font-bold uppercase tracking-[0.15em] text-[10px] block mb-2">Long-term Vision</span>
                  <p className="font-serif text-xl italic leading-relaxed text-white/90">
                    "We do not build dependence. We focus strictly on building regional systems, local infrastructure, and human capital."
                  </p>
                </div>
                <div className="absolute top-0 right-0 opacity-5 font-serif text-[12rem] leading-none select-none pointer-events-none transform translate-y-1/4">
                  “
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- 4. CALL TO ACTION --- */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-[#0a2647] mb-6 tracking-tight">Support Our Interventions</h2>
        <p className="text-slate-500 mb-10 text-lg font-light leading-relaxed">
          The scale of need in South Sudan demands unified action. Explore how you can partner with us to fund, advise, or scale these high-impact programs.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/contact" className="px-10 py-5 bg-[#0a2647] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-primary-green transition-colors rounded-sm flex items-center gap-3">
            Fund a Program <ArrowRight size={16} />
          </Link>
          <Link href="/reports" className="px-10 py-5 bg-transparent border border-[#0a2647]/20 text-[#0a2647] font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#eaeff5] transition-colors rounded-sm">
            Download Impact Reports
          </Link>
        </div>
      </section>
    </main>
  );
}