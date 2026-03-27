"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight, Download, CheckCircle2 } from "lucide-react";

const STATS = [
  { value: "NAAC", label: "Approved" },
  { value: "UGC", label: "Entitled" },
  { value: "100+", label: "Industry Programs" },
  { value: "10,000+", label: "Global Alumni" },
  { value: "700+", label: "Placement Partners" },
  { value: "35+ LPA", label: "Highest Package" },
];

const PROGRAMS = [
  {
    code: "MBA",
    title: "Master of Business Administration",
    tag: "Fully Online • 2 years",
    fee: "INR 30,000 / semester",
    desc: "Strategic Leadership and Global Business management fundamentals aligned with C-suite career trajectories.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
  },
  {
    code: "MCA",
    title: "Master of Computer Applications",
    tag: "Fully Online • 2 years",
    fee: "INR 30,000 / semester",
    desc: "AI, Cyber Security, and Cloud Engineering with deep technical specialization and enterprise capstone tracks.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
  },
  {
    code: "BBA",
    title: "Bachelor of Business Administration",
    tag: "Fully Online • 3 years",
    fee: "INR 20,000 / semester",
    desc: "Digital Marketing, Supply Chain Management, and Business Analytics for the modern startup and enterprise era.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
  },
  {
    code: "BCA",
    title: "Bachelor of Computer Applications",
    tag: "Fully Online • 3 years",
    fee: "INR 20,000 / semester",
    desc: "Build Apps with AI, Cloud, and Full-Stack Tech. Focused on real-world product engineering and startup readiness.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80",
  },
  {
    code: "B.Com",
    title: "Bachelor of Commerce",
    tag: "Fully Online • 3 years",
    fee: "INR 20,000 / semester",
    desc: "Accounting, Finance, Taxation, and Analytics — built for CPA, CA, and CFO pathways at scale.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
  },
];

const WHY_CHOOSE = [
  { title: "A culture of ethics and compassion", desc: "Fostering a culture rooted in ethics and compassion, shaping responsible professionals through career-focused online degree programs." },
  { title: "Cutting-edge digital resources", desc: "Leveraging advanced digital infrastructure to deliver seamless learning experiences through flexible online degree courses." },
  { title: "24×7 Chat Support", desc: "Providing round-the-clock assistance to support learners, ensuring a smooth online degree application process." },
  { title: "Top-notch faculty and leadership", desc: "Guided by expert faculty and experienced leadership, delivering high-quality online university degrees aligned with global academic standards." },
  { title: "A dedicated placement cell", desc: "Supporting career success by connecting students with real-world opportunities through our industry-wide recruitment network." },
  { title: "Skill development beyond academics", desc: "Empowering learners with industry-relevant skills, practical exposure, and future-ready competencies beyond coursework." },
  { title: "A legacy of excellence", desc: "Building a legacy of excellence, delivering trusted online degree programs that empower learners in the digital era." },
  { title: "Diverse, well-crafted programs", desc: "Offering diverse online college degree programs at UG and PG levels, designed to meet evolving industry demands." },
];

export default function OnlineEducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero Banner */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
          alt="Online Education"
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
            <span className="text-white">Online Education</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight"
          >
            DSU Online
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-medium">
            One of India's best online universities — offering UGC-entitled, industry-relevant online degrees with world-class faculty, 24×7 support, and a dedicated placement cell.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* About Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#002366] font-bold mb-6">About DSU Online</h2>
            <div className="w-16 h-1.5 bg-dsu-gold rounded mb-8" />
            <p className="text-gray-500 leading-relaxed text-lg mb-6">
              A true visionary, late Sri Dayananda Sagar, founded Dayananda Sagar Institutions in the 1960s. Dayananda Sagar University (DSU) was created by an Act of the Karnataka State in 2014, rooted in its glorious legacy and inspired by its milestones.
            </p>
            <p className="text-gray-500 leading-relaxed text-lg">
              Our aim of meeting the needs of quality higher education continues with DSU Online — bringing a meticulously planned curriculum, world-class faculty, and quality learning tools to online degree courses, enabling students from diverse walks of life to experience the same academic excellence as our on-campus community.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
              alt="Online Learning"
              className="w-full h-80 object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#002366] text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-bold text-dsu-gold">2014</p>
              <p className="text-sm text-blue-100">Karnataka State Enacted</p>
            </div>
          </div>
        </motion.section>

        {/* Stats Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-serif text-[#002366] font-bold text-center mb-3">Our Story in Numbers</h2>
          <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#002366] text-white rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform"
              >
                <p className="text-2xl md:text-3xl font-bold text-dsu-gold mb-2">{stat.value}</p>
                <p className="text-xs text-blue-100 uppercase tracking-widest font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Online Programs */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold text-center mb-3">Online Degree Programs Offered</h2>
          <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROGRAMS.map((prog, i) => (
              <motion.div
                key={prog.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-white rounded-3xl overflow-hidden border border-blue-50 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/90 via-[#002366]/40 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <span className="text-4xl font-black text-dsu-gold drop-shadow-lg">{prog.code}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-dsu-gold uppercase tracking-widest bg-dsu-gold/10 px-3 py-1 rounded-full">{prog.tag}</span>
                  <h3 className="text-lg font-serif font-bold text-[#002366] mt-4 mb-1">{prog.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{prog.desc}</p>
                  <p className="text-sm font-bold text-gray-400 mb-6">Sem Fees: <span className="text-[#002366]">{prog.fee}</span></p>
                  <div className="flex gap-3">
                    <Link href="/apply" className="flex-1 flex items-center justify-center gap-2 bg-[#002366] text-white text-xs font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-dsu-gold hover:text-[#002366] transition-all">
                      Apply <ArrowRight className="w-3 h-3" />
                    </Link>
                    <a
                      href="https://dsu.edu.in/images/Admission/brochures/2025/DSU_Main_Campus_Programs_2025.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 border-2 border-[#002366] text-[#002366] text-xs font-bold uppercase tracking-widest py-3 rounded-xl hover:bg-[#002366] hover:text-white transition-all"
                    >
                      <Download className="w-3 h-3" /> Brochure
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose DSU */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold text-center mb-3">Why Choose DSU Online?</h2>
          <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white border border-blue-50 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-dsu-gold/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <CheckCircle2 className="w-8 h-8 text-dsu-gold mb-4" />
                <h3 className="font-bold text-[#002366] mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#002366] rounded-3xl p-12 text-white text-center shadow-2xl"
        >
          <h3 className="text-3xl font-serif font-bold mb-4">Start Your Online Degree Journey</h3>
          <p className="text-blue-100/80 max-w-xl mx-auto mb-8">NAAC approved. UGC entitled. Industry-aligned. Join thousands of learners who chose DSU Online for their higher education goals.</p>
          <Link href="/apply" className="inline-flex items-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm">
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
