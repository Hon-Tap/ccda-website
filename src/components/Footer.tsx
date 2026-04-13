"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Share2, Send, MessageCircle, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 pt-32 pb-12 text-white mt-32">
      
      {/* IMPACT CTA CARD - Overlaps the footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl">
        <div className="bg-gradient-to-r from-[#1e8b35] to-[#166e2a] rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#1e8b35]/20 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
              Ready to make a difference?
            </h2>
            <p className="text-white/90 text-lg font-light">
              Join our global partners in rebuilding South Sudan.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 bg-white text-[#1e8b35] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-xl transition-all whitespace-nowrap"
          >
            Get Involved Now
          </Link>

          {/* Decorative Elements */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-black/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl w-14 h-14 relative shadow-sm">
                <Image
                  src="/CCDA-logo.jpeg"
                  alt="CCDA Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight leading-none">
                  CCDA
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#1e8b35]">
                  South Sudan
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed font-light">
              A faith-based organization dedicated to restoring hope, dignity, and resilience through sustainable development and emergency relief.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Share2, MessageCircle, Send].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0f62a3] hover:border-[#0f62a3] hover:text-white transition-all"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-[#1e8b35] mb-6">
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
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-[#1e8b35] mb-6">
              Headquarters
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-4 items-start text-sm text-slate-400">
                <MapPin className="text-[#0f62a3] shrink-0 mt-0.5" size={18} />
                <span className="leading-relaxed">
                  Thongpiny, Block 3, Plot 631,<br />
                  Juba, South Sudan
                </span>
              </li>
              <li className="flex gap-4 items-center text-sm text-slate-400">
                <Phone className="text-[#0f62a3] shrink-0" size={18} />
                <span>+211 923 846 396</span>
              </li>
              <li className="flex gap-4 items-center text-sm text-slate-400">
                <Mail className="text-[#0f62a3] shrink-0" size={18} />
                <span>info@ccdasouthsudan.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-[0.2em] text-xs text-[#1e8b35] mb-6">
              Stay Updated
            </h4>
            <p className="text-sm text-slate-400 mb-4 font-light">
              Receive monthly updates on our field impact and community stories.
            </p>
            <form
              className="relative flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#0f62a3] transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 bg-[#0f62a3] text-white px-4 rounded-lg hover:bg-[#0c4e82] transition-colors flex items-center justify-center"
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
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}