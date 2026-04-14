"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart, ShieldCheck, Zap, Users, Droplets, Wheat, ChevronDown } from "lucide-react";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/img (4).jpeg",
    "/img (3).jpeg",
    "/img (1).jpeg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <main className="bg-white overflow-x-hidden font-sans text-slate-800">
      
      {/* 1. DYNAMIC HERO SECTION WITH STATIC TEXT */}
     <section className="relative h-[100dvh] min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0b132b]">
  {/* Dynamic Background Images */}
  <AnimatePresence mode="wait">
    <motion.div
      key={currentSlide}
      initial={{ scale: 1.05, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="absolute inset-0 z-0"
    >
      <Image
        src={heroImages[currentSlide]}
        alt="CCDA South Sudan Field Work"
        fill
        priority
        className="object-cover"
      />
    </motion.div>
  </AnimatePresence>

  {/* Deep gradient matching the premium dark theme */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/95 via-[#0b132b]/40 to-[#0b132b]/95 z-10" />

  <div className="relative z-20 max-w-6xl mx-auto px-6 w-full text-center mt-12 md:mt-20">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="flex flex-col items-center space-y-10"
    >
      {/* Organization Name Badge */}
      <motion.div variants={fadeUp} className="inline-block">
        <span className="px-6 py-2.5 rounded-full border border-white/10 bg-white/10 backdrop-blur-md text-white/90 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] shadow-2xl">
          Christian Community Development Agency
        </span>
      </motion.div>
      
      {/* Rewritten Slogan with Glassmorphic Badge Styling */}
      <motion.div 
        variants={fadeUp}
        className="relative p-10 md:p-16 rounded-[3rem] md:rounded-[4rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl max-w-5xl mx-auto overflow-hidden"
      >
        {/* Subtle inner light effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <h1 className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.15] tracking-tight drop-shadow-2xl">
          We Alleviate the Suffering of <br className="hidden md:block" />
          <span className="text-[#1e8b35] italic font-medium">Under-privileged Populations.</span>
        </h1>
      </motion.div>

      {/* Mission Description */}
      <motion.p variants={fadeUp} className="text-slate-300 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
        Restoring dignity, building resilience, and creating sustainable futures across South Sudan through faith-driven excellence.
      </motion.p>

      {/* Premium CTA Buttons */}
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
        <Link
          href="/programs"
          className="group relative overflow-hidden w-full sm:w-auto px-10 py-5 bg-[#1e8b35] text-white font-bold rounded-full transition-all shadow-xl shadow-[#1e8b35]/20 hover:shadow-[#1e8b35]/40 hover:-translate-y-1 uppercase tracking-widest text-[11px] flex items-center justify-center"
        >
          <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
          <span className="relative z-10 flex items-center gap-3">
            Explore Our Impact <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </span>
        </Link>
        <Link
          href="/contact"
          className="w-full sm:w-auto px-10 py-5 bg-transparent hover:bg-white/10 border border-white/20 text-white font-bold rounded-full transition-all uppercase tracking-widest text-[11px] text-center backdrop-blur-md hover:-translate-y-1"
        >
          Partner With Us
        </Link>
      </motion.div>
    </motion.div>
  </div>

  {/* Refined Bouncing Scroll Indicator */}
  <motion.div 
    animate={{ y: [0, 15, 0] }} 
    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
    className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 text-white/30"
  >
    <ChevronDown size={40} strokeWidth={1} />
  </motion.div>
</section>

      {/* 2. MODERN MISSION SECTION */}
      <section className="py-24 lg:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative"
          >
            {/* Elegant Image Layout */}
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden z-10 shadow-2xl border border-slate-100">
              <Image src="/img (4).jpeg" alt="Community Empowerment" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/40 to-transparent" />
            </div>
            {/* Brand Accent Blobs */}
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-[#1e8b35]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-[#0b132b]/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#1e8b35] rounded-full"></span> Our Mandate
              </h4>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0b132b] leading-[1.1]">
                Driven by Faith. <br />
                <span className="text-[#1e8b35]">Defined by Excellence.</span>
              </h2>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed font-light">
              CCDA South Sudan is a bridge connecting global resources to local resilience. We ensure every intervention honors human dignity and fosters long-term self-reliance for the most vulnerable communities.
            </motion.p>
            
            <motion.ul variants={fadeUp} className="space-y-5 pt-4">
              {['Professional Humanitarian Ethics', 'Community-Led Development', 'Transparent Stewardship'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-base font-semibold text-slate-800">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#1e8b35]/10 flex items-center justify-center border border-[#1e8b35]/20">
                    <ShieldCheck className="text-[#1e8b35]" size={20} strokeWidth={2} />
                  </div>
                  {item}
                </li>
              ))}
            </motion.ul>
            
            <motion.div variants={fadeUp} className="pt-8">
              <Link href="/about" className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0b132b] hover:text-[#1e8b35] transition-colors pb-1 border-b-2 border-[#0b132b] hover:border-[#1e8b35]">
                Read Our Full Story
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. THEMATIC PILLARS (Sleek Card Grid) */}
      <section className="py-24 lg:py-32 bg-slate-50 relative border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-xs">Strategic Focus</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0b132b]">Areas of Intervention</h2>
            <p className="text-slate-500 text-lg font-light leading-relaxed">Delivering integrated solutions to address immediate crisis and build generational stability.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-[#0b132b]/5 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1e8b35] to-[#166e2a] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-[#1e8b35] transition-colors duration-300 border border-slate-100 group-hover:border-transparent">
                  <prog.icon className="text-[#0b132b] group-hover:text-white transition-colors duration-300" size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-[#0b132b] mb-3">{prog.title}</h3>
                <p className="text-slate-500 leading-relaxed font-light text-sm">
                  Providing critical support through targeted initiatives that address core needs and empower local households.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. RECENT IMPACT / NEWS */}
      <section className="py-24 lg:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#1e8b35] rounded-full"></span> On The Ground
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0b132b]">Recent Field Reports</h2>
          </div>
          <Link href="/news" className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0b132b] hover:text-[#1e8b35] transition-colors group">
            View All Updates <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {[1, 2].map((post) => (
            <div key={post} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-6 bg-slate-100 border border-slate-200/60">
                <Image 
                  src={`/img (${post + 2}).jpeg`} 
                  alt="Field Report Update" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-[#1e8b35]/10 text-[#1e8b35] text-[10px] font-bold uppercase tracking-widest rounded-full">Report</span>
                <span className="text-sm text-slate-400 font-medium">March 2026</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif text-[#0b132b] leading-tight group-hover:text-[#1e8b35] transition-colors">
                Emergency Response Distribution in Unity State reaches vulnerable households.
              </h3>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-16 text-center md:hidden">
          <Link href="/news" className="inline-flex items-center justify-center w-full px-8 py-4 bg-slate-50 border border-slate-200 text-[#0b132b] hover:bg-[#0b132b] hover:text-white font-bold rounded-full transition-all uppercase tracking-widest text-xs">
            View All Updates
          </Link>
        </div>
      </section>
    </main>
  );
}

const programs = [
  { title: "Health & Nutrition", icon: Heart },
  { title: "WASH Services", icon: Droplets },
  { title: "Education & Literacy", icon: Users },
  { title: "Protection & Rights", icon: ShieldCheck },
  { title: "Shelter & NFIs", icon: Zap },
  { title: "Food Security", icon: Wheat },
];