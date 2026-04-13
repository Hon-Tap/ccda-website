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
        { title: "Food Security & Livelihoods", desc: "Sustainable agriculture & relief.", href: "/programs/food-security" },
        { title: "Education", desc: "Empowering the next generation.", href: "/programs/education" },
        { title: "Health Services", desc: "Clean water & medical assistance.", href: "/programs/health" },
        { title: "Protection", desc: "Fostering community resilience.", href: "/programs/peace" },
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
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-xl py-3 shadow-sm border-slate-200/50" 
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <motion.div 
            animate={{ scale: isScrolled ? 0.95 : 1 }}
            className="relative h-12 w-12 rounded-xl bg-white p-1 shadow-sm overflow-hidden border border-slate-100"
          >
            <Image 
              src="/CCDA-logo.jpeg" 
              alt="CCDA Logo" 
              fill 
              sizes="48px"
              className="object-contain" 
            />
          </motion.div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold leading-none tracking-tight transition-colors ${isScrolled ? 'text-[#0f62a3]' : 'text-white'}`}>
              CCDA
            </span>
            <span className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-colors ${isScrolled ? 'text-[#1e8b35]' : 'text-[#1e8b35]/90'}`}>
              South Sudan
            </span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div 
              key={item.label}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all rounded-full
                  ${isScrolled 
                    ? 'text-slate-600 hover:text-[#0f62a3] hover:bg-[#0f62a3]/5' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {item.label}
                {item.children && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </Link>

              {/* DROPDOWN MENU */}
              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-xl shadow-[#0f62a3]/10 border border-slate-100 overflow-hidden p-3"
                  >
                    <div className="grid gap-1">
                      {item.children.map((child) => (
                        <Link key={child.title} href={child.href} className="group/item flex flex-col p-3 hover:bg-slate-50 rounded-xl transition-colors">
                          <span className="text-sm font-bold text-[#0f62a3] flex items-center gap-2">
                            {child.title}
                            <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#1e8b35]" />
                          </span>
                          <span className="text-xs text-slate-500 font-medium mt-0.5">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div className={`h-6 w-[1px] mx-4 transition-colors ${isScrolled ? 'bg-slate-200' : 'bg-white/20'}`} />

          <Link
            href="/donate"
            className="bg-[#1e8b35] hover:bg-[#166e2a] text-white px-7 py-3 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#1e8b35]/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Heart size={14} fill="currentColor" />
            Support Mission
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg z-50 transition-colors ${isScrolled || isMobileMenuOpen ? 'text-[#0f62a3]' : 'text-white'}`}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full h-[calc(100vh-80px)] bg-white shadow-2xl border-t border-slate-100 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col p-6 space-y-6">
              {navItems.map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item.label}
                >
                  <Link 
                    href={item.href} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-2xl font-serif font-bold text-[#0f62a3] hover:text-[#1e8b35] transition-colors block"
                  >
                    {item.label}
                  </Link>
                  {/* Render mobile sub-items if needed here */}
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-slate-100"
              >
                <Link 
                  href="/donate" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#1e8b35] text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-lg shadow-[#1e8b35]/20"
                >
                  <Heart size={16} fill="currentColor" /> Support Our Mission
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}