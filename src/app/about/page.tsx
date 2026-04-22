"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  ShieldCheck,
  Users,
  HandHelping,
  Globe,
  Award,
} from "lucide-react";

/* -------------------- ANIMATION SYSTEM -------------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  return (
    <main className="relative bg-[#f6f8fb] text-slate-900 overflow-x-hidden font-[Inter]">

      {/* -------------------- HERO (NO SMOKE / CLEAN VISUAL) -------------------- */}

      <section className="relative h-[72vh] min-h-[620px] flex items-center justify-center overflow-hidden bg-[#0b132b]">

        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0"
        >
          <Image
            src="/health.jpeg"
            alt="Humanitarian Work"
            fill
            priority
            className="object-cover opacity-90"
          />
        </motion.div>

        {/* subtle overlay only */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b132b]/70 via-[#0b132b]/40 to-[#0b132b]/80" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block px-6 py-2 bg-[#1e8b35]/15 text-[#1e8b35] rounded-full text-xs font-semibold tracking-widest uppercase"
            >
              Established 2016
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-semibold text-white leading-tight"
            >
              About Our Organization
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 font-light"
            >
              Strengthening communities, restoring dignity, and building
              resilience through sustainable humanitarian action across South
              Sudan.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* -------------------- ORGANIZATIONAL PROFILE NOTE -------------------- */}

      <section className="relative z-20 -mt-28 px-6 pb-28">

        <div className="max-w-4xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              bg-white
              rounded-[2.5rem]
              p-12 md:p-20
              shadow-[0_35px_90px_-20px_rgba(0,0,0,0.08)]
              border border-slate-100
            "
          >

            <div className="flex items-center gap-4 mb-10">
              <div className="h-[2px] w-14 bg-[#1e8b35]" />
              <h2 className="text-sm font-bold uppercase tracking-widest text-[#0b132b]">
                Who We Are
              </h2>
            </div>

            <div className="space-y-8 text-lg md:text-xl text-slate-600 leading-relaxed font-light font-[Georgia]">

              <p className="text-2xl md:text-3xl text-[#0b132b] font-semibold leading-snug">
                The Christian Community Development Agency (CCDA – South Sudan)
                is a faith-based, non-profit, and non-political humanitarian
                organization.
              </p>

              <p>
                Established on Christian principles of compassion, integrity,
                and service to humanity, CCDA exists to restore dignity,
                strengthen resilience, and promote sustainable development among
                populations affected by poverty, displacement, disasters, and
                social instability.
              </p>

              <p>
                Operating in accordance with the South Sudan NGOs Act 2016 and
                guided by international humanitarian principles, we deliver
                life-saving assistance while investing in long-term community
                empowerment. Our work spans health services, WASH, education,
                protection, and food security.
              </p>

              <div className="py-8 border-y border-slate-100 my-10">

                <p className="text-[#0b132b] font-medium italic">
                  “At CCDA, we believe humanitarian response must go beyond
                  relief—it must empower individuals and communities to rebuild
                  their lives with dignity and hope.”
                </p>

              </div>

              <p>
                We work in close partnership with local communities, churches,
                and civil authorities to ensure coordinated and accountable
                interventions. Our approach emphasizes community participation
                and evidence-based planning to ensure assistance is both
                impactful and sustainable.
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* -------------------- MISSION & VISION -------------------- */}

      <section className="py-28 bg-gradient-to-b from-white to-[#eef2f7]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Mission */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                relative
                p-12
                rounded-[2rem]
                bg-white
                border
                border-slate-100
                shadow-lg
                hover:shadow-xl
                transition
              "
            >

              <div className="w-16 h-16 rounded-2xl bg-[#1e8b35]/15 flex items-center justify-center mb-8">
                <Target className="text-[#1e8b35]" size={30} />
              </div>

              <h3 className="text-3xl font-semibold text-[#0b132b] mb-6">
                Our Mission
              </h3>

              <p className="text-slate-600 leading-relaxed text-lg font-light">
                To demonstrate Christ’s love through compassionate humanitarian
                action by providing timely relief, promoting human dignity, and
                empowering vulnerable communities to achieve resilience,
                self-reliance, and sustainable development.
              </p>

            </motion.div>

            {/* Vision */}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                relative
                p-12
                rounded-[2rem]
                bg-[#0b132b]
                text-white
                shadow-xl
              "
            >

              <div className="w-16 h-16 rounded-2xl bg-[#1e8b35]/30 flex items-center justify-center mb-8">
                <Eye size={30} />
              </div>

              <h3 className="text-3xl font-semibold mb-6">
                Our Vision
              </h3>

              <p className="text-white/90 leading-relaxed text-lg font-light">
                To foster a peaceful and resilient South Sudan where
                conflict-affected and vulnerable communities live with dignity,
                hope, and equal access to humanitarian assistance and
                opportunities for sustainable growth.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* -------------------- CORE VALUES -------------------- */}

      <section className="py-32 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20 space-y-4">

            <h2 className="text-4xl md:text-5xl font-semibold text-[#0b132b]">
              Our Core Values
            </h2>

            <p className="text-slate-500 max-w-2xl mx-auto">
              Principles that define how we serve communities and deliver
              humanitarian assistance.
            </p>

          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              gap-8
            "
          >

            {values.map((v) => (
              <motion.div
                key={v.label}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="
                  group
                  p-8
                  rounded-[1.8rem]
                  border
                  border-slate-100
                  bg-gradient-to-b
                  from-white
                  to-[#f8fafc]
                  hover:border-[#1e8b35]
                  hover:shadow-lg
                  transition
                "
              >

                <div className="mb-6 text-[#1e8b35] group-hover:scale-110 transition">
                  <v.icon size={28} strokeWidth={1.5} />
                </div>

                <h4 className="text-lg font-semibold text-[#0b132b] mb-2">
                  {v.label}
                </h4>

                <p className="text-sm text-slate-500 leading-relaxed">
                  {v.desc}
                </p>

              </motion.div>
            ))}

          </motion.div>

        </div>

      </section>

      {/* -------------------- IMPACT VISUAL BREAK -------------------- */}

      <section className="relative h-[420px] overflow-hidden">

        <Image
          src="/borehole.jpeg"
          alt="Community Development"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0b132b]/55" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              text-2xl
              md:text-4xl
              font-semibold
              text-white
              max-w-4xl
              leading-snug
            "
          >
            Upholding human rights and building resilient communities across
            South Sudan.
          </motion.p>

        </div>

      </section>

    </main>
  );
}

/* -------------------- VALUES -------------------- */

const values = [
  {
    label: "Accountability",
    icon: ShieldCheck,
    desc: "We take full responsibility for our actions and results.",
  },
  {
    label: "Integrity",
    icon: Award,
    desc: "Operating with honesty and ethical leadership.",
  },
  {
    label: "Teamwork",
    icon: Users,
    desc: "Working collaboratively with communities and partners.",
  },
  {
    label: "Impartiality",
    icon: Globe,
    desc: "Serving all people without discrimination.",
  },
  {
    label: "Humanity",
    icon: Heart,
    desc: "Protecting life and dignity in every intervention.",
  },
  {
    label: "Compassion",
    icon: HandHelping,
    desc: "Driven by empathy and service to others.",
  },
];