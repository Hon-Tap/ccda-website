"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0b132b] pt-32 pb-12 text-white mt-32 border-t border-white/5">
      
      {/* IMPACT CTA CARD - Overlaps the footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl z-10">
        <div className="bg-gradient-to-br from-[#1e8b35] to-[#115e21] rounded-3xl p-8 md:p-14 shadow-2xl shadow-[#1e8b35]/20 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative border border-white/10">
          <div className="relative z-10 text-center md:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
              Ready to make a lasting difference?
            </h2>
            <p className="text-white/90 text-lg font-light leading-relaxed">
              Join our global network of partners in restoring hope and rebuilding communities across South Sudan.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 group bg-white text-[#0b132b] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-xl transition-all duration-300 whitespace-nowrap flex items-center gap-2"
          >
            Get Involved Now
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Decorative Elements */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-black/20 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-xl w-16 h-16 relative shadow-sm">
                <Image
                  src="/CCDA-logo.jpeg"
                  alt="CCDA Logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold tracking-tight leading-none text-white">
                  CCDA
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e8b35] mt-1">
                  South Sudan
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed font-light pr-4">
              A faith-based organization dedicated to restoring hope, dignity, and resilience through sustainable development and emergency relief operations.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <Link
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:-translate-y-1 transition-all duration-300"
              >
              <FaFacebook size={18} />
                </Link>

                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-1 transition-all duration-300"
                >
                  <FaLinkedin size={18} />
                </Link>
              <Link
                href="#"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-white mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Our History", path: "/about" },
                { name: "Thematic Areas", path: "/programs" },
                { name: "Field Projects", path: "/projects" },
                { name: "Annual Reports", path: "/reports" },
                { name: "Careers", path: "/careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="group flex items-center text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    <ArrowRight size={12} className="opacity-0 -ml-4 mr-2 text-[#1e8b35] transition-all duration-300 group-hover:opacity-100 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-white mb-6">
              Headquarters
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start text-sm text-slate-400 hover:text-slate-300 transition-colors">
                <div className="bg-white/5 p-2 rounded-lg shrink-0 mt-0.5">
                  <MapPin className="text-[#1e8b35]" size={16} />
                </div>
                <span className="leading-relaxed">
                  Thongpiny, Block 3, Plot 631,<br />
                  Juba, South Sudan
                </span>
              </li>
              <li className="flex gap-4 items-center text-sm text-slate-400 hover:text-slate-300 transition-colors">
                <div className="bg-white/5 p-2 rounded-lg shrink-0">
                  <Phone className="text-[#1e8b35]" size={16} />
                </div>
                <span>+211 923 846 396</span>
              </li>
              <li className="flex gap-4 items-center text-sm text-slate-400 hover:text-slate-300 transition-colors">
                <div className="bg-white/5 p-2 rounded-lg shrink-0">
                  <Mail className="text-[#1e8b35]" size={16} />
                </div>
                <span>info@ccdasouthsudan.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2 text-sm">
            <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-white mb-6">
              Stay Updated
            </h4>
            <p className="text-slate-400 mb-4 font-light leading-relaxed">
              Receive monthly updates on our field impact and community stories.
            </p>
            <form
              className="relative flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1e8b35] focus:ring-1 focus:ring-[#1e8b35] transition-all"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-white/10 text-white px-4 rounded-lg hover:bg-[#1e8b35] transition-colors flex items-center justify-center group-focus-within:bg-[#1e8b35]"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-light">
          <p>
            © {new Date().getFullYear()} CCDA South Sudan. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white hover:underline underline-offset-4 transition-all">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white hover:underline underline-offset-4 transition-all">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}