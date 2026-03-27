"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, ChevronRight, BookOpen } from "lucide-react";

export default function DepartmentsPage() {
  const departments = [
    { id: "cse", name: "Computer Science & Engineering", focus: "AI, ML, Cybersecurity", icon: "💻", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2940&auto=format&fit=crop" },
    { id: "ai-robotics", name: "Artificial Intelligence & Robotics", focus: "Robotics, Autonomy, Neural Networks", icon: "🤖", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop" },
    { id: "ece", name: "Electronics & Communication", focus: "IoT, VLSI, Signal Processing", icon: "📡", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2940&auto=format&fit=crop" },
    { id: "mech", name: "Mechanical Engineering", focus: "Advanced Manufacturing, Thermal", icon: "⚙️", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop" },
    { id: "bio", name: "Biotechnology", focus: "Genetics, Pharma, Bio-informatics", icon: "🧬", image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2940&auto=format&fit=crop" },
    { id: "business", name: "Management & Commerce", focus: "Finance, Marketing, Analytics", icon: "📊", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
    { id: "law", name: "School of Law", focus: "Constitutional, Corporate Law", icon: "⚖️", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2940&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      {/* Header Profile */}
      <div className="w-full bg-dsu-navy text-white py-20 px-6 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2970&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Explore Our Departments</h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Discover a world of academic excellence across specialized disciplines carefully curated to foster innovation and leadership.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 py-20 pb-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/departments/${dept.id}`}>
                <div className="bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full transform hover:-translate-y-2 overflow-hidden cursor-pointer">
                  {/* Image Hero Block inside Tile */}
                  <div className="w-full h-56 bg-gray-200 relative overflow-hidden">
                     <img src={dept.image} alt={dept.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
                     <div className="absolute inset-0 bg-gradient-to-t from-dsu-navy/90 via-dsu-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none" />
                     <div className="absolute bottom-4 left-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl border border-white/30 shadow-xl group-hover:bg-dsu-gold group-hover:border-dsu-gold transition-colors duration-500">
                       {dept.icon}
                     </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="p-8 flex flex-col flex-1 relative bg-white">
                    <h3 className="text-2xl font-bold font-serif text-dsu-navy mb-3 group-hover:text-dsu-gold transition-colors leading-tight">{dept.name}</h3>
                    <p className="text-gray-500 mb-8 flex-1 font-medium text-sm leading-relaxed">{dept.focus}</p>
                    
                    <div className="flex items-center text-dsu-navy font-bold text-sm tracking-wide uppercase mt-auto group-hover:text-dsu-gold transition-colors">
                      Explore Department
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
