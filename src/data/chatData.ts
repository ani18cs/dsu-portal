export interface ChatNode {
  id: string;
  label: string;         // shown on the bubble chip
  answer: string;        // bot reply
  followups: string[];   // ids of next bubbles to show
  link?: { label: string; href: string };
}

export const CHAT_NODES: Record<string, ChatNode> = {

  // ─── ROOT ───────────────────────────────────────────────────────────────────
  root: {
    id: "root",
    label: "Start",
    answer: "👋 Hi! I'm the DSU Assistant. What would you like to know about Dayananda Sagar University?",
    followups: ["admissions", "programs", "fees", "placement", "hostel", "research", "international", "campus", "contact"],
  },

  // ─── ADMISSIONS ─────────────────────────────────────────────────────────────
  admissions: {
    id: "admissions",
    label: "📋 Admissions",
    answer: "DSU Admissions 2026 are open! You can apply via Direct Admission or through entrance exams (DSAT, Comed-K, CET, NEET). The helpline is **080 46461800** and **+91 7760964277**.",
    followups: ["dsat", "nri_admission", "admission_process", "adm_docs", "apply_now"],
    link: { label: "View Admissions Page", href: "/p/admissions" },
  },
  dsat: {
    id: "dsat",
    label: "🎓 What is DSAT?",
    answer: "**DSAT (DSU Scholarship Aptitude Test)** is DSU's own entrance exam. Qualifying gives you a tuition fee concession. It covers Aptitude, English, and domain-specific subjects. You can apply at dsat@dsu.edu.in.",
    followups: ["admission_process", "fees", "apply_now"],
  },
  nri_admission: {
    id: "nri_admission",
    label: "🌍 NRI / Foreign Admission",
    answer: "NRI and Foreign Nationals can apply under the NRI Quota (15% reserved seats) or SAARC/ASEAN quotas. Contact the International Office at **+91 9606022152** or **admissions@dsu.edu.in**.",
    followups: ["international", "apply_now"],
    link: { label: "International Page", href: "/p/international" },
  },
  admission_process: {
    id: "admission_process",
    label: "📝 How to Apply?",
    answer: "1️⃣ Fill the online application form\n2️⃣ Upload documents (10+2 marksheet, ID proof, passport photo)\n3️⃣ Pay the application fee\n4️⃣ Appear for counselling / DSAT\n5️⃣ Receive offer letter & pay seat confirmation fee.",
    followups: ["adm_docs", "apply_now", "fees"],
  },
  adm_docs: {
    id: "adm_docs",
    label: "📂 Documents Required",
    answer: "You'll need:\n• 10+2 / Equivalent marksheets\n• Transfer & Character Certificate\n• NEET / CET / Comed-K scorecard (if applicable)\n• Aadhaar / Passport\n• Passport-size photos (4)\n• Migration Certificate (for other state students)",
    followups: ["admission_process", "apply_now"],
  },
  apply_now: {
    id: "apply_now",
    label: "🚀 Apply Now",
    answer: "You can start your DSU application right now! Click the button below to go to the application form.",
    followups: ["fees", "contact"],
    link: { label: "Open Application Form", href: "/apply" },
  },

  // ─── PROGRAMS ────────────────────────────────────────────────────────────────
  programs: {
    id: "programs",
    label: "📚 Programs",
    answer: "DSU offers 120+ programs across Engineering, Health Sciences, Law, Commerce, Design, and Computer Applications — at UG, PG, and Ph.D. levels.",
    followups: ["ug_programs", "pg_programs", "executive", "online"],
  },
  ug_programs: {
    id: "ug_programs",
    label: "🎓 UG Programs",
    answer: "Popular UG programs at DSU:\n• B.Tech (CSE, AI/ML, ECE, Mech, Cyber)\n• MBBS / BDS\n• BBA / B.Com\n• BCA\n• BBA LLB / B.Com LLB\n• B.Design, BA Journalism\n\nDuration: 3–5.5 years depending on program.",
    followups: ["ug_fees", "ug_btech", "apply_now"],
    link: { label: "All UG Programs", href: "/p/ug-programs" },
  },
  ug_btech: {
    id: "ug_btech",
    label: "⚙️ About B.Tech",
    answer: "DSU's B.Tech spans 8 specialisations: CSE, AI & ML, Data Science, ECE, Mechanical, Cyber Security, IoT, and Civil. All B.Tech programs are 4 years and AICTE approved. Average package: **₹14 LPA**. Highest: **₹54 LPA**.",
    followups: ["ug_fees", "placement", "apply_now"],
  },
  pg_programs: {
    id: "pg_programs",
    label: "🏅 PG Programs",
    answer: "PG programs at DSU include:\n• M.Tech (CSE, AI, ECE, VLSI, Structural)\n• MBA (6 specialisations)\n• MCA\n• M.Sc (Physics, Chemistry, Maths, Biotech)\n• LLM\n• MD / MS Surgery / M.Pharm\n• Ph.D (all schools)",
    followups: ["pg_fees", "mba", "apply_now"],
    link: { label: "All PG Programs", href: "/p/pg-programs" },
  },
  mba: {
    id: "mba",
    label: "💼 About MBA",
    answer: "DSU's MBA is a 2-year program with 6 specialisations: Finance, Marketing, HR, Operations, Business Analytics, and Healthcare Management. Ranked **#61 nationally** by Business World 2023. Avg. package: **₹12 LPA**.",
    followups: ["pg_fees", "executive", "apply_now"],
  },
  executive: {
    id: "executive",
    label: "👔 Executive MBA",
    answer: "The Executive MBA (EMBA) is designed for working professionals. Duration: 2 years. Ranked **#12 Emerging B-School** by The Week/Hansa 2021. Contact: **Aravind N.V.** at +91 9972598981 or aravind.nv@dsu.edu.in.",
    followups: ["pg_fees", "apply_now"],
    link: { label: "Executive Education Page", href: "/p/executive-education" },
  },
  online: {
    id: "online",
    label: "💻 Online Programs",
    answer: "DSU Online (UGC Entitled) offers fully online degrees:\n• MBA — ₹30,000/sem\n• MCA — ₹30,000/sem\n• BBA — ₹20,000/sem\n• BCA — ₹20,000/sem\n• B.Com — ₹20,000/sem\n\n24×7 support and dedicated placement cell included.",
    followups: ["apply_now", "fees"],
    link: { label: "Online Education Page", href: "/p/online-education" },
  },

  // ─── FEES ────────────────────────────────────────────────────────────────────
  fees: {
    id: "fees",
    label: "💰 Fees",
    answer: "DSU fees vary by program. Here's a quick overview of annual tuition:",
    followups: ["ug_fees", "pg_fees", "hostel_fee"],
    link: { label: "Full Fee Structure", href: "/p/fees-eligibility" },
  },
  ug_fees: {
    id: "ug_fees",
    label: "💰 UG Fees",
    answer: "**UG Annual Tuition (per year):**\n• B.Tech (CSE/AI/Cyber) — ₹3,75,000 (Direct) | ₹3,50,000 (via CET/DSAT)\n• B.Tech (ECE) — ₹3,50,000 | ₹3,25,000\n• BBA / B.Com — ₹1,50,000–₹1,80,000\n• BCA — ₹1,60,000\n• MBBS — ₹17,00,000\n• BDS — ₹8,00,000",
    followups: ["admission_process", "apply_now", "scholarship"],
  },
  pg_fees: {
    id: "pg_fees",
    label: "💰 PG Fees",
    answer: "**PG Annual Tuition (per year):**\n• M.Tech — ₹2,50,000–₹2,75,000\n• MBA — ₹4,50,000 (Direct) | ₹4,00,000 (via CAT/MAT/KMAT)\n• EMBA — ₹4,75,000\n• MCA — ₹2,20,000\n• M.Pharm — ₹2,75,000\n• LLM — ₹1,80,000",
    followups: ["apply_now", "scholarship"],
  },
  scholarship: {
    id: "scholarship",
    label: "🎖️ Scholarships",
    answer: "DSU offers scholarships via:\n• **DSAT** (DSU's own test) — Up to 25% fee waiver\n• **Comed-K / CET** — Concessional fee\n• **ASEAN Program** — Up to 50% for ASEAN students\n• **Merit Scholarships** — For rank holders\n\nContact admissions@dsu.edu.in for details.",
    followups: ["apply_now", "dsat"],
  },

  // ─── PLACEMENT ───────────────────────────────────────────────────────────────
  placement: {
    id: "placement",
    label: "🏢 Placements",
    answer: "DSU's placement record (2025 batch):\n• **2,000+** students placed\n• **350+** companies on campus\n• **₹12 LPA** average package\n• **₹54 LPA** highest package (Amazon SDE)",
    followups: ["top_companies", "placement_sectors", "career"],
    link: { label: "View Placement Page", href: "/p/placement" },
  },
  top_companies: {
    id: "top_companies",
    label: "🏭 Top Recruiters",
    answer: "Top companies that recruit from DSU:\n**IT:** Infosys, TCS, Wipro, Amazon, Microsoft, Qualcomm, Intel\n**Mgmt:** KPMG, Deloitte, EY, PwC, Accenture\n**Health:** Apollo, Biocon, Cipla, Dr. Reddy's\n**Core:** Bosch, Siemens, L&T, ABB, Honeywell",
    followups: ["placement_sectors", "career"],
  },
  placement_sectors: {
    id: "placement_sectors",
    label: "📊 Sector-wise Placements",
    answer: "**Placements by sector:**\n• IT — 820 students | Avg ₹14 LPA\n• Management — 290 | Avg ₹12 LPA\n• Core Engineering — 340 | Avg ₹9 LPA\n• Healthcare — 180 | Avg ₹8 LPA\n• Research & Analytics — 120 | Avg ₹16 LPA\n• Design & Product — 250 | Avg ₹18 LPA",
    followups: ["top_companies", "career"],
  },
  career: {
    id: "career",
    label: "🚀 Career Paths",
    answer: "DSU grads build careers in:\n• **Tech:** Software Engineer, AI Researcher, Cloud Architect\n• **Healthcare:** Clinical Researcher, Pharmacist, Medical Officer\n• **Finance:** Investment Analyst, CFA, Risk Analyst\n• **Law:** Corporate Lawyer, IP Attorney\n• **Research:** Scientist at ISRO, IISc, DRDO",
    followups: ["placement", "programs"],
    link: { label: "Career Pathways Page", href: "/p/careers" },
  },

  // ─── HOSTEL ──────────────────────────────────────────────────────────────────
  hostel: {
    id: "hostel",
    label: "🏠 Hostel",
    answer: "DSU has 4 hostel blocks with 1,800+ beds. All blocks have biometric security, 1 Gbps WiFi, 4 daily meals, medical facility, and gym access.",
    followups: ["hostel_fee", "hostel_amenities", "hostel_rules"],
    link: { label: "Hostel Page", href: "/p/hostel" },
  },
  hostel_fee: {
    id: "hostel_fee",
    label: "💰 Hostel Fees",
    answer: "**Annual Hostel Fee (inclusive of mess):**\n• 🥇 Single (AC + Geyser + Fiber) — **₹2,20,000/yr**\n• 🥈 Double Sharing (AC) — **₹1,75,000/yr**\n• 🥉 Triple Sharing (Fan) — **₹1,45,000/yr**\n\nMess (4 meals/day) is included in all tiers.",
    followups: ["hostel_amenities", "apply_now"],
    link: { label: "Full Hostel Fee Page", href: "/p/hostel-fee" },
  },
  hostel_amenities: {
    id: "hostel_amenities",
    label: "🏋️ Hostel Amenities",
    answer: "Hostel amenities include:\n✅ 1 Gbps Optical WiFi\n✅ 4-meal nutritional mess\n✅ Biometric + CCTV security\n✅ Fully equipped gym\n✅ AC rooms (single/double)\n✅ Midnight study lounge\n✅ On-campus doctor + nurse\n✅ Campus shuttle service",
    followups: ["hostel_fee", "hostel_rules"],
  },
  hostel_rules: {
    id: "hostel_rules",
    label: "📜 Hostel Rules",
    answer: "Key hostel rules:\n• Curfew: **9:30 PM** (weekdays) | **10:00 PM** (weekends)\n• Parents can visit **10 AM – 6 PM** with prior permission\n• No alcohol, tobacco, or banned substances\n• Ragging is a cognizable offence under Karnataka law\n• Hostel fees are non-refundable once semester commences",
    followups: ["hostel_fee", "hostel_amenities"],
  },

  // ─── RESEARCH ────────────────────────────────────────────────────────────────
  research: {
    id: "research",
    label: "🔬 Research",
    answer: "DSU is one of India's fastest-growing research universities:\n• **850+** research papers published\n• **47** patents granted\n• **₹28 Cr+** research grants\n• **35+** international collaborations\n• **18** active research labs",
    followups: ["research_labs", "research_partners", "phd"],
    link: { label: "Research Page", href: "/p/research" },
  },
  research_labs: {
    id: "research_labs",
    label: "🧪 Research Labs",
    answer: "DSU's world-class labs:\n• 🤖 Centre for AI & Deep Learning (NVIDIA DGX A100)\n• ⚛️ Quantum Computing Lab (IBM Q-System access)\n• 🧬 Biomedical & Genomics Lab (Next-gen sequencing)\n• 🦾 Robotics & Autonomous Systems",
    followups: ["phd", "research_partners"],
  },
  research_partners: {
    id: "research_partners",
    label: "🌐 Research Partners",
    answer: "**International:** TU Berlin, Coventry University, Nanyang Technology (Singapore), KAIST (South Korea), Kyoto University\n\n**National:** IISc Bangalore, IIT Bombay, ISRO, DRDO, CSIR, HAL",
    followups: ["research_labs", "international"],
  },
  phd: {
    id: "phd",
    label: "🎓 Ph.D Programs",
    answer: "DSU offers Ph.D programs across all 5 schools — Engineering, Health Sciences, Commerce, Law, and Applied Sciences. Apply with a Master's degree + research proposal. Funded fellowships available through DST/SERB grants.",
    followups: ["research_labs", "apply_now"],
  },

  // ─── INTERNATIONAL ───────────────────────────────────────────────────────────
  international: {
    id: "international",
    label: "🌍 International",
    answer: "DSU has a vibrant international ecosystem — students from 40+ countries and 35+ global MoUs for research and exchange.",
    followups: ["outbound", "inbound_int", "erasmus"],
    link: { label: "International Page", href: "/p/international" },
  },
  outbound: {
    id: "outbound",
    label: "✈️ Study Abroad (Indian Students)",
    answer: "DSU Indian students can access:\n• Semester exchange (TU Berlin, Coventry)\n• Silicon Valley Internship (6 weeks)\n• 2+2 Dual Degree (USA/UK)\n• Erasmus+ Mobility (EU grant-funded)\n• DAAD / Fulbright Research Fellowships",
    followups: ["erasmus", "research_partners"],
  },
  inbound_int: {
    id: "inbound_int",
    label: "🌏 Apply from Abroad",
    answer: "International students can apply under:\n• NRI/PIO Quota — 15% reserved seats\n• Foreign National — Supernumerary seats (40+ nationalities)\n• SAARC students — Concessional fees\n• ASEAN Scholarship — Up to 50% fee waiver",
    followups: ["nri_admission", "apply_now"],
  },
  erasmus: {
    id: "erasmus",
    label: "🇪🇺 Erasmus+ Program",
    answer: "DSU is an Erasmus+ partner with 12 European universities. Indian students can go for 1 semester or 1 full year under EU funding. No extra tuition at the host university. Apply through DSU's International Office.",
    followups: ["outbound", "international"],
  },

  // ─── CAMPUS ──────────────────────────────────────────────────────────────────
  campus: {
    id: "campus",
    label: "🏛️ Campus & Facilities",
    answer: "DSU has two campuses in Bengaluru:\n• **Main Campus** — Harohalli, Kanakapura Road (residential)\n• **City Innovation Campus** — Kudlu Gate, Hosur Road",
    followups: ["library", "campus_facilities", "hostel"],
  },
  library: {
    id: "library",
    label: "📖 Library",
    answer: "DSU Knowledge Resource Centre:\n• **1,20,000+** physical books\n• **45,000+** e-journals & e-books\n• **600+** reading seats\n• **18** global research databases (IEEE, Scopus, PubMed, JSTOR)\n• Open 8AM–11PM weekdays\n• 24×7 remote digital access",
    followups: ["campus_facilities", "research"],
    link: { label: "Library Page", href: "/p/library" },
  },
  campus_facilities: {
    id: "campus_facilities",
    label: "🏗️ Infrastructure",
    answer: "DSU campus facilities include:\n🔬 18 Research & Innovation Labs\n📚 World-class Knowledge Resource Centre\n💊 On-campus hospital & clinic\n🏋️ Multi-sport complex & gym\n🍽️ Multi-cuisine cafeteria\n⚡ 100% solar backup\n🚌 Campus shuttle network",
    followups: ["library", "hostel"],
  },

  // ─── CONTACT ─────────────────────────────────────────────────────────────────
  contact: {
    id: "contact",
    label: "📞 Contact",
    answer: "**DSU Contact Details:**\n📞 080 46461800 / 080 49092800\n📱 +91 7760964277 / 8296316737\n✉️ admissions@dsu.edu.in\n\n**Office Hours:** Mon–Fri 9AM–6PM | Sat 9AM–1PM",
    followups: ["admissions", "apply_now", "root"],
    link: { label: "Full Contact Page", href: "/p/contact" },
  },
};

// The starting bubbles shown on open
export const ROOT_FOLLOWUPS = CHAT_NODES["root"].followups;
