"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Home } from "lucide-react";

import { useState, useEffect } from "react";

function StatTile({ label, end, suffix = "" }: { label: string, end: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="bg-[#002366] p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center text-white border border-blue-800 transform hover:scale-105 transition-transform duration-300">
      <span className="text-4xl md:text-5xl font-bold text-dsu-gold mb-3">{count}{suffix}</span>
      <span className="text-xs tracking-widest uppercase text-blue-100 font-semibold">{label}</span>
    </div>
  );
}

export default function DomainTemplate() {
  const { slug } = useParams();
  const activeSlug = typeof slug === 'string' ? slug : "";

  // Dynamic Routing Dictionary (Database)
  const pageData: Record<string, { title: string, category: string, desc: string, image: string, sections: { title: string, content: string }[] }> = {
    "library": {
      title: "Central Library",
      category: "Infrastructure",
      desc: "Our high-tech library ecosystem features immense intellectual respositories providing global academic access.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80",
      sections: [
        { title: "Digital Resources", content: "Over 500,000+ IEEE, ACM and Springer validated articles mapped for student and faculty reference. Unrestricted bandwidth for deep research arrays." },
        { title: "E-Journals", content: "Directly synchronized with international research terminals across 40 countries, updated daily securely through the World Class digital infrastructure." },
        { title: "Study Spaces", content: "24/7 hyper-focus pods equipped with charging stations, extreme high-bandwidth WiFi, massive light arrays, and zero-distraction ergonomic seating." }
      ]
    },
    "placement": {
      title: "Centre of Innovation and Leadership (CIL)",
      category: "Student Careers",
      desc: "The nerve center of corporate recruiting, bridging ambitious students with the world's best tech and business enterprises.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80",
      sections: [
        { title: "Campus Recruitment Leadership Training", content: "Comprehensive in-house training on aptitude, group discussions, and mock interviews from semester one. Dedicated preparation across engineering, commerce, health sciences, and arts." },
        { title: "Top Recruiters", content: "Accenture, Out Sourcing Technology, Infosys, and hundreds of global unicorns actively hire from our placement drives." },
        { title: "Placement & Training Directors", content: "M N Guruvenkatesh (Senior VP - Placements) and Vijay Kumar S (Director - Corporate Relations) lead our core hiring initiatives." }
      ]
    },
    "schools": {
      title: "Academic Schools & Disciplines",
      category: "Academics",
      desc: "Dayananda Sagar University offers a highly rigorous, multi-disciplinary approach to modern education via strict core schools.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80",
      sections: [
        { title: "Technology & Computing", content: "Encompassing the School of Engineering, Computer Applications, and specialized AI branches powered by our NVIDIA partnership." },
        { title: "Sciences & Healthcare", content: "Featuring Health Sciences, Basic and Applied Sciences, Nursing, and Medical Education & Research." },
        { title: "Humanities & Enterprise", content: "Home to the School of Law, Commerce and Management, Arts, Design and Humanities, and Executive Education systems." }
      ]
    },
    "virtual-tour": {
      title: "Interactive 360° Campus Tour",
      category: "Exploration",
      desc: "Experience the state-of-the-art DSU Main Campus and City Innovation layouts from directly within your browser.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80",
      sections: [
        { title: "New Kanakapura Campus", content: "Walk through our massive multi-acre expansion featuring high-tech labs, massive sporting complexes, and the NVIDIA AI Factory." },
        { title: "City Innovation Campus", content: "Explore our integrated urban center designed specifically for rapid startup incubation and executive learning." },
        { title: "Interactive Walkthroughs", content: "Access direct visual layouts of our libraries, hostel dormitories, and cafeteria food courts via our remote imaging tech." }
      ]
    },
    "research": {
      title: "Advanced Research Labs",
      category: "Innovation & Sciences",
      desc: "Operating at the forefront of human knowledge, our laboratories are sanctioned by global intelligence and scientific defense agencies.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80",
      sections: [
        { title: "Quantum Computing Lab", content: "Experimenting with 16-qubit local architectures for quantum algorithmic breakthroughs in encryption." },
        { title: "Biotech Genomics", content: "Mapping local environmental genetic responses using next-generation sequencers installed via WHO grants." },
        { title: "Faculty Patents", content: "Over 300+ actively registered US and Indian patents originated directly from our core academic groups in the last decade." }
      ]
    },
    "hostel": {
      title: "Student Accommodations",
      category: "Infrastructure",
      desc: "Highly-secure, modern, and vibrant living spaces crafted specifically to ensure absolute focus and personal well-being.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80",
      sections: [
        { title: "Residential Layouts", content: "Premium single, double, and triple sharing rooms connected with biometric security locking." },
        { title: "Nutritional Mess", content: "A 5-star grade culinary operation delivering multi-cuisine nutritional diets mapped by world-class professional dieticians." },
        { title: "Recreation Hubs", content: "Indoor heated pools, gymnasiums, and highly collaborative lounge spaces restricted only to hostellers for supreme privacy." }
      ]
    },
    "fees-eligibility": {
      title: "Tuition Fees & Eligibility",
      category: "Admissions",
      desc: "Comprehensive breakdown of merit pipelines, eligibility quotas, and program-wise tuition schedules.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80",
      sections: [
        { title: "B.Tech (Engineering)", content: "Eligibility: 45% in 10+2 (PCM). Tuition Fee: ₹3,50,000 / Year. (Scholarships dynamically applied upon DSAT review)." },
        { title: "MBA & Executive Programs", content: "Eligibility: 50% in UG. Tuition Fee: ₹4,00,000 / Year. Includes international immersion semester components." },
        { title: "B.Pharm & Health Sciences", content: "Eligibility: 50% in 10+2 (PCB). Tuition Fee: ₹2,50,000 / Year. Laboratory fees and clinical trial materials perfectly inclusive." }
      ]
    },
    "hostel-fee": {
      title: "Hostel Fee Structure",
      category: "Admissions",
      desc: "Annual accommodations spanning high-tech residential blocks, mess layouts, and elite sporting arrays.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
      sections: [
        { title: "Premium Single Occupancy", content: "₹2,20,000 / Year. Features private biometric access, attached AC, and dedicated high-speed optical fiber nodes." },
        { title: "Double/Triple Sharing", content: "₹1,45,000 to ₹1,75,000 / Year. Fully furnished with study hubs, shared lounge access, and routine verified housekeeping." },
        { title: "Mess & Culinary Costs", content: "Included entirely in the annual tariff. Features 4 square multi-cuisine meals generated dynamically by certified campus nutritionists." }
      ]
    },
    "careers": {
      title: "Future Scope & Careers",
      category: "Student Development",
      desc: "Empowering our graduates to dominate their fields by mapping highly tactical, sector-specific career trajectories immediately upon graduation.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80",
      sections: [
        { title: "Engineering & AI Robotics", content: "Immense scope globally as Autonomous System Engineers, AI Architects, and VLSI Designers. Historic hires map directly to NVIDIA, Tesla, and Google ecosystems seamlessly." },
        { title: "Health Sciences & Pharma", content: "Clinical Research, Global Pharmacovigilance, and advanced healthcare administrative positions. Our bio-informatics track leads to peak WHO and CDC operations." },
        { title: "Commerce, Law & Executive", content: "Corporate legal consultants, high-frequency finance operators, and venture architects. Many BBA/MBA graduates route immediately to Big 4 accounting firms." }
      ]
    },
    "international": {
      title: "International Opportunities",
      category: "Global Programs",
      desc: "Bridging geographical bounds by networking directly with elite institutions and overseas regulatory bodies for borderless education.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
      sections: [
        { title: "Overseas Semester Exchange", content: "Fully funded semester exchange arrays directly tied to universities in Germany, the localized UK Ivy League, and deep tech institutes in Tokyo." },
        { title: "International Internships", content: "Summer programs guaranteeing exact 6-week exposure in Fortune 500 corporate HQs across Singapore and Silicon Valley." },
        { title: "Dual-Degree Programs", content: "Enroll in our unique 2+2 track, concluding your final bachelor years directly in our partnered US State Universities globally." }
      ]
    },
    "examinations": {
      title: "Examinations & Timetable",
      category: "Academics",
      desc: "Strictly regulated testing arrays, digital evaluations, and official faculty oversight operating perfectly.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80",
      sections: [
        { title: "Tentative Time Table (Even Semester 2026)", content: "School of Engg: May 12th - May 24th. | Health Sciences: May 15th - May 28th. | School of Comm & Law: May 18th - June 2nd." },
        { title: "Digital Evaluation Standard", content: "All answer bounds are processed entirely electronically to enforce 100% blind marking securely and eliminate human evaluation errors." },
        { title: "Controller of Exams Desk", content: "Dr. Sandesh N | Email: coe@dsu.edu.in | Phone: +91 80 4646 1814 | Exact Dispute Resolution Hours: Tuesdays & Thursdays (2PM - 4PM)." }
      ]
    },
    "contact": {
      title: "Contact & Admissions",
      category: "Support",
      desc: "Get in touch directly with our admission board, registrars, and main administrative offices across all campuses.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      sections: [
        { 
          title: "DSU Main Campus", 
          content: "Dayananda Sagar University\nDevarakaggalahalli, Harohalli,\nKanakapura Road,\nBengaluru South Dt. – 562 112\n\nOffice of Registrar: 080 24496999(Extn-2)\nReception: 080 24496999(Extn-1)\nRegistrar: 080 24496999(Extn-3)\nDean, SOE: 080 24496999(Extn-4)\nE-mail: admissions@dsu.edu.in" 
        },
        { 
          title: "DSU City Innovation Campus", 
          content: "Administrative & Main Admission office, Kudlu Gate, Hosur Road, Bengaluru - 560 068\n\nAdmissions Helpline: 080 46461800 / +91 7760964277\nNRI / Foreign Admissions: +91 9606022152\nE-mail: dsat@dsu.edu.in\n\nOffice of Registrar: 080 4909 2910\nOffice of Dean (School of Engineering): 080 4909 2986\nDean - MBA: 080 4909 2931\nResearch Cell: 91 97390 17462" 
        },
        { 
          title: "Admission Information Center", 
          content: "Gate 2, 6th Floor, University Building, Dental Block, Kumaraswamy Layout, Bengaluru - 560 111\n\nAdmissions Helpline: 080 46461800 / 080 49092800\nE-mail: admissions@dsu.edu.in" 
        }
      ]
    }
    // Note: Other slugs fall back onto the intelligent auto-generator logic below
  };

  const toTitleCase = (str: string) => str.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // Automatically generate generic data if exact key isn't explicitly mocked above
  const data = pageData[activeSlug] || {
    title: toTitleCase(activeSlug),
    category: "Information Desk",
    desc: `Comprehensive details, statistics, and official documentation regarding ${toTitleCase(activeSlug)} procedures at Dayananda Sagar University.`,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80", // Modern abstract corporate glass placeholder
    sections: [
      { 
        title: "Overview and Scope", 
        content: `The ${toTitleCase(activeSlug)} division rigorously oversees all primary metrics, student requests, and strategic initiatives relative to our ongoing institutional upgrades and NAAC directives.` 
      },
      { 
        title: "Core Objectives", 
        content: "Scaling our operational standards to match elite international benchmarks while seamlessly executing robust, compliant localized policies without friction." 
      },
      { 
        title: "Future Directives", 
        content: "Deploying integrated AI strategies to constantly upgrade the standard of experience over the next academic year. All protocols are monitored heavily for 100% efficiency." 
      }
    ]
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-white pb-32">
      
      {/* 
        Dynamic Colored Hero Banner 
        Standardized top margin (pt-32) so the top menu transparent overlap looks professional
      */}
      <div className="w-full bg-[#002366] text-white pt-32 pb-20 px-6 relative mb-16 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#002366]/60 mix-blend-multiply pointer-events-none" />
        <img src={data.image} alt={data.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 pt-4">
          
          {/* Breadcrumb Header block */}
          <div className="flex items-center text-xs md:text-sm font-bold tracking-widest uppercase text-dsu-gold mb-8 gap-3">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
              <Home className="w-4 h-4" />
              Home
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50 text-white shrink-0" />
            <span className="text-white/80 line-clamp-1">{data.category}</span>
            <ChevronRight className="w-4 h-4 opacity-50 text-white shrink-0" />
            <span className="text-white line-clamp-1">{data.title}</span>
          </div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold drop-shadow-lg mb-6 leading-tight"
          >
            {data.title}
          </motion.h1>
          
          <div className="w-32 h-1.5 bg-dsu-gold rounded-full shadow-lg mb-8" />
          
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-medium">
            {data.desc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-20">
        
        {/* Main Content Render */}
        <div className="md:col-span-2 space-y-10">
          
          {/* Conditional Exact Placement Analytics Banner */}
          {activeSlug === 'placement' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-dsu-gold/30 mb-12"
            >
              <h2 className="text-3xl font-serif text-[#002366] font-bold mb-8 flex items-center justify-center text-center">
                Placement Division Live Metrics
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 <StatTile label="Students Placed" end={2000} suffix="+" />
                 <StatTile label="Campus Companies" end={350} suffix="+" />
                 <StatTile label="Average Package" end={12} suffix=" LPA" />
                 <StatTile label="Highest Package" end={54} suffix=" LPA" />
              </div>
            </motion.div>
          )}

          {/* Conditional Exact Library Physical Images */}
          {activeSlug === 'library' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80" alt="World Class Main Library Dashboard" className="w-full h-72 object-cover rounded-3xl shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500" />
              <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80" alt="Modern Ergonomic Library Reading Space" className="w-full h-72 object-cover rounded-3xl shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500" />
            </motion.div>
          )}

          {/* Conditional Exact Hostel Physical Images */}
          {activeSlug === 'hostel' && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              <img src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80" alt="Hostel Exterior Recreation Spaces" className="w-full h-72 object-cover rounded-3xl shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500" />
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80" alt="Premium Single Occupancy Hostel Room" className="w-full h-72 object-cover rounded-3xl shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-500" />
            </motion.div>
          )}

          {data.sections.map((sec, i) => (
            <motion.section 
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 md:p-14 rounded-3xl border border-blue-50 shadow-[0_4px_20px_rgba(0,35,102,0.05)] hover:shadow-xl hover:border-dsu-gold/30 transition-all duration-300"
            >
              <h2 className="text-2xl md:text-3xl font-serif text-[#002366] font-bold mb-6 flex items-center gap-5">
                <span className="w-8 h-1 bg-dsu-gold shrink-0"></span>
                {sec.title}
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed font-medium">
                {sec.content}
              </p>
            </motion.section>
          ))}
        </div>

        {/* Dynamic Sidebar CTA */}
        <div className="md:col-span-1 space-y-8 sticky top-32 h-fit">
          <div className="bg-[#002366] p-10 rounded-3xl text-white shadow-xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-dsu-gold/20 transition-colors duration-700 pointer-events-none" />
            
            <h3 className="text-2xl font-serif font-bold mb-4">Apply for Admission</h3>
            <p className="text-blue-100/80 mb-10 leading-relaxed text-sm font-medium">
              Ready to take the first step towards a global career? Fill out your application today and our team will securely contact you.
            </p>
            
            <Link href="/apply" className="w-full flex items-center justify-between bg-dsu-gold text-[#002366] font-bold uppercase tracking-widest text-sm px-6 py-4 rounded-xl hover:bg-white hover:-translate-y-1 transition-all shadow-md group-hover:shadow-dsu-gold/30">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="bg-white border border-blue-100 text-[#002366] p-10 rounded-3xl shadow-sm">
             <h3 className="font-serif text-xl font-bold mb-8">Related Quick Links</h3>
             <ul className="space-y-5 font-bold text-sm tracking-wide text-gray-500">
               <li className="flex gap-4 hover:text-dsu-gold cursor-pointer transition-colors items-center group">
                 <div className="w-2 h-2 rounded-full bg-dsu-gold group-hover:scale-150 transition-transform" /> 
                 <a href="https://dsu.edu.in/images/Admission/brochures/2025/DSU_Main_Campus_Programs_2025.pdf" target="_blank" rel="noreferrer">E-Brochure Request</a>
               </li>
               <li className="flex gap-4 hover:text-dsu-gold cursor-pointer transition-colors items-center group">
                 <div className="w-2 h-2 rounded-full bg-dsu-gold group-hover:scale-150 transition-transform" /> 
                 <a href="https://www.dsu.edu.in/images/University/Telephone_Directory_25022026.pdf" target="_blank" rel="noreferrer">Telephone Directory</a>
               </li>
               <li className="flex gap-4 hover:text-dsu-gold cursor-pointer transition-colors items-center group">
                 <div className="w-2 h-2 rounded-full bg-dsu-gold group-hover:scale-150 transition-transform" /> 
                 <a href="https://dsu.edu.in/virtual-tour/" target="_blank" rel="noreferrer">Virtual Tour</a>
               </li>
             </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
