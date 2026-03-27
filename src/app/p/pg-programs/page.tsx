"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight } from "lucide-react";

const PG_PROGRAMS = [
  {
    school: "School of Engineering & Technology",
    color: "from-blue-900 to-blue-700",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
    programs: [
      "M.Tech – Computer Science & Engineering",
      "M.Tech – Artificial Intelligence & Robotics",
      "M.Tech – Electronics & Communication",
      "M.Tech – VLSI Design & Embedded Systems",
      "M.Tech – Structural Engineering",
      "M.Tech – Machine Design",
    ]
  },
  {
    school: "School of Health Sciences",
    color: "from-emerald-900 to-emerald-700",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80",
    programs: [
      "M.D. – Doctor of Medicine",
      "M.S. – Master of Surgery",
      "M.Pharm – Master of Pharmacy",
      "M.Sc Nursing",
      "MPT – Master of Physiotherapy",
    ]
  },
  {
    school: "School of Commerce & Management",
    color: "from-amber-800 to-amber-600",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
    programs: [
      "MBA – Finance",
      "MBA – Marketing",
      "MBA – Human Resource Management",
      "MBA – Business Analytics",
      "MBA – Healthcare Management",
      "EMBA – Executive MBA",
      "M.Com – Master of Commerce",
    ]
  },
  {
    school: "School of Computer Applications",
    color: "from-violet-900 to-violet-700",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    programs: [
      "MCA – Master of Computer Applications",
      "MCA (Data Science)",
    ]
  },
  {
    school: "School of Basic & Applied Sciences",
    color: "from-teal-900 to-teal-700",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80",
    programs: [
      "M.Sc – Physics",
      "M.Sc – Chemistry",
      "M.Sc – Mathematics",
      "M.Sc – Biotechnology",
      "M.Sc – Environmental Science",
    ]
  },
  {
    school: "School of Law",
    color: "from-gray-800 to-gray-600",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80",
    programs: [
      "LLM – Master of Laws (Corporate Law)",
      "LLM – Master of Laws (Constitutional Law)",
    ]
  },
  {
    school: "Research – Ph.D Programs",
    color: "from-[#002366] to-blue-800",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
    programs: [
      "Ph.D – Engineering & Technology",
      "Ph.D – Management & Commerce",
      "Ph.D – Health Sciences",
      "Ph.D – Basic & Applied Sciences",
      "Ph.D – Law & Humanities",
    ]
  }
];

export default function PGProgramsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero Banner */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80"
          alt="PG Programs"
          className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 pointer-events-none"
        />
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" /> Home
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white/80">Academics</span>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">Postgraduate Programs</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight"
          >
            Postgraduate Programs
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-medium">
            Deepen your expertise. DSU's postgraduate programs are engineered for specialization, research depth, and industry leadership — from M.Tech and MBA to Ph.D research fellowships.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {PG_PROGRAMS.map((school, si) => (
          <motion.div
            key={school.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: si * 0.05 }}
          >
            {/* School Header */}
            <div className="relative rounded-3xl overflow-hidden h-44 mb-8 shadow-xl">
              <img src={school.image} alt={school.school} className="absolute inset-0 w-full h-full object-cover" />
              <div className={`absolute inset-0 bg-gradient-to-r ${school.color} opacity-85`} />
              <div className="absolute inset-0 flex items-center px-10">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white drop-shadow-lg">{school.school}</h2>
              </div>
            </div>

            {/* Program Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {school.programs.map((prog, pi) => (
                <motion.div
                  key={prog}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: pi * 0.05 }}
                  className="group bg-white border border-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-dsu-gold/40 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-10 h-1 bg-dsu-gold rounded mb-4 group-hover:w-16 transition-all duration-300" />
                  <p className="font-bold text-[#002366] text-sm leading-snug mb-4">{prog}</p>
                  <Link href="/apply" className="flex items-center gap-2 text-xs font-bold text-gray-400 group-hover:text-dsu-gold transition-colors uppercase tracking-widest mt-auto">
                    Apply <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#002366] rounded-3xl p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">Advance Your Career with DSU</h3>
          <p className="text-blue-100/80 max-w-xl mx-auto mb-8">All PG programs are UGC-approved with flagship research, global collaborations, and direct industry mentoring pipelines.</p>
          <Link href="/apply" className="inline-flex items-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm">
            Apply for PG Admission <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
