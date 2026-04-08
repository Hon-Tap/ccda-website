"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Download, Search, Filter, ExternalLink, Calendar } from "lucide-react";

const reports = [
  {
    id: 1,
    title: "Annual Impact Report 2025",
    category: "Annual",
    date: "March 2026",
    size: "4.2 MB",
    description: "A comprehensive overview of our milestones in Food Security and WASH across South Sudan.",
  },
  {
    id: 2,
    title: "Quarterly Financial Audit - Q4",
    category: "Financial",
    date: "Jan 2026",
    size: "1.8 MB",
    description: "Detailed transparency report on resource allocation and donor fund management.",
  },
  {
    id: 3,
    title: "Education Initiative Assessment",
    category: "Program",
    date: "Nov 2025",
    size: "2.5 MB",
    description: "Evaluating the success of our school-rebuilding projects in Jonglei State.",
  },
  // Add more report objects here
];

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-[#0a2647] text-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Transparency & Accountability</h1>
            <p className="text-blue-100 max-w-2xl text-lg font-light">
              Access our latest program evaluations, financial statements, and annual reports as we work towards a resilient South Sudan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 px-6 -mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white p-4 rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input 
                type="text" 
                placeholder="Search reports by title or year..."
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-primary-green outline-none transition-all"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-slate-100 text-[#0a2647] font-semibold rounded-xl hover:bg-slate-200 transition-colors w-full md:w-auto">
              <Filter size={18} />
              All Categories
            </button>
          </div>
        </div>
      </section>

      {/* Reports Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports
              .filter(r => r.title.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-primary-green hover:shadow-2xl hover:shadow-green-100 transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-4 bg-green-50 text-primary-green rounded-2xl group-hover:bg-primary-green group-hover:text-white transition-colors">
                    <FileText size={28} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-slate-100 px-3 py-1 rounded-full text-slate-500">
                    {report.category}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-[#0a2647] mb-3 group-hover:text-primary-green transition-colors">
                  {report.title}
                </h3>
                <p className="text-slate-500 text-sm font-light mb-8 flex-grow">
                  {report.description}
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Calendar size={12} /> {report.date}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 mt-1">{report.size} • PDF</span>
                  </div>
                  <button className="flex items-center gap-2 text-primary-green font-bold text-sm hover:underline">
                    <Download size={16} />
                    Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Note */}
      <section className="pb-20 px-6 text-center">
        <div className="max-w-3xl mx-auto p-10 rounded-3xl bg-primary-green/5 border border-primary-green/10">
          <h4 className="text-[#0a2647] font-serif text-xl mb-4">Request Specific Data</h4>
          <p className="text-slate-600 text-sm mb-6">
            Looking for historical data or specific project audits not listed here? Our communications team can assist you with detailed documentation.
          </p>
          <button className="text-primary-green font-bold flex items-center gap-2 mx-auto hover:gap-4 transition-all">
            Contact Secretary General <ExternalLink size={16} />
          </button>
        </div>
      </section>
    </main>
  );
}