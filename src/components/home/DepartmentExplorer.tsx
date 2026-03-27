"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, FlaskConical, Users, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const DEPARTMENTS = ["Engineering", "Business", "Design & Arts", "Health Sciences"];

const FACULTY_MEMBERS = [
  { name: "Dr. Arvind Sharma", role: "HOD, Computer Science", dept: "Engineering", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop" },
  { name: "Prof. Neha Gupta", role: "Director, AI Lab", dept: "Engineering", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop" },
  { name: "Dr. Rajesh Iyer", role: "Dean of Business", dept: "Business", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" },
  { name: "Prof. Priya Desai", role: "Professor of Design", dept: "Design & Arts", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop" },
];

const LABS = [
  { name: "Quantum Computing Lab", dept: "Engineering", desc: "Next-gen computing research facility." },
  { name: "FinTech Innovation Hub", dept: "Business", desc: "Intersecting finance with blockchain." },
  { name: "Creative Media Studio", dept: "Design & Arts", desc: "State-of-the-art AR/VR lab." },
  { name: "AI Health Diagnostics", dept: "Health Sciences", desc: "AI-driven medical research." },
];

export function DepartmentExplorer() {
  const [activeTab, setActiveTab] = useState("Engineering");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaculty = FACULTY_MEMBERS.filter(
    (f) =>
      f.dept === activeTab &&
      (f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.role.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const filteredLabs = LABS.filter(
    (l) =>
      l.dept === activeTab &&
      (l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.desc.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-24 bg-white text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-dsu-navy mb-4">
            Department Explorer
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl font-light">
            Discover our world-class faculties, cutting-edge research laboratories, and the vision driving our academic excellence.
          </p>
        </div>

        {/* Controls: Search and Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2 scrollbar-hide">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveTab(dept)}
                className={cn(
                  "px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 font-medium text-sm",
                  activeTab === dept
                    ? "bg-dsu-navy text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search faculty or labs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-dsu-navy/20 focus:border-dsu-navy transition-all"
            />
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          >
            {/* Vision / Mission */}
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100">
                <h3 className="text-xl font-serif text-dsu-navy mb-4 flex items-center gap-2">
                  <div className="w-8 h-[1px] bg-dsu-gold" /> Vision & Mission
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  The {activeTab} department is committed to pioneering research
                  and developing innovative leaders ready to tackle global challenges
                  through integrated, technology-driven education.
                </p>
              </div>
              
              <div className="p-8 rounded-3xl bg-dsu-navy text-white">
                <h3 className="text-2xl font-serif mb-2">Join {activeTab}</h3>
                <p className="text-white/70 text-sm mb-6">Explore admissions criteria and program specifics.</p>
                <button className="flex items-center gap-2 text-dsu-gold hover:translate-x-2 transition-transform">
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Profiles and Labs Grid */}
            <div className="lg:col-span-2 space-y-12">
              {/* Faculty Section */}
              <div>
                <h3 className="text-2xl font-serif text-dsu-navy mb-6 flex items-center gap-3">
                  <Users className="w-6 h-6 text-dsu-gold" /> Distinguished Faculty
                </h3>
                {filteredFaculty.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredFaculty.map((faculty, idx) => (
                      <motion.div
                        key={idx}
                        className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
                        whileHover="hover"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={faculty.img}
                          alt={faculty.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dsu-navy/90 via-dsu-navy/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6">
                          <h4 className="text-white font-serif text-xl mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            {faculty.name}
                          </h4>
                          <p className="text-dsu-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                            {faculty.role}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 font-light">No faculty found matching the search.</p>
                )}
              </div>

              {/* Research Labs */}
              <div>
                <h3 className="text-2xl font-serif text-dsu-navy mb-6 flex items-center gap-3">
                  <FlaskConical className="w-6 h-6 text-dsu-gold" /> Research Laboratories
                </h3>
                {filteredLabs.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredLabs.map((lab, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-2xl border border-gray-100 hover:border-dsu-gold/30 hover:shadow-xl transition-all duration-300 bg-white group cursor-pointer"
                      >
                        <h4 className="text-lg font-semibold text-dsu-navy mb-2 group-hover:text-dsu-gold transition-colors">
                          {lab.name}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {lab.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 font-light">No labs found matching the search.</p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
