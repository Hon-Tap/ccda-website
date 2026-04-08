"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-[#0a2647] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif mb-4"
          >
            Get in Touch
          </motion.h1>
          <p className="text-blue-100 max-w-2xl font-light">
            Have questions about our programs or want to partner with us? Our team in Juba is ready to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif text-[#0a2647] mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 text-primary-green rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2647]">Our Office</h4>
                    <p className="text-slate-500">Juba, Central Equatoria, South Sudan</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 text-primary-green rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2647]">Phone</h4>
                    <p className="text-slate-500">+211 (0) 9XX XXX XXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-50 text-primary-green rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0a2647]">Email</h4>
                    <p className="text-slate-500">info@ccdasouthsudan.org</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-xl font-serif text-[#0a2647] mb-4 flex items-center gap-2">
                <Clock size={20} className="text-primary-green" />
                Office Hours
              </h3>
              <p className="text-slate-500 text-sm">Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className="text-slate-500 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0a2647]">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-green focus:ring-2 focus:ring-green-100 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#0a2647]">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-green focus:ring-2 focus:ring-green-100 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0a2647]">Subject</label>
                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 outline-none">
                  <option>General Inquiry</option>
                  <option>Partnership Proposal</option>
                  <option>Donation Question</option>
                  <option>Program Information</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#0a2647]">Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary-green focus:ring-2 focus:ring-green-100 outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-primary-green hover:bg-green-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-green-200">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </section>
    </main>
  );
}