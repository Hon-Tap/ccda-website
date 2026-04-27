"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, Phone, MapPin, Send, Clock, Loader2, 
  CheckCircle2, AlertCircle, ChevronRight, Globe,
  MessageSquare, ShieldCheck
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

/* --- ANIMATION VARIANTS --- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
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

  // Fallback to ensure the app doesn't crash if env is missing
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captchaToken) {
      alert("Please complete the security check.");
      return;
    }

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
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-white selection:bg-[#1e8b35]/30">
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-40 pb-24 bg-[#0b132b] overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#1e8b35] opacity-20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-blue-600 opacity-10 blur-[100px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants} 
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1e8b35] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1e8b35]"></span>
              </span>
              <span className="text-white/80 text-[10px] uppercase tracking-[0.4em] font-bold">Get In Touch</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-serif text-white mb-8 leading-[1.1]">
              Connecting for <br />
              <span className="italic text-[#1e8b35]">South Sudan.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Have questions about our programs or want to support our mission? Our team is dedicated to providing the transparency and answers you need.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT GRID --- */}
      <section className="py-24 px-6 bg-[#fcfcfc]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT: INFO CARDS */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-2xl font-serif text-[#0b132b] mb-8">Contact Details</h2>
              
              {[
                { icon: Phone, label: "Phone", val: "+211 923 846 396", desc: "Mon-Fri, 8am - 5pm", color: "text-blue-600 bg-blue-50" },
                { icon: Mail, label: "Email", val: "info@ccda-ss.org", desc: "Online support 24/7", color: "text-[#1e8b35] bg-green-50" },
                { icon: MapPin, label: "Office", val: "Juba, Central Equatoria", desc: "South Sudan HQ", color: "text-orange-600 bg-orange-50" }
              ].map((item, i) => (
                <motion.div 
                  whileHover={{ y: -5 }}
                  key={i} 
                  className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm flex gap-5 items-center group"
                >
                  <div className={`p-4 rounded-2xl ${item.color} transition-colors`}>
                    <item.icon size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-1">{item.label}</p>
                    <p className="text-[#0b132b] font-bold group-hover:text-[#1e8b35] transition-colors">{item.val}</p>
                    <p className="text-xs text-slate-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}

              <div className="p-8 bg-[#0b132b] rounded-[2.5rem] text-white mt-10 relative overflow-hidden">
                <Clock className="absolute -right-4 -bottom-4 w-32 h-32 text-white/5 rotate-12" />
                <h4 className="text-lg font-serif mb-4">Availability</h4>
                <div className="space-y-3 relative z-10">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Weekdays</span>
                    <span>08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Saturdays</span>
                    <span>09:00 - 13:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: MODERN FORM */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.06)] border border-slate-100">
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <SuccessState onReset={() => setStatus("idle")} />
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-10">
  {/* Name & Email Group */}
  <div className="grid md:grid-cols-2 gap-10">
    <FloatingInput 
      label="Full Name" 
      value={formData.name} 
      // Explicitly typed 'v' as string to resolve TS7006
      onChange={(v: string) => setFormData({ ...formData, name: v })} 
    />
    <FloatingInput 
      label="Email Address" 
      type="email" 
      value={formData.email} 
      // Explicitly typed 'v' as string to resolve TS7006
      onChange={(v: string) => setFormData({ ...formData, email: v })} 
    />
  </div>

  {/* Subject Selection */}
  <div className="space-y-3">
    <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">
      Topic of Interest
    </label>
    <select 
      value={formData.subject}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
        setFormData({ ...formData, subject: e.target.value })
      }
      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#1e8b35]/20 transition-all font-medium text-slate-700 appearance-none cursor-pointer"
    >
      <option value="general">General Inquiry</option>
      <option value="partnership">Partnership Proposal</option>
      <option value="donation">Donation & Support</option>
      <option value="program">Program Information</option>
    </select>
  </div>

  {/* Message Area */}
  <div className="space-y-3">
    <label className="text-[10px] uppercase tracking-widest font-black text-slate-400 ml-1">
      Message
    </label>
    <textarea 
      required
      rows={4}
      value={formData.message}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => 
        setFormData({ ...formData, message: e.target.value })
      }
      placeholder="How can we help you?"
      className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#1e8b35]/20 transition-all resize-none font-light"
    />
  </div>

  {/* Security Verification Box */}
  <div className="bg-slate-50 p-6 rounded-3xl border border-dashed border-slate-200 flex flex-col items-center">
    <div className="flex items-center gap-2 mb-4 text-slate-400">
      <ShieldCheck size={16} />
      <span className="text-[10px] uppercase font-bold tracking-widest">Security Verification</span>
    </div>
    <div className="scale-90 md:scale-100 origin-center">
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={siteKey}
        onChange={(token: string | null) => setCaptchaToken(token)}
      />
    </div>
  </div>

  {/* Submit Button */}
  <button 
    type="submit"
    disabled={status === "loading" || !captchaToken}
    className="w-full group relative overflow-hidden bg-[#0b132b] text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs transition-all hover:bg-[#1e8b35] disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-slate-200"
  >
    <span className="relative z-10 flex items-center justify-center gap-3">
      {status === "loading" ? (
        <>
          <Loader2 className="animate-spin" size={18} />
          Processing...
        </>
      ) : (
        <>
          Dispatch Message
          <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </>
      )}
    </span>
  </button>

  {/* Enhanced Error Feedback */}
  <AnimatePresence>
    {status === "error" && (
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="p-4 bg-red-50 rounded-2xl border border-red-100 flex items-center justify-center gap-3 text-red-600 text-sm font-medium"
      >
        <AlertCircle size={18} /> 
        <span>Transmission failed. Please verify your connection and try again.</span>
      </motion.div>
    )}
  </AnimatePresence>
</form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- UI COMPONENTS --- */

function FloatingInput({ label, value, onChange, type = "text" }: any) {
  return (
    <div className="relative group">
      <input 
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" "
        className="peer w-full bg-transparent border-b-2 border-slate-200 py-3 outline-none focus:border-[#1e8b35] transition-all font-medium text-[#0b132b]"
      />
      <label className="absolute left-0 top-3 text-slate-400 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[10px] peer-focus:uppercase peer-focus:font-bold peer-focus:text-[#1e8b35] peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px]">
        {label}
      </label>
    </div>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-10"
    >
      <div className="w-24 h-24 bg-green-50 text-[#1e8b35] rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
        <CheckCircle2 size={40} />
      </div>
      <h3 className="text-3xl font-serif text-[#0b132b] mb-4">Message Received</h3>
      <p className="text-slate-500 max-w-sm mx-auto mb-10">
        Your inquiry has been routed to the correct department. We usually respond within 24 business hours.
      </p>
      <button 
        onClick={onReset}
        className="text-[#1e8b35] font-bold uppercase tracking-widest text-[10px] border-b-2 border-[#1e8b35] pb-1 hover:text-[#0b132b] hover:border-[#0b132b] transition-all"
      >
        Send another inquiry
      </button>
    </motion.div>
  );
}