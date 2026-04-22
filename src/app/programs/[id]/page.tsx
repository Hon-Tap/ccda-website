"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Heart,
  Droplets,
  BookOpen,
  ShieldCheck,
  Home,
  Sprout,
  ArrowLeft,
  CheckCircle2,
  FileText,
} from "lucide-react";

/* ---------------- Animation ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

/* ---------------- Data ---------------- */

const programDetails = {
  health: {
    title: "Health",
    icon: Heart,
    image: "/img (1).jpeg",
    stat: "Clinical Excellence",
    headline: "Improving Access to Essential and Life-Saving Health Services",
    overview:
      "CCDA bridges healthcare gaps by delivering accessible, community-centered interventions aimed at reducing preventable illness and mortality. We prioritize vulnerable populations including women, children, and persons with disabilities, ensuring equitable access to care without discrimination through integrated, evidence-based approaches.",
    objectives: [
      "Support primary healthcare facilities and outreach.",
      "Strengthen maternal, newborn, and child health (MNCH).",
      "Improve early diagnosis and treatment of illnesses.",
      "Strengthen emergency response and referral systems.",
    ],
  },

  wash: {
    title: "WASH",
    icon: Droplets,
    image: "/borehole.jpeg",
    stat: "Clean Water Access",
    headline: "Promoting Healthy Communities Through Safe Water and Sanitation",
    overview:
      "Our WASH programming focuses on sustainability by establishing local water management committees and promoting hygiene standards. By combining infrastructure development with community education, we ensure interventions continue to benefit communities long after project implementation, reducing disease burden and improving quality of life.",
    objectives: [
      "Rehabilitate boreholes, wells, and water systems.",
      "Eliminate open defecation through latrine construction.",
      "Train local water management committees.",
      "Promote handwashing and safe water storage practices.",
    ],
  },

  education: {
    title: "Education",
    icon: BookOpen,
    image: "/CCDA-logo.jpeg",
    stat: "Inclusive Learning",
    headline: "Expanding Access to Learning and Empowering Communities",
    overview:
      "Education is a fundamental pillar for sustainable development and peace. CCDA works to improve access to inclusive and equitable education for underserved populations across South Sudan through community-based initiatives, awareness programs, and capacity-building to empower individuals with knowledge and skills.",
    objectives: [
      "Increase access to quality education in rural areas.",
      "Develop skills necessary to build a better future.",
      "Support inclusive learning for vulnerable children.",
      "Improve local community-based education frameworks.",
    ],
  },

  protection: {
    title: "Protection",
    icon: ShieldCheck,
    image: "/health.jpeg",
    stat: "Dignity & Rights",
    headline: "Safeguarding Dignity and Protecting Vulnerable Communities",
    overview:
      "CCDA promotes human dignity, safety, and social justice by addressing the needs of populations exposed to violence, exploitation, and exclusion. Our interventions aim to strengthen community structures, raise awareness on human rights, and provide support mechanisms that help individuals live in safe, inclusive, and resilient communities.",
    objectives: [
      "Strengthen community-based protection structures.",
      "Raise awareness on human rights and social justice.",
      "Provide support for survivors of violence and exclusion.",
      "Establish safe environments for women and children.",
    ],
  },

  "shelter-nfi": {
    title: "Shelter & NFIs",
    icon: Home,
    image: "/floodedvillage.jpeg",
    stat: "Emergency Relief",
    headline: "Providing Emergency Shelter and Safe Living Conditions",
    overview:
      "In humanitarian crises, CCDA supports vulnerable communities by providing emergency shelter assistance and improving living conditions. Our interventions focus on restoring safety, privacy, and dignity for families who have lost their homes or are living in precarious conditions due to conflict, displacement, or natural disasters.",
    objectives: [
      "Provide temporary and transitional shelter solutions.",
      "Distribute essential non-food items (NFIs).",
      "Restore safety and privacy for displaced families.",
      "Support households affected by environmental shocks.",
    ],
  },

  "food-security": {
    title: "Food Security",
    icon: Sprout,
    image: "/Fangak4.jpg",
    stat: "Livelihood Resilience",
    headline: "Building Resilient Livelihoods Through Agriculture",
    overview:
      "CCDA addresses food insecurity by supporting livelihood initiatives that strengthen the ability of communities to sustain themselves. Through targeted interventions and community-based approaches, we help vulnerable households restore productive activities and build long-term economic resilience to future shocks.",
    objectives: [
      "Enhance food production and household incomes.",
      "Support traditional and innovative livelihood initiatives.",
      "Empower communities with agricultural skills and tools.",
      "Reduce vulnerability to economic and climate shocks.",
    ],
  },
};

/* ---------------- Page ---------------- */

export default function ProgramDetailPage() {
  const params = useParams();
  const id = (params?.id as string) || "health";

  const program =
    programDetails[id as keyof typeof programDetails] ||
    programDetails.health;

  return (
    <main className="bg-[#fcfcfc] text-[#0b132b]">
      {/* HERO SECTION */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          priority
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b132b] via-[#0b132b]/80 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-white/70 hover:text-emerald-400 transition-colors mb-12 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Back to Programs
          </Link>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6 max-w-2xl"
          >
            <div className="flex items-center gap-3 text-emerald-500">
              <program.icon size={24} />
              <span className="uppercase text-[10px] tracking-[0.3em] font-black">
                Operational Sector
              </span>
            </div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-serif text-white leading-[1.1]"
            >
              {program.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/80 font-light leading-relaxed"
            >
              {program.headline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* METRIC CARD */}
      <section className="-mt-12 px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl shadow-emerald-900/5 border border-slate-100 flex justify-between items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-1">
                Strategic Pillar
              </p>
              <h2 className="text-2xl md:text-3xl font-serif text-[#0b132b]">
                {program.stat}
              </h2>
            </div>
            <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center">
              <program.icon className="text-emerald-600" size={28} />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT GRID */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-16">
            <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
              <h2 className="text-sm uppercase tracking-[0.2em] font-black text-emerald-600 mb-6">
                Program Framework
              </h2>
              <p className="text-lg text-slate-500 font-light leading-relaxed">
                {program.overview}
              </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeUp}>
              <h2 className="text-sm uppercase tracking-[0.2em] font-black text-emerald-600 mb-10">
                Strategic Objectives
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {program.objectives.map((obj, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-slate-100 bg-white hover:border-emerald-200 transition-all group"
                  >
                    <CheckCircle2
                      className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform"
                      size={20}
                    />
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">
            <div className="bg-[#0b132b] text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-lg font-serif mb-6 border-b border-white/10 pb-4">
                Compliance Standards
              </h3>
              <div className="space-y-4">
                {[
                  "UN Cluster Verified",
                  "Sphere Standard Aligned",
                  "Gender & Age Responsive",
                  "Do No Harm Protocol",
                  "Accountability Framework",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs text-slate-400 font-medium">
                    <CheckCircle2 size={14} className="text-emerald-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 p-5 rounded-xl bg-emerald-700 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-800 transition-all shadow-lg shadow-emerald-900/10">
              <FileText size={18} />
              Download Sector Brief
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}