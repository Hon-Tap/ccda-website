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
  Building2,
  Globe2
} from "lucide-react";

/* =========================================================
   ANIMATION VARIANTS (Aligned with Global Theme)
========================================================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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

  return (
    <main
      ref={containerRef}
      className="relative bg-white text-slate-800 font-sans overflow-x-hidden"
    >
      {/* --- 1. CINEMATIC HERO --- */}
      <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0b132b]">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.5], [0, 150]), scale: 1.05 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/img (4).jpeg" 
            alt="CCDA Vision"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
        </motion.div>
        
        {/* Deep gradient matching the premium dark theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/80 via-[#0b132b]/40 to-[#0b132b]/95 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full mt-16 md:mt-24 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto space-y-8">
            <motion.div variants={fadeUp} className="inline-block">
              <span className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/90 text-xs font-bold uppercase tracking-[0.25em] shadow-2xl">
                Institutional History
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] tracking-tight drop-shadow-2xl">
              Our Story. <br className="hidden md:block" />
              <span className="italic font-light text-[#1e8b35]">Our Mission.</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              Christian Community Development Agency (CCDA) is a non-profit, non-political 
              humanitarian organization dedicated to restoring dignity and resilience 
              among conflict-affected populations in South Sudan.
            </motion.p>
          </motion.div>
        </div>

        {/* Bouncing Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white/50"
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* --- 2. ORGANIZATIONAL DNA --- */}
      <section className="py-24 lg:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#1e8b35] rounded-full"></span> Who We Are
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0b132b] leading-[1.1]">
                Bridging emergency relief with <span className="italic text-slate-500 font-light block mt-2">long-term development.</span>
              </h2>
            </motion.div>
            
            <motion.div variants={fadeUp} className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
              <p>Established on Christian principles of compassion and service, CCDA operates under the <strong className="text-[#0b132b] font-semibold">South Sudan NGOs Act 2016</strong>. We recognize that true impact requires moving beyond temporary aid.</p>
              <p>Our work is grounded in the belief that humanitarian response must empower local communities. We build the systemic capacity that allows families to rebuild their lives with hope and self-reliance.</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Vision Card */}
            <motion.div variants={fadeUp} className="bg-[#0b132b] p-10 rounded-[2rem] text-white relative overflow-hidden group shadow-2xl shadow-[#0b132b]/20 border border-[#0b132b]">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#1e8b35]/20 rounded-full blur-3xl group-hover:bg-[#1e8b35]/40 transition-colors duration-700" />
              <Target className="text-[#1e8b35] w-10 h-10 mb-6 relative z-10" strokeWidth={1.5} />
              <h3 className="font-serif text-3xl mb-4 relative z-10">Our Vision</h3>
              <p className="text-slate-300 text-base leading-relaxed font-light relative z-10">
                A peaceful and resilient South Sudan where all communities live with dignity and equal access to opportunities.
              </p>
            </motion.div>
            
            {/* Legacy Card */}
            <motion.div variants={fadeUp} className="bg-slate-50 p-10 rounded-[2rem] text-[#0b132b] relative overflow-hidden group border border-slate-200">
              <History className="text-[#0f62a3] w-10 h-10 mb-6 relative z-10" strokeWidth={1.5} />
              <h3 className="font-serif text-3xl mb-4 relative z-10">Our Legacy</h3>
              <p className="text-slate-600 text-base leading-relaxed font-light relative z-10">
                Years of dedicated, transparent service across the Greater Upper Nile and Bahr el Ghazal regions, fostering social cohesion.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. CORE VALUES GRID --- */}
      <section className="py-24 lg:py-32 bg-slate-50 border-y border-slate-200/60 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-xs">Guiding Principles</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0b132b]">The Foundation of Our Operations</h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">The ethical framework that drives every decision, partnership, and field intervention.</p>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map((v, i) => (
              <motion.div 
                key={v.label} 
                variants={fadeUp}
                className="group bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-[#0b132b]/5 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e8b35] to-[#166e2a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-[#1e8b35] transition-colors duration-300 border border-slate-100 group-hover:border-transparent">
                  <v.icon className="text-[#0b132b] group-hover:text-white transition-colors duration-300" size={28} strokeWidth={1.5} />
                </div>
                <h5 className="font-serif text-2xl mb-3 text-[#0b132b]">{v.label}</h5>
                <p className="text-slate-500 text-sm leading-relaxed font-light">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. GEOGRAPHIC FOOTPRINT --- */}
      <section className="py-24 lg:py-32 bg-[#0b132b] relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#0f62a3]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#1e8b35]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{ once: true }} className="space-y-8">
              <motion.div variants={fadeUp} className="space-y-4">
                <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#1e8b35] rounded-full"></span> Where We Serve
                </h4>
                <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.1]">
                  Reaching the most <br />
                  <span className="italic text-slate-400 font-light">remote frontiers.</span>
                </h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-slate-300 font-light leading-relaxed text-lg">
                Headquartered in Juba, CCDA maintains a strong operational presence across 
                conflict-affected states, ensuring that aid reaches those in the most 
                vulnerable and hard-to-reach areas.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-4 pt-4">
                {['Greater Upper Nile Region', 'Bahr el Ghazal Region', 'Equatoria Region'].map((region, i) => (
                  <li key={i} className="flex items-center gap-4 text-base font-semibold text-white">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                      <MapPin className="text-[#1e8b35]" size={20} strokeWidth={1.5} />
                    </div>
                    {region}
                  </li>
                ))}
              </motion.ul>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] lg:aspect-[4/4] overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl"
            >
              <Image src="/img (1).jpeg" alt="Field Location" fill className="object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b] via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 5. PARTNERS & DONORS --- */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-xs mb-4">Trusted By</h4>
          <h2 className="text-4xl font-serif text-[#0b132b] mb-16 tracking-tight">Strategic Partners & Donors</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-50">
            {/* Placeholder for real donor logos */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col items-center justify-center hover:opacity-100 hover:text-[#0f62a3] transition-all duration-500 cursor-pointer group">
                <Globe2 size={48} strokeWidth={1} className="text-slate-400 group-hover:text-[#0f62a3] transition-colors mb-3" />
                <span className="font-serif text-lg text-slate-500 group-hover:text-[#0b132b] transition-colors">Global Partner {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-[#1e8b35]/5 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0b132b] mb-6 tracking-tight leading-tight">Partnering for Lasting Impact</h2>
          <p className="text-slate-500 mb-12 text-lg font-light leading-relaxed">
            We collaborate with international donors, local authorities, and fellow 
            NGOs to create a unified, transparent response to the challenges facing South Sudan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="group relative overflow-hidden w-full sm:w-auto px-8 py-4 bg-[#0b132b] text-white font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 uppercase tracking-widest text-xs flex items-center justify-center"
            >
              <div className="absolute inset-0 w-full h-full bg-[#1e8b35] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-3">
                Partner with CCDA <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const values = [
  { label: "Accountability", icon: ShieldCheck, text: "Maintaining the highest standards of transparency in resource management and reporting." },
  { label: "Integrity", icon: Scale, text: "Conducting all operations with complete honesty and unwavering ethical principles." },
  { label: "Impartiality", icon: Users, text: "Providing assistance based solely on need, regardless of race, gender, or religion." },
  { label: "Humanity", icon: Heart, text: "Upholding the intrinsic value, fundamental rights, and dignity of every human life." }
];