"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight, Award, Users, BookOpen, Cpu, Globe, TrendingUp } from "lucide-react";

const MILESTONES = [
  { year: "1960s", event: "Dayananda Sagar Institutions founded by late Sri Dayananda Sagar" },
  { year: "1970s", event: "Engineering programs launched — first technical college in South Bengaluru" },
  { year: "1990s", event: "Medical & Health Sciences schools established, MBBS program commences" },
  { year: "2014", event: "Dayananda Sagar University formed by the Karnataka State Legislature Act" },
  { year: "2018", event: "NAAC A+ accreditation & first NIRF Engineering Top-100 ranking" },
  { year: "2021", event: "City Innovation Campus inaugurated at Kudlu Gate, Hosur Road" },
  { year: "2023", event: "AI-First University declaration — India's first dedicated AI curriculum mandate" },
  { year: "2025", event: "QS Asia Rankings debut • 2000+ annual placements • 35+ global MoUs" },
];

const STATS = [
  { icon: <Users className="w-7 h-7" />, value: "25,000+", label: "Students Enrolled" },
  { icon: <BookOpen className="w-7 h-7" />, value: "120+", label: "Programs Offered" },
  { icon: <Award className="w-7 h-7" />, value: "NAAC A+", label: "Accreditation" },
  { icon: <Cpu className="w-7 h-7" />, value: "18", label: "Research Labs" },
  { icon: <Globe className="w-7 h-7" />, value: "35+", label: "Global MoUs" },
  { icon: <TrendingUp className="w-7 h-7" />, value: "₹54 LPA", label: "Highest Package" },
];

const SCHOOLS = [
  { name: "School of Engineering & Technology", icon: "⚙️", programs: "20+ UG & PG Programs", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" },
  { name: "School of Health Sciences", icon: "🩺", programs: "MBBS, BDS, Nursing & more", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80" },
  { name: "School of Commerce & Management", icon: "📊", programs: "BBA, B.Com, MBA, EMBA", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80" },
  { name: "School of Law", icon: "⚖️", programs: "BBA LLB, BA LLB, LLM", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" },
  { name: "School of Design & Humanities", icon: "🎨", programs: "B.Design, BFA, BA Journalism", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80" },
  { name: "School of Basic & Applied Sciences", icon: "🔬", programs: "M.Sc, Ph.D. Research", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80" },
];

const VALUES = [
  { title: "Excellence", desc: "A relentless pursuit of academic and research quality that benchmarks against the world's finest institutions.", icon: "🏆" },
  { title: "Innovation", desc: "DSU's AI-First mandate and 18 active research labs ensure every program integrates the cutting edge.", icon: "💡" },
  { title: "Integrity", desc: "A 70-year legacy of ethical education rooted in the vision of late Sri Dayananda Sagar.", icon: "🤝" },
  { title: "Inclusivity", desc: "From rural Karnataka to ASEAN nations — DSU opens its doors to students from all walks of life.", icon: "🌏" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Cinematic Hero */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-0 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80" alt="DSU Campus" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-4 pb-24">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white flex items-center gap-2"><Home className="w-4 h-4" /> Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">About DSU</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-dsu-gold text-sm font-bold uppercase tracking-widest mb-4">India's AI-First University</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight">
                Dayananda<br />Sagar University
              </motion.h1>
              <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-blue-100/90 max-w-xl leading-relaxed">
                A 70-year legacy of educational excellence. A bold vision for India's AI-powered future. Bengaluru's most ambitious university — crafted for the scholars, innovators, and leaders of tomorrow.
              </motion.p>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 pb-0">
              {STATS.slice(0, 4).map((s, i) => (
                <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 transition-colors">
                  <div className="text-dsu-gold mx-auto w-fit mb-2">{s.icon}</div>
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="text-xs text-blue-200 uppercase tracking-widest font-semibold mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* Wave divider */}
        <div className="w-full overflow-hidden -mb-1">
          <svg viewBox="0 0 1440 60" className="w-full text-blue-50 fill-current" preserveAspectRatio="none" height="60">
            <path d="M0,60 L0,20 Q360,60 720,20 Q1080,-20 1440,20 L1440,60 Z" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24 mt-16">

        {/* Full Stats Row */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {STATS.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-[#002366] text-white rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform">
                <div className="text-dsu-gold mx-auto w-fit mb-2">{s.icon}</div>
                <p className="text-2xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-xs text-blue-200 uppercase tracking-widest font-semibold leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Founding Story */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#002366] font-bold mb-6">Our Story</h2>
            <div className="w-16 h-1.5 bg-dsu-gold rounded mb-8" />
            <div className="space-y-5 text-gray-500 text-lg leading-relaxed">
              <p>Founded in the 1960s by the visionary late <strong className="text-[#002366]">Sri Dayananda Sagar</strong>, the Dayananda Sagar Group was built at a time when quality higher education in South India was a distant dream for most families.</p>
              <p>From a single engineering college in Bengaluru to a full-spectrum university spanning Medicine, Law, Design, Commerce, and Technology — DSU's rise mirrors the rise of Bengaluru as India's knowledge capital.</p>
              <p>In 2014, the <strong className="text-[#002366]">Karnataka State Legislature</strong> recognised this legacy by establishing Dayananda Sagar University through a formal University Act — conferring upon it the power to award degrees and drive original research.</p>
              <p>Today, DSU stands as India's boldest academic experiment: <strong className="text-[#002366]">an AI-First University</strong> that mandates artificial intelligence across every program — not as an elective, but as a core lens for the 21st century.</p>
            </div>
          </div>
          <div className="relative h-[500px]">
            <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" alt="DSU Campus" className="w-full h-full object-cover rounded-3xl shadow-2xl" />
            <div className="absolute -bottom-6 -left-6 bg-[#002366] text-white p-7 rounded-2xl shadow-xl max-w-xs">
              <p className="text-4xl font-black text-dsu-gold">70+</p>
              <p className="text-sm text-blue-200">Years Shaping India's<br />Brightest Minds</p>
            </div>
          </div>
        </motion.section>

        {/* Values */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3 text-center">Our Core Values</h2>
          <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-white border border-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-dsu-gold/30 hover:-translate-y-1 transition-all text-center">
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="font-bold text-[#002366] text-lg mb-3">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">A Legacy of Milestones</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dsu-gold via-[#002366] to-transparent hidden md:block" />
            <div className="space-y-6 md:pl-16">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="group relative flex items-start gap-5 bg-white border border-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-dsu-gold/30 transition-all">
                  <div className="hidden md:block absolute -left-10 w-5 h-5 rounded-full bg-dsu-gold border-4 border-white shadow-md shrink-0 top-7" />
                  <div className="shrink-0 bg-[#002366] text-dsu-gold font-black text-lg px-4 py-2 rounded-xl min-w-[80px] text-center">{m.year}</div>
                  <p className="text-gray-600 leading-relaxed font-medium pt-2">{m.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schools */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3 text-center">Our Schools & Disciplines</h2>
          <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SCHOOLS.map((school, i) => (
              <motion.div key={school.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all h-52">
                <img src={school.image} alt={school.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/90 via-[#002366]/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-3xl mb-2">{school.icon}</span>
                  <h3 className="font-serif font-bold text-white text-base leading-snug mb-1">{school.name}</h3>
                  <p className="text-xs text-dsu-gold font-bold">{school.programs}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="bg-[#002366] rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-serif font-bold mb-4">Be Part of the DSU Story</h3>
          <p className="text-blue-100/80 max-w-xl mx-auto mb-8">25,000+ students already call DSU home. Your chapter starts with a single click.</p>
          <Link href="/apply" className="inline-flex items-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm">
            Apply for Admission <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
