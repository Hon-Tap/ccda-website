"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { 
  Heart, Droplets, BookOpen, ShieldCheck, Home, Sprout, 
  ArrowLeft, CheckCircle2, FileText, ArrowUpRight
} from "lucide-react";
// Import your Navbar component
import Navbar from "@/components/Navbar"; 

const programDetails = {
  "health": { title: "Health Services", icon: Heart, image: "/img (1).jpeg", stat: "15+ Facilities", headline: "Delivering life-saving clinical services to hard-to-reach rural communities.", overview: "Our health programs focus on reducing mortality and morbidity among vulnerable populations through direct support to primary healthcare units and mobile medical clinics.", objectives: ["Improve access to essential primary healthcare and maternal services.", "Support training for local community health workers.", "Provide essential drug supplies and medical equipment."] },
  "wash": { title: "WASH", icon: Droplets, image: "/img (4).jpeg", stat: "50k+ Access", headline: "Providing sustainable water, sanitation, and hygiene solutions.", overview: "We construct and rehabilitate water points, promote positive hygiene behaviors, and establish community-led sanitation committees to ensure long-term sustainability.", objectives: ["Drill and rehabilitate deep boreholes.", "Distribute core hygiene and dignity kits.", "Establish community water management committees."] },
  "education": { title: "Education", icon: BookOpen, image: "/img (3).jpeg", stat: "12 Schools", headline: "Promoting inclusive learning and youth empowerment.", overview: "We ensure conflict-affected children have access to safe, quality education through classroom construction, material supply, and volunteer teacher training.", objectives: ["Establish safe, temporary learning spaces.", "Distribute scholastic materials.", "Provide localized accelerated learning."] },
  "protection": { title: "Protection", icon: ShieldCheck, image: "/img (4).jpeg", stat: "Child-Friendly", headline: "Safeguarding the rights and dignity of vulnerable groups.", overview: "Our protection sector works to prevent and respond to violence and exploitation through community-based networks and specialized child-friendly spaces.", objectives: ["Operate supervised child-friendly spaces.", "Conduct human rights awareness campaigns.", "Offer case management and referrals."] },
  "shelter-nfi": { title: "Shelter & NFIs", icon: Home, image: "/img (3).jpeg", stat: "Emergency Aid", headline: "Providing rapid shelter kits and essential household items.", overview: "We provide life-saving shelter materials and essential household non-food items (NFIs) to help families regain safety and privacy during displacement.", objectives: ["Distribute emergency shelter kits.", "Provide household NFI kits.", "Facilitate cash-for-shelter programs."] },
  "food-security": { title: "Food Security & Livelihoods", icon: Sprout, image: "/img (4).jpeg", stat: "Agri-Resilience", headline: "Enhancing community resilience through sustainable farming.", overview: "We move beyond emergency aid to help communities feed themselves by providing seeds, tools, and modern agronomic training.", objectives: ["Distribute climate-resilient crop seeds.", "Train farmer field schools.", "Establish village savings associations."] }
};

export default function SubProgramPage() {
  const params = useParams();
  const id = (params?.id as string) || "health";
  const program = programDetails[id as keyof typeof programDetails] || programDetails["health"];

  return (
    <main className="bg-[#fcfcfc] text-[#0a2647] font-sans">
      {/* Navbar placed at the top so it is always visible */}
      <Navbar />
      
      {/* --- HERO --- */}
      <section className="pt-32 pb-20 px-6 max-w-[1600px] mx-auto">
        <Link href="/programs" className="inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 hover:text-[#0a2647] transition-all mb-16">
          <ArrowLeft size={14} /> Back to Framework
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-end">
          <div className="space-y-10">
            <span className="text-primary-green font-bold text-xs uppercase tracking-[0.4em]">Sector Profile</span>
            <h1 className="text-7xl md:text-9xl font-serif tracking-tighter leading-[0.9]">{program.title}</h1>
            <p className="text-2xl font-serif text-slate-500 italic max-w-lg">"{program.headline}"</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 h-[400px]">
            <div className="relative overflow-hidden group">
              <Image src={program.image} alt="Impact" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="bg-[#0a2647] p-10 flex flex-col justify-end text-white">
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 mb-2">Key Metric</span>
              <p className="text-4xl font-serif">{program.stat}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- DOSSIER --- */}
      <section className="py-24 bg-[#eaeff5]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 bg-white p-16 shadow-sm border border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">Strategic Overview</h3>
            <p className="text-xl leading-relaxed text-slate-700 mb-16 font-light">{program.overview}</p>
            
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-10">Primary Objectives</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {program.objectives.map((obj, i) => (
                <div key={i} className="border-l border-slate-200 pl-6">
                  <span className="text-primary-green font-bold block mb-2">0{i + 1}</span>
                  <p className="text-sm font-medium leading-relaxed">{obj}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#0a2647] text-white p-10">
              <h4 className="font-serif text-2xl mb-8">Compliance</h4>
              <div className="space-y-6">
                {["Cluster Verified", "Sphere Standard", "Gender Responsive"].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-xs font-bold uppercase tracking-[0.1em]">
                    <CheckCircle2 size={16} className="text-primary-green" /> {item}
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full flex items-center justify-between p-8 bg-white border border-slate-200 hover:border-[#0a2647] transition-all group">
              <span className="font-bold text-xs uppercase tracking-[0.2em]">Download Dossier</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}