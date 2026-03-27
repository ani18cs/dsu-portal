"use client";

import { motion } from "framer-motion";
import { Quote, Phone, Mail } from "lucide-react";

export default function AdministrationPage() {
  const admins = [
    { 
      title: "Dean, SOHS", 
      name: "Dr. Pushpa Sarkar",
      quote: "Healing begins with rigorous, untamed education in the biological sciences.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
      phone: "+91 91234 56781", 
      email: "dean.sohs@dsu.edu.in"
    },
    { 
      title: "Dean, SOE", 
      name: "Dr. Udaya Kumar Reddy K R",
      quote: "Engineering is the closest thing to magic that humans possess.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80",
      phone: "+91 91234 56782", 
      email: "dean.soe@dsu.edu.in"
    },
    { 
      title: "Dean, SBAS", 
      name: "Dr. Sunil More",
      quote: "Without applied fundamentals, rapid technological scaling inevitably collapses.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
      phone: "+91 91234 56783", 
      email: "dean.sbas@dsu.edu.in"
    },
    { 
      title: "Principal, Pharmaceutical Science", 
      name: "Dr. N M Raghavendra",
      quote: "Chemical precision dictates the boundaries of human survival.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
      phone: "+91 91234 56784", 
      email: "principal.pharma@dsu.edu.in"
    },
    { 
      title: "Principal, Nursing", 
      name: "Dr. Santham Sweet Rose",
      quote: "Tending to life correctly requires both massive empathy and clinical brilliance.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80",
      phone: "+91 91234 56785", 
      email: "principal.nursing@dsu.edu.in"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-32 pb-24 relative">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-bl from-[#002366]/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#002366] drop-shadow-sm mb-6">
            Administration
          </h1>
          <div className="w-24 h-1.5 bg-dsu-gold rounded-full shadow-lg" />
        </div>

        <div className="grid grid-cols-1 gap-10">
          {admins.map((admin, i) => (
            <motion.div 
              key={admin.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-blue-100 p-8 flex flex-col md:flex-row gap-10 items-center cursor-pointer group transition-all duration-300"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 bg-[#002366] rounded-2xl shadow-inner overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={admin.image} alt={admin.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-[#002366] mix-blend-overlay opacity-20 group-hover:opacity-0 transition-opacity" />
              </div>
              
              <div className="flex flex-col flex-1 text-center md:text-left w-full h-full justify-center">
                <h3 className="text-xs font-bold text-dsu-gold uppercase tracking-widest mb-3 px-3 py-1 bg-dsu-gold/10 inline-block rounded-lg self-center md:self-start">{admin.title}</h3>
                <h2 className="text-3xl font-serif text-[#002366] font-bold mb-4">{admin.name}</h2>
                <div className="relative mt-2 pb-6 pt-4 border-t border-b border-gray-100 mb-6">
                  <Quote className="w-6 h-6 text-gray-200 absolute -top-4 right-0 rotate-180" />
                  <p className="text-gray-500 italic text-lg font-medium leading-relaxed max-w-xl">"{admin.quote}"</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
                  <div className="flex items-center justify-center gap-3 text-[#002366] font-medium text-sm">
                    <Mail className="w-5 h-5 text-dsu-gold" />
                    <span>{admin.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-[#002366] font-medium text-sm">
                    <Phone className="w-5 h-5 text-dsu-gold" />
                    <span>{admin.phone}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
