"use client";

import { motion } from "framer-motion";
import { Activity, Building, Leaf, Code, Palette, Briefcase } from "lucide-react";

export function Disciplines() {
  const fields = [
    { title: "School of Engineering", desc: "Computer Science, AI & Robotics, Aerospace. Featuring industry-tied labs and advanced hackathon centers.", icon: Code, image: "/discipline-1.jpg" },
    { title: "Health Sciences", desc: "Pharmaceuticals, Nursing, Physiotherapy. Built with practical immersion hospitals and research wards.", icon: Activity, image: "/discipline-2.jpg" },
    { title: "School of Commerce", desc: "MBA, BBA, Corporate Finance. Partnered with global enterprise consultants for strict corporate exposure.", icon: Building, image: "/discipline-3.jpg" },
    { title: "Basic & Applied Science", desc: "Biotechnology, Microbiology, Genetics. Massive focus on organic synthesis and genomic processing.", icon: Leaf, image: "/discipline-4.jpg" },
    { title: "Design and Digital Transmedia", desc: "Creative programs fostering innovation, artistic expression, and storytelling for B.Design candidates.", icon: Palette, image: "/discipline-5.jpg" },
    { title: "Executive Education", desc: "Empowering working professionals with the exact skills, insights, and leadership mindset to excel via EMBA.", icon: Briefcase, image: "/discipline-6.jpg" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-dsu-navy drop-shadow-sm"
          >
            Academic Disciplines
          </motion.h2>
          <div className="w-32 h-1.5 bg-dsu-gold mx-auto mt-6 rounded-full shadow-lg" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {fields.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col justify-end p-10 h-[350px] md:h-[450px] rounded-3xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500`}
            >
              {/* Dynamic Image/Color Background strictly applied via style object to bypass Tailwind JIT cache limitations */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 pointer-events-none" 
                style={{ backgroundImage: `url('${f.image}')` }}
              />
              {/* Fade to transparent at the top so the image is fully visible, dark at the bottom for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/95 via-[#002366]/50 to-transparent group-hover:via-[#002366]/40 transition-colors duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-start translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shrink-0 shadow-lg mb-6 group-hover:bg-dsu-gold group-hover:border-dsu-gold transition-colors duration-300">
                  <f.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-3 drop-shadow-md">{f.title}</h3>
                <p className="text-blue-100 text-sm md:text-base leading-relaxed font-medium max-w-sm opacity-90 group-hover:opacity-100 transition-opacity">
                  {f.desc}
                </p>
                <div className="mt-6 w-10 h-1 bg-dsu-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
