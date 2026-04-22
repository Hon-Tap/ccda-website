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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

/* ---------------- Data ---------------- */

const programDetails = {
  health: {
    title: "Health",
    icon: Heart,
    image: "/img (1).jpeg",
    stat: "Health Facilities",
    headline:
      "Delivering life-saving clinical services to hard-to-reach rural communities.",
    overview:
      "Our health frameworks focus on reducing mortality and improving access to essential healthcare through mobile clinics, maternal health programs, and strengthened health facilities.",
    objectives: [
      "Improve access to essential healthcare.",
      "Train community health workers.",
      "Strengthen medical supply systems.",
    ],
  },

  wash: {
    title: "WASH Engineering",
    icon: Droplets,
    image: "/img (4).jpeg",
    stat: "Access to clean water",
    headline:
      "Providing safe water, sanitation, and hygiene services for communities.",
    overview:
      "We build and rehabilitate water systems, promote hygiene awareness, and establish community-led water management structures.",
    objectives: [
      "Drill and rehabilitate boreholes.",
      "Promote hygiene education.",
      "Train water management committees.",
    ],
  },

  education: {
    title: "Education Systems",
    icon: BookOpen,
    image: "/img (3).jpeg",
    stat: "Schools",
    headline:
      "Ensuring children and youth have access to safe and inclusive education.",
    overview:
      "Our programs support schools, provide learning materials, and train teachers to improve quality education in vulnerable communities.",
    objectives: [
      "Construct learning spaces.",
      "Provide education materials.",
      "Support teacher training.",
    ],
  },

  protection: {
    title: "Human Protection",
    icon: ShieldCheck,
    image: "/img (4).jpeg",
    stat: "Child-Friendly",
    headline:
      "Protecting vulnerable populations from harm and exploitation.",
    overview:
      "We provide child protection services, psychosocial support, and community awareness programs.",
    objectives: [
      "Operate child-friendly spaces.",
      "Provide psychosocial support.",
      "Promote protection awareness.",
    ],
  },

  "shelter-nfi": {
    title: "Shelter & NFIs",
    icon: Home,
    image: "/img (3).jpeg",
    stat: "Emergency Aid",
    headline:
      "Providing shelter and essential household items to displaced families.",
    overview:
      "We distribute emergency shelter kits and household items to restore dignity and safety.",
    objectives: [
      "Provide emergency shelter.",
      "Distribute household kits.",
      "Support displaced families.",
    ],
  },

  "food-security": {
    title: "Food Security",
    icon: Sprout,
    image: "/img (4).jpeg",
    stat: "Agri Support",
    headline:
      "Building resilient livelihoods through agriculture and food production.",
    overview:
      "We provide seeds, tools, and training to help communities grow food and sustain livelihoods.",
    objectives: [
      "Distribute seeds and tools.",
      "Train farmers.",
      "Support livelihood programs.",
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
    <main className="bg-[#f6f8fb] text-[#0b132b]">

      {/* HERO */}

      <section className="relative h-[65vh] min-h-[560px] flex items-center">

        <Image
          src={program.image}
          alt={program.title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0b132b]/65" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

          <Link
            href="/programs"
            className="inline-flex items-center gap-3 text-white/80 hover:text-[#1e8b35] mb-12"
          >
            <ArrowLeft size={18} />
            Back to Programs
          </Link>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-6 max-w-3xl"
          >

            <div className="flex items-center gap-4 text-[#1e8b35]">
              <program.icon size={28} />
              <span className="uppercase text-sm tracking-widest font-semibold">
                Program Area
              </span>
            </div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-6xl font-semibold text-white"
            >
              {program.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl text-white/90 font-light"
            >
              {program.headline}
            </motion.p>

          </motion.div>

        </div>

      </section>

      {/* METRIC */}

      <section className="-mt-16 px-6 relative z-20">

        <div className="max-w-6xl mx-auto">

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 flex justify-between items-center">

            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500 font-semibold mb-2">
                Key Impact
              </p>

              <h2 className="text-4xl font-semibold">
                {program.stat}
              </h2>
            </div>

            <div className="w-16 h-16 rounded-2xl bg-[#1e8b35]/15 flex items-center justify-center">
              <program.icon
                className="text-[#1e8b35]"
                size={30}
              />
            </div>

          </div>

        </div>

      </section>

      {/* CONTENT */}

      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-16">

            <div>
              <h2 className="text-3xl font-semibold mb-6">
                Program Overview
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed">
                {program.overview}
              </p>
            </div>

            {/* OBJECTIVES */}

            <div>

              <h2 className="text-3xl font-semibold mb-10">
                Strategic Objectives
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                {program.objectives.map((obj, i) => (
                  <div
                    key={i}
                    className="
                      p-8
                      rounded-2xl
                      border
                      border-slate-100
                      bg-white
                      hover:border-[#1e8b35]
                      hover:shadow-lg
                      transition
                    "
                  >

                    <CheckCircle2
                      className="text-[#1e8b35] mb-4"
                      size={26}
                    />

                    <p className="text-slate-600">
                      {obj}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>

          {/* SIDEBAR */}

          <div className="space-y-6">

            <div className="bg-[#0b132b] text-white p-10 rounded-3xl">

              <h3 className="text-2xl font-semibold mb-8">
                Compliance Standards
              </h3>

              <div className="space-y-5">

                {[
                  "UN Cluster Verified",
                  "Sphere Standard Aligned",
                  "Gender & Age Responsive",
                  "Do No Harm Protocol",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-[#1e8b35]"
                    />
                    {item}
                  </div>
                ))}

              </div>

            </div>

            <button className="
              w-full
              flex
              items-center
              justify-center
              gap-4
              p-6
              rounded-2xl
              bg-[#1e8b35]
              text-white
              font-semibold
              hover:bg-[#176d29]
              transition
              shadow-lg
            ">
              <FileText size={22} />
              Download Program Brief
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}