"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Heart, Sprout, BookOpen, Stethoscope, Shield } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for the floating pill
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
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
    { label: "Reports", href: "/reports" },
  ];

  const sleekEase = [0.22, 1, 0.36, 1];

  return (
    <>
      <header 
        className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out ${
          scrolled 
            ? "top-0 w-full rounded-none border-b border-white/10 bg-[#0b132b]/95 backdrop-blur-lg shadow-xl" 
            : "top-4 w-[96%] md:w-[98%] max-w-[1400px] rounded-2xl bg-[#0b132b]/90 backdrop-blur-md shadow-2xl border border-white/10"
        }`}
      >
        <div className="relative px-5 md:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO SECTION */}
          <Link href="/" className="flex items-center gap-3 group z-50">
            <div className="relative h-12 w-12 rounded-xl bg-white p-1 shadow-md overflow-hidden border border-slate-200 transition-all duration-500 group-hover:scale-105 group-hover:shadow-white/20 group-hover:shadow-lg"> 
             <Image
                src="/CCDA-logo.jpeg"
                alt="CCDA Organization Logo"
                width={48}
                height={48}
                priority
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
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
              
              return (
                <div 
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors rounded-lg hover:text-white ${
                      isActive ? "text-white" : "text-slate-300"
                    }`}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-500 ease-out ${activeDropdown === item.label ? 'rotate-180 text-[#1e8b35]' : ''}`} 
                      />
                    )}
                    {/* Glowing Underline - Stays visible if active */}
                    <span 
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#1e8b35] to-transparent transition-all duration-500 ease-out ${
                        isActive ? "w-[calc(100%-1rem)]" : "w-0 group-hover:w-[calc(100%-1rem)]"
                      }`} 
                    />
                  </Link>

                  {/* DESKTOP DROPDOWN MENU - Added pt-4 to wrapper to fix hover gap bug */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(4px)" }}
                        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(4px)" }}
                        transition={{ duration: 0.3, ease: sleekEase }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[360px]"
                      >
                        <div className="bg-white rounded-2xl shadow-2xl shadow-black/40 border border-slate-100/50 overflow-hidden p-3">
                          <div className="grid gap-1">
                            {item.children.map((child) => {
                              const Icon = child.icon;
                              return (
                                <Link 
                                  key={child.title} 
                                  href={child.href} 
                                  className="group/item flex items-start gap-4 p-3 hover:bg-slate-50 rounded-xl transition-all duration-300"
                                >
                                  <div className="bg-[#0b132b]/5 p-2.5 rounded-xl text-[#0b132b] group-hover/item:bg-[#1e8b35] group-hover/item:text-white group-hover/item:shadow-lg group-hover/item:shadow-[#1e8b35]/20 transition-all duration-300">
                                    <Icon size={18} strokeWidth={2.5} />
                                  </div>
                                  <div className="flex flex-col flex-1 mt-0.5">
                                    <span className="text-sm font-bold text-slate-900 flex items-center justify-between group-hover/item:text-[#1e8b35] transition-colors">
                                      {child.title}
                                      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" />
                                    </span>
                                    <span className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{child.desc}</span>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            <div className="h-6 w-[1px] mx-2 bg-white/10" />

            {/* CALL TO ACTION BUTTON */}
            <Link
              href="/donate"
              className="group relative overflow-hidden bg-[#1e8b35] text-white ml-2 px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-[#1e8b35]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1e8b35]/40"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <Heart size={14} fill="currentColor" className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Support Mission</span>
            </Link>
          </nav>

          {/* STYLISH ANIMATED HAMBURGER */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-[105] w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            <div className="w-5 h-4 relative flex flex-col justify-between overflow-hidden">
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: sleekEase }}
                className="w-full h-[2px] bg-white rounded-full transform origin-center"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { x: 20, opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: sleekEase }}
                className="w-full h-[2px] bg-white rounded-full"
              />
              <motion.span 
                animate={isMobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.4, ease: sleekEase }}
                className="w-full h-[2px] bg-white rounded-full transform origin-center"
              />
            </div>
          </button>
        </div>
      </header>

      {/* MOBILE SLIDE-IN MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] lg:hidden"
            />
            
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.7, ease: sleekEase }}
              className="fixed top-0 right-0 w-[75vw] max-w-[400px] h-[100dvh] bg-[#0b132b]/95 backdrop-blur-xl shadow-2xl z-[102] lg:hidden flex flex-col border-l border-white/10 pt-24"
            >
              <div className="flex-1 overflow-y-auto px-8 pb-8 space-y-8 no-scrollbar">
                {navItems.map((item, i) => (
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.2, ease: sleekEase }}
                    key={item.label}
                    className="border-b border-white/5 pb-4"
                  >
                    <Link 
                      href={item.href} 
                      onClick={!item.children ? () => setIsMobileMenuOpen(false) : undefined}
                      className="text-2xl font-serif font-bold text-white hover:text-[#1e8b35] transition-colors flex items-center justify-between group"
                    >
                      {item.label}
                      {!item.children && <ArrowRight size={18} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#1e8b35]" />}
                    </Link>
                    
                    {item.children && (
                      <div className="mt-5 space-y-5">
                        {item.children.map((child) => (
                          <Link 
                            key={child.title}
                            href={child.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="group/child flex items-center gap-4 text-slate-400 hover:text-white transition-colors"
                          >
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/child:bg-[#1e8b35] group-hover/child:text-white transition-colors duration-300">
                              <child.icon size={14} />
                            </div>
                            <span className="text-sm font-medium tracking-wide">{child.title}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6, ease: sleekEase }}
                className="p-8 border-t border-white/10 bg-black/20"
              >
                <Link 
                  href="/donate" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-3 bg-[#1e8b35] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm shadow-lg shadow-[#1e8b35]/20 active:scale-95 transition-transform"
                >
                  <Heart size={16} fill="currentColor" /> Support Our Mission
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}