"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Share2,
  Send,
  MessageCircle
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a2647] pt-32 pb-12 text-white mt-20">
      
      {/* IMPACT CTA CARD - Overlaps the footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-5xl">
        <div className="bg-primary-green rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">
              Ready to make a difference?
            </h2>
            <p className="text-white/80 font-medium">
              Join 50+ partners rebuilding South Sudan.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 bg-[#0a2647] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform"
          >
            Get Involved Now
          </Link>

          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1.5 rounded-xl w-12 h-12 relative">
                <Image
                  src="/CCDA-logo.jpeg"
                  alt="Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase">
                CCDA
              </span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed">
              A faith-based organization dedicated to restoring hope through
              sustainable development and emergency relief in South Sudan.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[Share2, MessageCircle, Send].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-green hover:text-white transition-all"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-primary-green mb-8">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                "Our History",
                "Thematic Areas",
                "Field Projects",
                "Annual Reports",
                "Careers",
              ].map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-slate-400 hover:text-white text-sm font-bold transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-primary-green mb-8">
              Headquarters
            </h4>

            <ul className="space-y-6">
              <li className="flex gap-4 items-start text-sm text-slate-400">
                <MapPin className="text-primary-green shrink-0" size={20} />
                <span>
                  Thongpiny, Block 3, Plot 631,
                  <br />
                  Juba, South Sudan
                </span>
              </li>

              <li className="flex gap-4 items-center text-sm text-slate-400">
                <Phone className="text-primary-green shrink-0" size={20} />
                <span>+211 923 846 396</span>
              </li>

              <li className="flex gap-4 items-center text-sm text-slate-400">
                <Mail className="text-primary-green shrink-0" size={20} />
                <span>info@ccdasouthsudan.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs text-primary-green mb-8">
              The Newsletter
            </h4>

            <p className="text-xs text-slate-500 mb-4 font-bold">
              Get monthly impact updates.
            </p>

            <form
              className="relative"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-primary-green transition-colors"
              />

              <button className="absolute right-2 top-2 bottom-2 bg-primary-green text-white px-4 rounded-lg hover:bg-green-600 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <p>
            © {new Date().getFullYear()} CCDA South Sudan. All rights reserved.
          </p>

          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}