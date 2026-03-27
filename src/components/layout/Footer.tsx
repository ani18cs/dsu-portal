"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dsu-navy text-white pt-20 pb-10 px-6 sm:px-12 border-t mt-auto z-50 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Left: Branding & Addresses */}
        <div className="col-span-1 lg:col-span-1 flex flex-col items-start lg:items-start text-left lg:text-left">
          <Link href="/" className="mb-6 bg-white p-2 md:p-3 rounded-lg inline-block shadow-xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-wide.png" alt="DSU Logo" className="h-16 md:h-20 w-auto" />
          </Link>
          
          <div className="space-y-6 text-sm text-gray-300 w-full flex flex-col items-start lg:items-start">
            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-dsu-gold shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 items-start lg:items-start w-full">
                <strong className="text-white block tracking-wide uppercase">DSU MAIN CAMPUS:</strong>
                <p>Devarakaggalahalli, Harohalli,<br/>Kanakapura Road,<br/>Bengaluru South Dt - 562 112</p>
                <p className="mt-1 text-dsu-gold font-medium">Email: admissions@dsu.edu.in</p>
                <p className="font-bold text-white">Admissions Helpline: 080-46461800 / 080-49092800</p>
                <p className="font-bold text-white">Student Helpline: 080-43751268</p>
              </div>
            </div>
            
            <div className="w-8 border-b border-dsu-gold/30 my-1"></div>

            <div className="flex gap-3 items-start">
              <MapPin className="w-5 h-5 text-dsu-gold shrink-0 mt-0.5" />
              <div className="flex flex-col gap-1 items-start lg:items-start w-full">
                <strong className="text-white block tracking-wide uppercase">DSU CITY INNOVATION CAMPUS:</strong>
                <p>Administrative & Main Admission Office,<br/>Kudlu Gate, Hosur Road,<br/>Bengaluru - 560 114</p>
                <p className="font-bold text-white mt-1">Ph: 080-42201990 / 080-42201918</p>
              </div>
            </div>
          </div>
        </div>

        {/* Center 1: Quick Links */}
        <div className="col-span-1">
          <h3 className="font-serif text-xl text-dsu-gold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {["About DSU", "Leadership", "Careers", "News & Events", "IQAC", "RTI & Disclosures"].map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-dsu-gold transition-colors block">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Center 2: Academics */}
        <div className="col-span-1">
          <h3 className="font-serif text-xl text-dsu-gold mb-6 border-b border-white/10 pb-2 inline-block">Academics</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {["Schools & Departments", "Undergraduate Programs", "Postgraduate Programs", "Ph.D Programs", "Executive Education", "Placements"].map((link) => (
              <li key={link}>
                <Link href="#" className="hover:text-dsu-gold transition-colors block">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Map Integration */}
        <div className="col-span-1 lg:col-span-1 flex flex-col h-full bg-white p-1 rounded-xl shadow-2xl">
          <div className="flex-1 w-full bg-gray-800 rounded-lg overflow-hidden min-h-[250px] border border-white/10">
            <iframe 
              src="https://maps.google.com/maps?q=Dayananda%20Sagar%20University,%20Bengaluru&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Dayananda Sagar University. All Rights Reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/Dayanandasagaruniversitybangalore/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-dsu-gold transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
          </a>
          <a href="https://x.com/DSUBangalore" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-dsu-gold transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
          </a>
          <a href="https://www.instagram.com/reel/DWVXf4wCqde/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-dsu-gold transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.85 3.9 2.3 7.15 2.15 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07C2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4zm5.8-9.8a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
          </a>
          <a href="https://www.linkedin.com/company/dsu-online/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-dsu-gold transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.96 0-1.75-.79-1.75-1.76s.79-1.75 1.75-1.75 1.76.79 1.76 1.75-.8 1.76-1.76 1.76zm13.5 12.27h-3v-5.6c0-3.37-4-3.12-4 0v5.6h-3v-11h3v1.76c1.4-2.58 7-2.78 7 2.47v6.77z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
