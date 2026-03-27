"use client";

import { motion } from "framer-motion";
import { Award, Star, Trophy, Target, FileCheck, Medal, Globe, Leaf } from "lucide-react";

export function Accreditations() {
  const accolades = [
    { icon: Award, title: "NAAC A+ Grade", desc: "Highest grading by National Assessment and Accreditation Council." },
    { icon: Trophy, title: "NIRF Top 100", desc: "Consistently ranked among the top 100 Innovation Universities." },
    { icon: Star, title: "AICTE Approved", desc: "All technical programs are thoroughly vetted and approved by AICTE." },
    { icon: Target, title: "UGC Recognized", desc: "Established under the State Act & recognized globally." },
    { icon: FileCheck, title: "ISO 9001:2015", desc: "Certified for maintaining unparalleled standards in academic execution." },
    { icon: Medal, title: "ARIIA Ranked", desc: "Recognized extensively by the Indian Government for incubation." },
    { icon: Globe, title: "QS I-GAUGE", desc: "Conferred diamond and gold bands spanning multiple parameters." },
    { icon: Leaf, title: "Green Campus", desc: "Nationally recognized zero-waste and fully carbon-neutral initiative." },
    { icon: Award, title: "IIRF National Rank 10", desc: "Secured top national placement in 2023 for comprehensive university metrics." },
    { icon: Trophy, title: "B-School Rated A++", desc: "Business education ranked A++ during extensive national B-School surveys." },
    { icon: Star, title: "BEU Business Award", desc: "Awarded top competitive excellence by the 2021 Business Education Units." },
    { icon: Medal, title: "Emerging Institution #1", desc: "Ranked first place nationally as the fastest emerging massive institution." }
  ];

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-bold text-dsu-navy"
          >
            Accreditations & Honors
          </motion.h2>
          <div className="w-24 h-1 bg-dsu-gold mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {accolades.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-white to-blue-50/30 border border-blue-100 shadow-[0_4px_20px_rgba(0,35,102,0.05)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)] hover:border-dsu-gold/30 flex flex-col items-center text-center group cursor-pointer transition-all duration-300 overflow-hidden"
            >
              {/* Abstract decorative background flair that appears on hover */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-dsu-gold/0 via-dsu-gold/0 to-dsu-gold/5 blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
              
              <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-50 to-white border border-blue-100 text-dsu-navy rounded-2xl rotate-3 group-hover:-rotate-3 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-dsu-navy group-hover:to-dsu-navy group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm group-hover:shadow-md">
                <item.icon className="w-10 h-10 transform scale-90 group-hover:scale-110 transition-transform duration-500" />
              </div>
              
              <h3 className="relative z-10 font-serif font-bold text-xl text-dsu-navy mb-3 group-hover:text-dsu-gold transition-colors duration-300">{item.title}</h3>
              <p className="relative z-10 text-gray-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
