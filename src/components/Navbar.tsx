"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Programs",
    href: "/programs",
    children: [
      { title: "Food Security", href: "/programs/food-security", desc: "Combatting hunger through sustainable farming." },
      { title: "Education", href: "/programs/education", desc: "Empowering the next generation of leaders." },
      { title: "Health Services", href: "/programs/health", desc: "Providing vital medical care to remote areas." },
      { title: "Protection & Peace", href: "/programs/peace", desc: "Building resilient and safe communities." },
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

  // Handle Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- TOP TRUST BAR --- */}
      <div className={`hidden md:block transition-all duration-300 bg-[#0b132b] text-white overflow-hidden ${isScrolled ? 'h-0' : 'h-10'}`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between text-[12px] font-medium tracking-wide">
          <div className="flex items-center gap-6">
            <a href="tel:+211923846396" className="flex items-center gap-2 hover:text-[#1e8b35] transition-colors">
              <Phone size={14} className="text-[#1e8b35]" /> +211 923 846 396
            </a>
            <a href="mailto:info@ccda-ss.org" className="flex items-center gap-2 hover:text-[#1e8b35] transition-colors">
              <Mail size={14} className="text-[#1e8b35]" /> info@ccda-ss.org
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 opacity-80">
              <MapPin size={14} /> Juba, South Sudan
            </span>
            <div className="h-4 w-[1px] bg-white/20" />
            <span className="flex items-center gap-1">
              <Globe size={14} /> EN
            </span>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVIGATION --- */}
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO AREA */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative w-12 h-12 overflow-hidden rounded-lg border-2 border-[#1e8b35]/10 group-hover:border-[#1e8b35] transition-all">
              <Image
                src="/CCDA-logo.jpeg"
                alt="CCDA Logo"
                fill
                className="object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl tracking-tighter text-[#0b132b] leading-none">
                CCDA
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#1e8b35] uppercase">
                South Sudan
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              
              return (
                <div 
                  key={item.label}
                  className="relative px-2"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-bold transition-colors flex items-center gap-1 rounded-md
                      ${isActive ? "text-[#1e8b35]" : "text-gray-600 hover:text-[#1e8b35] hover:bg-gray-50"}`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
                    
                    {isActive && (
                      <motion.div layoutId="nav-underline" className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#1e8b35]" />
                    )}
                  </Link>

                  {/* MEGA DROPDOWN */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-[320px] bg-white rounded-xl shadow-2xl border border-gray-100 p-4"
                      >
                        <div className="grid gap-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors"
                            >
                              <div className="mt-1 w-2 h-2 rounded-full bg-[#1e8b35] opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div>
                                <div className="text-sm font-bold text-gray-900 group-hover:text-[#1e8b35]">{child.title}</div>
                                <p className="text-xs text-gray-500 line-clamp-1">{child.desc}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* DONATE CALL TO ACTION */}
            <Link
              href="/contact"
              className="ml-6 group relative overflow-hidden bg-[#1e8b35] text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-green-200 transition-all active:scale-95"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart size={16} className="group-hover:fill-white transition-colors" />
                Support Our Mission
              </span>
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-50 text-[#0b132b]"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm lg:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-[85%] max-w-[400px] bg-white z-[70] shadow-2xl lg:hidden p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-black text-xl text-[#0b132b]">MENU</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={24} />
                </button>
              </div>

              <nav className="flex-1 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-50">
                    <Link
                      href={item.href}
                      onClick={() => !item.children && setMobileOpen(false)}
                      className="flex items-center justify-between py-4 text-lg font-bold text-gray-800 hover:text-[#1e8b35]"
                    >
                      {item.label}
                      {item.children && <ChevronDown size={18} />}
                    </Link>
                    {item.children && (
                      <div className="pl-4 pb-4 space-y-3">
                        {item.children.map(child => (
                          <Link 
                            key={child.title} 
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block text-gray-500 font-medium hover:text-[#1e8b35]"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-auto pt-10">
                <Link
                  href="/donate"
                  className="flex items-center justify-center gap-3 bg-[#1e8b35] text-white w-full py-4 rounded-xl font-bold shadow-lg"
                >
                  <Heart size={20} />
                  Donate Now
                </Link>
                <p className="text-center text-xs text-gray-400 mt-6 font-medium">
                  Strengthening Communities in South Sudan
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}