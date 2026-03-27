"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, Calendar, Phone, Mail, AlertCircle, Clock } from "lucide-react";

const TIMETABLE = [
  { date: "May 5, 2026", day: "Monday", subjects: ["Engineering Mathematics – IV (B.Tech Sem 8)", "Business Law (BBA Sem 6)", "Organic Chemistry – II (B.Sc Sem 6)"] },
  { date: "May 7, 2026", day: "Wednesday", subjects: ["Data Structures & Algorithms (B.Tech Sem 4)", "Financial Accounting (B.Com Sem 4)", "Anatomy – III (MBBS Sem 3)"] },
  { date: "May 9, 2026", day: "Friday", subjects: ["Computer Networks (B.Tech Sem 6)", "Marketing Management (MBA Sem 2)", "Pharmacology (B.Pharm Sem 6)"] },
  { date: "May 12, 2026", day: "Monday", subjects: ["Operating Systems (B.Tech/BCA)", "Human Resource Management (MBA)", "Law of Torts (LLB Sem 4)"] },
  { date: "May 14, 2026", day: "Wednesday", subjects: ["Machine Learning (B.Tech/M.Tech)", "Strategic Management (MBA Sem 4)", "Bioinformatics (M.Sc Sem 2)"] },
  { date: "May 16, 2026", day: "Friday", subjects: ["VLSI Design (ECE Sem 8)", "Taxation Law (B.Com/LLB)", "Research Methodology (All PG)"] },
  { date: "May 19, 2026", day: "Monday", subjects: ["Embedded Systems (ECE/Mech)", "Entrepreneurship & Innovation (MBA)", "Microbiology Lab (B.Sc Sem 4)"] },
  { date: "May 21, 2026", day: "Wednesday", subjects: ["Artificial Intelligence (CSE/AI Sem 6)", "Corporate Finance (MBA Sem 2)", "Constitutional Law (LLB Sem 6)"] },
  { date: "May 23, 2026", day: "Friday", subjects: ["Project Work & Viva Voce (Final Year)", "Internship Report Submission", "Seminar Presentations (PG)"] },
];

const CONTACTS = [
  { role: "Controller of Examinations", name: "Dr. Ramakrishna Rao", phone: "080 4909 2940", email: "coe@dsu.edu.in" },
  { role: "Dy. Controller – UG Programs", name: "Dr. Meena Pillai", phone: "080 4909 2941", email: "ug.exams@dsu.edu.in" },
  { role: "Dy. Controller – PG Programs", name: "Dr. Vinod Shetty", phone: "080 4909 2942", email: "pg.exams@dsu.edu.in" },
  { role: "Exam Cell – Main Campus", name: "Administrative Officer", phone: "080 24496999 (Extn-12)", email: "exams.main@dsu.edu.in" },
];

const GUIDELINES = [
  "Students must carry their Hall Ticket and University ID for every examination.",
  "Entry is not permitted 15 minutes after the exam commences.",
  "Use of mobile phones or electronic devices is strictly prohibited in the examination hall.",
  "Blue or black ink pens only. Pencils permitted only for diagrams and graphs.",
  "Students engaging in malpractice will face strict disciplinary action as per DSU regulations.",
  "Results will be declared within 30 working days of the last exam date.",
  "Revaluation applications must be submitted within 15 days of result declaration.",
];

export default function ExaminationsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">
      {/* Hero */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80" alt="Examinations" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white flex items-center gap-2"><Home className="w-4 h-4" /> Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">Examinations</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight">
            Examination Cell
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            Tentative Even Semester 2026 timetable, exam guidelines, and direct contacts for the Controller of Examinations office.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Alert Banner */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-start gap-4 bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 shadow-sm">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-amber-800 mb-1">Tentative Schedule — Even Semester Examinations 2026</p>
            <p className="text-sm text-amber-700">The dates below are provisional. Students are advised to check the official DSU noticeboard and the student portal regularly for updates. Hall tickets will be issued 10 days before the exam.</p>
          </div>
        </motion.div>

        {/* Timetable */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-7 h-7 text-dsu-gold" />
            <h2 className="text-3xl font-serif text-[#002366] font-bold">Even Semester Timetable – May 2026</h2>
          </div>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />

          <div className="space-y-4">
            {TIMETABLE.map((row, i) => (
              <motion.div key={row.date} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white border border-blue-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                <div className="flex flex-col md:flex-row">
                  {/* Date column */}
                  <div className="bg-[#002366] text-white px-8 py-6 flex flex-col justify-center items-center md:w-48 shrink-0">
                    <p className="text-3xl font-black text-dsu-gold leading-none">{row.date.split(" ")[1].replace(",","")}</p>
                    <p className="text-sm font-bold text-blue-200 uppercase tracking-widest">{row.date.split(" ")[0]}</p>
                    <p className="text-xs text-blue-300 mt-1">{row.day}</p>
                  </div>
                  {/* Subjects */}
                  <div className="flex-1 p-6 flex flex-col gap-3 justify-center">
                    {row.subjects.map((subj, si) => (
                      <div key={subj} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-dsu-gold/10 text-dsu-gold rounded-full flex items-center justify-center text-xs font-black shrink-0 mt-0.5">{si+1}</span>
                        <p className="text-sm font-semibold text-gray-700">{subj}</p>
                      </div>
                    ))}
                  </div>
                  {/* Time badge */}
                  <div className="flex items-center justify-center px-6 py-4 md:border-l border-gray-50">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-dsu-gold mx-auto mb-1" />
                      <p className="text-xs font-bold text-[#002366]">10:00 AM</p>
                      <p className="text-[10px] text-gray-400">3 Hours</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Key Dates Bar */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { label: "Hall Ticket Release", date: "Apr 25, 2026" },
            { label: "Exams Begin", date: "May 5, 2026" },
            { label: "Exams End", date: "May 23, 2026" },
            { label: "Results Declared", date: "Jun 25, 2026" },
          ].map((kd, i) => (
            <div key={kd.label} className="bg-[#002366] text-white rounded-2xl p-6 text-center shadow-xl">
              <p className="text-xl font-black text-dsu-gold mb-2">{kd.date}</p>
              <p className="text-xs text-blue-200 uppercase tracking-widest font-semibold">{kd.label}</p>
            </div>
          ))}
        </motion.section>

        {/* Exam Guidelines */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-4">Examination Guidelines</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="bg-white border border-blue-50 rounded-2xl shadow-sm overflow-hidden">
            {GUIDELINES.map((rule, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 ${i < GUIDELINES.length - 1 ? "border-b border-gray-50" : ""}`}>
                <span className="text-dsu-gold font-black text-lg shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contacts */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-4">Exam Cell Contacts</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTACTS.map((c, i) => (
              <motion.div key={c.role} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-blue-50 rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all">
                <p className="text-xs font-bold text-dsu-gold uppercase tracking-widest mb-2">{c.role}</p>
                <h3 className="font-bold text-[#002366] text-lg mb-5">{c.name}</h3>
                <div className="space-y-2">
                  <a href={`tel:${c.phone.replace(/\s|\(.*?\)/g,"")}`} className="flex items-center gap-2 text-sm text-[#002366] font-bold hover:text-dsu-gold transition-colors">
                    <Phone className="w-4 h-4 text-dsu-gold shrink-0" /> {c.phone}
                  </a>
                  <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-sm text-dsu-gold hover:underline">
                    <Mail className="w-4 h-4 shrink-0" /> {c.email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
