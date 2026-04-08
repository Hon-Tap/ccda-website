"use client";

import React from "react";
import { motion } from "framer-motion";
import {  Mail, Award, ShieldCheck } from "lucide-react";
import Image from "next/image";

const leaders = [
  {
    id: 1,
    name: "Executive Director Name",
    role: "Executive Director",
    category: "Executive Team",
    bio: "Leading the strategic vision of CCDA to ensure sustainable development across South Sudan.",
    image: "/images/team/director.jpg", // Replace with actual paths
  },
  {
    id: 2,
    name: "Board Chair Name",
    role: "Chairperson, Board of Directors",
    category: "Board of Directors",
    bio: "Overseeing governance and ensuring the organization's adherence to Christian integrity.",
    image: "/images/team/board-chair.jpg",
  },
  {
    id: 3,
    name: "Operations Manager Name",
    role: "Operations Manager",
    category: "Executive Team",
    bio: "Managing daily resource allocation and field-level intervention logistics.",
    image: "/images/team/ops-manager.jpg",
  },
];

export default function LeadershipPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-[#0a2647] text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-primary-green font-bold tracking-widest uppercase text-xs mb-4 block">
              Our People
            </span>
            <h1 className="text-4xl md:text-6xl font-serif mb-6">Guided by Integrity</h1>
            <p className="text-blue-100 max-w-2xl mx-auto text-lg font-light">
              Our leadership team is committed to transparency, compliance, and delivering life-saving assistance to vulnerable communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Governance Values */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="text-primary-green mb-3" size={32} />
            <h4 className="font-bold text-[#0a2647]">Accountability</h4>
            <p className="text-xs text-slate-500">Adhering to international aid standards.</p>
          </div>
          <div className="flex flex-col items-center border-x border-slate-200">
            <Award className="text-primary-green mb-3" size={32} />
            <h4 className="font-bold text-[#0a2647]">Expertise</h4>
            <p className="text-xs text-slate-500">Technical teams specializing in WASH and Food Security.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-primary-green text-white flex items-center justify-center font-bold mb-3 text-xs">†</div>
            <h4 className="font-bold text-[#0a2647]">Faith-Driven</h4>
            <p className="text-xs text-slate-500">Rooted in Christian community development principles.</p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-serif text-[#0a2647] mb-2">Executive Leadership</h2>
            <div className="h-1 w-20 bg-primary-green"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {leaders.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-[400px] w-full overflow-hidden rounded-2xl mb-6">
                  <div className="absolute inset-0 bg-[#0a2647] opacity-0 group-hover:opacity-20 transition-opacity z-10" />
                  {/* Placeholder for Member Image */}
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                     <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                  </div>
                  
                  {/* Social Overlay */}
                  <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
                    
                    <button className="p-3 bg-white text-[#0a2647] rounded-full hover:bg-primary-green hover:text-white shadow-lg transition-colors">
                      <Mail size={18} />
                    </button>
                  </div>
                </div>

                <span className="text-primary-green font-bold text-xs uppercase tracking-widest">
                  {member.role}
                </span>
                <h3 className="text-2xl font-serif text-[#0a2647] mt-2 mb-3">
                  {member.name}
                </h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Invitation */}
      <section className="bg-[#0a2647] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white text-3xl font-serif mb-6">Organizational Governance</h2>
          <p className="text-blue-100 font-light mb-10">
            CCDA is directed by a supreme policy-making body responsible for strategic oversight, financial accountability, and ensuring legal compliance across all our South Sudanese operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-primary-green text-white font-bold rounded-full hover:shadow-xl hover:shadow-green-900 transition-all">
              View Governance Charter
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}