"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, FlaskConical, Award, BookOpen, Building2, ArrowRight } from "lucide-react";

const STATS = [
  { value: "850+", label: "Research Papers Published" },
  { value: "120+", label: "Patents Filed" },
  { value: "47", label: "Patents Granted" },
  { value: "₹28 Cr+", label: "Research Grants Received" },
  { value: "35+", label: "International Collaborations" },
  { value: "18", label: "Active PhD Labs" },
];

const RECOGNITIONS = [
  { body: "DST – Dept. of Science & Technology", award: "FIST Programme Recognition", year: "2023" },
  { body: "SERB – Govt. of India", award: "Core Research Grant (CRG)", year: "2022" },
  { body: "ICMR – Indian Council of Medical Research", award: "Biomedical Research Collaboration", year: "2023" },
  { body: "AICTE – All India Council", award: "Research Promotion Scheme", year: "2021" },
  { body: "IEEE India Council", award: "Outstanding Research Lab Certificate", year: "2022" },
  { body: "CSIR – Council of Scientific & Industrial Research", award: "Collaborative Research Network Member", year: "2023" },
];

const PARTNERSHIPS = [
  { type: "International", partners: ["TU Berlin – Germany", "Coventry University – UK", "Manipal Global – USA", "Nanyang Tech – Singapore", "KAIST – South Korea", "Kyoto University – Japan"] },
  { type: "National", partners: ["IISc Bangalore", "IIT Bombay", "NIMHANS", "ISRO Satellite Centre", "C-DAC Bangalore", "HAL – Hindustan Aeronautics"] },
];

const LABS = [
  { name: "Centre for AI & Deep Learning", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80", desc: "NVIDIA DGX A100 GPUs, Large Language Model training infrastructure, and federated learning research." },
  { name: "Quantum Computing Lab", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80", desc: "IBM Q-System access, quantum circuit simulation, and post-quantum cryptography research division." },
  { name: "Biomedical & Genomics Lab", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80", desc: "Next-generation sequencing equipment, CRISPR research cells, and translational medicine focus." },
  { name: "Robotics & Autonomous Systems", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80", desc: "6-axis robotic arms, swarm robotics platforms, drone navigation rigs and embedded SLAM research." },
];

const NOTABLE_PATENTS = [
  { title: "AI-Driven Predictive Maintenance System for Industrial IoT", inventor: "Dr. Suresh Iyer, Dr. Priya Sharma", year: "2023", status: "Granted" },
  { title: "Novel Drug Delivery Mechanism Using Nano-Encapsulation", inventor: "Dr. Kavita Menon, Dr. Ramesh Nair", year: "2022", status: "Granted" },
  { title: "Federated Learning Framework for Privacy-Preserving Healthcare Analytics", inventor: "Dr. Anjali Deshmukh", year: "2023", status: "Filed" },
  { title: "Bio-Degradable Composite Material for Automotive Applications", inventor: "Dr. Rajesh Kulkarni, Dr. Mohan Pai", year: "2021", status: "Granted" },
  { title: "Autonomous Navigation Algorithm for GPS-Denied Environments", inventor: "Dr. Vikram Hegde", year: "2022", status: "Filed" },
  { title: "Smart Grid Load Balancing Using Reinforcement Learning", inventor: "Dr. Santhosh Kumar", year: "2023", status: "Granted" },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80" alt="Research" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white flex items-center gap-2"><Home className="w-4 h-4" /> Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">Research & Innovation</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight">
            Research & Innovation
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            DSU is India's fastest-growing research university — with 850+ publications, 47 patents granted, and ₹28 Crore+ in research funding across 18 active world-class labs.
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
                <p className="text-2xl md:text-3xl font-bold text-dsu-gold mb-2">{s.value}</p>
                <p className="text-xs text-blue-100 uppercase tracking-widest font-semibold leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Research Labs */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <FlaskConical className="w-7 h-7 text-dsu-gold" />
            <h2 className="text-3xl font-serif text-[#002366] font-bold">World-Class Research Facilities</h2>
          </div>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {LABS.map((lab, i) => (
              <motion.div key={lab.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-2xl overflow-hidden border border-blue-50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex">
                <div className="w-40 shrink-0 overflow-hidden">
                  <img src={lab.image} alt={lab.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="font-bold text-[#002366] text-base mb-2 leading-snug">{lab.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{lab.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Notable Patents */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-7 h-7 text-dsu-gold" />
            <h2 className="text-3xl font-serif text-[#002366] font-bold">Notable Patents & Publications</h2>
          </div>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {NOTABLE_PATENTS.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-white border border-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group hover:border-dsu-gold/30">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${p.status === "Granted" ? "bg-green-50 text-green-700 border border-green-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`}>
                    {p.status}
                  </span>
                  <span className="text-xs text-gray-400 font-bold shrink-0">{p.year}</span>
                </div>
                <h3 className="font-bold text-[#002366] text-sm leading-snug mb-2">{p.title}</h3>
                <p className="text-xs text-gray-400 font-medium">{p.inventor}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recognitions */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-7 h-7 text-dsu-gold" />
            <h2 className="text-3xl font-serif text-[#002366] font-bold">Recognitions & Funding Bodies</h2>
          </div>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RECOGNITIONS.map((r, i) => (
              <motion.div key={r.body} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-blue-50 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-dsu-gold/30 transition-all">
                <p className="text-xs text-dsu-gold font-black uppercase tracking-widest mb-3">{r.year}</p>
                <h3 className="font-bold text-[#002366] mb-1">{r.award}</h3>
                <p className="text-sm text-gray-400">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partnerships */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="w-7 h-7 text-dsu-gold" />
            <h2 className="text-3xl font-serif text-[#002366] font-bold">Research Partnerships</h2>
          </div>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNERSHIPS.map((group) => (
              <div key={group.type} className="bg-white border border-blue-50 rounded-2xl p-8 shadow-sm">
                <h3 className="font-bold text-[#002366] text-lg mb-6 pb-4 border-b border-gray-100 flex items-center gap-3">
                  <span className={`w-3 h-3 rounded-full ${group.type === "International" ? "bg-dsu-gold" : "bg-[#002366]"}`} />
                  {group.type} Partners
                </h3>
                <ul className="space-y-3">
                  {group.partners.map(p => (
                    <li key={p} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-dsu-gold shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#002366] rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-serif font-bold mb-4">Join DSU's Research Ecosystem</h3>
          <p className="text-blue-100/80 max-w-xl mx-auto mb-8">Apply for Ph.D., M.Tech research tracks, or post-doctoral fellowships at one of India's most vibrant research universities.</p>
          <Link href="/apply" className="inline-flex items-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm">
            Apply for Research Programs <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
