"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, BookOpen, Monitor, Wifi, Clock, Database, Users, ArrowRight } from "lucide-react";

const STATS = [
  { value: "1,20,000+", label: "Physical Books" },
  { value: "45,000+", label: "E-Journals & E-Books" },
  { value: "12", label: "Specialised Reading Zones" },
  { value: "600+", label: "Seating Capacity" },
  { value: "24×7", label: "Digital Access" },
  { value: "18", label: "Research Databases" },
];

const SECTIONS = [
  {
    name: "Main Reading Hall",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80",
    desc: "A 400-seat air-conditioned grand reading hall with natural lighting, ergonomic furniture, and pin-drop silence zones. Spread across two floors with open-stack access to 1.2 lakh curated volumes.",
  },
  {
    name: "Digital Resource Centre",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80",
    desc: "80 high-performance workstations with 1 Gbps fibre connectivity. Full IEEE Xplore, ScienceDirect, JSTOR, Springer, and EBSCO database access — available 24×7 with remote login.",
  },
  {
    name: "Group Discussion & Seminar Rooms",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
    desc: "8 soundproofed group study cabins (6–12 seaters) with 65\" smart displays, whiteboard walls, and HDMI connectivity — bookable via the DSU Library portal.",
  },
  {
    name: "Research & Thesis Section",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80",
    desc: "Dedicated zone for Ph.D. scholars and M.Tech researchers with exclusive access to DSU's institutional repository, 25,000+ thesis archives, and print-on-demand services.",
  },
  {
    name: "Students Studying",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
    desc: "Our library hosts over 1,500 student visits daily. An atmosphere of focused learning, collaborative research, and intellectual growth defines the DSU Library experience.",
  },
  {
    name: "Periodicals & Journal Section",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80",
    desc: "Physical subscriptions to 200+ national and international journals. Daily newspapers in 6 languages. Access to Nature, The Lancet, Science Direct, and Harvard Business Review.",
  },
];

const DATABASES = [
  { name: "IEEE Xplore", domain: "Engineering & Technology" },
  { name: "ScienceDirect (Elsevier)", domain: "Multidisciplinary Sciences" },
  { name: "JSTOR", domain: "Humanities & Social Sciences" },
  { name: "Springer Link", domain: "STEM Research" },
  { name: "EBSCO Host", domain: "Business & Management" },
  { name: "PubMed / MEDLINE", domain: "Biomedical & Health Sciences" },
  { name: "Shodhganga (UGC)", domain: "Indian Ph.D Thesis Repository" },
  { name: "ProQuest", domain: "Dissertations & Business Research" },
  { name: "Scopus (Elsevier)", domain: "Abstract & Citation Index" },
];

const SERVICES = [
  { icon: <Database className="w-5 h-5" />, title: "Remote Access", desc: "Access all e-resources from home via VPN-authenticated institutional login — 24 hours, 365 days." },
  { icon: <Monitor className="w-5 h-5" />, title: "OPAC System", desc: "Online Public Access Catalog to search, locate, and reserve books across all DSU campus libraries." },
  { icon: <Wifi className="w-5 h-5" />, title: "Campus WiFi Integration", desc: "Seamless 1 Gbps WiFi access within the library premises. No login required for on-campus students." },
  { icon: <Clock className="w-5 h-5" />, title: "Extended Hours", desc: "Library open 8AM–11PM on weekdays, 9AM–8PM on weekends. 24×7 digital access to all online resources." },
  { icon: <Users className="w-5 h-5" />, title: "Research Assistance Desk", desc: "Expert librarians and research assistants available to help with literature reviews and citation management." },
  { icon: <BookOpen className="w-5 h-5" />, title: "Book Bank Scheme", desc: "Free textbook lending for 1 full academic year for economically weaker section students." },
];

export default function LibraryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80" alt="Library" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white flex items-center gap-2"><Home className="w-4 h-4" /> Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">Library</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight">
            DSU Knowledge<br />Resource Centre
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            One of South India's most comprehensive academic libraries — 1.2 lakh books, 45,000+ e-resources, 9 global research databases, and a 600-seat reading infrastructure built for scholars.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* Stats */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {STATS.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-[#002366] text-white rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform">
                <p className="text-xl md:text-2xl font-bold text-dsu-gold mb-2">{s.value}</p>
                <p className="text-xs text-blue-100 uppercase tracking-widest font-semibold leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Library Sections — Image Cards */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Library Spaces & Sections</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTIONS.map((sec, i) => (
              <motion.div key={sec.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group bg-white rounded-2xl overflow-hidden border border-blue-50 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img src={sec.image} alt={sec.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/80 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-5 right-5 text-white font-serif font-bold text-lg drop-shadow-lg">{sec.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 leading-relaxed">{sec.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Research Databases */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Research Databases & E-Resources</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DATABASES.map((db, i) => (
              <motion.div key={db.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="flex items-start gap-4 bg-white border border-blue-50 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-dsu-gold/30 transition-all">
                <div className="w-10 h-10 bg-[#002366]/5 rounded-xl flex items-center justify-center shrink-0">
                  <Database className="w-5 h-5 text-dsu-gold" />
                </div>
                <div>
                  <p className="font-bold text-[#002366] text-sm">{db.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{db.domain}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Library Services</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group bg-white border border-blue-50 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-dsu-gold/30 transition-all">
                <div className="w-12 h-12 bg-[#002366]/5 rounded-xl flex items-center justify-center text-dsu-gold mb-5 group-hover:bg-dsu-gold group-hover:text-white transition-colors">
                  {s.icon}
                </div>
                <h3 className="font-bold text-[#002366] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Photo Strip */}
        <div className="grid grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" alt="Students studying" className="w-full h-56 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
          <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80" alt="Book stacks" className="w-full h-56 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" alt="Reading student" className="w-full h-56 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
        </div>

      </div>
    </main>
  );
}
