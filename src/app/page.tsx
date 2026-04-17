"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Heart, ShieldCheck, Zap, Users, Droplets, Wheat, ChevronDown, Globe } from "lucide-react";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

/* =========================================================
   DATA SETS
========================================================= */
const heroImages = [
  {
    src: "/motherwithchild.jpg",
    sizes: "100vw",
    alt: "Mother and child receiving healthcare support"
  },
  {
    src: "/floodedvillage.jpeg",
    sizes: "100vw",
    alt: "Flooded village during emergency response"
  },
  {
    src: "/youthbuildigdyke.jpg",
    sizes: "100vw",
    alt: "Youth participating in community infrastructure work"
  },
  {
    src: "/Fangak4.jpg",
    sizes: "100vw",
    alt: "Community members gathered in Fangak"
  }
];

const programs = [
  {
    title: "Health & Nutrition",
    icon: Heart,
    img: "/motherwithchild.jpg",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    desc: "Delivering essential medical care and life-saving nutritional support to mothers, infants, and vulnerable children in underserved communities."
  },

  {
    title: "WASH Services",
    icon: Droplets,
    img: "/floodedvillage.jpeg",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    desc: "Providing reliable access to safe drinking water, sanitation facilities, and hygiene education in disaster- and conflict-affected regions."
  },

  {
    title: "Education & Literacy",
    icon: Users,
    img: "/Fangak4.jpg",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    desc: "Expanding opportunities for children and adults through inclusive learning programs, literacy initiatives, and community-based education support."
  },

  {
    title: "Protection & Rights",
    icon: ShieldCheck,
    img: "/youthbuildingdyke.jpg",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    desc: "Protecting vulnerable populations from harm, promoting human rights, and ensuring access to legal and psychosocial assistance."
  },

  {
    title: "Shelter & NFIs",
    icon: Zap,
    img: "/Fangak4.jpg",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    desc: "Responding rapidly to emergencies by distributing shelter materials and essential non-food items to displaced and crisis-affected families."
  },

  {
    title: "Food Security",
    icon: Wheat,
    img: "/floodedvillage.jpeg",
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    desc: "Strengthening community resilience through sustainable agriculture, livelihood support, and timely food assistance during periods of scarcity."
  }
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="bg-slate-50 overflow-x-hidden font-sans text-slate-800">
      
      {/* =========================================================
          1. HERO SECTION (Matched to Provided Images)
      ========================================================= */}
      <section className="relative h-[100dvh] min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0a1122]">
        {/* Dynamic Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={heroImages[currentSlide].src}
              alt={heroImages[currentSlide].alt}
              fill
              sizes={heroImages[currentSlide].sizes}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-[#0a1122]/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122] via-transparent to-transparent z-10" />

        <div className="relative z-20 max-w-5xl mx-auto px-6 w-full text-center mt-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center space-y-8"
          >
            {/* Organization Name Badge - Matched to Image 1 */}
            <motion.div variants={fadeUp} className="inline-block">
              <div className="px-6 py-3 rounded-full border border-slate-600/50 bg-[#12192e]/90 backdrop-blur-md shadow-2xl">
                <span className="text-white/90 text-xs md:text-sm font-bold uppercase tracking-[0.25em]">
                  Christian Community Development Agency
                </span>
              </div>
            </motion.div>
            
            {/* Slogan Box - Matched to Image 1 */}
            <motion.div 
              variants={fadeUp}
              className="relative px-8 py-10 md:px-14 md:py-12 rounded-[2rem] border border-slate-600/40 bg-[#12192e]/80 backdrop-blur-xl shadow-2xl w-full max-w-3xl mx-auto"
            >
              <h1 className="text-3xl md:text-3xl lg:text-3xl font-serif text-white leading-[1.3] tracking-tight">
                We Alleviate the Suffering of <br />
                <span className="text-[#259b43] italic font-medium">Under-privileged Populations.</span>
              </h1>
            </motion.div>

            {/* Mission Description */}
            <motion.p variants={fadeUp} className="text-slate-200 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Restoring dignity, building resilience, and creating sustainable futures across South Sudan through faith-driven excellence.
            </motion.p>

            {/* Premium CTA Buttons */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6 w-full sm:w-auto">
              <Link
                href="/programs"
                className="group relative overflow-hidden w-full sm:w-auto px-10 py-4 bg-[#259b43] text-white font-bold rounded-full transition-all shadow-xl shadow-[#259b43]/20 hover:shadow-[#259b43]/40 hover:-translate-y-1 uppercase tracking-widest text-[11px] flex items-center justify-center"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-3">
                  Explore Our Impact <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/10 border border-white/30 text-white font-bold rounded-full transition-all uppercase tracking-widest text-[11px] text-center backdrop-blur-md hover:-translate-y-1"
              >
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 15, 0] }} 
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-white/50"
        >
          <ChevronDown size={36} strokeWidth={1.5} />
        </motion.div>
      </section>

      {/* =========================================================
          2. MISSION & VISION OVERLAY
      ========================================================= */}
      <section className="py-24 lg:py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="relative"
          >
            {/* Split Image Design */}
            <div className="relative h-[600px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
              <Image src="/youthbuildingdyke.jpg" alt="Youth building dyke" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122]/60 to-transparent" />
              
              {/* Floating Stat Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#259b43]/10 rounded-full flex items-center justify-center">
                    <Globe className="text-[#259b43]" size={24} />
                  </div>
                  <div>
                    <h4 className="text-[#0a1122] font-bold text-xl">Community Led</h4>
                    <p className="text-slate-500 text-sm">Empowering locals to rebuild.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#259b43]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div variants={fadeUp} className="space-y-4">
              <h4 className="text-[#259b43] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#259b43] rounded-full"></span> Who We Are
              </h4>
              <h2 className="text-4xl md:text-5xl font-serif text-[#0a1122] leading-[1.1]">
                Driven by Faith. <br />
                <span className="text-[#259b43]">Defined by Excellence.</span>
              </h2>
            </motion.div>
            
            <motion.p variants={fadeUp} className="text-lg text-slate-600 leading-relaxed font-light">
              CCDA is a bridge connecting global resources to local resilience. We ensure every intervention honors human dignity and fosters long-term self-reliance for the most vulnerable communities in South Sudan.
            </motion.p>
            
            <motion.ul variants={fadeUp} className="space-y-6 pt-4">
              {[
                { title: 'Emergency Response', desc: 'Rapid deployment to crisis zones.' },
                { title: 'Sustainable Development', desc: 'Building infrastructure for tomorrow.' },
                { title: 'Transparent Stewardship', desc: 'Accountable use of every resource.' }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center border border-slate-100">
                    <ShieldCheck className="text-[#259b43]" size={24} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="text-base font-bold text-[#0a1122]">{item.title}</h5>
                    <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </motion.ul>
            
            <motion.div variants={fadeUp} className="pt-6">
              <Link href="/about" className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#0a1122] hover:text-[#259b43] transition-colors pb-2 border-b-2 border-[#0a1122] hover:border-[#259b43]">
                Read Our Full Story
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          3. CREATIVE INTERVENTION CARDS 
      ========================================================= */}
      <section className="py-24 lg:py-32 bg-[#0a1122] relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h4 className="text-[#259b43] font-bold uppercase tracking-[0.2em] text-xs">Strategic Focus</h4>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Areas of Intervention</h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed">Delivering integrated solutions to address immediate crisis and build generational stability.</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {programs.map((prog, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative h-[350px] bg-[#12192e] rounded-[2rem] overflow-hidden cursor-pointer"
              >
                {/* Background Image Reveal on Hover */}
                <div className="absolute inset-0 z-0">
                  <Image src={prog.img} alt={prog.title} fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-[#12192e] group-hover:bg-[#0a1122]/70 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-10 h-full flex flex-col justify-end transition-transform duration-500 group-hover:-translate-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#259b43]/20 backdrop-blur-sm border border-[#259b43]/30 flex items-center justify-center mb-6 group-hover:bg-[#259b43] transition-colors duration-500">
                    <prog.icon className="text-[#259b43] group-hover:text-white transition-colors duration-500" size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3">{prog.title}</h3>
                  <p className="text-slate-400 leading-relaxed font-light text-sm group-hover:text-slate-200 transition-colors duration-500 opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden">
                    {prog.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          4. IMPACT GALLERY & REPORTS
      ========================================================= */}
      <section className="py-24 lg:py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <h4 className="text-[#259b43] font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#259b43] rounded-full"></span> On The Ground
            </h4>
            <h2 className="text-4xl md:text-5xl font-serif text-[#0a1122]">Recent Field Reports</h2>
          </div>
          <Link href="/news" className="hidden md:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0a1122] hover:text-[#259b43] transition-colors group">
            View All Updates <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {/* Main Large Article */}
          <div className="md:col-span-8 group cursor-pointer flex flex-col">
            <div className="relative h-[400px] overflow-hidden rounded-[2rem] mb-6 bg-slate-100">
              <Image 
                src="/floodedvillage.jpeg" 
                alt="Flood Response" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1122]/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
            </div>
            <div className="flex items-center gap-4 mb-3">
              <span className="px-3 py-1 bg-[#259b43]/10 text-[#259b43] text-[10px] font-bold uppercase tracking-widest rounded-full">Emergency</span>
              <span className="text-sm text-slate-500 font-medium">April 2026</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-serif text-[#0a1122] leading-tight group-hover:text-[#259b43] transition-colors">
              Rapid Response Team Deploys to Flood-Affected Villages to Provide Critical Relief.
            </h3>
          </div>

          {/* Side Articles Stack */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {/* Article 2 */}
            <div className="group cursor-pointer flex flex-col h-full">
              <div className="relative h-[200px] overflow-hidden rounded-[1.5rem] mb-4 bg-slate-100">
                <Image 
                  src="/Fangak4.jpg" 
                  alt="Field Report" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
              </div>
              <div className="flex items-center gap-4 mb-2">
                <span className="px-3 py-1 bg-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest rounded-full">Update</span>
              </div>
              <h3 className="text-xl font-serif text-[#0a1122] leading-tight group-hover:text-[#259b43] transition-colors">
                Community health initiatives reach milestone in Fangak.
              </h3>
            </div>
          </div>
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-16 text-center md:hidden">
          <Link href="/news" className="inline-flex items-center justify-center w-full px-8 py-4 bg-slate-100 text-[#0a1122] hover:bg-[#0a1122] hover:text-white font-bold rounded-full transition-all uppercase tracking-widest text-xs">
            View All Updates
          </Link>
        </div>
      </section>
    </main>
  );
}