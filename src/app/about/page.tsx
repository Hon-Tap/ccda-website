"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { 
  Users, 
  MapPin, 
  Scale, 
  ShieldCheck, 
  History,
  Target,
  ArrowRight,
  Heart,
  ChevronDown,
  Building2
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

/* =========================================================
   ABOUT PAGE COMPONENT
========================================================= */
export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main
  ref={containerRef}
  className="relative bg-[#fcfdfd] text-[#0a2647] font-sans overflow-x-hidden">
    
      {/* --- 1. CINEMATIC HERO --- */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#051324]">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 150]), scale: 1.05 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/img (4).jpeg" 
            alt="CCDA Vision"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-[0.4]"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2647] via-transparent to-[#0a2647]/60 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-16 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.span variants={revealVariants} className="inline-block px-5 py-2 rounded-full border border-primary-green/30 bg-[#0a2647]/50 text-primary-green text-[11px] font-bold uppercase tracking-[0.3em] mb-10 backdrop-blur-md">
              Institutional History
            </motion.span>
            
            <motion.h1 variants={revealVariants} className="text-5xl md:text-7xl lg:text-[90px] font-serif text-white leading-[1.05] tracking-tight mb-8">
              Our Story. <br />
              <span className="italic font-light text-white/80">Our Mission.</span>
            </motion.h1>
            
            <motion.p variants={revealVariants} className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
              Christian Community Development Agency (CCDA) is a non-profit, non-political 
              humanitarian organization dedicated to restoring dignity and resilience 
              among conflict-affected populations in South Sudan.
            </motion.p>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center">
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white/50"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </section>

      {/* --- 2. ORGANIZATIONAL DNA --- */}
      <section className="py-32 lg:py-40 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={revealVariants}>
              <h4 className="text-primary-green font-bold uppercase tracking-[0.25em] text-xs mb-4">Who We Are</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-[#0a2647] leading-[1.15] tracking-tight">
                Bridging emergency relief with <span className="italic text-slate-500 font-light">long-term development.</span>
              </h2>
            </motion.div>
            
            <motion.div variants={revealVariants} className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
              <p>Established on Christian principles of compassion and service, CCDA operates under the <strong>South Sudan NGOs Act 2016</strong>. We recognize that true impact requires moving beyond temporary aid.</p>
              <p>Our work is grounded in the belief that humanitarian response must empower local communities. We build the systemic capacity that allows families to rebuild their lives with hope and self-reliance.</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="bg-[#0a2647] p-10 rounded-sm text-white relative overflow-hidden group">
              <Target className="text-primary-green w-8 h-8 mb-6 relative z-10" />
              <h3 className="font-serif text-2xl mb-3 relative z-10">Our Vision</h3>
              <p className="text-white/70 text-sm leading-relaxed font-light relative z-10">
                A peaceful and resilient South Sudan where all communities live with dignity and equal access to opportunities.
              </p>
            </div>
            
            <div className="bg-[#eaeff5] p-10 rounded-sm text-[#0a2647] relative overflow-hidden group">
              <History className="text-[#0a2647]/50 w-8 h-8 mb-6 relative z-10" />
              <h3 className="font-serif text-2xl mb-3 relative z-10">Our Legacy</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light relative z-10">
                Years of dedicated, transparent service across the Greater Upper Nile and Bahr el Ghazal regions, fostering social cohesion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. CORE VALUES GRID --- */}
      <section className="py-32 bg-[#eaeff5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
            <h4 className="text-primary-green font-bold uppercase tracking-[0.25em] text-xs">Guiding Principles</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0a2647] tracking-tight">The Foundation of Our Field Operations</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0a2647]/10">
            {values.map((v, i) => (
              <motion.div 
                key={v.label} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group p-10 bg-[#fcfdfd] hover:bg-[#0a2647] transition-colors duration-500 relative"
              >
                <v.icon className="w-8 h-8 text-[#0a2647] group-hover:text-primary-green mb-8 transition-colors duration-500" strokeWidth={1.5} />
                <h5 className="font-serif text-xl mb-4 text-[#0a2647] group-hover:text-white transition-colors duration-500">{v.label}</h5>
                <p className="text-slate-500 text-sm leading-relaxed font-light group-hover:text-white/70 transition-colors duration-500">
                  {v.text}
                </p>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary-green group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. PARTNERS & DONORS --- */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h4 className="text-primary-green font-bold uppercase tracking-[0.25em] text-xs mb-8">Trusted by</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0a2647] mb-20 tracking-tight">Strategic Partners & Donors</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-60">
            {/* Placeholder for donor logos */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                <Building2 size={64} className="text-[#0a2647]" />
                <span className="ml-4 font-serif text-xl font-bold">Partner {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. GEOGRAPHIC FOOTPRINT --- */}
      <section className="py-32 bg-[#0a2647] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="space-y-8">
              <h4 className="text-primary-green font-bold uppercase tracking-[0.25em] text-xs">Where We Serve</h4>
              <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-tight">
                Reaching the most <span className="italic text-white/70 font-light">remote frontiers.</span>
              </h2>
              <p className="text-white/60 font-light leading-relaxed text-lg">
                Headquartered in Juba, CCDA maintains a strong operational presence across 
                conflict-affected states, ensuring that aid reaches those in the most 
                vulnerable and hard-to-reach areas.
              </p>
            </div>
            
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/10 shadow-2xl">
              <Image src="/img (1).jpeg" alt="Field Location" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2647]/80 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-40 bg-white relative">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif text-[#0a2647] mb-8 tracking-tight">Partnering for Impact</h2>
          <p className="text-slate-500 mb-12 text-lg font-light max-w-2xl mx-auto">
            We collaborate with international donors, local authorities, and fellow 
            NGOs to create a unified, transparent response to the challenges facing South Sudan.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/contact" className="px-10 py-5 bg-[#0a2647] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-primary-green transition-colors rounded-sm flex items-center gap-3">
              Partner with CCDA <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const values = [
  { label: "Accountability", icon: ShieldCheck, text: "Maintaining the highest standards of transparency in resource management." },
  { label: "Integrity", icon: Scale, text: "Conducting all operations with complete honesty and Christian ethical principles." },
  { label: "Impartiality", icon: Users, text: "Providing assistance based solely on need, regardless of race, gender, or religion." },
  { label: "Humanity", icon: Heart, text: "Upholding the intrinsic value, rights, and dignity of every human life." }
];