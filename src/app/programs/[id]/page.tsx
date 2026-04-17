"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Heart, Droplets, BookOpen, ShieldCheck, Home, Sprout, 
  ArrowLeft, CheckCircle2, ArrowUpRight, FileText
} from "lucide-react";
import Navbar from "@/components/Navbar"; 

const programDetails = {
  "health": { title: "Health Services", icon: Heart, image: "/img (1).jpeg", stat: "15+ Facilities", headline: "Delivering life-saving clinical services to hard-to-reach rural communities.", overview: "Our health frameworks focus on drastically reducing mortality and morbidity among vulnerable populations. This is achieved through direct operational support to primary healthcare units, rapid-response mobile medical clinics, and comprehensive maternal care systems.", objectives: ["Improve access to essential primary healthcare and maternal services.", "Deploy localized training for community health workers (CHWs).", "Secure supply chains for essential drug supplies and medical equipment."] },
  "wash": { title: "WASH Engineering", icon: Droplets, image: "/img (4).jpeg", stat: "50k+ Access", headline: "Architecting sustainable water, sanitation, and hygiene solutions.", overview: "We approach WASH not just as aid, but as public health engineering. We construct and rehabilitate deep water points, promote behavioral hygiene shifts, and establish self-reliant community-led sanitation committees to ensure operational longevity.", objectives: ["Drill and rehabilitate deep-yield community boreholes.", "Distribute rapid-response core hygiene and dignity kits.", "Establish and train localized water management committees."] },
  "education": { title: "Education Systems", icon: BookOpen, image: "/img (3).jpeg", stat: "12 Schools", headline: "Engineering inclusive learning and youth empowerment frameworks.", overview: "We ensure conflict-affected demographics retain access to safe, high-quality education. Our projects span from physical classroom construction and material supply chains to complex pedagogical training for volunteer educators.", objectives: ["Establish structural, safe, temporary learning spaces (TLS).", "Manage the distribution of comprehensive scholastic materials.", "Deploy localized accelerated learning programs (ALP)."] },
  "protection": { title: "Human Protection", icon: ShieldCheck, image: "/img (4).jpeg", stat: "Child-Friendly", headline: "Safeguarding the rights, dignity, and psychology of vulnerable groups.", overview: "The protection sector operates as a specialized shield. We work to preemptively prevent and actively respond to violence, exploitation, and abuse through highly trained community-based networks and trauma-informed care centers.", objectives: ["Operate psychologically supervised child-friendly spaces (CFS).", "Execute wide-scale human rights awareness campaigns.", "Provide discrete case management and specialized referrals."] },
  "shelter-nfi": { title: "Shelter & NFIs", icon: Home, image: "/img (3).jpeg", stat: "Emergency Aid", headline: "Deploying rapid housing structures and critical domestic assets.", overview: "In the immediate aftermath of displacement, we deploy life-saving shelter materials and essential non-food items (NFIs). This sector is designed for rapid mobilization, helping fractured families regain safety, warmth, and basic privacy.", objectives: ["Distribute rapid-response emergency shelter kits.", "Supply comprehensive household survival NFI kits.", "Facilitate secure cash-for-shelter market programs."] },
  "food-security": { title: "Agronomic Resilience", icon: Sprout, image: "/img (4).jpeg", stat: "Agri-Resilience", headline: "Transitioning communities to sovereign, climate-resilient farming.", overview: "We actively shift the paradigm from emergency food distributions to agricultural sovereignty. We empower communities to cultivate their own futures by providing climate-resilient seeds, modern tools, and advanced agronomic training.", objectives: ["Distribute high-yield, climate-resilient crop seeds.", "Establish and train specialized Farmer Field Schools (FFS).", "Create and capitalize Village Savings and Loan Associations (VSLA)."] }
};

export default function SubProgramPage() {
  const params = useParams();
  const id = (params?.id as string) || "health";
  const program = programDetails[id as keyof typeof programDetails] || programDetails["health"];

  return (
    <main className="bg-white text-[#0b132b] font-sans selection:bg-[#1e8b35] selection:text-white">
      <Navbar />
      
      {/* --- HERO DOSSIER --- */}
      <section className="pt-40 pb-20 px-6 max-w-[1400px] mx-auto border-b border-slate-100">
        <Link href="/programs" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#1e8b35] transition-colors mb-16">
          <ArrowLeft size={14} /> Return to Incubator
        </Link>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4">
              <program.icon className="text-[#1e8b35] w-8 h-8" strokeWidth={1.5} />
              <span className="text-[#1e8b35] font-bold text-[10px] uppercase tracking-[0.4em]">Sector Dossier</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif tracking-tight leading-[0.9] text-[#0b132b]">
              {program.title}.
            </h1>
            <p className="text-2xl font-serif text-slate-500 italic leading-relaxed max-w-xl">
              "{program.headline}"
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-[#0b132b]/10 group">
              <Image 
                src={program.image} 
                alt={program.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-[#0b132b]/20 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl">
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold block mb-1">Key Metric</span>
                <p className="text-3xl font-serif text-[#0b132b]">{program.stat}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STRATEGIC BRIEFING --- */}
      <section className="py-32">
        <div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-20">
            {/* Overview */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-slate-300"></span> Strategic Overview
              </h3>
              <p className="text-2xl leading-relaxed text-slate-700 font-light">
                {program.overview}
              </p>
            </div>
            
            {/* Objectives */}
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-slate-300"></span> Tactical Objectives
              </h3>
              <div className="grid md:grid-cols-2 gap-10">
                {program.objectives.map((obj, i) => (
                  <div key={i} className="group border-l-2 border-slate-100 pl-6 hover:border-[#1e8b35] transition-colors duration-300">
                    <span className="text-[#1e8b35] font-serif text-2xl block mb-3">0{i + 1}</span>
                    <p className="text-slate-600 font-light leading-relaxed">{obj}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0b132b] text-white p-10 rounded-3xl">
              <h4 className="font-serif text-3xl mb-8">Compliance <br/><span className="text-slate-400 italic font-light">Standards</span></h4>
              <div className="space-y-6">
                {["UN Cluster Verified", "Sphere Standard Adherent", "Gender & Age Responsive", "Do No Harm Protocol"].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.1em] text-slate-300">
                    <CheckCircle2 size={18} className="text-[#1e8b35]" strokeWidth={2} /> {item}
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full flex items-center justify-between p-8 bg-slate-50 border border-slate-200 hover:border-[#1e8b35] hover:bg-white rounded-3xl transition-all group shadow-sm hover:shadow-xl">
              <div className="flex items-center gap-4">
                <FileText className="text-[#0b132b] group-hover:text-[#1e8b35] transition-colors" size={24} strokeWidth={1.5} />
                <span className="font-bold text-[11px] uppercase tracking-[0.2em] text-[#0b132b]">Request Framework PDF</span>
              </div>
              <ArrowUpRight className="text-slate-400 group-hover:text-[#1e8b35] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </button>
          </div>

        </div>
      </section>
    </main>
  );
}