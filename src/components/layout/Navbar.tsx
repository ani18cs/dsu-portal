"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Search } from "lucide-react";

type SubLink = { name: string; href: string };

const PRIMARY_LINKS = [
  { name: "Home", href: "/" },
  { 
    name: "University", 
    href: "/university/about",
    dropdown: [
      { name: "About DSU", href: "/university/about" },
      { name: "Leadership", href: "/university/leadership" },
      { name: "Administration", href: "/university/administration" },
      { name: "Carbon Neutral Campus", href: "/university/carbon-neutral" },
      { name: "Ethics Committee", href: "/university/ethics-committee" },
      { name: "IQAC Events", href: "/university/iqac" }
    ] as SubLink[]
  },
  { name: "Student", href: "/login?type=student" },
  { name: "Faculty", href: "/login?type=faculty" },
  { name: "Parent", href: "/login?type=parent" },
];

const SECONDARY_LINKS = [
  { name: "Departments", href: "/departments" },
  {
    name: "Academics",
    href: "/p/academics",
    dropdown: [
      { name: "UG Programs", href: "/p/ug-programs" }, 
      { name: "PG Programs", href: "/p/pg-programs" }, 
      { name: "Executive Education", href: "/p/executive-education" }, 
      { name: "Online Education", href: "/p/online-education" }
    ] as SubLink[]
  },
  {
    name: "Admissions",
    href: "/p/admissions",
    dropdown: [
      { name: "Admissions 2026", href: "/p/admissions" }, 
      { name: "Fees & Eligibility", href: "/p/fees-eligibility" }, 
      { name: "Hostel Fee", href: "/p/hostel-fee" }
    ] as SubLink[]
  },
  { name: "International", href: "/p/international" },
  { name: "Research", href: "/p/research" },
  { name: "Innovation", href: "/p/innovation" },
  { name: "Placement", href: "/p/placement" },
  { name: "Library", href: "/p/library" },
  { name: "Hostel", href: "/p/hostel" },
  { name: "Contact", href: "/p/contact" },
  { name: "E-brochure", href: "https://dsu.edu.in/images/Admission/brochures/2025/DSU_Main_Campus_Programs_2025.pdf" },
  { name: "Examinations", href: "/p/examinations" },
  { name: "Careers", href: "/p/careers" },
  { name: "Virtual Tour", href: "https://dsu.edu.in/virtual-tour/" }
];

export function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const isHome = pathname === "/";

  // Enforces a strict return to very top of the screen if Home or Logo is clicked
  const handleHomeClick = (e: React.MouseEvent) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={`absolute top-0 left-0 right-0 z-50 flex flex-col pointer-events-none ${isHome ? '' : 'sticky'}`}>
        <nav className={`pointer-events-auto border-b border-white/10 text-white transition-colors duration-300 shadow-md ${isHome ? 'bg-transparent' : 'bg-[#002366]'}`}>
          <div className="w-full px-4 xl:px-8 py-3 flex items-center justify-between">
            {/* Round Logo scaled slightly to look correct - clicking it forces top scroll */}
            <Link href="/" onClick={handleHomeClick} className="flex items-center z-50 shrink-0 transform origin-left ml-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo-round.png" 
                alt="Dayananda Sagar University Logo" 
                className="h-14 md:h-[64px] w-auto object-contain drop-shadow-md" 
              />
            </Link>

            {/* Desktop Navigation & Search */}
            <div className="flex items-center space-x-4 xl:space-x-8 h-full">
              
              <div className="hidden xl:flex items-center space-x-2 xl:space-x-6 h-full">
                {PRIMARY_LINKS.map((link) => (
                  <div
                    key={link.name}
                    className="relative h-full flex items-center py-4"
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      onClick={link.name === "Home" ? handleHomeClick : undefined}
                      className="flex items-center gap-1 font-bold text-xs hover:text-dsu-gold transition-colors uppercase tracking-widest px-2 text-white drop-shadow-md"
                    >
                      {link.name}
                      {link.dropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                    </Link>

                    {/* Dropdown Array */}
                    <AnimatePresence>
                      {link.dropdown && activeDropdown === link.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-[90%] left-0 w-64 bg-dsu-navy/95 backdrop-blur-xl border border-white/10 shadow-2xl py-4 flex flex-col z-50 rounded-b-xl"
                        >
                          {link.dropdown.map((item) => (
                            <Link key={item.name} href={item.href} className="px-6 py-2.5 text-sm text-white/80 hover:text-dsu-gold hover:bg-white/5 transition-colors">
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Apply Now Global CTA */}
              <Link href="/apply" className="hidden md:flex items-center justify-center bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full hover:bg-white transition-all shadow-lg pointer-events-auto">
                Apply Now
              </Link>

              {/* Hamburger Menu Toggle */}
              <button
                className="p-2 text-white hover:text-dsu-gold z-50 transition-colors drop-shadow-md pointer-events-auto"
                onClick={() => setIsSidebarOpen(true)}
              >
                <Menu className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Hamburger Side Drawer Navigation Menu */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[420px] max-w-full z-[70] bg-dsu-navy shadow-3xl p-8 flex flex-col overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                <h2 className="text-xl font-serif text-dsu-gold uppercase tracking-widest">DSU Directory</h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-8 flex-1 mt-6">
                {/* Primary Core Links */}
                <div className="xl:hidden flex flex-col space-y-3 border-b border-white/10 pb-6">
                  <span className="text-xs uppercase tracking-widest text-dsu-gold font-bold mb-2">Primary Flow</span>
                  {PRIMARY_LINKS.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      <Link
                        href={link.href}
                        onClick={() => !link.dropdown && setIsSidebarOpen(false)}
                        className="text-lg font-bold text-white hover:text-dsu-gold transition-colors py-1 flex items-center justify-between"
                      >
                        {link.name}
                        {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                      </Link>
                      {link.dropdown && (
                        <div className="ml-4 mt-2 flex flex-col space-y-2 border-l border-white/10 pl-4">
                          {link.dropdown.map(dLink => (
                            <Link key={dLink.name} href={dLink.href} onClick={() => setIsSidebarOpen(false)} className="text-sm text-white/60 hover:text-dsu-gold transition-colors py-1">{dLink.name}</Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Secondary Deep Links */}
                <div className="flex flex-col space-y-3">
                  <span className="text-xs uppercase tracking-widest text-dsu-gold font-bold mb-2">Explore Departments & Academia</span>
                  {SECONDARY_LINKS.map((link) => (
                    <div key={link.name} className="flex flex-col">
                      <Link
                        href={link.href}
                        onClick={() => !link.dropdown && setIsSidebarOpen(false)}
                        className="text-[17px] font-semibold text-white/90 hover:text-dsu-gold transition-colors py-1.5 flex items-center justify-between"
                      >
                        {link.name}
                        {link.dropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                      </Link>
                      {link.dropdown && (
                        <div className="ml-4 mt-2 flex flex-col space-y-2 border-l border-white/10 pl-4 mb-3">
                          {link.dropdown.map(dLink => (
                            <Link key={dLink.name} href={dLink.href} className="text-[15px] text-white/50 hover:text-white transition-colors py-1">{dLink.name}</Link>
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
