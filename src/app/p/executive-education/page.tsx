"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight, Phone, Mail, Trophy, Star } from "lucide-react";

const RANKINGS = [
  { rank: "#12", desc: "Emerging Best B-Schools in India", by: "The Week / Hansa Research 2021" },
  { rank: "#61", desc: "National Overall B-School Ranking", by: "Business World 2023" },
  { rank: "#43", desc: "Top Private B-Schools in India", by: "Business World (Private Category)" },
  { rank: "#17", desc: "Best B-Schools in South India", by: "Business World South Rankings" },
  { rank: "#6", desc: "Best B-School in South India", by: "Silicon India B-School Survey" },
  { rank: "#4", desc: "Best for Industry Engagement in Bengaluru", by: "Silicon India 2021" },
];

export default function ExecutiveEducationPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero Banner */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-0 shadow-2xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          alt="Executive Education"
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
            <span className="text-white">Executive Education</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight"
          >
            Executive MBA
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-medium">
            Crafted for the working professional. DSU's Executive MBA is a rigorous, industry-integrated postgraduate program that accelerates your leadership trajectory without pausing your career.
          </p>
        </div>
      </div>

      {/* March 2026 Batch Alert Banner */}
      <div className="w-full bg-dsu-gold text-[#002366] py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-bold text-sm md:text-base tracking-wide text-center md:text-left">
            🎓 Applications to the <strong>March 2026 Executive MBA Batch</strong> are now open! Ranked A++ by B-School Survey.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a href="tel:+919972598981" className="flex items-center gap-2 bg-[#002366] text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-white hover:text-[#002366] transition-all">
              <Phone className="w-4 h-4" /> Aravind N.V. — 9972598981
            </a>
            <a href="mailto:aravind.nv@dsu.edu.in" className="flex items-center gap-2 bg-[#002366]/10 border-2 border-[#002366] text-[#002366] text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-[#002366] hover:text-white transition-all">
              <Mail className="w-4 h-4" /> aravind.nv@dsu.edu.in
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24 mt-20">

        {/* About DSU Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#002366] font-bold mb-6">About Us</h2>
            <div className="w-16 h-1.5 bg-dsu-gold rounded mb-8" />
            <div className="space-y-5 text-gray-500 text-lg leading-relaxed">
              <p>
                Dayananda Sagar University, a part of the larger Dayananda Sagar Group of Institutions, was set up with an ethos of providing quality education to every Indian who aspires to pursue higher education.
              </p>
              <p>
                Dayananda Sagar Institutions was founded by late Sri Dayananda Sagar at a time when educational opportunities were limited and difficult to access. With a legacy of close to <strong className="text-[#002366]">seventy years</strong>, the group stands out as an inspiration and a beacon of success in educational entrepreneurship.
              </p>
              <p>
                The university strives to create and innovate, and comes with wonderful infrastructure — innovation centers, laboratories, incubation centers, and a start-up ecosystem that is unparalleled. <strong className="text-[#002366]">Executive Education</strong> is an important vertical for the university, catering to the working professional.
              </p>
            </div>
          </div>
          <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
              alt="Executive MBA Classroom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white font-bold text-xl font-serif drop-shadow-lg">"A private university that is a shining example of great vision and good governance."</p>
            </div>
          </div>
        </motion.section>

        {/* Images Break */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-5"
        >
          <img src="https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80" alt="MBA Networking" className="w-full h-56 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" alt="Executive Meeting" className="w-full h-56 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team Strategy" className="w-full h-56 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
        </motion.div>

        {/* B-School Rankings Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-dsu-gold/10 border border-dsu-gold/30 px-5 py-2 rounded-full mb-6">
              <Trophy className="w-5 h-5 text-dsu-gold" />
              <span className="text-sm font-bold text-[#002366] uppercase tracking-widest">National Recognition</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif text-[#002366] font-bold mb-4">B-School Rankings & Awards</h2>
            <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RANKINGS.map((r, i) => (
              <motion.div
                key={r.desc}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group bg-white border border-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-dsu-gold/40 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Star className="w-6 h-6 text-dsu-gold shrink-0 mt-1" />
                  <span className="text-5xl font-black text-[#002366]">{r.rank}</span>
                </div>
                <p className="font-bold text-[#002366] text-base mb-2 leading-snug">{r.desc}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold">{r.by}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Proud Moment Quote Block */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
              alt="Proud Moment - Award Ceremony"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#002366]/40" />
          </div>
          <div>
            <div className="w-2 h-24 bg-dsu-gold rounded-full inline-block mr-4 align-top mt-1 shrink-0 float-left" />
            <h3 className="text-2xl md:text-3xl font-serif text-[#002366] font-bold mb-6">A Proud Moment for DSU</h3>
            <p className="text-gray-500 leading-relaxed text-lg mb-6">
              Dayananda Sagar University's SCMS (PG) has been ranked as <strong className="text-[#002366]">#12 among Emerging Best B-Schools in India</strong> by The Week / Hansa Research Best Business School Ranking Survey 2021.
            </p>
            <p className="text-gray-500 leading-relaxed text-lg mb-6">
              This is a huge achievement for a fledgling B-School and is a testimony to the efforts of our faculty, staff, management, founders, students, and alumni. <strong className="text-[#002366]">We are in brilliant company with a few of the new IIMs.</strong>
            </p>
            <p className="text-gray-500 leading-relaxed">
              The school has also been ranked <strong className="text-[#002366]">6th Best B-School in South India</strong> and <strong className="text-[#002366]">4th Best Business School for Industry Engagement in Bengaluru</strong> by Silicon India.
            </p>
          </div>
        </motion.section>

        {/* Business World Ranking Highlight */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#002366] rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 bg-dsu-gold/20 border border-dsu-gold/30 px-4 py-1.5 rounded-full text-dsu-gold text-xs font-bold uppercase tracking-widest mb-8 self-start">
                <Trophy className="w-4 h-4" /> Business World 2023
              </div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Ranked Among Top 50 Private B-Schools in India</h3>
              <p className="text-blue-100/80 leading-relaxed mb-8">
                Business World ranked DSU's B-School <strong className="text-dsu-gold">#61 nationally</strong> out of 146 eligible B-Schools. Among private B-Schools, we rank <strong className="text-dsu-gold">#43 of 163</strong> nationally and <strong className="text-dsu-gold">#17 of 54</strong> in South India.
              </p>
              <Link href="/apply" className="inline-flex items-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white transition-all shadow-lg text-sm self-start">
                Apply for March 2026 Batch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80"
                alt="Business Excellence"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#002366]/30" />
            </div>
          </div>
        </motion.section>

        {/* Contact Card */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-dsu-gold/20 rounded-3xl p-12 shadow-xl text-center"
        >
          <h3 className="text-2xl font-serif text-[#002366] font-bold mb-2">Program Details & Admissions</h3>
          <p className="text-gray-500 mb-8">Contact our Executive Education coordinator directly for program details, batch schedules, and admission queries.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">Deputy Director</span>
              <span className="text-xl font-bold text-[#002366]">Aravind N.V.</span>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <a href="tel:+919972598981" className="flex items-center gap-2 bg-[#002366] text-white px-6 py-3 rounded-xl font-bold hover:bg-dsu-gold hover:text-[#002366] transition-all">
              <Phone className="w-4 h-4" /> +91 9972598981
            </a>
            <a href="mailto:aravind.nv@dsu.edu.in" className="flex items-center gap-2 border-2 border-[#002366] text-[#002366] px-6 py-3 rounded-xl font-bold hover:bg-[#002366] hover:text-white transition-all">
              <Mail className="w-4 h-4" /> aravind.nv@dsu.edu.in
            </a>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
