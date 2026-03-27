"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight } from "lucide-react";

const UG_PROGRAMS = [
  {
    school: "School of Engineering & Technology",
    color: "from-blue-900 to-blue-700",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
    programs: [
      "B.Tech – Computer Science & Engineering",
      "B.Tech – AI & Machine Learning",
      "B.Tech – Data Science",
      "B.Tech – Electronics & Communication",
      "B.Tech – Mechanical Engineering",
      "B.Tech – Cyber Security",
      "B.Tech – Internet of Things (IoT)",
      "B.Tech – Civil Engineering",
    ]
  },
  {
    school: "School of Health Sciences",
    color: "from-emerald-900 to-emerald-700",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
    programs: [
      "MBBS – Bachelor of Medicine & Surgery",
      "BDS – Bachelor of Dental Surgery",
      "B.Pharm – Bachelor of Pharmacy",
      "B.Sc Nursing",
      "BPT – Bachelor of Physiotherapy",
      "B.Sc – Medical Laboratory Technology",
    ]
  },
  {
    school: "School of Commerce & Management",
    color: "from-amber-800 to-amber-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    programs: [
      "BBA – Bachelor of Business Administration",
      "B.Com – Bachelor of Commerce",
      "BBA (Business Analytics)",
      "B.Com (Finance & Accounting)",
    ]
  },
  {
    school: "School of Computer Applications",
    color: "from-violet-900 to-violet-700",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    programs: [
      "BCA – Bachelor of Computer Applications",
      "BCA (Data Science & Analytics)",
    ]
  },
  {
    school: "School of Law",
    color: "from-gray-800 to-gray-600",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80",
    programs: [
      "BBA LLB (Hons.)",
      "B.Com LLB (Hons.)",
      "BA LLB (Hons.)",
    ]
  },
  {
    school: "Arts, Design & Humanities",
    color: "from-rose-900 to-rose-700",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
    programs: [
      "B.Design – Interaction & Visual Design",
      "B.Design – Product Design",
      "BA – Journalism & Mass Communication",
      "BFA – Bachelor of Fine Arts",
    ]
  },
];

export default function UGProgramsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero Banner */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80"
          alt="UG Programs"
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
            <span className="text-white">Undergraduate Programs</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight"
          >
            Undergraduate Programs
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-medium">
            Build the future you envision. DSU offers a diverse range of undergraduate programs across engineering, health sciences, law, design, and management — all aligned with global industry standards.
          </p>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        {UG_PROGRAMS.map((school, si) => (
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
              <div className={`absolute inset-0 bg-gradient-to-r ${school.color} opacity-80`} />
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
          <h3 className="text-3xl font-serif font-bold mb-4">Ready to Join DSU?</h3>
          <p className="text-blue-100/80 max-w-xl mx-auto mb-8">All UG programs follow AICTE/UGC guidelines with industry-aligned curriculum, live labs, and global placement support.</p>
          <Link href="/apply" className="inline-flex items-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm">
            Apply for UG Admission <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
