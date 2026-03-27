# 🎓 DSU Portal — Reimagined
### *A high-performance, premium academic web portal for Dayananda Sagar University*

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-dsu--portal--7f2n.vercel.app-002366?style=for-the-badge)](https://dsu-portal-7f2n.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com/)

---

## 🧠 The Vision — Decongesting University Portals

University websites are broken. They are cluttered, architecturally buried under layers of links, outdated UI paradigms, and non-intuitive navigation flows. The moment a student, parent, or faculty member lands on a traditional university portal, they are immediately overwhelmed by a grid of unweighted links, outdated Flash-era layouts, and zero design hierarchy.

**DSU Portal Reimagined** was built with one clear philosophical mandate:

> *Every person who visits this website — whether a first-generation student, a concerned parent, or a foreign recruiter — should find exactly what they need in under three clicks.*

This is not just a visual refresh. It is a **complete rethinking** of how an academic institution communicates with its stakeholders. We eliminated every redundant link, every bloated navigation cluster, and every dead-end CTA, replacing them with a streamlined, domain-driven information architecture that respects the user's time and cognitive bandwidth.

---

## 🚀 Live Deployment

**👉 [https://dsu-portal-7f2n.vercel.app/](https://dsu-portal-7f2n.vercel.app/)**

Edge-deployed globally via Vercel's CDN infrastructure. Fast, stable, and served from nodes closest to your location worldwide.

---

## ✨ Feature Overview

### 🎬 Cinematic Entry Experience
- **Preloader Video** — A full-screen branded intro video fires only once per session (managed via `sessionStorage`). Returning visitors skip it entirely for instant access.
- **Parallax Hero Section** — The campus hero image has a cinematic zoom-on-scroll effect built using Framer Motion's `useScroll` and `useTransform` hooks. As you scroll, the image scales, creating a "walking through the gates" visual.

### 🧭 Context-Aware Navigation
- **Dual-state Navbar** — Transparent and immersive on the Home page, switching to an opaque Royal Dark Blue (`#002366`) on all internal pages for maximum legibility.
- **Smart Home Button** — Clicking "Home" or the DSU logo when already on the homepage smoothly scrolls back to the very top instead of triggering a hard reload.
- **Hamburger Side Drawer** — A full `420px` sliding panel with hierarchical, categorized link trees for every department, academic program, and operational service.
- **Global "Apply Now" CTA** — A persistent gold pill button embedded in the Navbar on desktop devices, always surfacing the admission funnel without interrupting the user's journey.

### 🏠 Home Page Experience
- **Accreditations Grid** — 12 high-impact glassmorphic tiles (NIRF, NAAC A, AICTE, NBA, QS Rankings, etc.) with gold hover interactions and a stagger-in entrance animation.
- **Academic Disciplines Tiles** — 6 richly illustrated discipline cards (Engineering, Health Sciences, Commerce, Sciences, Design, Executive Ed) with local image backgrounds, visible gradient overlays, and icon-based CTAs.
- **"DSU in News & Articles" Carousel** — A full-screen, auto-advancing news carousel with real press links, custom gold-dot pagination, and swipe-ready navigation arrows.
- **Bottom Admission CTA Banner** — A high-contrast gold section with "Ready to Begin Your Journey?" text, wired to funnel users directly into the admission application.

### 🏛️ Departments & Academics
- **Dynamic Department Pages** — Every department (CSE, AI, ECE, Mechanical, Bio, Business, Law) has a unique hero image sourced from high-fidelity domain-specific photography.
- **Faculty Profiles** — Named academic faculty (Dr. Rajesh Kulkarni, Dr. Suresh Iyer, etc.) with professional portraits, roles, and research specializations.
- **Accordion-based Curriculum** — Animated, expandable course modules within each department page for clean content browsing.
- **Labs & Research Image Grid** — Dynamic image grids showcasing actual lab environments per department.

### 📄 Fully-Routed Secondary Pages (No More Dead Links)
Every single item in the navigation now leads to a real, fully themed page. Powered by a DRY Next.js dynamic route at `/p/[slug]`:

| Route | Content |
|---|---|
| `/p/placement` | CIL overview, animated live stats (2000+ placed, ₹54 LPA peak), top recruiters |
| `/p/library` | Digital resources, E-journals, physical photo gallery of spaces |
| `/p/hostel` | Fee structure, accommodation types, high-def photo gallery |
| `/p/international` | Overseas exchange, dual-degree, internship programs |
| `/p/careers` | Sector-specific graduate career trajectories |
| `/p/research` | Quantum computing, biotech, patent statistics |
| `/p/examinations` | Tentative semester timetables, Controller of Exams contact |
| `/p/fees-eligibility` | Program-wise tuition breakdown |
| `/p/hostel-fee` | Hostel accommodation tier pricing |
| `/p/contact` | Full postal addresses, all helpline numbers, campus-wise directory |

### 📊 Animated Placement Statistics Dashboard
On the `/p/placement` page, four live-animated stat tiles count up from `0` to their final values using a custom React `useEffect` timer hook:
- **2000+** Students Placed
- **350+** Companies on Campus
- **12 LPA** Average Package
- **54 LPA** Highest Package

### 📝 Admission Application System
- A fully functional `/apply` page with a candidate form (Name, Email, Phone, Program).
- Upon submission, the form transitions into a thank-you confirmation with a green checkmark animation.
- Entrance Exam Code tiles (DSAT, Comed-K E182, CET DSU-E240, PGCET T970, etc.) displayed below for reference.

### 🗺️ External Integrations
- **Google Maps Embed** — Live campus map baked into the footer.
- **E-Brochure** — Direct PDF link to the official `DSU_Main_Campus_Programs_2025.pdf`.
- **Telephone Directory** — Direct link to the official `Telephone_Directory_25022026.pdf`.
- **360° Virtual Tour** — External tour routed to `dsu.edu.in/virtual-tour/`.
- **Social Media** — Facebook, Twitter/X, Instagram, LinkedIn links in the footer.

### 🎨 Leadership & Administration
- Horizontal full-width rectangle tiles replacing the old vertical card grids.
- Every leader tile has a professional portrait, quote, fake contact email and phone number.
- Quote blocks styled in italics with a visual gold left-border element.

---

## 🎨 UI Design & Integration Philosophy

### Design Tokens
| Token | Value | Usage |
|---|---|---|
| Royal Blue | `#002366` | Primary brand color — headings, hero sections, footers |
| DSU Gold | `#D4AF37` | Accent — CTAs, hovers, separators, quote markers |
| Background | `from-blue-50 to-white` | Gradient applied globally for depth |

### Typography System
- **Headings:** `Playfair Display` (Google Fonts, Serif) — prestige and academic gravitas
- **Body:** `Inter` (Google Fonts, Sans) — legibility and modern neutrality
- **Labels & Tags:** `uppercase tracking-widest` — consistent discipline hierarchy

### Component Design Language
- **Glassmorphism Tags** — Used for press badges and accreditation counters
- **Rounded 3XL Cards** — `rounded-3xl` cards with `shadow-[0_4px_20px_...]` layered depth
- **Gradient Overlays** — Applied precisely on discipline tiles for text readability above imagery
- **Micro-Animations** — Every tile `hover:-translate-y-1`, stat tiles `hover:scale-105`, drawer links slide on scroll-enter via Framer Motion `whileInView`
- **Anti-Clutter Spacing** — Strict `py-16` to `py-20` between all major sections to prevent cognitive overload

---

## 🔮 Future Updates & The Road Ahead

This portal was built as a **foundation**, not a final product. The following features are planned for the next evolution of the platform:

### 🤖 AI Academic Concierge Chatbot
A context-aware AI assistant (GPT-4o or Gemini powered) embedded directly into the portal. It will:
- Answer student queries about admission deadlines, fee structures, and eligibility in real-time
- Guide applicants through the step-by-step application process
- Route complex queries intelligently to the right department email or phone

### 🔐 Student / Faculty / Parent Portals
Real authentication via secure OAuth flows linking to:
- Academic dashboards with attendance, grades, and CGPA analytics
- Fee payment gateways
- Parent notification systems for results and attendance alerts

### 📊 Live Analytics Dashboard
A real-time administrative panel for DSU staff to update placement data, push news articles, upload brochures, and re-configure page content — without writing any code.

### 📱 Progressive Web App (PWA) / Native App
Convert the portal into a full offline-capable PWA or a React Native cross-platform app so students can access exam timetables, hostel notices, and results from their phone without a browser.

### 🗓️ Integrated Events Calendar
A live IQAC and DSU event calendar with push notification support, allowing students and faculty to subscribe to events by department.

### 🌐 Multilingual Support
Full i18n implementation to enable Kannada, Hindi, and Telugu versions of the portal — critical for the student demographic in rural Karnataka.

### 🎓 Alumni Network Portal
A searchable, profile-based alumni registry allowing current students to connect with graduates from their specific department for mentorship, referrals, and career guidance.

### 🏆 Scholarship & Financial Aid Tracker
A dynamic scholarship finder where students enter their marks, category, and program to instantly calculate their DSU scholarship eligibility and compute net payable fees.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel (Edge Network) |
| Version Control | GitHub |

---

## 📦 Getting Started Locally

```bash
git clone https://github.com/ani18cs/dsu-portal.git
cd dsu-portal
npm install
npm run dev
```



## 👤 Author

**Aniket Kumar Singh**
Built as a full-stack frontend architecture project to demonstrate the power of modern web tooling applied to institutional design.

> *"University websites don't have to be walls of text. They can be experiences."*

---

*Dayananda Sagar University Portal — Reimagined with precision, purpose, and passion.*
