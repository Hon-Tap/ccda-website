"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Heart, 
  Droplets, 
  BookOpen, 
  ShieldCheck, 
  Home, 
  Sprout, 
  ArrowLeft,
  CheckCircle2,
  Globe,
  FileText
} from "lucide-react";

/* =========================================================
   PROGRAMS EXPANDED DATA (Perfectly matching your images)
========================================================= */
const programDetails = {
  "health": {
    title: "Health Services",
    icon: Heart,
    image: "/img (1).jpeg",
    stat: "15+ Facilities Supported",
    headline: "Delivering life-saving health interventions and clinical services to hard-to-reach rural communities.",
    overview: "Our health programs focus on reducing mortality and morbidity among vulnerable populations, particularly women and children, through direct support to primary healthcare units and mobile medical clinics.",
    objectives: [
      "Improve access to essential primary healthcare and maternal services.",
      "Support training for local community health workers.",
      "Provide essential drug supplies and medical equipment to rural clinics."
    ]
  },
  "wash": {
    title: "WASH",
    icon: Droplets,
    image: "/img (4).jpeg",
    stat: "50k+ Clean Water Access",
    headline: "Providing sustainable water, sanitation, and hygiene solutions to prevent disease outbreaks.",
    overview: "We construct and rehabilitate water points, promote positive hygiene behaviors, and establish community-led sanitation committees to ensure long-term sustainability of clean water access.",
    objectives: [
      "Drill and rehabilitate deep boreholes in underserved areas.",
      "Distribute core hygiene and dignity kits to families.",
      "Establish and train community water management committees."
    ]
  },
  "education": {
    title: "Education",
    icon: BookOpen,
    image: "/img (3).jpeg",
    stat: "12 Schools Supported",
    headline: "Promoting inclusive learning environments and youth empowerment through formal and vocational training.",
    overview: "We work to ensure that conflict-affected children have access to safe, quality education. We build classrooms, supply learning materials, and train volunteer teachers.",
    objectives: [
      "Establish safe, temporary learning spaces in emergency zones.",
      "Distribute scholastic materials and teacher kits.",
      "Provide localized accelerated learning programs for out-of-school youth."
    ]
  },
  "protection": {
    title: "Protection",
    icon: ShieldCheck,
    image: "/img (4).jpeg",
    stat: "Child-Friendly Spaces",
    headline: "Safeguarding the rights and dignity of women, children, and vulnerable groups in conflict zones.",
    overview: "Our protection sector works to prevent, mitigate, and respond to violence, exploitation, and abuse through community-based protection networks and specialized child-friendly spaces.",
    objectives: [
      "Operate safe, supervised child-friendly spaces for psychosocial support.",
      "Conduct community awareness campaigns on human rights and SGBV prevention.",
      "Offer case management and referral pathways for survivors."
    ]
  },
  "shelter-nfi": {
    title: "Shelter & NFIs",
    icon: Home,
    image: "/img (3).jpeg",
    stat: "Emergency Response",
    headline: "Providing emergency shelter kits and essential non-food items to displaced populations.",
    overview: "When crisis strikes, we provide rapid, life-saving shelter materials and essential household non-food items (NFIs) to help families regain safety and privacy.",
    objectives: [
      "Distribute emergency shelter kits (tarpaulins, ropes, and framing tools).",
      "Provide household NFI kits including blankets, sleeping mats, and cooking sets.",
      "Facilitate cash-for-shelter programs where local markets are functional."
    ]
  },
  "food-security": {
    title: "Food Security & Livelihoods",
    icon: Sprout,
    image: "/img (4).jpeg",
    stat: "Sustainable Farming",
    headline: "Enhancing community resilience through agricultural support and economic empowerment initiatives.",
    overview: "We move beyond emergency food aid to help communities feed themselves sustainably. We provide seeds, tools, and modern agronomic training.",
    objectives: [
      "Distribute climate-resilient crop seeds and agricultural hand tools.",
      "Train farmer field schools on sustainable, modern crop production.",
      "Establish village savings and loan associations (VSLA) to secure livelihoods."
    ]
  }
};

export default function SubProgramPage() {
  const params = useParams();
  
  // Safeguard against missing or incorrect IDs
  const id = params?.id as string;
  const program = programDetails[id as keyof typeof programDetails] || programDetails["health"];

  return (
    <main className="bg-[#fcfdfd] text-[#0a2647] font-sans overflow-x-hidden">
      
      {/* --- 1. ASYMMETRIC HERO SPLIT --- */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-6 lg:pb-24">
            <Link 
              href="/programs" 
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 hover:text-primary-green transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to Programs
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <program.icon size={18} className="text-primary-green" strokeWidth={1.5} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary-green">
                Framework Strategy
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] tracking-tight text-[#0a2647] mb-6">
              {program.title}
            </h1>
            
            <p className="text-lg md:text-xl font-serif italic font-light leading-relaxed text-[#0a2647]/80 mb-6">
              "{program.headline}"
            </p>
            
            <div className="inline-block bg-[#eaeff5] px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider text-[#0a2647]">
              Current Metric: {program.stat}
            </div>
          </div>

          {/* Right Floating Image Block */}
          <div className="lg:col-span-6 relative aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden bg-slate-100 self-stretch">
            <Image 
              src={program.image}
              alt={program.title}
              fill
              className="object-cover grayscale-[10%]"
              priority
            />
            {/* Elegant vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#fcfdfd] via-transparent to-transparent hidden lg:block" />
          </div>
        </div>
      </section>

      {/* --- 2. DETAILED CONTENT FRAMEWORK --- */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-16">
          
          {/* Main Context */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 block mb-3">Context & Scope</span>
              <h2 className="text-3xl font-serif text-[#0a2647] mb-4">Program Overview</h2>
              <p className="text-slate-500 font-light leading-relaxed text-sm md:text-base">
                {program.overview}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-[#0a2647] mb-6">Core Strategic Objectives</h3>
              <div className="space-y-4">
                {program.objectives.map((objective, idx) => (
                  <div key={idx} className="flex gap-4 items-start border-l-2 border-slate-100 pl-6 py-2 hover:border-primary-green transition-colors">
                    <span className="text-xs font-bold font-serif text-[#0a2647]">0{idx + 1}</span>
                    <p className="text-slate-500 font-light text-sm leading-relaxed">{objective}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Deliverables */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 bg-[#eaeff5] p-10 rounded-sm space-y-8">
              <div>
                <span className="text-primary-green font-bold uppercase tracking-[0.15em] text-[10px] block mb-2">Cross-Cutting Alignment</span>
                <h4 className="font-serif text-xl text-[#0a2647] mb-3">Intervention Pillars</h4>
                <p className="text-slate-500 font-light text-xs leading-relaxed">
                  Every objective strictly abides by local field coordination clusters to avoid duplication and align directly with National Response Plans.
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-3 text-xs font-bold text-[#0a2647]">
                  <CheckCircle2 size={14} className="text-primary-green" /> Cluster Compliant
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-[#0a2647]">
                  <CheckCircle2 size={14} className="text-primary-green" /> Gender Marker Validated
                </div>
                <div className="flex items-center gap-3 text-xs font-bold text-[#0a2647]">
                  <CheckCircle2 size={14} className="text-primary-green" /> Sphere Standards Aligned
                </div>
              </div>

              <button className="w-full mt-4 px-6 py-4 bg-[#0a2647] text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-primary-green transition-colors rounded-sm flex items-center justify-center gap-3">
                <FileText size={14} /> Download PDF Framework
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* --- 3. SECTOR FOOTER BANNER --- */}
      <section className="py-20 bg-[#0a2647] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <Globe size={400} className="absolute -bottom-20 -left-20 text-white" strokeWidth={1} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h3 className="text-3xl font-serif mb-4">Want to partner with this sector?</h3>
          <p className="text-white/60 font-light text-sm leading-relaxed mb-8">
            We are currently scaling our operations and looking for institutional donors, private foundations, and technical partners to expand the reach of our {program.title} sector.
          </p>
          <Link href="/contact" className="px-10 py-4 bg-primary-green text-white font-bold text-xs tracking-[0.2em] uppercase hover:bg-white hover:text-[#0a2647] transition-colors rounded-sm inline-block">
            Inquire About Partnership
          </Link>
        </div>
      </section>
    </main>
  );
}