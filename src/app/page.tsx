"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hero } from "@/components/home/Hero";
import { Accreditations } from "@/components/home/Accreditations";
import { Disciplines } from "@/components/home/Disciplines";
import { NewsCarousel } from "@/components/home/NewsCarousel";

export default function Home() {
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    // Check if we already showed the preloader in this session
    const hasPreloaded = sessionStorage.getItem("dsu_preloader_seen");
    if (hasPreloaded === "true") {
      setIsPreloading(false);
      return;
    }

    // Fallback timeout just in case the video is very long or buffers
    const timer = setTimeout(() => {
      setIsPreloading(false);
      sessionStorage.setItem("dsu_preloader_seen", "true");
    }, 25000); 
    return () => clearTimeout(timer);
  }, []);

  const handleVideoEndOrSkip = () => {
    setIsPreloading(false);
    sessionStorage.setItem("dsu_preloader_seen", "true");
  };

  return (
    <main className="relative min-h-screen bg-background flex flex-col">
      <AnimatePresence mode="wait">
        {isPreloading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-dsu-navy flex items-center justify-center cursor-default"
          >
            {/* The user will replace this src with their own video later. */}
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={handleVideoEndOrSkip}
              className="w-full h-full object-cover transform scale-[1.10] md:scale-125 origin-center"
              src="/preloader.mp4"
            >
              Your browser does not support the video tag.
            </video>
            
            <div className="absolute bottom-10 right-10 z-[10000]">
              <button 
                onClick={handleVideoEndOrSkip} 
                className="text-white/50 hover:text-white transition-colors text-sm tracking-widest uppercase font-sans"
              >
                Skip Intro
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="flex flex-col flex-1"
          >
            <Hero />
            <Accreditations />
            <Disciplines />
            <NewsCarousel />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
