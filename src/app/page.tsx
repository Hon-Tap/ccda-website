"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Zap,
  Users,
  Droplets,
  Wheat,
  ChevronDown,
  Plus,
  Minus,
  ArrowUpRight
} from "lucide-react";

/* =========================================================
   PRO ANIMATION CONFIGURATIONS
========================================================= */
const fadeUpVariants = {
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
    transition: { staggerChildren: 0.15 }
  }
};

const heroSlides = [
  { src: "/health.jpeg", alt: "Healthcare & Nutrition" },
  { src: "/borehole.jpeg", alt: "Clean Water Access" },
  { src: "/floodedvillage.jpeg", alt: "Emergency Response" },
  { src: "/youthbuildingdyke.jpg", alt: "Community Resilience" }
];

const programs = [
  { id: "health", title: "Health & Nutrition", icon: Heart, desc: "Delivering life-saving nutritional support and accessible medical care to the most remote and vulnerable populations.", img: "/health.jpeg" },
  { id: "wash", title: "WASH Services", icon: Droplets, desc: "Building sustainable boreholes and ensuring clean, safe water dignity for communities in need.", img: "/borehole.jpeg" },
  { id: "protection", title: "Protection & Rights", icon: ShieldCheck, desc: "Fiercely advocating for human rights, gender equality, and the absolute safety of at-risk groups.", img: "/youthbuildingdyke.jpg" },
  { id: "education", title: "Education & Literacy", icon: Users, desc: "Creating inclusive learning environments that bridge the educational gap for both children and adults.", img: "/img (2).jpeg" },
  { id: "food-security", title: "Food Security", icon: Wheat, desc: "Implementing sustainable agriculture initiatives to foster long-term climate and food resilience.", img: "/Fangak4.jpg" },
  { id: "shelter-nfi", title: "Shelter & NFIs", icon: Zap, desc: "Executing rapid emergency responses with critical shelter and living supplies during sudden crises.", img: "/floodedvillage.jpeg" },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [showAllPrograms, setShowAllPrograms] = useState(false);

  // Auto-advance hero slides
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(prev => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-[#f8fafc] overflow-x-hidden selection:bg-[#1e8b35] selection:text-white">
      
      {/* =========================================================
          HERO: CINEMATIC FULL-BLEED DESIGN
      ========================================================= */}
      <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#0b132b]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroSlides[slide].src}
              alt={heroSlides[slide].alt}
              fill
              className="object-cover object-center"
              priority
            />
            {/* Pro Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/80 via-[#0b132b]/50 to-[#0b132b]/90" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center mt-12">
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate="visible"
            className="flex flex-col items-center max-w-4xl"
          >
            <motion.div variants={fadeUpVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#1e8b35] animate-pulse" />
                <span className="text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                  Christian Community Development Agency
                </span>
              </div>
            </motion.div>

            <motion.h1 
              variants={fadeUpVariants} 
              className="max-w-4xl mx-auto text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.05]"
            >
              Alleviating Suffering, <br />
              <span className="bg-gradient-to-r from-[#22c55e] to-[#4ade80] bg-clip-text text-transparent">
                Empowering Lives.
              </span>
            </motion.h1>

            <motion.p variants={fadeUpVariants} className="text-lg md:text-xl text-slate-300 font-medium max-w-2xl mb-10">
              We provide critical health, water, and emergency support to communities in South Sudan, building resilience for a sustainable future.
            </motion.p>

            <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto">
              <Link href="/programs" className="group px-8 py-4 bg-[#1e8b35] text-white font-bold rounded-full hover:bg-[#156e29] hover:shadow-lg hover:shadow-[#1e8b35]/30 transition-all duration-300 flex items-center justify-center gap-3">
                Explore Programs <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/donate" className="group px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full hover:bg-white hover:text-[#0b132b] transition-all duration-300 flex items-center justify-center gap-3">
                Support the Mission <Heart size={18} className="group-hover:scale-110 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 12, 0], opacity: [0.3, 1, 0.3] }} 
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* =========================================================
          THEMATIC AREAS: PREMIUM CARDS
      ========================================================= */}
      {/* =========================================================
    THEMATIC AREAS: PREMIUM CARDS
    ========================================================= */}
<section className="py-32 bg-[#f8fafc] relative">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b132b] tracking-tight mb-4">
          Thematic Focus Areas
        </h2>
        <div className="w-20 h-1.5 bg-[#1e8b35] rounded-full mb-6" />
        <p className="text-lg text-slate-600">
          Our holistic and proactive approach directly addresses the most critical, interconnected challenges facing vulnerable communities today.
        </p>
      </div>
    </div>

    <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence>
        {programs.slice(0, showAllPrograms ? 6 : 3).map((p, i) => {
          const Icon = p.icon;
          return (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col bg-white rounded-[2rem] overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-200/60"
            >
              {/* Card Header (Image) */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image 
                  src={p.img} 
                  alt={p.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                
                {/* Floating Title Inside Image */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">{p.title}</h3>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-[#1e8b35] transition-colors duration-300">
                      <Icon size={20} />
                  </div>
                </div>
              </div>
              
              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <p className="text-slate-600 leading-relaxed font-medium">
                  {p.desc}
                </p>
                
                {/* Link connected to the respective ID */}
                <Link 
                  href={`/programs/${p.id}`}
                  className="mt-8 pt-6 border-t border-slate-100 flex items-center text-[#0b132b] font-bold group-hover:text-[#1e8b35] transition-colors cursor-pointer"
                >
                  Discover Impact 
                  <ArrowUpRight size={18} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-16 text-center"
    >
      <button 
        onClick={() => setShowAllPrograms(!showAllPrograms)}
        className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-[#0b132b] text-[#0b132b] rounded-full font-bold hover:bg-[#0b132b] hover:text-white transition-all duration-300"
      >
        {showAllPrograms ? <><Minus size={20} /> View Less Focus Areas</> : <><Plus size={20} /> View All Focus Areas</>}
      </button>
    </motion.div>
  </div>
</section>

      {/* =========================================================
          NEWS: HIGH-END EDITORIAL
      ========================================================= */}
      <section className="py-32 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#1e8b35] font-extrabold uppercase tracking-[0.15em] text-sm">Field Dispatches</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b132b] mt-3 tracking-tight">Latest News & Impact</h2>
            </div>
            <Link href="/news" className="group flex items-center gap-2 font-bold text-slate-500 hover:text-[#1e8b35] transition-colors pb-2">
              Explore Newsroom <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Featured Main Story */}
            <motion.article 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants}
              className="lg:col-span-7 group cursor-pointer relative rounded-[2rem] overflow-hidden shadow-lg h-[450px] md:h-[600px]"
            >
              <Image 
                src="/floodedvillage.jpeg" 
                alt="Emergency Response" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b132b]/90 via-[#0b132b]/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                <div className="flex flex-wrap gap-3 mb-5">
                  <span className="px-4 py-1.5 bg-[#1e8b35] text-white text-xs font-bold uppercase tracking-widest rounded-full">Emergency</span>
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded-full">April 12, 2026</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-bold leading-tight text-white mb-4 group-hover:text-slate-200 transition-colors">
                  Rapid Response: Teams deployed to tackle widespread flood emergencies.
                </h3>
                <p className="text-slate-300 line-clamp-2 md:text-lg font-medium max-w-2xl">
                  Our emergency response units have mobilized to provide critical shelter, non-food items, and medical care to newly displaced families across the region.
                </p>
              </div>
            </motion.article>

            {/* Side Stories Stack */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                { title: "CCDA promotes safe motherhood and child survival through maternal health education, antenatal and postnatal care support, and child health awareness programs.", img: "/motherwithchild.jpg", date: "April 08, 2026", tag: "Health" },
                { title: "Access to clean water, safe sanitation, and proper hygiene practices is essential for healthy and resilient communities. ", img: "/borehole.jpeg", date: "March 29, 2026", tag: "WASH" },
                { title: "CCDA seeks to create protective environments where the rights and well-being of all individuals are respected and upheld", img: "/youthbuildingdyke.jpg", date: "March 15, 2026", tag: "Resilience" }
              ].map((n, i) => (
                <motion.article 
                  key={i} 
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants}
                  className="group flex gap-6 p-4 rounded-3xl hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100"
                >
                  <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 shadow-sm">
                    <Image src={n.img} alt={n.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out" />
                  </div>
                  <div className="flex flex-col justify-center py-2">
                    <div className="text-[#1e8b35] text-xs font-black mb-3 uppercase tracking-widest">
                      {n.tag} <span className="text-slate-300 mx-1">•</span> <span className="text-slate-500">{n.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold leading-snug text-[#0b132b] group-hover:text-[#1e8b35] transition-colors">
                      {n.title}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          COMPACT CALL TO ACTION: MODERN BANNER
      ========================================================= */}
      <section className="py-24 px-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto bg-[#0b132b] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden shadow-[0_20px_50px_-12px_rgba(11,19,43,0.5)]"
        >
          {/* Decorative Background Elements */}
          <div className="absolute top-[-40%] left-[-10%] w-[500px] h-[500px] bg-[#1e8b35]/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[-40%] right-[-10%] w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 text-white mb-8 border border-white/20">
              <Heart size={32} />
            </div>
            
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Be the catalyst for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e8b35] to-[#4ade80]">real change.</span>
            </h2>
            <p className="text-slate-300 text-lg md:text-xl mb-12 font-medium">
              Every donation, partnership, and volunteer hour helps us build a more resilient South Sudan. Your support matters.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <Link href="/contact" className="px-10 py-4 bg-[#1e8b35] text-white rounded-full font-bold hover:bg-[#156e29] hover:shadow-lg hover:shadow-[#1e8b35]/20 transition-all duration-300 text-lg flex items-center justify-center gap-2">
                Donate Now <Heart size={20} />
              </Link>
              <Link href="/contact" className="px-10 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold hover:bg-white hover:text-[#0b132b] hover:border-white transition-all duration-300 text-lg flex items-center justify-center gap-2">
                Get Involved <Users size={20} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}