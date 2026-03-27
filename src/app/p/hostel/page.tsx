"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight, Wifi, UtensilsCrossed, Shield, Dumbbell, Wind, BookOpen, Heart, Bus } from "lucide-react";

const HOSTEL_STATS = [
  { value: "4", label: "Hostel Blocks" },
  { value: "1,800+", label: "Beds Available" },
  { value: "24×7", label: "Security & Surveillance" },
  { value: "4 Meals", label: "Daily Nutrition Plan" },
  { value: "1 Gbps", label: "Campus WiFi Speed" },
  { value: "100%", label: "Generator Backup" },
];

const GALLERY = [
  { label: "Premier Single Room", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80" },
  { label: "Double Sharing Room", image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80" },
  { label: "Hostel Common Lounge", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80" },
  { label: "Recreation Area", image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&q=80" },
  { label: "World-Class Mess", image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&q=80" },
  { label: "Study Lounge", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80" },
];

const AMENITIES = [
  { icon: <Wifi className="w-6 h-6" />, title: "1 Gbps Optical WiFi", desc: "Campus-wide fibre, no speed throttling, academic content unfiltered." },
  { icon: <UtensilsCrossed className="w-6 h-6" />, title: "Nutritional Mess", desc: "4 meals daily — Breakfast, Lunch, Snacks, Dinner — dietician-planned multi-cuisine." },
  { icon: <Shield className="w-6 h-6" />, title: "Biometric Security", desc: "Biometric entry at all blocks, CCTV surveillance, and 24×7 warden presence." },
  { icon: <Dumbbell className="w-6 h-6" />, title: "Recreation & Fitness", desc: "Fully-equipped gym, indoor TT and carrom rooms, outdoor courts, and evening activity zones." },
  { icon: <Wind className="w-6 h-6" />, title: "Air Conditioned Rooms", desc: "All single and double rooms are air-conditioned with geyser. Fan-cooled triples also available." },
  { icon: <BookOpen className="w-6 h-6" />, title: "Study Lounge", desc: "Dedicated block-level study rooms with stationery access, open till midnight." },
  { icon: <Heart className="w-6 h-6" />, title: "Medical Facility", desc: "On-campus clinic with resident doctor, 24×7 nurse, and ambulance on standby." },
  { icon: <Bus className="w-6 h-6" />, title: "Campus Transport", desc: "Frequent shuttle service between hostel blocks, academic blocks, and city bus stops." },
];

const TIERS = [
  {
    type: "Premium Single Occupancy",
    badge: "Most Premium",
    badgeColor: "bg-dsu-gold text-[#002366]",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
    annual: "₹2,20,000",
    monthly: "~₹18,333",
    features: ["Private AC Room", "Attached Geyser", "Biometric Entry", "Personal Study Desk", "Optical Fiber Port", "Daily Housekeeping"],
  },
  {
    type: "Double Sharing",
    badge: "Most Popular",
    badgeColor: "bg-[#002366] text-white",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
    annual: "₹1,75,000",
    monthly: "~₹14,583",
    features: ["Shared AC Room", "Common Geyser", "Block Biometric", "Shared Study Lounge", "High-Speed WiFi", "Bi-Weekly Housekeeping"],
  },
  {
    type: "Triple Sharing",
    badge: "Best Value",
    badgeColor: "bg-emerald-600 text-white",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
    annual: "₹1,45,000",
    monthly: "~₹12,083",
    features: ["Fan-Cooled Room", "Common Washroom", "Block-Level Security", "Common Study Hall", "WiFi Access", "Weekly Housekeeping"],
  },
];

const RULES = [
  "Students must be within the hostel premises by 9:30 PM on weekdays and 10:00 PM on weekends.",
  "Parents/guardians may visit between 10 AM – 6 PM with prior permission from the warden.",
  "Possession of alcohol, tobacco, or banned substances will lead to immediate expulsion.",
  "Students are responsible for maintenance of their room and common areas.",
  "Ragging in any form is strictly prohibited and is a cognizable offence under Karnataka law.",
  "Hostel fees are non-refundable once the semester commences.",
];

export default function HostelPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80" alt="Hostel" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white flex items-center gap-2"><Home className="w-4 h-4" /> Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">Hostel & Residential Life</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight">
            Residential Life at DSU
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed">
            A home away from home. DSU's premium residential campus houses 1,800+ students across 4 blocks with world-class amenities, round-the-clock support, and an environment built for focused learning.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* Stats */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {HOSTEL_STATS.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-[#002366] text-white rounded-2xl p-6 text-center shadow-xl hover:scale-105 transition-transform">
                <p className="text-xl md:text-2xl font-bold text-dsu-gold mb-2">{s.value}</p>
                <p className="text-xs text-blue-100 uppercase tracking-widest font-semibold leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Room Tiers */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Accommodation Options</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIERS.map((tier, i) => (
              <motion.div key={tier.type} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group bg-white border border-blue-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img src={tier.image} alt={tier.type} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/70 to-transparent" />
                  <span className={`absolute top-4 right-4 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${tier.badgeColor}`}>{tier.badge}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-lg font-bold text-[#002366] mb-3">{tier.type}</h3>
                  <p className="text-4xl font-black text-[#002366] mb-1">{tier.annual}</p>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">{tier.monthly} / month (inclusive of mess)</p>
                  <ul className="space-y-2 mb-8">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-dsu-gold shrink-0" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/apply" className="w-full flex items-center justify-center gap-2 bg-[#002366] text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl group-hover:bg-dsu-gold group-hover:text-[#002366] transition-all">
                    Apply & Reserve <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Photo Gallery */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Life Inside the Hostel</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {GALLERY.map((item, i) => (
              <motion.div key={item.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all h-56">
                <img src={item.image} alt={item.label} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/80 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-4 text-white font-bold text-sm drop-shadow-md">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">World-Class Amenities</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AMENITIES.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="group bg-white border border-blue-50 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:border-dsu-gold/30 transition-all">
                <div className="w-12 h-12 bg-[#002366]/5 rounded-xl flex items-center justify-center text-dsu-gold mb-5 group-hover:bg-dsu-gold group-hover:text-white transition-colors">
                  {a.icon}
                </div>
                <h3 className="font-bold text-[#002366] mb-2 text-sm">{a.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Rules */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3">Hostel Rules & Regulations</h2>
          <div className="w-16 h-1.5 bg-dsu-gold rounded mb-10" />
          <div className="bg-white border border-blue-50 rounded-2xl shadow-sm overflow-hidden">
            {RULES.map((rule, i) => (
              <div key={i} className={`flex items-start gap-5 p-6 ${i < RULES.length - 1 ? "border-b border-gray-50" : ""}`}>
                <span className="text-dsu-gold font-black text-lg shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{rule}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#002366] rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-serif font-bold mb-4">Reserve Your Hostel Seat</h3>
          <p className="text-blue-100/80 max-w-xl mx-auto mb-8">Hostel allotment is first-come, first-served. Secure your accommodation along with your admission.</p>
          <Link href="/apply" className="inline-flex items-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm">
            Apply for Hostel <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
