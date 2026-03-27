"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight, TrendingUp, Globe, Cpu, Stethoscope, Scale, Briefcase, BarChart3, Palette } from "lucide-react";

const SECTORS = [
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Technology & Engineering",
    color: "from-blue-600 to-blue-800",
    roles: ["Software Engineer", "AI/ML Researcher", "Cloud Architect", "Cybersecurity Analyst", "IoT Developer", "Data Scientist"],
    companies: "Google, Microsoft, Amazon, Infosys, NVIDIA, Intel",
    avgPkg: "₹12–54 LPA",
    growth: "28% YoY",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
  },
  {
    icon: <Stethoscope className="w-7 h-7" />,
    title: "Healthcare & Life Sciences",
    color: "from-emerald-600 to-emerald-800",
    roles: ["Clinical Researcher", "Medical Officer", "Pharmacist", "Biotech Analyst", "Hospital Administrator", "Public Health Expert"],
    companies: "Apollo, Biocon, Dr. Reddy's, Cipla, Manipal Health, NIMHANS",
    avgPkg: "₹8–28 LPA",
    growth: "22% YoY",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Finance, Commerce & Management",
    color: "from-amber-600 to-amber-800",
    roles: ["Investment Analyst", "Product Manager", "Management Consultant", "CFA / CA Professional", "Risk Analyst", "CFO Track"],
    companies: "KPMG, Deloitte, EY, PwC, Goldman Sachs, Aon",
    avgPkg: "₹10–42 LPA",
    growth: "19% YoY",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    icon: <Scale className="w-7 h-7" />,
    title: "Law & Policy",
    color: "from-gray-600 to-gray-800",
    roles: ["Corporate Lawyer", "Legal Advisor", "Public Prosecutor", "Policy Analyst", "IP Attorney", "Judicial Services"],
    companies: "AZB & Partners, Trilegal, Cyril Amarchand, MNC Legal Teams",
    avgPkg: "₹8–30 LPA",
    growth: "15% YoY",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80",
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: "Research & Academia",
    color: "from-violet-600 to-violet-800",
    roles: ["Research Scientist", "University Professor", "R&D Engineer", "Think Tank Analyst", "Post-doctoral Fellow", "Science Communicator"],
    companies: "ISRO, IISc, DRDO, IIT, CSIR, DST-funded labs",
    avgPkg: "₹10–36 LPA",
    growth: "25% YoY",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80",
  },
  {
    icon: <Palette className="w-7 h-7" />,
    title: "Design, Media & Creative",
    color: "from-rose-600 to-rose-800",
    roles: ["UX/UI Designer", "Product Designer", "Creative Director", "Content Strategist", "Brand Manager", "Digital Marketing Lead"],
    companies: "Flipkart, Swiggy, Zomato, Adobe, Dentsu, Ogilvy",
    avgPkg: "₹8–28 LPA",
    growth: "32% YoY",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80",
  },
];

const SKILLS = [
  { skill: "AI & Machine Learning", demand: 96 },
  { skill: "Cloud Computing (AWS/Azure)", demand: 91 },
  { skill: "Data Analytics & Visualization", demand: 88 },
  { skill: "Full-Stack Development", demand: 85 },
  { skill: "Cybersecurity", demand: 82 },
  { skill: "Product Management", demand: 79 },
  { skill: "Financial Modelling", demand: 74 },
  { skill: "UI/UX Design", demand: 71 },
];

const FUTURE_ROLES = [
  { title: "AI Ethicist", timeline: "Top role by 2027", desc: "Ensuring responsible AI deployment — a $4B market driven by regulation." },
  { title: "Quantum Computing Engineer", timeline: "Top role by 2028", desc: "India's ₹8000 Cr quantum mission is creating thousands of specialist roles." },
  { title: "Climate Tech Analyst", timeline: "Emerging now", desc: "ESG mandates and net-zero targets are driving massive hiring in clean tech." },
  { title: "Genomics Data Scientist", timeline: "Top role by 2026", desc: "Precision medicine is reshaping healthcare and pharma workforce needs." },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Careers" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white flex items-center gap-2"><Home className="w-4 h-4" /> Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">Career Pathways</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight">
            Your Career,<br />Defined at DSU
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            DSU graduates are leading at Google, ISRO, Apollo, KPMG, and 350+ other organisations globally. Explore the career trajectories, in-demand skills, and future roles unlocked by every DSU program.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* Sector Career Tiles */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Career Pathways by Discipline</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SECTORS.map((sector, i) => (
              <motion.div key={sector.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group bg-white border border-blue-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                {/* Image + Header */}
                <div className="relative h-40 overflow-hidden">
                  <img src={sector.image} alt={sector.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${sector.color} opacity-80`} />
                  <div className="absolute inset-0 flex items-end px-6 pb-5 gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white shrink-0">
                      {sector.icon}
                    </div>
                    <h3 className="font-serif font-bold text-white text-lg leading-snug">{sector.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  {/* Roles */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {sector.roles.map(role => (
                      <span key={role} className="text-[10px] font-bold bg-blue-50 text-[#002366] px-2.5 py-1 rounded-full uppercase tracking-wide">{role}</span>
                    ))}
                  </div>
                  <div className="border-t border-gray-50 pt-5 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Top Hirers</span>
                      <span className="font-bold text-[#002366] text-xs text-right max-w-[60%]">{sector.companies}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Avg. Package</span>
                      <span className="font-bold text-emerald-600">{sector.avgPkg}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Sector Growth</span>
                      <span className="font-bold text-dsu-gold flex items-center gap-1"><TrendingUp className="w-3 h-3" />{sector.growth}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* In-Demand Skills */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Most In-Demand Skills — 2026</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SKILLS.map((s, i) => (
              <motion.div key={s.skill} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white border border-blue-50 rounded-2xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-bold text-[#002366] text-sm">{s.skill}</span>
                  <span className="text-xs font-black text-dsu-gold">{s.demand}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.demand}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 }}
                    className="h-2.5 rounded-full bg-gradient-to-r from-[#002366] to-dsu-gold"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Future Roles */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Future Roles — Jobs of Tomorrow</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FUTURE_ROLES.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-[#002366] text-white rounded-2xl p-7 shadow-xl hover:scale-105 transition-transform group">
                <span className="text-[10px] font-black text-dsu-gold uppercase tracking-widest bg-dsu-gold/10 px-3 py-1 rounded-full mb-5 inline-block">{r.timeline}</span>
                <h3 className="font-serif font-bold text-xl mb-3">{r.title}</h3>
                <p className="text-sm text-blue-100/80 leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-dsu-gold rounded-3xl p-12 text-[#002366] text-center shadow-2xl">
          <Briefcase className="w-12 h-12 mx-auto mb-6 opacity-70" />
          <h3 className="text-3xl font-serif font-bold mb-4">Your Career Starts with the Right Degree</h3>
          <p className="text-[#002366]/70 max-w-xl mx-auto mb-8">DSU's placement cell partners with 350+ companies to ensure every graduate has a strong career launch pad from day one.</p>
          <Link href="/apply" className="inline-flex items-center gap-3 bg-[#002366] text-white font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white hover:text-[#002366] transition-all shadow-lg text-sm">
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
