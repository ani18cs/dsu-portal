"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', program: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(formData.name && formData.email && formData.phone) {
      setSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">
      
      {/* Dynamic Colored Hero Banner */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#002366]/60 mix-blend-multiply pointer-events-none" />
        <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80" alt="Admissions Banner" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs md:text-sm font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white shrink-0" />
            <span className="text-white line-clamp-1">Admissions Application</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight"
          >
            Apply for Admission
          </motion.h1>
          
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-medium">
            Take the first step towards a global career. Fill out your details below and our admissions executives will walk you through the entire enrollment process.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Entrance Exam Codes (Requested format in tiles) */}
        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-4">Recognized Exam Codes</h2>
          
          {[
            { label: "DSAT", code: "Direct Entry Framework" },
            { label: "Comed-K Code", code: "E182" },
            { label: "Uni-Guage Code", code: "Uni-010" },
            { label: "CET Code", code: "DSU-E240" },
            { label: "PGCET Code (M.Tech)", code: "T970" },
            { label: "PGCET Code (MBA)", code: "B365MB" }
          ].map((exam, i) => (
            <motion.div 
              key={exam.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-blue-50 shadow-sm hover:shadow-lg hover:border-dsu-gold transition-all duration-300 flex justify-between items-center"
            >
              <span className="font-bold text-gray-500 tracking-wide uppercase">{exam.label}</span>
              <span className="text-[#002366] font-bold text-xl bg-[#002366]/5 px-4 py-2 rounded-lg">{exam.code}</span>
            </motion.div>
          ))}
        </div>

        {/* Fake Processing Form */}
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit} 
                className="space-y-6 flex flex-col"
              >
                <h3 className="text-2xl font-serif text-[#002366] font-bold mb-6">Candidate Details</h3>
                
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Full Name</label>
                  <input type="text" required onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-dsu-gold focus:ring-2 focus:ring-dsu-gold/20 transition-all font-medium" placeholder="John Doe" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" required onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-dsu-gold focus:ring-2 focus:ring-dsu-gold/20 transition-all font-medium" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Mobile Number</label>
                  <input type="tel" required onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-dsu-gold focus:ring-2 focus:ring-dsu-gold/20 transition-all font-medium" placeholder="+91 99999 99999" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Interested Program</label>
                  <select onChange={(e) => setFormData({...formData, program: e.target.value})} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 focus:outline-none focus:border-dsu-gold focus:ring-2 focus:ring-dsu-gold/20 transition-all font-medium text-gray-700">
                    <option>School of Engineering (B.Tech)</option>
                    <option>School of Commerce (BBA/B.Com)</option>
                    <option>Health Sciences (B.Pharm/Nursing)</option>
                    <option>Executive Programs (MBA/EMBA)</option>
                  </select>
                </div>

                <div className="pt-6">
                   <button type="submit" className="w-full bg-[#002366] text-white font-bold tracking-widest uppercase py-5 rounded-xl hover:bg-dsu-gold shadow-lg hover:shadow-dsu-gold/30 hover:text-[#002366] transition-all duration-300">
                     Submit Application
                   </button>
                </div>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center h-full space-y-6 min-h-[400px]"
              >
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-xl">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h3 className="text-3xl font-serif text-[#002366] font-bold">Thank You!</h3>
                <p className="text-lg text-gray-500 font-medium max-w-sm">
                  Your application request has been received securely. Our admissions executives will call you shortly to assist.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-dsu-gold font-bold uppercase tracking-widest text-sm hover:text-[#002366] transition-colors">
                  Submit Another
                 </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </main>
  );
}
