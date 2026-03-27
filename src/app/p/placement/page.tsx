"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight, Calendar, MapPin, Building2, TrendingUp, Users, GraduationCap, Briefcase } from "lucide-react";

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (1800 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else { setCount(Math.ceil(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);
  return <span>{count.toLocaleString()}{suffix}</span>;
}

const COMPANIES = [
  { name: "Infosys", domain: "infosys.com" },
  { name: "Wipro", domain: "wipro.com" },
  { name: "TCS", domain: "tcs.com" },
  { name: "Accenture", domain: "accenture.com" },
  { name: "Cognizant", domain: "cognizant.com" },
  { name: "IBM", domain: "ibm.com" },
  { name: "Capgemini", domain: "capgemini.com" },
  { name: "HCL Technologies", domain: "hcltech.com" },
  { name: "Tech Mahindra", domain: "techmahindra.com" },
  { name: "Mindtree", domain: "mindtree.com" },
  { name: "Oracle", domain: "oracle.com" },
  { name: "Microsoft", domain: "microsoft.com" },
  { name: "Amazon", domain: "amazon.com" },
  { name: "Flipkart", domain: "flipkart.com" },
  { name: "Bosch", domain: "bosch.com" },
  { name: "Siemens", domain: "siemens.com" },
  { name: "ABB", domain: "abb.com" },
  { name: "Honeywell", domain: "honeywell.com" },
  { name: "L&T Technology", domain: "ltts.com" },
  { name: "Mphasis", domain: "mphasis.com" },
  { name: "KPMG", domain: "kpmg.com" },
  { name: "Deloitte", domain: "deloitte.com" },
  { name: "EY", domain: "ey.com" },
  { name: "PwC", domain: "pwc.com" },
  { name: "Aon", domain: "aon.com" },
  { name: "Manipal Health", domain: "manipalhospitals.com" },
  { name: "Apollo Hospitals", domain: "apollohospitals.com" },
  { name: "Biocon", domain: "biocon.com" },
  { name: "Dr. Reddy's", domain: "drreddys.com" },
  { name: "Cipla", domain: "cipla.com" },
  { name: "Samsung R&D", domain: "samsung.com" },
  { name: "Qualcomm", domain: "qualcomm.com" },
  { name: "Intel", domain: "intel.com" },
  { name: "MediaTek", domain: "mediatek.com" },
  { name: "Texas Instruments", domain: "ti.com" },
];

const SECTORS = [
  { sector: "Information Technology", companies: 142, placements: 820, avg: "14 LPA", color: "blue" },
  { sector: "Core Engineering", companies: 58, placements: 340, avg: "9 LPA", color: "gray" },
  { sector: "Management & Finance", companies: 74, placements: 290, avg: "12 LPA", color: "amber" },
  { sector: "Health & Pharma", companies: 42, placements: 180, avg: "8 LPA", color: "emerald" },
  { sector: "Research & Analytics", companies: 26, placements: 120, avg: "16 LPA", color: "violet" },
  { sector: "Product & Design", companies: 18, placements: 250, avg: "18 LPA", color: "rose" },
];

const DRIVES = [
  { company: "Infosys", role: "Systems Engineer", package: "₹6.5 LPA", date: "Jan 14, 2026", mode: "On-Campus", status: "Completed" },
  { company: "Amazon", role: "SDE Intern → FTE", package: "₹36 LPA", date: "Feb 3, 2026", mode: "On-Campus", status: "Completed" },
  { company: "Accenture", role: "Analyst", package: "₹8 LPA", date: "Feb 18, 2026", mode: "On-Campus", status: "Completed" },
  { company: "KPMG", role: "Associate Consultant", package: "₹12 LPA", date: "Mar 5, 2026", mode: "Hybrid", status: "Upcoming" },
  { company: "Qualcomm", role: "R&D Engineer", package: "₹28 LPA", date: "Mar 20, 2026", mode: "On-Campus", status: "Upcoming" },
  { company: "Microsoft", role: "Product Analyst", package: "₹32 LPA", date: "Apr 10, 2026", mode: "On-Campus", status: "Upcoming" },
];

const sectorColors: Record<string, string> = {
  blue:   "border-blue-200 bg-blue-50",
  gray:   "border-gray-200 bg-gray-50",
  amber:  "border-amber-200 bg-amber-50",
  emerald:"border-emerald-200 bg-emerald-50",
  violet: "border-violet-200 bg-violet-50",
  rose:   "border-rose-200 bg-rose-50",
};

export default function PlacementPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80" alt="Placements" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white flex items-center gap-2"><Home className="w-4 h-4" /> Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">Placement Cell</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight">
            Centre for Industry<br />& Careers (CIC)
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            India's most active campus placement cell — 350+ companies, ₹54 LPA peak package, and 2,000+ students placed every year across engineering, management, health, and law.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* Animated Stats */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl border border-dsu-gold/20 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {[
              { icon: <Users className="w-6 h-6" />, end: 2000, suffix: "+", label: "Students Placed" },
              { icon: <Building2 className="w-6 h-6" />, end: 350, suffix: "+", label: "Campus Companies" },
              { icon: <TrendingUp className="w-6 h-6" />, end: 12, suffix: " LPA", label: "Average Package" },
              { icon: <GraduationCap className="w-6 h-6" />, end: 54, suffix: " LPA", label: "Highest Package" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col items-center justify-center py-10 px-6 gap-2">
                <div className="text-dsu-gold mb-1">{stat.icon}</div>
                <span className="text-4xl md:text-5xl font-black text-[#002366]"><Counter end={stat.end} suffix={stat.suffix} /></span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest text-center">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Sector Breakdown */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Placements by Sector</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SECTORS.map((s, i) => (
              <motion.div key={s.sector} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className={`border-2 ${sectorColors[s.color]} rounded-2xl p-6 hover:shadow-lg transition-all`}>
                <h3 className="font-bold text-[#002366] text-base mb-4">{s.sector}</h3>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div><p className="text-2xl font-black text-[#002366]">{s.companies}</p><p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Companies</p></div>
                  <div><p className="text-2xl font-black text-[#002366]">{s.placements}</p><p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Placed</p></div>
                  <div><p className="text-2xl font-black text-[#002366]">{s.avg}</p><p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Avg CTC</p></div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Top Recruiters Logo Wall */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3 text-center">Our 350+ Recruiting Partners</h2>
          <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto mb-10" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
            {COMPANIES.map((company, i) => (
              <motion.div key={company.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.02 }}
                className="bg-white border border-gray-100 rounded-xl py-5 px-3 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-dsu-gold/30 hover:-translate-y-0.5 transition-all group gap-3">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={`https://logo.clearbit.com/${company.domain}`}
                    alt={company.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      const next = e.currentTarget.nextElementSibling as HTMLElement;
                      if (next) next.style.display = "flex";
                    }}
                  />
                  <div className="w-10 h-10 bg-[#002366]/5 rounded-full hidden items-center justify-center">
                    <Briefcase className="w-5 h-5 text-[#002366]" />
                  </div>
                </div>
                <p className="text-[10px] font-bold text-[#002366] leading-tight">{company.name}</p>
              </motion.div>
            ))}
          </div>
        </section>


        {/* Placement Drives */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Recent & Upcoming Placement Drives</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm bg-white">
              <thead>
                <tr className="bg-[#002366] text-white">
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest">Company</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest">Role</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest">Package</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest"><Calendar className="inline w-3.5 h-3.5 mr-1" />Date</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest"><MapPin className="inline w-3.5 h-3.5 mr-1" />Mode</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {DRIVES.map((drive, i) => (
                  <tr key={drive.company + drive.date} className={`hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? "" : "bg-gray-50/40"}`}>
                    <td className="px-6 py-4 font-bold text-[#002366]">{drive.company}</td>
                    <td className="px-6 py-4 text-gray-600">{drive.role}</td>
                    <td className="px-6 py-4 font-bold text-emerald-700">{drive.package}</td>
                    <td className="px-6 py-4 text-gray-500">{drive.date}</td>
                    <td className="px-6 py-4 text-gray-500">{drive.mode}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${drive.status === "Completed" ? "bg-green-50 text-green-700 border border-green-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`}>
                        {drive.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#002366] rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-serif font-bold mb-4">Your Career Begins at DSU</h3>
          <p className="text-blue-100/80 max-w-xl mx-auto mb-8">Join a campus where 350+ companies come to you. Apply today and start your journey toward guaranteed career outcomes.</p>
          <Link href="/apply" className="inline-flex items-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm">
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
