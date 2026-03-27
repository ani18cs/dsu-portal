"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const PRIMARY_LINKS = [
  { name: "Home", href: "/" },
  { 
    name: "University", 
    href: "#",
    dropdown: ["About DSU", "Leadership", "Administration", "UGC Info", "AICTE Recognition", "NIRF", "IQAC", "Carbon Neutral Campus", "Ethics Committee"]
  },
  { name: "Student", href: "/login?type=student" },
  { name: "Faculty", href: "/login?type=faculty" },
  { name: "Parent", href: "/login?type=parent" },
];

const SECONDARY_LINKS = [
  {
    name: "Academics",
    href: "#",
    dropdown: ["Schools", "UG Programs", "PG Programs", "Executive Education", "Online Education"]
  },
  {
    name: "Admissions",
    href: "#",
    dropdown: ["Admission Details", "Direct Admissions 2026", "Fees & Eligibility", "Hostel Fee", "Helpline"]
  },
  { name: "International", href: "#" },
  { name: "Research", href: "#" },
  { name: "Innovation", href: "#" },
  { name: "Placement", href: "#" },
  { name: "NAAC", href: "#" },
  { name: "Library", href: "#" },
  { name: "Hostel", href: "#" },
  { name: "Self-Disclosure", href: "#" },
  { name: "Contact", href: "#" },
];

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
        {/* SINGLE TIER - Transparent Glassmorphed */}
        <nav className="bg-transparent border-b border-white/5 text-white transition-all duration-300">
          <div className="w-full px-4 xl:px-8 h-14 md:h-16 flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50 shrink-0 lg:mt-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo-round.png" 
                alt="Dayananda Sagar University Logo" 
                className="h-10 md:h-14 lg:h-[64px] w-auto object-contain transform origin-left" 
              />
            </Link>

            {/* Desktop Primary Nav & Hamburger */}
            <div className="flex items-center space-x-2 xl:space-x-8 h-full">
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-8 h-full">
                {PRIMARY_LINKS.map((link) => (
                  <div
                    key={link.name}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-1 font-bold text-[11px] xl:text-xs hover:text-dsu-gold transition-colors uppercase tracking-widest px-2 text-white drop-shadow-md"
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                    </Link>

                    {/* Dropdown */}
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-[80%] left-0 w-64 bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl py-4 flex flex-col z-50 rounded-b-lg"
                        >
                          {link.dropdown.map((item) => (
                            <Link key={item} href="#" className="px-6 py-2 text-sm text-dsu-navy hover:text-dsu-gold hover:bg-gray-50 transition-colors">
                              {item}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Hamburger Toggle */}
              <button
                className="p-2 ml-4 text-white hover:text-dsu-gold z-50 transition-colors drop-shadow-md"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile/Full Drawer Sliding Menu */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[400px] max-w-full z-[70] bg-white shadow-2xl p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8 border-b pb-4">
                <h2 className="text-xl font-serif text-dsu-navy">Information Hub</h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-gray-500 hover:text-dsu-navy bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-6 flex-1">
                {/* Primary Links for Mobile Only */}
                <div className="lg:hidden flex flex-col space-y-3 border-b pb-6">
                  <span className="text-xs uppercase tracking-widest text-dsu-gold font-bold mb-2">Primary Links</span>
                  {PRIMARY_LINKS.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      <Link
                        href={link.href}
                        onClick={() => !link.dropdown && setIsSidebarOpen(false)}
                        className="text-lg font-bold text-dsu-navy hover:text-dsu-gold transition-colors py-1"
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <div className="ml-4 mt-2 flex flex-col space-y-2 border-l border-gray-200 pl-4">
                          {link.dropdown.map(dLink => (
                            <Link key={dLink} href="#" className="text-sm text-gray-600 hover:text-dsu-navy transition-colors">{dLink}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Secondary Links from dual-bar -> Drawer */}
                <div className="flex flex-col space-y-3">
                  <span className="text-xs uppercase tracking-widest text-dsu-gold font-bold mb-2 hidden lg:block">Explore DSU</span>
                  {SECONDARY_LINKS.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      <Link
                        href={link.href}
                        onClick={() => !link.dropdown && setIsSidebarOpen(false)}
                        className="text-md font-semibold text-gray-800 hover:text-dsu-gold transition-colors py-1"
                      >
                        {link.name}
                      </Link>
                      {link.dropdown && (
                        <div className="ml-4 mt-2 flex flex-col space-y-2 border-l border-gray-200 pl-4 mb-2">
                          {link.dropdown.map(dLink => (
                            <Link key={dLink} href="#" className="text-sm text-gray-500 hover:text-dsu-navy transition-colors">{dLink}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
