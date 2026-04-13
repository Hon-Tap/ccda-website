"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart, ShieldCheck, Zap, Users, Droplets, Wheat, ChevronDown } from "lucide-react";

/* =========================================================
   BRAND COLORS (Matched to Logo)
   Blue: #0f62a3 | Green: #1e8b35
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
    <main className="bg-[#f8fafc] overflow-x-hidden font-sans text-slate-800">
      
      {/* 1. DYNAMIC HERO SECTION WITH STATIC TEXT */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#0f62a3]">
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

        {/* Deep gradient for perfect text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/80 z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 w-full text-center mt-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Organization Name */}
            <motion.div variants={fadeUp} className="inline-block">
              <span className="px-6 py-2 rounded-full border border-[#1e8b35]/40 bg-[#0f62a3]/30 backdrop-blur-md text-white text-xs md:text-sm font-bold uppercase tracking-[0.25em] shadow-lg shadow-black/20">
                Christian Community Development Agency
              </span>
            </motion.div>
            
            {/* Static Slogan */}
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight tracking-tight drop-shadow-2xl max-w-4xl mx-auto">
              We Alleviate the Suffering of <br className="hidden md:block" />
              <span className="text-[#1e8b35] italic font-medium">Under-privileged Populations.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto mt-6">
              Restoring dignity, building resilience, and creating sustainable futures across South Sudan through faith-driven excellence.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link
                href="/programs"
                className="w-full sm:w-auto px-8 py-4 bg-[#1e8b35] hover:bg-[#166e2a] text-white font-semibold rounded-full transition-all shadow-xl shadow-[#1e8b35]/20 uppercase tracking-widest text-xs flex items-center justify-center gap-3"
              >
                Explore Our Impact <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/10 backdrop-blur-sm border-2 border-white text-white font-semibold rounded-full transition-all uppercase tracking-widest text-xs text-center"
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bouncing Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white/70"
        >
          <ChevronDown size={32} />
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
            {/* Elegant Image Layout with Rounded Corners */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden z-10 shadow-2xl">
              <Image src="/img (4).jpeg" alt="Community Empowerment" fill className="object-cover" />
            </div>
            {/* Brand Accent Blobs/Shapes behind image */}
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#1e8b35]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#0f62a3]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h4 className="text-[#0f62a3] font-bold uppercase tracking-[0.2em] text-sm flex items-center gap-3">
                <span className="w-8 h-px bg-[#0f62a3]"></span> Our Mandate
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 leading-tight">
                Driven by Faith. <br />
                <span className="text-[#1e8b35]">Defined by Excellence.</span>
              </h2>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed">
              CCDA South Sudan is a bridge connecting global resources to local resilience. We ensure every intervention honors human dignity and fosters long-term self-reliance for the most vulnerable communities.
            </motion.p>
            
            <motion.ul variants={fadeUp} className="space-y-4 pt-2">
              {['Professional Humanitarian Ethics', 'Community-Led Development', 'Transparent Stewardship'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-base font-medium text-slate-800">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1e8b35]/10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#1e8b35]" />
                  </div>
                  {item}
                </li>
              ))}
            </motion.ul>
            
            <motion.div variants={fadeUp} className="pt-6">
              <Link href="/about" className="group inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#0f62a3] hover:text-[#1e8b35] transition-colors">
                Read Our Full Story
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. THEMATIC PILLARS (Sleek Card Grid) */}
      <section className="py-24 lg:py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-sm">Strategic Focus</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0f62a3]">Areas of Intervention</h2>
            <p className="text-slate-600 text-lg">Delivering integrated solutions to address immediate crisis and build generational stability.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#0f62a3]/5 flex items-center justify-center mb-8 group-hover:bg-[#1e8b35]/10 group-hover:scale-110 transition-all duration-300">
                  <prog.icon className="text-[#0f62a3] group-hover:text-[#1e8b35] transition-colors" size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-slate-900 mb-4">{prog.title}</h3>
                <p className="text-slate-600 leading-relaxed">
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
            <h4 className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-sm flex items-center gap-3">
              <span className="w-8 h-px bg-[#1e8b35]"></span> On The Ground
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900">Recent Field Reports</h2>
          </div>
          <Link href="/news" className="hidden md:inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#0f62a3] hover:text-[#1e8b35] transition-colors group">
            View All Updates <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          {[1, 2].map((post) => (
            <div key={post} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 bg-slate-200">
                <Image 
                  src={`/img (${post + 2}).jpeg`} 
                  alt="Field Report Update" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="px-3 py-1 bg-[#0f62a3]/10 text-[#0f62a3] text-xs font-bold uppercase tracking-wider rounded-full">Report</span>
                <span className="text-sm text-slate-500">March 2026</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif text-slate-900 leading-snug group-hover:text-[#0f62a3] transition-colors">
                Emergency Response Distribution in Unity State reaches vulnerable households.
              </h3>
            </div>
          ))}
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
          <Link href="/news" className="inline-flex items-center justify-center w-full px-8 py-4 border-2 border-[#0f62a3] text-[#0f62a3] hover:bg-[#0f62a3] hover:text-white font-semibold rounded-full transition-all uppercase tracking-widest text-xs">
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