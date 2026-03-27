"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Phone, Mail, MapPin, Award } from "lucide-react";
import Link from "next/link";

export default function DepartmentTemplate() {
  const { slug } = useParams();
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  // Template Data Placeholder
  const departmentName = slug?.toString().replace(/-/g, " ").toUpperCase() || "DEPARTMENT NAME";
  
  const curriculum = [
    { title: "Core Computational Intelligence", desc: "Foundational algorithms encompassing deep learning, NLP, and intelligent agents." },
    { title: "Systems & Architecture", desc: "Advanced hardware design, embedded systems, and scalable network infra." },
    { title: "Applied Robotics", desc: "Kinematics, dynamics, and autonomous navigation for modern robotic paradigms." }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <div className="relative bg-dsu-navy text-white pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-dsu-navy via-dsu-navy/90 to-transparent" />
          <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2970&auto=format&fit=crop" alt="Department Lab" className="w-full h-full object-cover mix-blend-overlay opacity-30" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1 bg-dsu-gold text-dsu-navy font-bold text-xs tracking-widest uppercase rounded-full mb-6 shadow-lg">
            School of Engineering
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 tracking-tight max-w-4xl leading-tight">
            {departmentName}
          </h1>
          <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl leading-relaxed">
            Empowering the next generation of technologists and innovators to solve complex global challenges.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Main Content (Left) */}
        <div className="lg:col-span-2 space-y-20">
          
          <section>
            <h2 className="text-3xl font-serif text-dsu-navy font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-dsu-gold"></span>
              About & Vision
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p>The highly distinguished department focuses on advanced methodologies and cutting-edge operational frameworks. Our comprehensive mandate ensures that students achieve complete fluency in theoretical postulates combined with hands-on industrial practice.</p>
              <p>Our vision is to become a globally recognized center of excellence via proactive engagement with modern enterprise strategies and advanced societal needs.</p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-dsu-navy font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-dsu-gold"></span>
              Programs & Curriculum
            </h2>
            <div className="space-y-4">
              {curriculum.map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button 
                    onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-bold text-lg text-dsu-navy">{item.title}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeAccordion === i ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {activeAccordion === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-6 pb-6 text-gray-600"
                      >
                        <div className="pt-4 border-t border-gray-100">
                          {item.desc}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-dsu-navy font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-dsu-gold"></span>
              Faculty Profiles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="group relative rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm p-6 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?img=${10+i}`} alt="Faculty" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h4 className="text-xl font-bold text-dsu-navy mb-1 group-hover:text-dsu-gold transition-colors">Dr. Jane Doe {i}</h4>
                  <p className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wider">Professor & Head</p>
                  <p className="text-sm text-gray-600 line-clamp-2">Specializing in autonomous systems algorithms and deep learning implementations for high-scale environments.</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-dsu-navy font-bold mb-8 flex items-center gap-4">
              <span className="w-8 h-1 bg-dsu-gold"></span>
              Labs & Research
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="h-64 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" alt="Lab 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dsu-navy/90 to-transparent flex items-end p-6">
                  <h4 className="text-white font-bold text-xl">Advanced Robotics Lab</h4>
                </div>
              </div>
              <div className="h-64 rounded-2xl overflow-hidden relative group">
                <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80" alt="Lab 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-dsu-navy/90 to-transparent flex items-end p-6">
                  <h4 className="text-white font-bold text-xl">Biomedical Engineering Unit</h4>
                </div>
              </div>
            </div>
          </section>

        </div>

        {/* Sidebar (Right) */}
        <div className="lg:col-span-1 border-l border-gray-200 pl-0 lg:pl-12">
          <div className="sticky top-40 space-y-10">
            
            {/* CTA Box */}
            <div className="bg-dsu-navy text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-serif text-2xl font-bold mb-4">Interested in {departmentName}?</h3>
              <p className="text-sm text-gray-300 mb-8 leading-relaxed">
                Reach out directly to our HOD or admissions counselor for detailed insights into our curriculum infrastructure.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-dsu-gold" />
                  <span>+91 96060 22149</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-dsu-gold" />
                  <span>hod.dept@dsu.edu.in</span>
                </div>
              </div>
              
              <Link href="#" className="flex items-center justify-center gap-2 bg-dsu-gold text-dsu-navy py-4 px-6 rounded-xl font-bold hover:bg-white hover:-translate-y-1 transition-all">
                Contact HOD
              </Link>
            </div>

            {/* Achievements Box */}
            <div className="bg-white border text-dsu-navy p-8 rounded-2xl shadow-sm">
              <h3 className="font-serif text-xl font-bold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-dsu-gold" />
                Department Laurels
              </h3>
              <ul className="space-y-4 text-sm text-gray-600 font-medium">
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-dsu-gold mt-1.5 shrink-0" />
                  <span>Secured Top 10 Ranking in AICTE National Matrix</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-dsu-gold mt-1.5 shrink-0" />
                  <span>Granted $2M for state-of-the-art incubation cluster</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-dsu-gold mt-1.5 shrink-0" />
                  <span>Over 150+ filed patents by core faculties in the last decade</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
