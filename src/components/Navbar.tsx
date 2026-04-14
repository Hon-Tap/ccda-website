"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight, Heart, Sprout, BookOpen, Stethoscope, Shield } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "About Us", href: "/about" },
    { 
      label: "What We Do", 
      href: "/programs",
      children: [
        { title: "Food Security", desc: "Sustainable agriculture & relief", href: "/programs/food-security", icon: Sprout },
        { title: "Education", desc: "Empowering the next generation", href: "/programs/education", icon: BookOpen },
        { title: "Health Services", desc: "Clean water & medical aid", href: "/programs/health", icon: Stethoscope },
        { title: "Protection", desc: "Fostering community resilience", href: "/programs/peace", icon: Shield },
      ]
    },
    { label: "Projects", href: "/projects" },
    { label: "Reports", href: "/reports" },
  ];

  return (
    <>
      {/* HEADER CONTAINER
        Width scaling: 85-75% on larger media, full width on medium/desktop.
        Centered, static premium dark background, subtle bottom shadow.
      */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[85%] md:w-full lg:w-full xl:w-[75%] z-[100] mt-2 md:mt-0 rounded-2xl md:rounded-none bg-[#0b132b] shadow-xl shadow-black/10 border border-white/5 md:border-t-0 md:border-x-0 border-b-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className="relative h-12 w-12 rounded-xl bg-white p-1 shadow-sm overflow-hidden border border-slate-200 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/CCDA-logo.jpeg" 
                alt="CCDA Logo" 
                fill 
                sizes="48px"
                className="object-contain" 
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold leading-none tracking-tight text-white transition-colors group-hover:text-gray-200">
                CCDA
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#1e8b35]">
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
                  className="relative flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-slate-300 transition-colors hover:text-white rounded-lg hover:bg-white/5"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-[#1e8b35]' : ''}`} 
                    />
                  )}
                  {/* Underline Slide Animation */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-[#1e8b35] transition-all duration-300 ease-out group-hover:w-[calc(100%-2rem)] rounded-full" />
                </Link>

                {/* DESKTOP DROPDOWN MENU */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 24 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[340px] bg-white rounded-2xl shadow-2xl shadow-black/20 border border-slate-100 overflow-hidden p-2.5"
                    >
                      <div className="grid gap-1">
                        {item.children.map((child) => {
                          const Icon = child.icon;
                          return (
                            <Link 
                              key={child.title} 
                              href={child.href} 
                              className="group/item flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-colors"
                            >
                              <div className="bg-[#0b132b]/5 p-2 rounded-lg text-[#0b132b] group-hover/item:bg-[#0b132b] group-hover/item:text-white transition-colors">
                                <Icon size={18} strokeWidth={2.5} />
                              </div>
                              <div className="flex flex-col flex-1">
                                <span className="text-sm font-bold text-slate-900 flex items-center justify-between group-hover/item:text-[#0b132b] transition-colors">
                                  {child.title}
                                  <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#1e8b35]" />
                                </span>
                                <span className="text-xs text-slate-500 font-medium mt-0.5">{child.desc}</span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="h-6 w-[1px] mx-2 bg-white/10" />

            {/* CALL TO ACTION BUTTON */}
            <Link
              href="/donate"
              className="group relative overflow-hidden bg-[#1e8b35] text-white ml-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#1e8b35]/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1e8b35]/40"
            >
              <div className="absolute inset-0 w-full h-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              <Heart size={14} fill="currentColor" className="relative z-10 animate-pulse" />
              <span className="relative z-10">Support Mission</span>
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg z-50 text-white hover:bg-white/10 transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* MOBILE SLIDE-IN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[85%] max-w-sm h-[100dvh] bg-[#0b132b] shadow-2xl z-[102] lg:hidden flex flex-col border-l border-white/10"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="font-serif text-xl font-bold text-white">Menu</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-white/5 rounded-full text-white hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
                {navItems.map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={item.label}
                    className="border-b border-white/5 pb-4"
                  >
                    <Link 
                      href={item.href} 
                      onClick={!item.children ? () => setIsMobileMenuOpen(false) : undefined}
                      className="text-lg font-bold text-slate-300 hover:text-white transition-colors flex items-center justify-between"
                    >
                      {item.label}
                    </Link>
                    
                    {item.children && (
                      <div className="mt-4 ml-4 space-y-4 border-l border-white/10 pl-4">
                        {item.children.map((child) => (
                          <Link 
                            key={child.title}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm text-slate-400 hover:text-[#1e8b35] transition-colors"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="p-6 border-t border-white/10 bg-white/5">
                <Link 
                  href="/donate" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#1e8b35] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-[#1e8b35]/20 active:scale-95 transition-transform"
                >
                  <Heart size={16} fill="currentColor" /> Support Our Mission
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}