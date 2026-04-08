import { Heart, Droplets, BookOpen, ShieldCheck, Home, Sprout } from "lucide-react";

export const programData = {
  health: {
    title: "Health Services",
    icon: Heart,
    theme: "text-red-600",
    bg: "bg-red-50",
    heroImage: "/img (1).jpeg",
    tagline: "Improving access to life-saving health interventions.",
    description: "CCDA supports Primary Health Care Centers (PHCC) and Units (PHCU) to deliver clinical services, maternal health, and epidemic prevention in hard-to-reach areas.",
    objectives: ["Maternal & Child Health", "Immunization Support", "Clinical Consultation", "Health Worker Training"]
  },
  wash: {
    title: "WASH",
    icon: Droplets,
    theme: "text-blue-600",
    bg: "bg-blue-50",
    heroImage: "/img (2).jpeg",
    tagline: "Sustainable water and hygiene solutions.",
    description: "Reducing water-borne diseases through borehole rehabilitation, latrine construction, and community-led total sanitation (CLTS) programs.",
    objectives: ["Borehole Drilling", "Hygiene Kit Distribution", "School Latrine Construction", "Water Committee Training"]
  },
  education: {
    title: "Education",
    icon: BookOpen,
    theme: "text-amber-600",
    bg: "bg-amber-50",
    heroImage: "/img (3).jpeg",
    tagline: "Inclusive learning for the next generation.",
    description: "Focusing on formal education support, vocational training for youth, and creating safe learning spaces for conflict-affected children.",
    objectives: ["Teacher Training", "School Supplies", "Youth Vocational Skills", "Classroom Rehabilitation"]
  },
  protection: {
    title: "Protection",
    icon: ShieldCheck,
    theme: "text-purple-600",
    bg: "bg-purple-50",
    heroImage: "/img (4).jpeg",
    tagline: "Safeguarding dignity and human rights.",
    description: "Providing psychosocial support, child protection services, and GBV prevention programs to ensure the safety of vulnerable populations.",
    objectives: ["Psychosocial Support", "Child-Friendly Spaces", "GBV Awareness", "Rights Advocacy"]
  },
  shelter: {
    title: "Shelter & NFIs",
    icon: Home,
    theme: "text-emerald-600",
    bg: "bg-emerald-50",
    heroImage: "/img (5).jpeg",
    tagline: "Emergency response and essential support.",
    description: "Providing emergency shelter kits and essential non-food items (NFIs) to internally displaced persons (IDPs) and returnees.",
    objectives: ["Emergency Shelter Kits", "Essential Item Distribution", "IDP Site Support", "Disaster Response"]
  },
  fsl: {
    title: "Food Security & Livelihoods",
    icon: Sprout,
    theme: "text-orange-600",
    bg: "bg-orange-50",
    heroImage: "/img (6).jpeg",
    tagline: "Building resilience through sustainable production.",
    description: "Empowering farmers through modern techniques, seed distribution, and livelihood diversification to reduce aid dependency.",
    objectives: ["Seed & Tool Distribution", "Farmer Training", "Economic Empowerment", "Sustainable Livelihoods"]
  }
};