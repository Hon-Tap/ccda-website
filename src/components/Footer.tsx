"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b132b] pt-16 pb-6 text-white mt-24 border-t border-white/5">
      
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-[#1e8b35]/5 rounded-full blur-[100px]" />
      </div>

      {/* COMPACT IMPACT CTA - Tighter padding and margins */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-[1200px] z-30">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1e8b35] via-[#166c28] to-[#0f4a1a] p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-white/10 backdrop-blur-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.1),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
            <div className="text-center md:text-left max-w-xl">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif font-bold text-white mb-2 tracking-tight">
                Ready to make a <span className="text-green-300">lasting difference?</span>
              </h2>
              <p className="text-green-50/80 text-xs md:text-sm font-medium leading-relaxed">
                Join our global network of partners in restoring hope and rebuilding communities across South Sudan.
              </p>
            </div>

            <Link
              href="/contact"
              className="group shrink-0 bg-white text-[#0f4a1a] px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-green-50 transition-all duration-300 shadow-xl flex items-center gap-3 active:scale-95"
            >
              Get Involved
              <div className="w-6 h-6 rounded-md bg-[#0f4a1a]/5 flex items-center justify-center group-hover:bg-[#1e8b35] group-hover:text-white transition-all duration-300">
                <ArrowRight size={14} className="transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 mt-12 z-10">
        {/* Adjusted Grid - Reduced gap from gap-10 to gap-6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 pb-10 border-b border-white/5">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl shadow-md flex items-center justify-center w-10 h-10">
                  <Image
                    src="/CCDA-logo.jpeg"
                    alt="CCDA Logo"
                    width={40}
                    height={40}
                    priority
                    className="object-contain"
                  />
                </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight text-white leading-none">CCDA</span>
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#1e8b35] mt-1">South Sudan</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-[280px]">
              A faith-based organization restoring hope, dignity, and resilience through sustainable development and emergency relief.
            </p>

            <div className="flex gap-2">
              {[
                { icon: FaFacebook, color: "#1877F2", label: "Facebook" },
                { icon: FaLinkedin, color: "#0A66C2", label: "LinkedIn" },
                { icon: FaWhatsapp, color: "#25D366", label: "WhatsApp" }
              ].map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  className="group relative w-8 h-8 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: social.color }} />
                  <social.icon size={14} className="relative z-10 text-slate-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold uppercase tracking-widest text-[9px] text-white/50 mb-4">Navigation</h4>
            <ul className="space-y-2.5">
              {["Our History", "Thematic Areas", "Field Projects", "Reports"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-[#1e8b35] text-xs transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#1e8b35] scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location / Headquarters */}
          <div className="lg:col-span-3">
            <h4 className="font-bold uppercase tracking-widest text-[9px] text-white/50 mb-4">Headquarters</h4>
            <div className="space-y-3">
              <div className="flex gap-2.5 items-start text-xs text-slate-400">
                <MapPin size={14} className="text-[#1e8b35] shrink-0 mt-0.5" />
                <span className="leading-relaxed">Thongpiny, Block 3, Plot 631,<br/>Juba, South Sudan</span>
              </div>
              <div className="flex gap-2.5 items-center text-xs text-slate-400">
                <Phone size={14} className="text-[#1e8b35] shrink-0" />
                <span>+211 923 846 396</span>
              </div>
            </div>
          </div>

          {/* Newsletter / Compact */}
          <div className="lg:col-span-2">
            <h4 className="font-bold uppercase tracking-widest text-[9px] text-white/50 mb-4">Newsletter</h4>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#1e8b35] transition-all"
              />
              <button className="absolute right-1 top-1 bottom-1 bg-[#1e8b35] text-white px-2.5 rounded-md hover:bg-[#166c28] transition-all">
                <ArrowRight size={12} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-slate-500 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} CCDA South Sudan</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}