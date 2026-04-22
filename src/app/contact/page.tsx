"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck } from "lucide-react";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

export default function ContactPage() {
  const [isHuman, setIsHuman] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 font-sans">
      {/* --- HEADER SECTION --- */}
      <section className="pt-40 pb-24 bg-[#0b132b] text-white px-6 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1e8b35]/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="space-y-6">
            <motion.h4 variants={fadeUp} className="text-[#1e8b35] font-bold uppercase tracking-[0.2em] text-xs">
              Reach Out
            </motion.h4>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-serif tracking-tight">
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 max-w-2xl mx-auto font-light text-lg">
              Have questions about our programs or want to partner with us? Our team in Juba is ready to assist you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTACT CONTENT --- */}
      <section className="py-24 px-6 -mt-10 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: Contact Information */}
          <motion.div 
            initial="hidden" whileInView="visible" variants={staggerContainer} viewport={{ once: true }}
            className="lg:col-span-5 space-y-10"
          >
            <div>
              <h2 className="text-3xl font-serif text-[#0b132b] mb-8">Contact Information</h2>
              <div className="space-y-8">
                {/* Office */}
                <motion.div variants={fadeUp} className="flex items-start gap-5 group">
                  <div className="p-4 bg-white shadow-sm border border-slate-100 rounded-2xl text-[#1e8b35] group-hover:bg-[#1e8b35] group-hover:text-white transition-colors duration-300">
                    <MapPin size={24} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-[#0b132b] text-lg">Our Office</h4>
                    <p className="text-slate-500 font-light mt-1">Juba, Central Equatoria,<br/>South Sudan</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div variants={fadeUp} className="flex items-start gap-5 group">
                  <div className="p-4 bg-white shadow-sm border border-slate-100 rounded-2xl text-[#1e8b35] group-hover:bg-[#1e8b35] group-hover:text-white transition-colors duration-300">
                    <Phone size={24} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-[#0b132b] text-lg">Phone</h4>
                    <p className="text-slate-500 font-light mt-1">+211 923 846 396</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div variants={fadeUp} className="flex items-start gap-5 group">
                  <div className="p-4 bg-white shadow-sm border border-slate-100 rounded-2xl text-[#1e8b35] group-hover:bg-[#1e8b35] group-hover:text-white transition-colors duration-300">
                    <Mail size={24} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h4 className="font-bold text-[#0b132b] text-lg">Email</h4>
                    <p className="text-slate-500 font-light mt-1">info@ccda-ss.org</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Office Hours Card */}
            <motion.div variants={fadeUp} className="p-8 bg-white rounded-[2rem] border border-slate-200 shadow-sm">
              <h3 className="text-xl font-serif text-[#0b132b] mb-4 flex items-center gap-3">
                <Clock size={20} className="text-[#1e8b35]" />
                Office Hours
              </h3>
              <ul className="space-y-2 text-slate-500 font-light">
                <li className="flex justify-between"><span>Monday - Friday</span> <span className="font-medium text-slate-700">8:00 AM - 5:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span> <span className="font-medium text-slate-700">9:00 AM - 1:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span className="font-medium text-[#1e8b35]">Closed</span></li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#0b132b]">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#1e8b35] focus:ring-4 focus:ring-[#1e8b35]/10 outline-none transition-all font-light" 
                      placeholder="Enter your full name" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#0b132b]">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#1e8b35] focus:ring-4 focus:ring-[#1e8b35]/10 outline-none transition-all font-light" 
                      placeholder="Enter your email address" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0b132b]">Subject</label>
                  <select className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#1e8b35] focus:ring-4 focus:ring-[#1e8b35]/10 outline-none transition-all font-light appearance-none">
                    <option value="" disabled selected>Select an inquiry type...</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Proposal</option>
                    <option value="donation">Donation Question</option>
                    <option value="program">Program Information</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0b132b]">Message</label>
                  <textarea 
                    rows={5} 
                    className="w-full px-5 py-4 bg-slate-50 rounded-2xl border border-slate-200 focus:bg-white focus:border-[#1e8b35] focus:ring-4 focus:ring-[#1e8b35]/10 outline-none transition-all font-light resize-none" 
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                {/* Modern CAPTCHA Mock */}
                <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      id="captcha" 
                      checked={isHuman}
                      onChange={() => setIsHuman(!isHuman)}
                      className="w-5 h-5 accent-[#1e8b35] rounded cursor-pointer" 
                    />
                    <label htmlFor="captcha" className="text-sm font-medium text-slate-700 cursor-pointer select-none">
                      I am human
                    </label>
                  </div>
                  <div className="flex flex-col items-end">
                    <ShieldCheck className={isHuman ? "text-[#1e8b35]" : "text-slate-400"} size={24} strokeWidth={1.5} />
                    <span className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">Secure</span>
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={!isHuman}
                  className={`w-full font-bold py-4 rounded-full flex items-center justify-center gap-2 transition-all transform tracking-widest uppercase text-xs shadow-lg ${
                    isHuman 
                      ? "bg-[#0b132b] hover:bg-[#1e8b35] text-white hover:shadow-xl hover:-translate-y-0.5 active:scale-95" 
                      : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                  }`}
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}