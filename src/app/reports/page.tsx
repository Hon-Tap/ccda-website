"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Search, ChevronRight, ArrowUpRight, FolderOpen } from "lucide-react";

// Replace this with your actual database call or fetch logic
export default function ReportsPage() {
  const [reports, setReports] = useState([]); // Database state
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  // Mock effect: In your actual app, this is where you fetch from your DB
  useEffect(() => {
    // Simulate DB fetch
    const fetchReports = async () => {
      // const data = await fetch('/api/reports');
      setReports([]); // Change to [] to test the Empty State design
      setLoading(false);
    };
    fetchReports();
  }, []);

  const categories = ["All", "Annual", "Financial", "Program"];

  const filteredReports = useMemo(() => {
    return reports.filter((r: any) => 
      (activeCat === "All" || r.category === activeCat) &&
      r.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, activeCat, reports]);

  return (
    <main className="bg-[#fcfdfd] text-[#0a2647] min-h-screen">
      
      {/* Header */}
      <section className="pt-32 pb-20 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-7xl md:text-8xl font-serif tracking-tighter mb-8">
            Archives.
          </motion.h1>
          <p className="text-xl md:text-2xl text-slate-500 font-serif italic max-w-xl">
            "Accountability is the foundation of the trust we build with the communities we serve."
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="sticky top-0 z-10 bg-[#fcfdfd]/80 backdrop-blur-md py-8 px-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-2">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] transition-all ${activeCat === cat ? "bg-[#0a2647] text-white" : "text-slate-400 hover:text-[#0a2647]"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-3 text-slate-400" size={16} />
            <input 
              placeholder="Filter archives..."
              className="w-full py-3 pl-12 pr-4 bg-transparent border-b border-slate-300 focus:border-[#0a2647] outline-none transition-all placeholder:text-slate-300"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Grid / Content */}
      <section className="py-24 px-6 min-h-[400px]">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-slate-400 text-center py-20 animate-pulse">Loading archives...</div>
          ) : filteredReports.length === 0 ? (
            /* Empty State Design */
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex flex-col items-center justify-center py-20 text-center space-y-6"
            >
              <div className="p-8 bg-slate-50 rounded-full">
                <FolderOpen size={48} className="text-slate-300" />
              </div>
              <h3 className="text-2xl font-serif">No reports found</h3>
              <p className="text-slate-500 max-w-sm">We currently don't have any documents matching your criteria. Please check back later or contact the office.</p>
            </motion.div>
          ) : (
            <AnimatePresence>
              {filteredReports.map((report: any) => (
                <motion.div 
                  key={report.id}
                  layout
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  className="group grid md:grid-cols-12 gap-8 py-12 border-b border-slate-200 items-center hover:bg-slate-50 transition-colors px-4 -mx-4"
                >
                  <div className="md:col-span-1"><FileText className="text-slate-300 group-hover:text-primary-green transition-colors" size={32} /></div>
                  <div className="md:col-span-5 space-y-2">
                    <h3 className="text-2xl font-serif">{report.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{report.description}</p>
                  </div>
                  <div className="md:col-span-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    {report.category} • {report.date}
                  </div>
                  <div className="md:col-span-3 flex justify-end">
                    <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] hover:text-primary-green transition-all">
                      Download {report.size} <ArrowUpRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          )}
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="py-24 bg-[#0a2647] text-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-serif">Need specialized documentation?</h2>
          <p className="text-blue-100 font-light">If you require historical audits or raw data not present in our public archives, please reach out directly.</p>
          <button className="inline-flex items-center gap-3 bg-primary-green px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-[#0a2647] transition-all">
            Request Access <ChevronRight size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}