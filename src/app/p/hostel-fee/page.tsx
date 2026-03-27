"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ChevronRight, ArrowRight, Wifi, UtensilsCrossed, Shield, Dumbbell } from "lucide-react";

const HOSTEL_TIERS = [
  {
    type: "Premium Single Occupancy",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80",
    annualFee: "₹2,20,000",
    perMonth: "~₹18,333",
    features: ["Private Biometric Access", "Attached AC & Geyser", "Dedicated Optical Fiber", "Personal Study Workstation", "Daily Housekeeping"],
    badge: "Most Premium",
    badgeColor: "bg-dsu-gold text-[#002366]",
  },
  {
    type: "Double Sharing",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
    annualFee: "₹1,75,000",
    perMonth: "~₹14,583",
    features: ["Shared Biometric Entry", "AC Room", "Shared Study Lounge", "High-Speed WiFi", "Bi-Weekly Housekeeping"],
    badge: "Most Popular",
    badgeColor: "bg-[#002366] text-white",
  },
  {
    type: "Triple Sharing",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
    annualFee: "₹1,45,000",
    perMonth: "~₹12,083",
    features: ["Secure Block Access", "Fan-Cooled Room", "Common Study Hall", "WiFi Access", "Weekly Housekeeping"],
    badge: "Best Value",
    badgeColor: "bg-emerald-600 text-white",
  },
];

const MESS_PLANS = [
  { plan: "Full Board (4 Meals)", fee: "Included in tariff", desc: "Breakfast, Lunch, Snacks & Dinner — multi-cuisine, nutritionist-planned daily." },
  { plan: "Partial Board (2 Meals)", fee: "₹15,000 / year", desc: "Breakfast and Dinner. Suitable for students with off-campus commitments." },
  { plan: "à la carte / Cafeteria Access", fee: "Pay as you go", desc: "Drop-in access to the campus cafeteria — multiple stalls, snack counter included." },
];

const AMENITIES = [
  { icon: <Wifi className="w-6 h-6" />, label: "High-Speed WiFi", desc: "1 Gbps campus-wide optical fiber network" },
  { icon: <UtensilsCrossed className="w-6 h-6" />, label: "Nutritional Mess", desc: "4 meals/day prepared by certified dieticians" },
  { icon: <Shield className="w-6 h-6" />, label: "24×7 Security", desc: "Biometric access, CCTV, and roving guards" },
  { icon: <Dumbbell className="w-6 h-6" />, label: "Recreation Hub", desc: "Gym, indoor courts, common room & TV lounge" },
];

export default function HostelFeePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">

      {/* Hero */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80" alt="Hostel" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          <div className="flex items-center text-xs font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-2"><Home className="w-4 h-4" /> Home</Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white/80">Admissions</span>
            <ChevronRight className="w-4 h-4 opacity-50 text-white" />
            <span className="text-white">Hostel Fee Structure</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight">
            Hostel Fee Structure
          </motion.h1>
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-medium">
            Premium residential living designed for focused academics, personal wellness, and a vibrant campus community.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Accommodation Tiers */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3 text-center">Accommodation Plans</h2>
          <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOSTEL_TIERS.map((tier, i) => (
              <motion.div
                key={tier.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white border border-blue-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={tier.image} alt={tier.type} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#002366]/70 to-transparent" />
                  <span className={`absolute top-4 right-4 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full ${tier.badgeColor}`}>{tier.badge}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-serif text-lg font-bold text-[#002366] mb-4">{tier.type}</h3>
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-black text-[#002366]">{tier.annualFee}</span>
                  </div>
                  <p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-6">{tier.perMonth} / month</p>
                  <ul className="space-y-2 mb-8">
                    {tier.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-500 font-medium">
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

        {/* Mess / Meal Plans */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3 text-center">Mess & Meal Plans</h2>
          <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MESS_PLANS.map((plan, i) => (
              <motion.div key={plan.plan} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white border border-blue-50 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-dsu-gold/30 transition-all">
                <p className="text-2xl font-black text-[#002366] mb-1">{plan.fee}</p>
                <p className="text-sm font-bold text-dsu-gold uppercase tracking-widest mb-4">{plan.plan}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{plan.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Amenities */}
        <section>
          <h2 className="text-3xl font-serif text-[#002366] font-bold mb-3 text-center">Included Amenities</h2>
          <div className="w-24 h-1.5 bg-dsu-gold rounded mx-auto mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {AMENITIES.map((a, i) => (
              <motion.div key={a.label} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white border border-blue-50 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-dsu-gold/30 transition-all group">
                <div className="w-14 h-14 bg-[#002366]/5 rounded-full flex items-center justify-center text-dsu-gold mb-4 group-hover:bg-dsu-gold group-hover:text-white transition-colors">
                  {a.icon}
                </div>
                <p className="font-bold text-[#002366] mb-1">{a.label}</p>
                <p className="text-xs text-gray-400">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Images */}
        <div className="grid grid-cols-2 gap-5">
          <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80" alt="Hostel Exterior" className="w-full h-64 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80" alt="Hostel Room" className="w-full h-64 object-cover rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500" />
        </div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#002366] rounded-3xl p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-serif font-bold mb-4">Reserve Your Hostel Accommodation</h3>
          <p className="text-blue-100/80 max-w-xl mx-auto mb-8">Hostel seats are limited and allotted on a first-come, first-served basis. Submit your application to secure your spot.</p>
          <Link href="/apply" className="inline-flex items-center gap-3 bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white transition-all shadow-lg text-sm">
            Apply for Hostel <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
