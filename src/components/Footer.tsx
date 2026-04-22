"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b132b] text-white mt-20">

      {/* BRAND ACCENT LINE — shared system element */}
      <div className="h-[3px] bg-[#1e8b35]" />

      {/* ============================== */}
      {/* MAIN FOOTER */}
      {/* ============================== */}

      <div className="max-w-[1200px] mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">

          {/* ============================== */}
          {/* ORGANIZATION BLOCK */}
          {/* ============================== */}

          <div className="lg:col-span-5 space-y-4">

            <Link href="/" className="flex items-center gap-3">

              <div className="flex items-center gap-3 border-l-4 border-[#1e8b35] pl-3">

                <div className="w-10 h-10 bg-white border border-gray-200 flex items-center justify-center">

                  <Image
                    src="/CCDA-logo.jpeg"
                    alt="CCDA Logo"
                    width={36}
                    height={36}
                    priority
                    className="object-contain"
                  />

                </div>

                <div className="flex flex-col leading-tight">

                  <span className="font-semibold text-base">
                    CCDA
                  </span>

                  <span className="text-[10px] font-semibold tracking-widest text-[#1e8b35] uppercase">
                    South Sudan
                  </span>

                </div>

              </div>

            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-[340px]">
              A faith-based humanitarian organization restoring hope,
              dignity, and resilience through sustainable development,
              emergency relief, and community empowerment.
            </p>

            <div className="flex gap-2 pt-1">

              {[
                {
                  icon: FaFacebookF,
                  label: "Facebook",
                },
                {
                  icon: FaLinkedinIn,
                  label: "LinkedIn",
                },
                {
                  icon: FaWhatsapp,
                  label: "WhatsApp",
                },
              ].map((social) => (
                <Link
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="w-8 h-8 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <social.icon size={14} />
                </Link>
              ))}

            </div>

          </div>

          {/* ============================== */}
          {/* NAVIGATION */}
          {/* ============================== */}

          <div className="lg:col-span-3">

            <h4 className="font-semibold text-sm mb-3 text-white">
              Navigation
            </h4>

            <ul className="space-y-2 text-sm">

              {[
                "Our History",
                "Thematic Areas",
                "Field Projects",
                "Reports",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* ============================== */}
          {/* CONTACT */}
          {/* ============================== */}

          <div className="lg:col-span-4">

            <h4 className="font-semibold text-sm mb-3 text-white">
              Headquarters
            </h4>

            <div className="space-y-3 text-sm text-slate-300">

              <div className="flex gap-3 items-start">

                <MapPin
                  size={16}
                  className="text-[#1e8b35] mt-0.5 shrink-0"
                />

                <span className="leading-relaxed">
                  Thongpiny, Block 3, Plot 631
                  <br />
                  Juba, South Sudan
                </span>

              </div>

              <div className="flex gap-3 items-center">

                <Phone
                  size={16}
                  className="text-[#1e8b35]"
                />

                <span>
                  +211 923 846 396
                </span>

              </div>

              <div className="flex gap-3 items-center">

                <Mail
                  size={16}
                  className="text-[#1e8b35]"
                />

                <span>
                  info@ccda.org
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ============================== */}
      {/* BOTTOM BAR */}
      {/* ============================== */}

      <div className="border-t border-white/10">

        <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">

          <p>
            © {new Date().getFullYear()} CCDA South Sudan
          </p>

          <div className="flex gap-5">

            <Link
              href="#"
              className="hover:text-white transition-colors"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}