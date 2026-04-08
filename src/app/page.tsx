"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Heart, ShieldCheck, Zap, Users, Sprout, ChevronDown } from "lucide-react";

/* =========================================================
   ANIMATION CONSTANTS
========================================================= */
const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
  },
};

const imageVariants = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { duration: 1.8, ease: "easeOut" } 
  },
};
  
/* =========================================================
   HOME PAGE COMPONENT
========================================================= */
export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 800], [0, 150]);

  const slides = [
    { src: "/img (4).jpeg", title: " We Alleviate the Suffering of", subtitle: " Under-Priviledged Populations." },
    { src: "/img (3).jpeg", title: "Dignity in.", subtitle: "Every Action." },
    { src: "/img (1).jpeg", title: "Future of.", subtitle: "South Sudan." },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main className="bg-[#fcfdfd] overflow-x-hidden font-sans">
      
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#051324]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 1.2 } }}
            variants={imageVariants}
            className="absolute inset-0 z-0"
          >
            <Image
              src={slides[currentSlide].src}
              alt="Humanitarian effort in South Sudan"
              fill
              priority
              className="object-cover brightness-[0.45]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2647] via-transparent to-[#0a2647]/50 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            <span className="inline-block px-5 py-2 rounded-full border border-primary-green/30 bg-[#0a2647]/50 text-white text-[14px] font-bold uppercase tracking-[0.3em] mb-10 backdrop-blur-md">
              Christian Community Development Agency
            </span>
            
            {/* Switched to Serif for premium, authoritative NGO feel. Scaled down from 140px to 100px */}
            <h1 className="text-6xl md:text-7xl lg:text-[100px] font-serif text-green-600 leading-[1.1] tracking-tight mb-10 drop-shadow-2xl">
              {slides[currentSlide].title.split('.')[0]}<span className="text-primary-green">.</span> <br />
              <span className="text-green-600/80 italic font-light">{slides[currentSlide].subtitle}</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
              <Link
                href="/programs"
                className="group relative px-10 py-4 bg-primary-green text-white font-semibold rounded-sm overflow-hidden transition-all active:scale-95 shadow-lg shadow-green-900/20"
              >
                <span className="relative z-10 uppercase tracking-[0.2em] text-xs flex items-center gap-3">
                  Explore Impact <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 bg-transparent hover:bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-sm transition-all uppercase tracking-[0.2em] text-xs"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators & Scroll Down */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex flex-col items-center gap-8">
          <div className="flex gap-3">
            {slides.map((_, i) => (
              <div 
                key={i} 
                className={`h-[2px] transition-all duration-1000 ${currentSlide === i ? 'w-12 bg-primary-green' : 'w-6 bg-white/30'}`} 
              />
            ))}
          </div>
          <motion.div 
            animate={{ y: [0, 8, 0] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-white/50"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>
      </section>

      {/* 2. ASYMMETRIC MISSION SECTION */}
      <section className="py-32 lg:py-40 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <div className="relative">
            <motion.div 
              style={{ y: y1 }}
              className="relative aspect-[3/4] rounded-sm overflow-hidden z-10 shadow-2xl"
            >
              <Image src="/img (4).jpeg" alt="Field work" fill className="object-cover" />
            </motion.div>
            {/* Elegant background offset block instead of rounded blobs */}
            <div className="absolute -bottom-12 -left-12 w-3/4 h-3/4 bg-[#eaeff5] -z-0" />
          </div>

          <motion.div 
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h4 className="text-primary-green font-bold uppercase tracking-[0.25em] text-xs">Our Ethos</h4>
              {/* Serif font applied here for visual hierarchy */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a2647] leading-[1.15] tracking-tight">
                Driven by Faith. <br />
                <span className="italic text-slate-500 font-light">Defined by Excellence.</span>
              </h2>
            </div>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light">
              CCDA South Sudan isn&apos;t just a responder; we are a bridge. We connect global resources to local resilience, ensuring every intervention fosters long-term self-reliance and honors human dignity.
            </p>
            
            <ul className="space-y-5 pt-4">
              {['Professional Humanitarian Ethics', 'Community-Led Development', 'Transparent Stewardship'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-sm font-medium text-[#0a2647]">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-green" />
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="pt-10">
              <Link href="/about" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#0a2647] group">
                <span className="border-b border-[#0a2647] pb-1 group-hover:border-primary-green group-hover:text-primary-green transition-colors">
                  Our Journey & Vision
                </span>
                <ArrowRight size={14} className="group-hover:text-primary-green group-hover:translate-x-1 transition-all" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THEMATIC PILLARS (Clean Editorial Grid) */}
      <section className="py-32 bg-[#0a2647] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl space-y-6">
              <h4 className="text-primary-green font-bold uppercase tracking-[0.25em] text-xs">Strategic Focus</h4>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
                Areas of Intervention
              </h2>
            </div>
            <Link href="/programs" className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-primary-green flex items-center gap-2 group transition-colors">
              View All Programs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                className="group p-12 bg-[#0a2647] transition-all duration-500 relative"
              >
                <div className="text-primary-green mb-8 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 origin-left">
                  <prog.icon size={32} strokeWidth={1.5} />
                </div>
                {/* Scaled fonts for the cards */}
                <h3 className="text-xl md:text-2xl font-serif text-white mb-4">{prog.title}</h3>
                <p className="text-white/50 group-hover:text-white/80 text-sm leading-relaxed font-light transition-colors">
                  Providing critical support through integrated solutions that address immediate needs and build future stability.
                </p>
                {/* Minimalist hover line indicator */}
                <div className="absolute bottom-0 left-12 right-12 h-[1px] bg-primary-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. NEWS / UPDATE PREVIEW */}
      <section className="py-32 lg:py-40 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
          <h4 className="text-primary-green font-bold uppercase tracking-[0.25em] text-xs">On The Ground</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0a2647] tracking-tight">Recent Field Reports</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {[1, 2].map((post) => (
            <div key={post} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-slate-100">
                <Image 
                  src={`/img (${post + 2}).jpeg`} 
                  alt="Field Report" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                />
              </div>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-green">Report</span>
                <span className="text-xs text-slate-400">March 2026</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-serif text-[#0a2647] leading-snug group-hover:text-primary-green transition-colors">
                Emergency Food Distribution in Unity State reaches 10,000 vulnerable households.
              </h3>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Link href="/news" className="inline-flex items-center justify-center px-8 py-4 border border-[#0a2647]/20 text-[#0a2647] hover:bg-[#0a2647] hover:text-white font-semibold rounded-sm transition-all uppercase tracking-[0.2em] text-xs">
            Read All Updates
          </Link>
        </div>
      </section>
    </main>
  );
}

const programs = [
  { title: "Health & Nutrition", icon: Heart },
  { title: "WASH Services", icon: Sprout },
  { title: "Education & Literacy", icon: Users },
  { title: "Protection & Rights", icon: ShieldCheck },
  { title: "Shelter & NFIs", icon: Zap },
  { title: "Food Security", icon: Sprout },
];