"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";

export function NewsCarousel() {
  const [current, setCurrent] = useState(0);

  const news = [
    { 
      title: "Inside Dayananda Sagar University’s AI Factory | India AI Impact Summit 2026", 
      date: "25 Feb 2026, 11:01 PM IST", 
      desc: "An exclusive ET Spotlight exploration inside our next-generation campus AI labs driving national artificial intelligence innovation.",
      image: "bg-[url('/news-1.jpg')]",
      link: "https://economictimes.indiatimes.com/inside-dayananda-sagar-universitys-ai-factory-india-ai-impact-summit-2026/videoshow/128790451.cms?from=mdr"
    },
    { 
      title: "Dr. D Premachandra Sagar on NDTV | DSU Partners with NVIDIA", 
      date: "Latest Broadcast", 
      desc: "DSU officially partners with NVIDIA to construct and deploy India’s 1st Academic AI Factory. Watch the full TV broadcast here.",
      image: "bg-[url('/news-2.jpg')]",
      link: "https://www.youtube.com/watch?v=OnFyTkmXRZQ" 
    },
    { 
      title: "Dayananda Sagar University at AI Impact Summit 2026", 
      date: "Tech Summit Features", 
      desc: "Explore the comprehensive highlights and breakthroughs presented by our top computer science researchers at the AI Summit.",
      image: "bg-[url('/campus-dark.jpg')]",
      link: "https://www.dsu.edu.in/aisummit26"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % news.length), 6000);
    return () => clearInterval(timer);
  }, [news.length]);

  return (
    <section className="bg-white relative overflow-hidden">
      
      {/* News Category Label Header */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif font-bold text-[#002366] drop-shadow-sm mb-6 tracking-wide"
        >
          DSU in News & Articles
        </motion.h2>
        <div className="w-32 h-1.5 bg-dsu-gold mx-auto rounded-full shadow-lg" />
        <p className="mt-6 text-gray-500 font-medium text-lg">
          The latest coverage and breakthroughs broadcasting our vision across global and national media.
        </p>
      </div>

      <div className="w-full h-[600px] md:h-[700px] relative group bg-dsu-navy shadow-inner">
        
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`absolute inset-0 ${news[current].image} bg-cover bg-center`}
          >
            {/* Dark royal blue aesthetic overlay for severe contrast readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002366] via-[#002366]/80 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center relative z-10">
            
            {/* Active Content Context Block */}
            <div className="max-w-3xl">
              <div className="mb-4 inline-block bg-dsu-gold/20 backdrop-blur-md border border-dsu-gold/50 text-dsu-gold px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase">
                {news[current].date}
              </div>
              
              <AnimatePresence mode="wait">
                <motion.h2
                  key={`title-${current}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-xl pr-4"
                >
                  {news[current].title}
                </motion.h2>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-blue-50 text-lg md:text-xl leading-relaxed max-w-xl mb-10 font-medium"
                >
                  {news[current].desc}
                </motion.p>
              </AnimatePresence>

              <motion.a 
                href={news[current].link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-dsu-gold text-[#002366] font-bold px-8 py-4 rounded-full inline-flex items-center gap-3 hover:bg-white transition-colors shadow-2xl uppercase tracking-wider text-sm"
              >
                Read Full Story
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Navigation Arrows */}
            <div className="hidden md:flex flex-col gap-4 absolute right-6">
              <button 
                onClick={() => setCurrent((p) => (p - 1 + news.length) % news.length)}
                className="w-14 h-14 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-dsu-navy transition-all shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => setCurrent((p) => (p + 1) % news.length)}
                className="w-14 h-14 rounded-full bg-dsu-gold text-dsu-navy flex items-center justify-center hover:bg-white transition-all shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>

        {/* Global Progress Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {news.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${idx === current ? "w-16 bg-dsu-gold shadow-[0_0_10px_rgba(212,175,55,0.8)]" : "w-6 bg-white/40 hover:bg-white/60"}`} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}
