"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight, CheckCircle2, Info } from "lucide-react";

const PROGRAMS = [
  {
    school: "School of Engineering & Technology",
    color: "blue",
    programs: [
      { name: "B.Tech – Computer Science & Engineering", direct: "₹3,75,000", entrance: "₹3,50,000", duration: "4 Years", eligibility: "45% in 10+2 (PCM)" },
      { name: "B.Tech – AI & Machine Learning", direct: "₹3,75,000", entrance: "₹3,50,000", duration: "4 Years", eligibility: "45% in 10+2 (PCM)" },
      { name: "B.Tech – Data Science", direct: "₹3,75,000", entrance: "₹3,50,000", duration: "4 Years", eligibility: "45% in 10+2 (PCM)" },
      { name: "B.Tech – Electronics & Communication", direct: "₹3,50,000", entrance: "₹3,25,000", duration: "4 Years", eligibility: "45% in 10+2 (PCM)" },
      { name: "B.Tech – Mechanical Engineering", direct: "₹3,25,000", entrance: "₹3,00,000", duration: "4 Years", eligibility: "45% in 10+2 (PCM)" },
      { name: "B.Tech – Cyber Security", direct: "₹3,75,000", entrance: "₹3,50,000", duration: "4 Years", eligibility: "45% in 10+2 (PCM)" },
      { name: "M.Tech – Computer Science", direct: "₹2,50,000", entrance: "₹2,20,000", duration: "2 Years", eligibility: "B.Tech / BE with 50%" },
      { name: "M.Tech – AI & Robotics", direct: "₹2,75,000", entrance: "₹2,50,000", duration: "2 Years", eligibility: "B.Tech / BE with 50%" },
    ]
  },
  {
    school: "School of Commerce & Management",
    color: "amber",
    programs: [
      { name: "BBA – Business Administration", direct: "₹1,80,000", entrance: "₹1,60,000", duration: "3 Years", eligibility: "45% in 10+2 (Any Stream)" },
      { name: "B.Com – Commerce", direct: "₹1,50,000", entrance: "₹1,30,000", duration: "3 Years", eligibility: "45% in 10+2 (Commerce)" },
      { name: "MBA – (All Specializations)", direct: "₹4,50,000", entrance: "₹4,00,000", duration: "2 Years", eligibility: "Graduation 50% + CAT/MAT/KMAT/CMAT" },
      { name: "EMBA – Executive MBA", direct: "₹4,75,000", entrance: "₹4,25,000", duration: "2 Years", eligibility: "Graduation + 3 Yrs Work Experience" },
    ]
  },
  {
    school: "School of Health Sciences",
    color: "emerald",
    programs: [
      { name: "MBBS", direct: "₹17,00,000", entrance: "NEET Mandatory", duration: "5.5 Years", eligibility: "NEET Qualified, 50% PCB" },
      { name: "BDS – Dental Surgery", direct: "₹8,00,000", entrance: "NEET Mandatory", duration: "5 Years", eligibility: "NEET Qualified, 50% PCB" },
      { name: "B.Pharm – Pharmacy", direct: "₹2,50,000", entrance: "₹2,20,000", duration: "4 Years", eligibility: "50% in 10+2 (PCB/PCM)" },
      { name: "B.Sc Nursing", direct: "₹2,00,000", entrance: "₹1,80,000", duration: "4 Years", eligibility: "50% in 10+2 (PCB)" },
      { name: "M.Pharm – Pharmacy", direct: "₹2,75,000", entrance: "₹2,50,000", duration: "2 Years", eligibility: "B.Pharm with 50% + GPAT" },
    ]
  },
  {
    school: "School of Law",
    color: "gray",
    programs: [
      { name: "BBA LLB (Hons.)", direct: "₹2,25,000", entrance: "₹2,00,000", duration: "5 Years", eligibility: "45% in 10+2 (Any Stream)" },
      { name: "B.Com LLB (Hons.)", direct: "₹2,25,000", entrance: "₹2,00,000", duration: "5 Years", eligibility: "45% in 10+2 (Commerce)" },
      { name: "LLM – Master of Laws", direct: "₹1,80,000", entrance: "₹1,60,000", duration: "2 Years", eligibility: "LLB / BL with 50%" },
    ]
  },
  {
    school: "School of Computer Applications",
    color: "violet",
    programs: [
      { name: "BCA – Computer Applications", direct: "₹1,60,000", entrance: "₹1,40,000", duration: "3 Years", eligibility: "45% in 10+2 (Any Stream)" },
      { name: "MCA – Computer Applications", direct: "₹2,20,000", entrance: "₹2,00,000", duration: "2 Years", eligibility: "BCA / B.Sc CS with 50%" },
    ]
  },
  {
    school: "Arts, Design & Humanities",
    color: "rose",
    programs: [
      { name: "B.Design – Visual & Interaction", direct: "₹2,50,000", entrance: "₹2,20,000", duration: "4 Years", eligibility: "45% in 10+2 (Any Stream)" },
      { name: "BA – Journalism & Mass Comm.", direct: "₹1,40,000", entrance: "₹1,20,000", duration: "3 Years", eligibility: "45% in 10+2 (Any Stream)" },
    ]
  },
];

const ENTRANCE_CODES = [
  { label: "DSAT", code: "DSU Scholarship Aptitude Test", color: "bg-blue-50 border-blue-200" },
  { label: "Comed-K", code: "E182", color: "bg-amber-50 border-amber-200" },
  { label: "Uni-Gauge", code: "Uni-010", color: "bg-violet-50 border-violet-200" },
  { label: "CET Code", code: "DSU-E240", color: "bg-emerald-50 border-emerald-200" },
  { label: "PGCET (M.Tech)", code: "T970", color: "bg-rose-50 border-rose-200" },
  { label: "PGCET (MBA)", code: "B365MB", color: "bg-gray-50 border-gray-200" },
];

const colorMap: Record<string, string> = {
  blue:   "from-blue-900 to-blue-700",
  amber:  "from-amber-800 to-amber-600",
  emerald:"from-emerald-900 to-emerald-700",
  gray:   "from-gray-800 to-gray-600",
  violet: "from-violet-900 to-violet-700",
  rose:   "from-rose-900 to-rose-700",
};

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" alt="Admissions" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-2"><Home className="w-4 h-4" /> Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">Admissions 2026</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight">
            Admissions 2026
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-medium">
            Find the right program for you. Every course is listed with both Direct Admission fees and Entrance Exam concessional fees. Apply today for the March 2026 intake.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Entrance Exam Codes */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-serif text-[#002366] font-bold mb-8 flex items-center gap-3">
            <Info className="w-6 h-6 text-dsu-gold" /> Recognized Entrance Exam Codes
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {ENTRANCE_CODES.map((ec) => (
              <div key={ec.label} className={`border-2 ${ec.color} rounded-2xl p-4 text-center`}>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{ec.label}</p>
                <p className="text-[#002366] font-black text-lg">{ec.code}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Fee Legend */}
        <div className="flex flex-wrap gap-6 items-center bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
          <span className="font-bold text-[#002366] text-sm uppercase tracking-widest">Fee Key:</span>
          <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-[#002366]" /><span className="text-sm font-semibold text-gray-600">Direct Admission Fee (per year)</span></div>
          <div className="flex items-center gap-2"><div className="w-4 h-4 rounded bg-dsu-gold" /><span className="text-sm font-semibold text-gray-600">Entrance Exam Concession Fee (per year)</span></div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /><span className="text-sm font-semibold text-gray-600">Scholarship applies via DSAT</span></div>
        </div>

        {/* Programs by School */}
        {PROGRAMS.map((school, si) => (
          <motion.section key={school.school} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: si * 0.04 }}>
            
            {/* School Banner */}
            <div className={`bg-gradient-to-r ${colorMap[school.color]} rounded-2xl px-8 py-5 mb-6 shadow-lg`}>
              <h2 className="text-xl md:text-2xl font-serif font-bold text-white">{school.school}</h2>
            </div>

            {/* Program Tiles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {school.programs.map((prog, pi) => (
                <motion.div
                  key={prog.name}
                  initial={{ opacity: 0, scale: 0.97 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: pi * 0.04 }}
                  className="bg-white border border-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-dsu-gold/30 transition-all duration-300 group"
                >
                  <div className="mb-5">
                    <p className="font-bold text-[#002366] text-base mb-1 leading-snug">{prog.name}</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-xs bg-blue-50 text-[#002366] font-semibold px-3 py-1 rounded-full">{prog.duration}</span>
                      <span className="text-xs bg-gray-50 text-gray-500 font-semibold px-3 py-1 rounded-full">{prog.eligibility}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#002366]/5 border border-[#002366]/10 rounded-xl p-4 text-center">
                      <p className="text-[10px] font-bold text-[#002366] uppercase tracking-widest mb-1">Direct Admission</p>
                      <p className="text-xl font-black text-[#002366]">{prog.direct}</p>
                      <p className="text-[10px] text-gray-400 mt-1">per year</p>
                    </div>
                    <div className="bg-dsu-gold/10 border border-dsu-gold/20 rounded-xl p-4 text-center">
                      <p className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-1">Via Entrance Exam</p>
                      <p className="text-xl font-black text-amber-700">{prog.entrance}</p>
                      <p className="text-[10px] text-gray-400 mt-1">per year</p>
                    </div>
                  </div>

                  <Link href="/apply" className="w-full flex items-center justify-center gap-2 bg-[#002366] text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl group-hover:bg-dsu-gold group-hover:text-[#002366] transition-all">
                    Apply Now <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Admissions Helpline */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#002366] rounded-3xl p-12 text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-2xl">
          <div>
            <h3 className="text-3xl font-serif font-bold mb-4">Admissions Helpline</h3>
            <p className="text-blue-100/80 mb-6">Our counselors are available Mon–Sat, 9AM–6PM to guide you through the application process.</p>
            <div className="space-y-2 text-sm text-blue-100">
              <p>📞 080 46461800 / 080 49092800</p>
              <p>📱 +91 7760964277 / 8296316737</p>
              <p>✉️ admissions@dsu.edu.in</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/apply" className="flex items-center justify-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white transition-all shadow-lg text-sm">
              Start Application <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://dsu.edu.in/images/Admission/brochures/2025/DSU_Main_Campus_Programs_2025.pdf" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 border-2 border-white/30 text-white font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-sm">
              Download Brochure
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
