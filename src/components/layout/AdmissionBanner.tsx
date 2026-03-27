"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, PlayCircle } from "lucide-react";

export function AdmissionBanner() {
  const pathname = usePathname();

  if (pathname === "/login") return null;

  return (
    <section className="bg-dsu-gold py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 blur-xl pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay" />
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-white rounded-full mix-blend-overlay" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-dsu-navy mb-6 tracking-tight"
        >
          Ready to Begin Your Journey?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-dsu-navy/80 mb-10 max-w-2xl font-medium"
        >
          Join thousands of students who have chosen DSU for their higher education. Start your application today and take the first step towards a bright future.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
        >
          <Link
            href="/admissions"
            className="group flex items-center gap-2 bg-dsu-navy text-white px-8 py-4 rounded-full font-semibold hover:bg-dsu-navy/90 hover:scale-105 transition-all shadow-lg w-full sm:w-auto justify-center"
          >
            Apply for Admission
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="https://dsu.edu.in/virtual-tour/"
            target="_blank"
            className="group flex items-center gap-2 bg-white text-dsu-navy px-8 py-4 rounded-full font-semibold hover:bg-gray-50 hover:scale-105 transition-all shadow-md w-full sm:w-auto justify-center"
          >
            <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform text-dsu-gold" />
            Virtual Tour
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
