"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  Loader2, 
  CheckCircle2, 
  AlertCircle,
  ChevronRight
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

/* --- ANIMATION VARIANTS --- */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token: captchaToken }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "general", message: "" });
        recaptchaRef.current?.reset();
        setCaptchaToken(null);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

console.log("Site Key Check:", process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans">
      {/* --- HERO HEADER --- */}
      <section className="relative pt-44 pb-32 bg-[#0b132b] text-white px-6 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1e8b35]/10 rounded-full blur-[140px] -mr-40 -mt-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer} 
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <span className="h-px w-8 bg-[#1e8b35]" />
              <span className="text-[#1e8b35] font-bold uppercase tracking-[0.3em] text-[10px]">Contact Us</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-serif leading-tight mb-8">
              Let's Start a <span className="text-[#1e8b35]">Conversation.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              Whether you're looking to partner, donate, or simply learn more about our work in South Sudan, our team is here to listen.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-20 px-6 relative z-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Side: Contact Information */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            variants={staggerContainer} 
            viewport={{ once: true }} 
            className="lg:col-span-5 space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif text-[#0b132b] mb-10 flex items-center gap-4">
                Reach Information
                <div className="h-px flex-1 bg-slate-200" />
              </h2>
              
              <div className="space-y-10">
                {[
                  { 
                    icon: MapPin, 
                    title: "Our Headquarters", 
                    detail: "Juba, Central Equatoria\nSouth Sudan", 
                    color: "bg-blue-50 text-blue-600" 
                  },
                  { 
                    icon: Phone, 
                    title: "Call Us Directly", 
                    detail: "+211 923 846 396", 
                    color: "bg-green-50 text-[#1e8b35]" 
                  },
                  { 
                    icon: Mail, 
                    title: "Email Support", 
                    detail: "info@ccda-ss.org", 
                    color: "bg-orange-50 text-orange-600" 
                  }
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-6 group">
                    <div className={`p-4 rounded-2xl transition-all duration-300 group-hover:scale-110 ${item.color}`}>
                      <item.icon size={26} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0b132b] text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 font-light leading-relaxed whitespace-pre-line">{item.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Office Hours Card */}
            <motion.div 
              variants={fadeUp} 
              className="p-8 bg-white rounded-3xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-xl font-serif text-[#0b132b] mb-6 flex items-center gap-3">
                <Clock size={20} className="text-[#1e8b35]" /> Office Hours
              </h3>
              <div className="space-y-4">
                {[
                  { day: "Mon - Fri", time: "8:00 AM - 5:00 PM" },
                  { day: "Saturday", time: "9:00 AM - 1:00 PM" },
                  { day: "Sunday", time: "Closed", special: true }
                ].map((schedule, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm border-b border-slate-50 pb-3 last:border-0">
                    <span className="text-slate-500">{schedule.day}</span>
                    <span className={`font-semibold ${schedule.special ? 'text-[#1e8b35]' : 'text-slate-700'}`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Interactive Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-slate-50 relative">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-16 space-y-6"
                  >
                    <div className="relative mx-auto w-24 h-24">
                       <div className="absolute inset-0 bg-green-100 rounded-full animate-ping opacity-20" />
                       <div className="relative bg-green-500 text-white w-24 h-24 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
                        <CheckCircle2 size={48} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-serif text-[#0b132b]">Message Sent Successfully</h3>
                      <p className="text-slate-500 max-w-xs mx-auto">Thank you for reaching out. A team member will follow up with you shortly.</p>
                    </div>
                    <button 
                      onClick={() => setStatus("idle")} 
                      className="inline-flex items-center gap-2 text-[#1e8b35] font-bold hover:gap-3 transition-all mt-4"
                    >
                      Send another message <ChevronRight size={18} />
                    </button>
                  </motion.div>
                ) : (
                  <form className="space-y-8" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-[#0b132b] uppercase tracking-wider ml-1">Full Name</label>
                        <input 
                          required 
                          type="text" 
                          value={formData.name} 
                          onChange={(e) => setFormData({...formData, name: e.target.value})} 
                          className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-[#1e8b35] focus:bg-white focus:ring-4 focus:ring-green-50 outline-none transition-all duration-300 font-light" 
                          placeholder="Your Name" 
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-[#0b132b] uppercase tracking-wider ml-1">Email Address</label>
                        <input 
                          required 
                          type="email" 
                          value={formData.email} 
                          onChange={(e) => setFormData({...formData, email: e.target.value})} 
                          className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-[#1e8b35] focus:bg-white focus:ring-4 focus:ring-green-50 outline-none transition-all duration-300 font-light" 
                          placeholder="hello@company.com" 
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-[#0b132b] uppercase tracking-wider ml-1">Subject of Inquiry</label>
                      <div className="relative">
                        <select 
                          value={formData.subject} 
                          onChange={(e) => setFormData({...formData, subject: e.target.value})} 
                          className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-[#1e8b35] focus:bg-white outline-none transition-all duration-300 font-light appearance-none"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="partnership">Partnership Proposal</option>
                          <option value="donation">Donation & Support</option>
                          <option value="program">Program Information</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ChevronRight size={18} className="rotate-90" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-bold text-[#0b132b] uppercase tracking-wider ml-1">Your Message</label>
                      <textarea 
                        required 
                        rows={5} 
                        value={formData.message} 
                        onChange={(e) => setFormData({...formData, message: e.target.value})} 
                        className="w-full px-6 py-4 bg-slate-50 rounded-2xl border border-transparent focus:border-[#1e8b35] focus:bg-white focus:ring-4 focus:ring-green-50 outline-none transition-all duration-300 font-light resize-none" 
                        placeholder="Tell us how we can help..." 
                      />
                    </div>

                    {/* Security Verification */}
                    <div className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-dashed border-slate-200 rounded-3xl overflow-hidden">
                      {siteKey ? (
                        <div className="scale-90 md:scale-100">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={siteKey}
                            onChange={(token) => setCaptchaToken(token)}
                          />
                        </div>
                      ) : (
                        <div className="text-red-500 text-[10px] flex items-center gap-2 uppercase tracking-tighter">
                          <AlertCircle size={14} /> Configuration Error: Missing ReCAPTCHA Site Key
                        </div>
                      )}
                    </div>

                    <button 
                      type="submit"
                      disabled={status === "loading" || !captchaToken}
                      className="w-full py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-500 group relative overflow-hidden disabled:cursor-not-allowed"
                    >
                      <div className={`absolute inset-0 transition-all duration-500 ${!captchaToken ? 'bg-slate-200' : 'bg-[#0b132b] group-hover:bg-[#1e8b35]'}`} />
                      
                      <span className={`relative z-10 font-bold uppercase tracking-[0.2em] text-xs ${!captchaToken ? 'text-slate-400' : 'text-white'}`}>
                        {status === "loading" ? "Processing..." : "Send Inquiry"}
                      </span>
                      
                      {status === "loading" ? (
                        <Loader2 className="animate-spin relative z-10 text-white" size={18} />
                      ) : (
                        <Send size={16} className={`relative z-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${!captchaToken ? 'text-slate-400' : 'text-white'}`} />
                      )}
                    </button>
                    
                    {status === "error" && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        className="flex items-center justify-center gap-2 text-red-500 text-sm font-medium"
                      >
                        <AlertCircle size={16} /> 
                        Transmission failed. Please try again or email us directly.
                      </motion.div>
                    )}
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}