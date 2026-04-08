"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  Users, 
  ArrowRight,
  Globe,
  CheckCircle2,
  Clock,
  X,
  Target,
  Briefcase
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
   EXPANDED PROJECTS DATA (With Modal Details)
========================================================= */
const projects = [
  {
    id: "jonglei-water-rehabilitation",
    title: "Jonglei Deep Borehole Rehabilitation",
    status: "Ongoing",
    location: "Jonglei State",
    sector: "WASH",
    image: "/img (4).jpeg", 
    beneficiary: "12,000 People",
    desc: "Restoring broken water points and drilling new deep boreholes to ensure year-round clean water access for agro-pastoral communities.",
    duration: "12 Months (Phases 1 & 2)",
    budget_scale: "Tier 1 Critical",
    achievements: [
      "Successfully mapped 15 inactive borehole sites for rehabilitation.",
      "Formed and trained 4 community water management committees.",
      "Sourced solar-powered pump components for heavy-yield systems."
    ]
  },
  {
    id: "unity-emergency-health",
    title: "Unity State Mobile Medical Outreaches",
    status: "Completed",
    location: "Unity State",
    sector: "Health",
    image: "/img (1).jpeg",
    beneficiary: "8,500 Women & Children",
    desc: "Delivered rapid clinical services, vaccinations, and maternal healthcare to hard-to-reach populations affected by seasonal flooding.",
    duration: "6 Months",
    budget_scale: "Rapid Response Fund",
    achievements: [
      "Immunized over 4,000 children against preventable diseases.",
      "Provided antenatal care to 1,200 expectant mothers.",
      "Distributed 5,000 emergency medical hygiene packs."
    ]
  },
  {
    id: "upper-nile-education",
    title: "Safe Spaces Accelerated Learning",
    status: "Ongoing",
    location: "Upper Nile",
    sector: "Education",
    image: "/img (3).jpeg",
    beneficiary: "3,200 Youth",
    desc: "Establishing temporary learning spaces and providing condensed curriculum training for out-of-school youth to catch up on lost academic years.",
    duration: "18 Months",
    budget_scale: "Multi-Year Strategy",
    achievements: [
      "Constructed 8 temporary learning structures in high-density IDP areas.",
      "Enrolled 1,500 girls who previously had zero access to formal schooling.",
      "Supplied full classroom kits and teacher guides to local volunteers."
    ]
  }
];

export default function ProjectsPage() {
  // State to handle which project is currently viewed in the modal
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <main className="bg-[#fcfdfd] text-[#0a2647] font-sans overflow-x-hidden relative">
      
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
              Field Operations
            </motion.span>
            
            <motion.h1 variants={revealVariants} className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tight mb-8">
              Our Live <span className="italic text-white/80 font-light">Interventions.</span>
            </motion.h1>
            
            <motion.p variants={revealVariants} className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-3xl">
              Explore our localized, community-driven projects across South Sudan. From rapid emergency responses to sustainable infrastructure builds.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. PREMIUM PROJECT LISTING --- */}
      <section className="py-24 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="space-y-20">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="group grid lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Alternating Layout Logic for Large Screens */}
                <div className={`lg:col-span-7 space-y-5 ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider ${
                      project.status === "Ongoing" 
                        ? "bg-[#eaeff5] text-[#0a2647]" 
                        : "bg-primary-green/10 text-primary-green"
                    }`}>
                      {project.status === "Ongoing" ? <Clock size={11} /> : <CheckCircle2 size={11} />}
                      {project.status}
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary-green">
                      {project.sector} Sector
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-serif text-[#0a2647] leading-tight group-hover:text-primary-green transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed max-w-2xl">
                    {project.desc}
                  </p>

                  <div className="grid grid-cols-2 sm:flex sm:items-center gap-6 pt-2">
                    <div className="flex items-center gap-2 text-xs text-[#0a2647]">
                      <MapPin size={14} className="text-slate-400" />
                      <span className="font-bold">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#0a2647]">
                      <Users size={14} className="text-slate-400" />
                      <span className="font-bold">{project.beneficiary}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-3 font-bold text-xs uppercase tracking-[0.15em] text-[#0a2647] group/link border-b border-transparent hover:border-primary-green w-fit pb-1 transition-all"
                    >
                      View Project Case Study
                      <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Image with Premium Offset Border */}
                <div className={`lg:col-span-5 relative ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 rounded-sm z-10">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2647]/30 to-transparent" />
                  </div>
                  <div className="absolute top-4 -bottom-4 -left-4 right-4 border border-slate-200 pointer-events-none rounded-sm hidden lg:block" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* --- 3. IMPACT STATS BANNER --- */}
      <section className="py-24 bg-[#eaeff5] text-[#0a2647]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h4 className="text-4xl md:text-5xl font-serif text-primary-green">50+</h4>
            <p className="text-slate-500 font-light text-[10px] uppercase tracking-wider">Active Projects</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl md:text-5xl font-serif text-primary-green">100k+</h4>
            <p className="text-slate-500 font-light text-[10px] uppercase tracking-wider">People Reached</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl md:text-5xl font-serif text-primary-green">10</h4>
            <p className="text-slate-500 font-light text-[10px] uppercase tracking-wider">States Covered</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl md:text-5xl font-serif text-primary-green">6</h4>
            <p className="text-slate-500 font-light text-[10px] uppercase tracking-wider">Response Sectors</p>
          </div>
        </div>
      </section>

      {/* --- 4. CALL TO ACTION --- */}
      <section className="py-32 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-serif text-[#0a2647] mb-6 tracking-tight">Support Our Field Operations</h2>
        <p className="text-slate-500 mb-10 text-lg font-light leading-relaxed">
          Running life-saving interventions in hard-to-reach areas requires dedicated logistics and backing. Help us reach the next community.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/contact" className="px-10 py-5 bg-[#0a2647] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-primary-green transition-colors rounded-sm flex items-center gap-3">
            Partner On A Project <ArrowRight size={16} />
          </Link>
          <Link href="/about" className="px-10 py-5 bg-transparent border border-[#0a2647]/20 text-[#0a2647] font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#eaeff5] transition-colors rounded-sm">
            Learn About Our Method
          </Link>
        </div>
      </section>
{/* =========================================================
         PREMIUM PROJECT DETAILS MODAL - FIXED
      ========================================================= */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Background Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-[#0a2647]/80 backdrop-blur-md"
            />

            {/* Modal Card Container */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-[#fcfdfd] text-[#0a2647] w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-sm grid md:grid-cols-12 shadow-2xl z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveProject(null)}
                className="absolute top-6 right-6 z-20 bg-white/80 p-2 rounded-full border border-slate-100 text-[#0a2647] hover:bg-primary-green hover:text-white transition-all"
              >
                <X size={18} />
              </button>

              {/* Modal Content Left (Image Area) */}
              <div className="md:col-span-5 relative h-64 md:h-full bg-slate-100 min-h-[300px]">
                <Image 
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Modal Content Right (Details Area) */}
              <div className="md:col-span-7 p-8 md:p-12">
                <h2 className="text-2xl font-serif text-[#0a2647] mb-4">{activeProject.title}</h2>
                <p className="text-slate-500 font-light text-sm mb-8">{activeProject.desc}</p>
                
                <h4 className="font-serif text-lg text-[#0a2647] mb-4">Core Deliverables</h4>
                <ul className="space-y-3">
                  {activeProject.achievements.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-slate-500 items-start">
                      <CheckCircle2 size={16} className="text-primary-green flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}