"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Heart, Globe, X } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaTwitter } from "react-icons/fa";

// --- MODAL COMPONENT ---
const LegalModal = ({ isOpen, onClose, title, content }: { isOpen: boolean, onClose: () => void, title: string, content: string }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0b132b]/80 backdrop-blur-md" 
        />
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-2xl bg-[#162238] border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden"
        >
          <div className="p-8 sm:p-12">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-serif text-white tracking-tight">{title}</h3>
              <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400">
                <X size={20} />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto pr-4 text-slate-300 text-sm leading-relaxed space-y-4 custom-scrollbar">
              <p>{content}</p>
            </div>
            <button 
              onClick={onClose}
              className="mt-8 w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl transition-all"
            >
              Close Document
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export default function Footer() {
  const [modal, setModal] = useState<{ open: boolean; title: string; content: string }>({ 
    open: false, title: "", content: "" 
  });

  const currentYear = new Date().getFullYear();

  const openLegal = (type: 'privacy' | 'terms') => {
    const data = {
      privacy: {
        title: "Privacy Policy",
        content: "At CCDA South Sudan, we are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information in accordance with international humanitarian data standards. We ensure that all community and donor data is handled with the utmost integrity and transparency."
      },
      terms: {
        title: "Terms of Use",
        content: "By accessing the CCDA digital platform, you agree to comply with our ethical guidelines. Our content is designed for humanitarian awareness and community empowerment. Unauthorized use of organizational assets or misinformation regarding our field projects is strictly prohibited."
      }
    };
    setModal({ open: true, ...data[type] });
  };

  return (
    <footer className="relative bg-[#0b132b] pt-24 overflow-hidden">
      <LegalModal 
        isOpen={modal.open} 
        onClose={() => setModal({ ...modal, open: false })} 
        title={modal.title} 
        content={modal.content} 
      />

      {/* --- BACKGROUND BLOOMS --- */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />


      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* BRAND */}
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-4">
                <div className="relative w-12 h-12 bg-white rounded-xl overflow-hidden p-1.5 shadow-xl">
                  <Image src="/CCDA-logo.jpeg" alt="CCDA" fill className="object-contain p-1" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-serif text-white tracking-tight">CCDA</span>
                  <span className="text-[9px] font-black text-emerald-500 uppercase tracking-[0.4em]">South Sudan</span>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                Restoring hope, dignity, and resilience through community-led development and emergency response across the nation.
              </p>
            </div>

            <div className="flex gap-3">
              {[FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-emerald-600 hover:text-white transition-all">
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* EXPLORE */}
            <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Explore</h4>
            <ul className="space-y-4">
              {[
                { name: "Our Projects", href: "/projects" },
                { name: "Impact Reports", href: "/reports" },
                { name: "Thematic Areas", href: "/programs" },
                { name: "Latest News", href: "/news" },
                { name: "Careers", href: "#" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-emerald-400 text-sm font-bold transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-[1px] bg-emerald-500 transition-all mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Programs</h4>
            <ul className="space-y-4 text-slate-400 text-sm font-bold">
              {["WASH Services", "Food Security", "Protection", "Education", "Health Care"].map(item => (
                <li key={item} className="hover:text-emerald-400 cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-4 space-y-6">
            <h4 className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Headquarters</h4>
            <div className="space-y-5">
              <div className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/[0.08] transition-all">
                <MapPin className="text-emerald-500 shrink-0" size={20} />
                <span className="text-slate-300 text-sm font-medium leading-relaxed">
                  Thongpiny, Block 3, Plot 631<br /> Juba, South Sudan
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 font-bold text-sm">
                <a href="tel:+211923846396" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors">
                   <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center"><Phone size={14} className="text-emerald-500" /></div>
                   +211 923 846 396
                </a>
                <a href="mailto:info@ccda-ss.org" className="flex items-center gap-4 text-slate-300 hover:text-emerald-400 transition-colors">
                   <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center"><Mail size={14} className="text-emerald-500" /></div>
                   info@ccda-ss.org
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            © {currentYear} CCDA South Sudan. Architecture for a stronger future.
          </p>
          <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
            <button onClick={() => openLegal('privacy')} className="hover:text-emerald-400 transition-colors">Privacy Policy</button>
            <button onClick={() => openLegal('terms')} className="hover:text-emerald-400 transition-colors">Terms of Use</button>
            <div className="flex items-center gap-2 text-emerald-500/50">
               <Globe size={12} /> <span>Global Edition</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}