"use client";

import { motion } from "framer-motion";
import { Quote, Mail, Phone } from "lucide-react";

export default function LeadershipPage() {
  const leaders = [
    { 
      title: "Chancellor", 
      name: "Dr. D Hemachandra Sagar",
      quote: "Knowledge is the supreme currency of progress. Let us invest heavily.",
      image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=500&q=80",
      email: "chancellor@dsu.edu.in",
      phone: "+91 80 4646 1810"
    },
    { 
      title: "Pro Chancellor", 
      name: "Dr. D Premachandra Sagar",
      quote: "We don't just build careers, we forge innovative thinkers.",
      image: "https://images.unsplash.com/photo-1566492031523-6505344280ff?auto=format&fit=crop&w=500&q=80",
      email: "prochancellor@dsu.edu.in",
      phone: "+91 80 4646 1811"
    },
    { 
      title: "Vice Chancellor", 
      name: "Dr. Amit R Bhatt",
      quote: "Excellence is not an act, but an unyielding habit we practice daily.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
      email: "vc@dsu.edu.in",
      phone: "+91 80 4646 1812"
    },
    { 
      title: "Registrar", 
      name: "Dr. Puttamadappa C",
      quote: "Efficiency and integrity serve as the bedrock of our institution.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80",
      email: "registrar@dsu.edu.in",
      phone: "+91 80 4646 1813"
    },
    { 
      title: "Controller of Exams", 
      name: "Dr. Sandesh N",
      quote: "Fairness in evaluation guarantees fairness in societal output.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=500&q=80",
      email: "coe@dsu.edu.in",
      phone: "+91 80 4646 1814"
    },
    { 
      title: "Finance Officer", 
      name: "Mr. R L Prasad",
      quote: "Sustainable growth enables infinite academic possibilities.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80",
      email: "fo@dsu.edu.in",
      phone: "+91 80 4646 1815"
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-32 pb-24 relative overflow-hidden">
      
      {/* Aesthetic Top Arc Background */}
      <div className="absolute top-0 left-0 right-0 h-[400px] bg-[#002366] rounded-b-[100px] lg:rounded-b-[200px] shadow-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
            University Leadership
          </h1>
          <div className="w-24 h-1.5 bg-dsu-gold mx-auto rounded-full shadow-lg" />
          <p className="mt-6 text-blue-100 max-w-2xl mx-auto text-lg font-medium">The visionaries steering Dayananda Sagar University towards global eminence.</p>
        </div>

        {/* Updated Horizontal Layout Grid constraint */}
        <div className="grid grid-cols-1 gap-10">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-500 group flex flex-col md:flex-row relative"
            >
              {/* Image Banner Left Container */}
              <div className="md:w-80 h-64 md:h-auto bg-gradient-to-tr from-[#002366] to-[#003399] relative flex shrink-0 items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-white relative z-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
              </div>

              {/* Data Content Right */}
              <div className="p-10 flex-1 flex flex-col justify-center relative bg-gradient-to-br from-white to-blue-50/20">
                <h3 className="text-dsu-gold font-bold uppercase tracking-widest text-xs mb-3 px-4 py-1.5 bg-dsu-gold/10 rounded-full inline-block self-start">{leader.title}</h3>
                <h2 className="text-3xl font-bold font-serif text-[#002366] mb-4">{leader.name}</h2>
                
                <div className="relative mb-8 pt-4 border-t border-gray-100">
                  <Quote className="w-8 h-8 text-blue-100 absolute -top-4 -left-3 -z-10 rotate-180" />
                  <p className="text-gray-600 italic font-medium leading-relaxed max-w-2xl text-lg">
                    "{leader.quote}"
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
                  <div className="flex items-center gap-3 text-[#002366] font-medium text-sm">
                    <Mail className="w-5 h-5 text-dsu-gold" />
                    <span>{leader.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-[#002366] font-medium text-sm">
                    <Phone className="w-5 h-5 text-dsu-gold" />
                    <span>{leader.phone}</span>
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
