"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Heart,
  ArrowRight,
  Globe,
  Sparkles
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { title: "Health Services", href: "/programs/health", desc: "Providing vital medical care to remote areas." },
      { title: "WASH", href: "/programs/wash", desc: "Safe water & hygiene protocols." },
      { title: "Education", href: "/programs/education", desc: "Empowering the next generation of leaders." },
      { title: "Protection & Peace", href: "/programs/peace", desc: "Building resilient and safe communities." },
      { title: "Food Security", href: "/programs/food-security", desc: "Combatting hunger through sustainable farming." },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Unified scroll handler for elegance and functionality
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <>
      {/* --- TOP BAR (Full Width) --- */}
      <div 
        className={`hidden lg:block transition-all duration-500 bg-[#0b132b] text-slate-300 overflow-hidden ${
          isScrolled ? 'h-0 opacity-0' : 'h-12 border-b border-white/5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 h-full flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.2em]">
          <div className="flex items-center gap-8">
            <a href="tel:+211923846396" className="flex items-center gap-2 hover:text-emerald-400 transition-colors group">
              <Phone size={12} className="text-emerald-500 group-hover:animate-pulse" /> +211 923 846 396
            </a>
            <a href="mailto:info@ccda-ss.org" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
              <Mail size={12} className="text-emerald-500" /> info@ccda-ss.org
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin size={12} /> Juba, South Sudan</span>
            <div className="h-3 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2 cursor-default">
              <Globe size={12} className="text-emerald-500" /> 
              <span>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION (Full Width) --- */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isScrolled 
            ? "bg-white/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-3" 
            : "bg-white py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 flex items-center justify-between">
          
          {/* BRANDING */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-14 h-14 overflow-hidden rounded-xl border border-slate-100 shadow-sm">
              <Image
                src="/CCDA-logo.jpeg"
                alt="CCDA Logo"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-3xl tracking-tighter text-[#0b132b] leading-none">
                CCDA
              </span>
              <span className="text-[9px] font-black tracking-[0.4em] text-emerald-600 uppercase mt-1">
                South Sudan
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              
              return (
                <div 
                  key={item.label}
                  className="relative px-1"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`px-5 py-3 text-[11px] font-black uppercase tracking-[0.2em] transition-all flex items-center gap-2 rounded-xl
                      ${isActive ? "text-emerald-700 bg-emerald-50/50" : "text-slate-500 hover:text-emerald-600 hover:bg-slate-50"}`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown size={12} className={`transition-transform duration-500 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {/* PREMIUM MEGA DROP (Edge Aligned) */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-[1.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-100 p-5 overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 p-6 opacity-[0.03] pointer-events-none">
                          <Sparkles size={100} className="text-[#0b132b]" />
                        </div>
                        
                        <div className="flex flex-col gap-1 relative z-10">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="group flex flex-col gap-0.5 p-4 rounded-xl hover:bg-emerald-50 transition-all duration-300"
                            >
                              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 flex items-center gap-2">
                                {child.title} 
                                <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                              </span>
                              <p className="text-[11px] text-slate-400 font-medium">{child.desc}</p>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="ml-6 group relative px-8 py-4 bg-[#1e8b35] text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] overflow-hidden transition-all hover:shadow-[0_10px_25px_rgba(30,139,53,0.3)] active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart size={14} className="group-hover:fill-white transition-all" />
                Support Mission
              </span>
              <div className="absolute inset-0 bg-[#0b132b] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMobileOpen(true)}
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-xl bg-slate-50 text-[#0b132b]"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* --- MOBILE OVERLAY (Iconic Style) --- */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[100] bg-[#0b132b] p-8 lg:hidden flex flex-col"
          >
            <div className="flex items-center justify-between mb-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg p-1">
                  <Image src="/CCDA-logo.jpeg" alt="Logo" width={40} height={40} className="rounded-sm" />
                </div>
                <span className="text-white font-serif text-2xl tracking-tighter">CCDA</span>
              </div>
              <button 
                onClick={() => setMobileOpen(false)}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 space-y-8 overflow-y-auto">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-4xl font-serif text-white hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-10 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                 <a href="tel:+211923846396" className="p-4 rounded-2xl bg-white/5 text-white text-center">
                    <Phone size={20} className="mx-auto mb-2 text-emerald-500" />
                    <span className="text-[10px] font-bold block uppercase tracking-widest">Call Us</span>
                 </a>
                 <a href="mailto:info@ccda-ss.org" className="p-4 rounded-2xl bg-white/5 text-white text-center">
                    <Mail size={20} className="mx-auto mb-2 text-emerald-500" />
                    <span className="text-[10px] font-bold block uppercase tracking-widest">Email</span>
                 </a>
              </div>
              <Link
                href="/contact"
                className="w-full py-6 bg-emerald-600 text-white rounded-2xl font-black text-center uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl"
              >
                <Heart size={20} fill="currentColor" /> Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}