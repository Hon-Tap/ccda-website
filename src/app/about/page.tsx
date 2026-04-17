"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Users, MapPin, Scale, ShieldCheck, History, Target, ArrowRight, Heart, ChevronDown, Globe2
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <main ref={containerRef} className="relative bg-[#fcfcfc] text-slate-800 font-sans overflow-x-hidden">
      
      {/* --- 1. CINEMATIC HERO --- */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0b132b]">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 z-0">
          <Image
            src="/Fangak4.jpg" 
            alt="Institutional History"
            fill
            priority
            className="object-cover opacity-40 mix-blend-luminosity"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/80 via-[#0b132b]/50 to-[#fcfcfc] z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto space-y-8">
            <motion.div variants={fadeUp} className="inline-block">
              <span className="px-6 py-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-[0.3em]">
                Institutional DNA
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[0.95] tracking-tight">
              Beyond Relief. <br className="hidden md:block" />
              <span className="italic font-light text-[#1e8b35]">Systemic Change.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              We do not just respond to crises; we dismantle the architectures of vulnerability. Discover the history, principles, and people behind CCDA.
            </motion.p>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-[#0b132b]"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* --- 2. THE ORIGIN & MISSION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <motion.div 
            initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-10"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#1e8b35]"></span> Organizational Mandate
              </h4>
              <h2 className="text-4xl md:text-6xl font-serif text-[#0b132b] leading-[1.1] tracking-tight">
                Forged in resilience, <br/>
                <span className="italic text-slate-400 font-light">driven by compassion.</span>
              </h2>
            </motion.div>
            
            <motion.div variants={fadeUp} className="prose prose-lg prose-slate text-slate-600 font-light leading-relaxed">
              <p>
                Founded on unwavering Christian principles and officially operating under the <strong>South Sudan NGOs Act 2016</strong>, the Christian Community Development Agency (CCDA) emerged from a critical realization: emergency aid alone is insufficient for lasting peace.
              </p>
              <p>
                Our structural mandate focuses on the intersection of immediate humanitarian relief and long-term socio-economic development. We design frameworks that empower local communities, transitioning them from aid dependency to self-sustaining resilience.
              </p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <motion.div variants={fadeUp} className="bg-[#0b132b] p-12 rounded-3xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1e8b35]/10 rounded-full blur-3xl group-hover:bg-[#1e8b35]/20 transition-colors duration-700" />
              <Target className="text-[#1e8b35] w-8 h-8 mb-8" strokeWidth={1} />
              <h3 className="font-serif text-3xl mb-4">Our Vision</h3>
              <p className="text-slate-300 font-light leading-relaxed">
                A peaceful, resilient South Sudan where communities thrive with dignity, equity, and absolute self-determination.
              </p>
            </motion.div>
            
            <motion.div variants={fadeUp} className="bg-slate-100 p-12 rounded-3xl text-[#0b132b] relative overflow-hidden group">
              <History className="text-[#0b132b] w-8 h-8 mb-8" strokeWidth={1} />
              <h3 className="font-serif text-3xl mb-4">Our Legacy</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Years of transparent, field-tested interventions across the Greater Upper Nile and Bahr el Ghazal regions, rebuilding fractured social fabrics.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. CORE VALUES BENTO GRID --- */}
      <section className="py-32 bg-slate-50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 space-y-4">
            <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-xs">Ethical Framework</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0b132b] tracking-tight">The Principles We Defend</h2>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {values.map((v) => (
              <motion.div 
                key={v.label} 
                variants={fadeUp}
                className="group bg-white p-10 shadow-sm border border-slate-100 hover:border-[#1e8b35]/30 transition-colors duration-500 rounded-2xl flex flex-col justify-between min-h-[300px]"
              >
                <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#1e8b35]/10 transition-colors duration-500">
                  <v.icon className="text-[#0b132b] group-hover:text-[#1e8b35] transition-colors duration-500" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="font-serif text-2xl mb-4 text-[#0b132b]">{v.label}</h5>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{v.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. CTA --- */}
      <section className="py-32 bg-white relative overflow-hidden text-center">
        <div className="max-w-3xl mx-auto px-6 relative z-10 space-y-8">
          <Globe2 className="w-12 h-12 mx-auto text-[#1e8b35] opacity-50" strokeWidth={1} />
          <h2 className="text-4xl md:text-6xl font-serif text-[#0b132b] tracking-tight">Stand with CCDA.</h2>
          <p className="text-slate-500 text-xl font-light">
            Partnerships built on transparency, execution, and localized expertise.
          </p>
          <div className="pt-8">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 bg-[#0b132b] text-white text-[11px] font-bold uppercase tracking-[0.2em] rounded-full hover:bg-[#1e8b35] transition-colors duration-300 gap-3"
            >
              Initiate Partnership <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const values = [
  { label: "Accountability", icon: ShieldCheck, text: "Rigorous standards of transparency in financial stewardship, resource management, and stakeholder reporting." },
  { label: "Integrity", icon: Scale, text: "Executing all field operations and administrative duties with uncompromised honesty and moral courage." },
  { label: "Impartiality", icon: Users, text: "Delivering life-saving assistance guided solely by severity of need, blind to ethnic, political, or religious affiliations." },
  { label: "Humanity", icon: Heart, text: "Fiercely protecting the intrinsic value, fundamental rights, and undeniable dignity of every individual we serve." }
];