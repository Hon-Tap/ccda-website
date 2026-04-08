"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Heart } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: "About Us", href: "/about" },
    { 
      label: "What We Do", 
      href: "/programs",
      children: [
        { title: "Food Security", desc: "Sustainable agriculture and emergency relief.", href: "/programs/food-security" },
        { title: "Education", desc: "Empowering the next generation.", href: "/programs/education" },
        { title: "Health & WASH", desc: "Clean water and medical assistance.", href: "/programs/health" },
        { title: "Peace Building", desc: "Fostering community resilience.", href: "/programs/peace" },
      ]
    },
    { label: "Projects", href: "/projects" },
    { label: "Reports", href: "/reports" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-xl" : "bg-[#0a2647] py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            animate={{ scale: isScrolled ? 0.9 : 1 }}
            className="relative h-12 w-12 rounded-lg bg-white p-1 shadow-inner"
          >
            <Image src="/CCDA-logo.jpeg" alt="Logo" fill className="object-contain" />
          </motion.div>
          <div className="flex flex-col">
            <span className={`font-black text-xl leading-none tracking-tighter ${isScrolled ? 'text-[#0a2647]' : 'text-white'}`}>
              CCDA
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-[0.3em] ${isScrolled ? 'text-primary-green' : 'text-primary-green/90'}`}>
              South Sudan
                      </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-2">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-4 py-2 text-xs font-black uppercase tracking-widest transition-colors rounded-full
                  ${isScrolled ? 'text-slate-600 hover:bg-slate-100' : 'text-white/80 hover:text-white hover:bg-white/10'}
                `}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </Link>

              {/* DROPDOWN MENU */}
              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden p-4"
                  >
                    <div className="grid gap-2">
                      {item.children.map((child) => (
                        <Link key={child.title} href={child.href} className="group/item flex flex-col p-3 hover:bg-slate-50 rounded-xl transition-colors">
                          <span className="text-sm font-black text-[#0a2647] flex items-center gap-2">
                            {child.title}
                            <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                          </span>
                          <span className="text-xs text-slate-500 font-medium">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className="h-6 w-[1px] bg-slate-300/30 mx-4" />

          <Link
            href="/donate"
            className="bg-primary-green hover:bg-green-600 text-white px-6 py-3 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-green-500/20 transition-transform active:scale-95"
          >
            <Heart size={14} fill="currentColor" />
            Support Our Mission
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg ${isScrolled ? 'text-[#0a2647]' : 'text-white'}`}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-0 right-0 w-full h-screen bg-[#0a2647] z-[150] p-8 flex flex-col"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white"><X size={32} /></button>
            </div>
            <div className="space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.label}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-black text-white uppercase tracking-tighter hover:text-primary-green"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link href="/contact" className="block w-full bg-primary-green text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest">
                Partner With Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}