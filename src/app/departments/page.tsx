"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ChevronRight, BookOpen } from "lucide-react";

export default function DepartmentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const departments = [
    { id: "cse", name: "Computer Science & Engineering", focus: "AI, ML, Cybersecurity", icon: "💻" },
    { id: "ai-robotics", name: "Artificial Intelligence & Robotics", focus: "Robotics, Autonomy, Neural Networks", icon: "🤖" },
    { id: "ece", name: "Electronics & Communication", focus: "IoT, VLSI, Signal Processing", icon: "📡" },
    { id: "mech", name: "Mechanical Engineering", focus: "Advanced Manufacturing, Thermal", icon: "⚙️" },
    { id: "bio", name: "Biotechnology", focus: "Genetics, Pharma, Bio-informatics", icon: "🧬" },
    { id: "business", name: "Management & Commerce", focus: "Finance, Marketing, Analytics", icon: "📊" },
    { id: "law", name: "School of Law", focus: "Constitutional, Corporate Law", icon: "⚖️" },
  ];

  const filtered = departments.filter((d) => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.focus.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Profile */}
      <div className="w-full bg-dsu-navy text-white py-20 px-6 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2970&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Explore Our Departments</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Discover a world of academic excellence across specialized disciplines carefully curated to foster innovation and leadership.
          </p>

          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search by department name or focus area..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-4 rounded-xl text-dsu-navy shadow-lg text-lg focus:outline-none focus:ring-4 focus:ring-dsu-gold/50 transition-all font-medium"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((dept, i) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/departments/${dept.id}`}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full transform hover:-translate-y-1">
                  <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:bg-dsu-gold/10 transition-colors">
                    {dept.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-dsu-navy mb-3 group-hover:text-dsu-gold transition-colors">{dept.name}</h3>
                  <p className="text-gray-600 mb-8 flex-1 font-medium">{dept.focus}</p>
                  
                  <div className="flex items-center text-dsu-navy font-bold text-sm tracking-wide uppercase mt-auto">
                    Explore Department
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700">No departments found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
