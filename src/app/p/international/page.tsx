"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight, Globe, Plane, GraduationCap, FileText, Phone, Mail } from "lucide-react";

const OUTBOUND_PROGRAMS = [
  { title: "Semester Exchange Programs", partners: "TU Berlin, Coventry University, Manipal Global", duration: "1 Semester", benefit: "Credits transferred, same fees", icon: "🇩🇪🇬🇧" },
  { title: "Silicon Valley Internship", partners: "NASSCOM MNC Partnerships", duration: "6 Weeks (Summer)", benefit: "Stipend + Industry Certificate", icon: "🇺🇸" },
  { title: "2+2 Dual Degree Program", partners: "Partner Universities in USA & UK", duration: "2 Years Abroad", benefit: "Two recognized degrees", icon: "🎓" },
  { title: "International Research Fellowship", partners: "DAAD, Fulbright, Commonwealth", duration: "3–12 Months", benefit: "Full funding available", icon: "🔬" },
  { title: "Global Summer School", partners: "Partner Institutions in France, Japan, Singapore", duration: "4–6 Weeks", benefit: "Short-term, high-impact exposure", icon: "🌏" },
  { title: "Erasmus+ Mobility", partners: "European Union – 12 Partner Universities", duration: "1 Semester / 1 Year", benefit: "EU Grant funding available", icon: "🇪🇺" },
];

const INBOUND_PROGRAMS = [
  { title: "NRI / PIO Admissions", desc: "Direct entry under NRI Quota with reserved seats across all programs. No entrance exam mandatory for most UG programs.", eligibility: "10+2 equivalent from any board", seats: "15% reserved seats" },
  { title: "Foreign National Admissions", desc: "Open to students from all countries. DSU admits students from 40+ nationalities with a simplified visa-assistance process.", eligibility: "Equivalent to Indian 10+2 standard", seats: "Supernumerary seats" },
  { title: "SAARC Country Students", desc: "Students from Bangladesh, Nepal, Sri Lanka, Bhutan, and Maldives are eligible for concessional tuition fees.", eligibility: "Home country board equivalent", seats: "Special SAARC Quota" },
  { title: "ASEAN Scholarship Program", desc: "Full semester and annual scholarships for students from ASEAN member nations. Covers up to 50% of tuition fees.", eligibility: "Merit-based from ASEAN nations", seats: "Limited — Apply Early" },
];

const VISA_STEPS = [
  { step: "01", title: "Online Application", desc: "Submit your academic transcripts and personal statement at admissions@dsu.edu.in" },
  { step: "02", title: "Offer Letter Issued", desc: "DSU issues the conditional/unconditional offer letter within 7 working days." },
  { step: "03", title: "Student Visa (India)", desc: "Use the DSU offer letter to apply for Student Visa (X-1) at the Indian Embassy in your country." },
  { step: "04", title: "Pre-Arrival Support", desc: "DSU's International Office arranges airport pickup, onboarding, and hostel registration for all foreign students." },
];

export default function InternationalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-0 shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" alt="International" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-2"><Home className="w-4 h-4" /> Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">International</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight">
            Global at DSU
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-medium">
            DSU connects Indian students to the world and welcomes the world to our campuses. Explore outbound opportunities for Indian students and inbound admission pathways for international applicants.
          </p>
        </div>
      </div>

      {/* Tab Divider */}
      <div className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 flex divide-x divide-gray-100">
          <a href="#outbound" className="flex items-center gap-3 px-8 py-5 hover:bg-blue-50 transition-colors group">
            <Plane className="w-5 h-5 text-dsu-gold" />
            <span className="font-bold text-[#002366] text-sm uppercase tracking-widest">For Indian Students</span>
          </a>
          <a href="#inbound" className="flex items-center gap-3 px-8 py-5 hover:bg-blue-50 transition-colors group">
            <Globe className="w-5 h-5 text-dsu-gold" />
            <span className="font-bold text-[#002366] text-sm uppercase tracking-widest">For International Students</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24 mt-20">

        {/* SECTION 1: Indian Students Going Abroad */}
        <section id="outbound">
          <div className="flex items-center gap-4 mb-4">
            <Plane className="w-8 h-8 text-dsu-gold shrink-0" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#002366] font-bold">International Opportunities for DSU Students</h2>
          </div>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-6" />
          <p className="text-gray-500 text-lg max-w-3xl mb-12 leading-relaxed">
            Being a student at DSU opens doors far beyond the campus. From semester-long exchange programs in Germany to funded research fellowships in the USA and Erasmus+ grants across Europe — the world is your classroom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {OUTBOUND_PROGRAMS.map((prog, i) => (
              <motion.div key={prog.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group bg-white border border-blue-50 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-dsu-gold/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4">{prog.icon}</div>
                <h3 className="font-bold text-[#002366] text-base mb-2 leading-snug">{prog.title}</h3>
                <p className="text-xs text-dsu-gold font-bold uppercase tracking-widest mb-3">{prog.duration}</p>
                <p className="text-sm text-gray-500 mb-3">{prog.partners}</p>
                <div className="bg-blue-50 rounded-lg px-4 py-2 text-xs font-semibold text-[#002366]">✅ {prog.benefit}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Global Partners Image Break */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-3 gap-5">
          <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80" alt="Campus students" className="w-full h-52 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" alt="Global collaboration" className="w-full h-52 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
          <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80" alt="International students" className="w-full h-52 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
        </motion.div>

        {/* SECTION 2: International Students Coming to DSU */}
        <section id="inbound">
          <div className="flex items-center gap-4 mb-4">
            <Globe className="w-8 h-8 text-dsu-gold shrink-0" />
            <h2 className="text-3xl md:text-4xl font-serif text-[#002366] font-bold">International Admissions at DSU</h2>
          </div>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-6" />
          <p className="text-gray-500 text-lg max-w-3xl mb-12 leading-relaxed">
            Students from 40+ countries call DSU home. We welcome students from every nation with streamlined admission pathways, dedicated visa assistance, pre-arrival support, and on-campus international student services.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {INBOUND_PROGRAMS.map((prog, i) => (
              <motion.div key={prog.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group bg-white border border-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-dsu-gold/30 transition-all duration-300">
                <h3 className="font-bold text-[#002366] text-lg mb-3 font-serif">{prog.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{prog.desc}</p>
                <div className="flex flex-wrap gap-3">
                  <span className="text-xs bg-blue-50 text-[#002366] font-semibold px-3 py-1.5 rounded-full">📋 {prog.eligibility}</span>
                  <span className="text-xs bg-dsu-gold/10 text-amber-700 font-semibold px-3 py-1.5 rounded-full">🪑 {prog.seats}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Visa & Admission Process */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3 text-center">How to Apply — Step by Step</h2>
          <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VISA_STEPS.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="relative bg-white border border-blue-50 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all group">
                <span className="text-7xl font-black text-[#002366]/5 absolute top-4 right-4 leading-none">{step.step}</span>
                <p className="text-sm font-black text-dsu-gold uppercase tracking-widest mb-3">{step.step}</p>
                <h3 className="font-bold text-[#002366] text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Block */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#002366] rounded-3xl p-12 text-white grid grid-cols-1 md:grid-cols-2 gap-10 items-center shadow-2xl">
          <div>
            <GraduationCap className="w-10 h-10 text-dsu-gold mb-6" />
            <h3 className="text-3xl font-serif font-bold mb-4">International Office — DSU</h3>
            <p className="text-blue-100/80 mb-6">Reach us for NRI/Foreign national admission queries, visa invitation letters, and scholarship details.</p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-dsu-gold" /><span>+91 9606022152 / +91 9606022150</span></div>
              <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-dsu-gold" /><span>admissions@dsu.edu.in | dsat@dsu.edu.in</span></div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/apply" className="flex items-center justify-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white transition-all text-sm">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://dsu.edu.in/images/Admission/brochures/2025/DSU_Main_Campus_Programs_2025.pdf" target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-white/30 text-white font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white/10 transition-all text-sm">
              <FileText className="w-4 h-4" /> Download Brochure
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
