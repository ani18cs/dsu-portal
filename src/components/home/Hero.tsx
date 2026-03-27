"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Cinematic "walking through the gates" zoom effect
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] bg-dsu-navy"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-start pt-[18vh] pb-8">
        {/* Background Image with Zoom */}
        <motion.div
          style={{ scale }}
          className="absolute inset-0 z-0 bg-black"
        >
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-10" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/campus-light.jpg"
            alt="Dayananda Sagar University Campus Light"
            className="w-full h-full object-cover block dark:hidden opacity-80"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/campus-dark.jpg"
            alt="Dayananda Sagar University Campus Dark"
            className="w-full h-full object-cover hidden dark:block opacity-90"
          />
        </motion.div>

        {/* Foreground Content */}
        <motion.div
          style={{ opacity, y: textY }}
          className="relative z-20 text-center px-4 w-full max-w-7xl mx-auto flex flex-col items-center flex-1 justify-between"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex flex-col items-center w-full mt-[-2vh] md:mt-[-4vh]"
          >
            <h1 className="font-serif font-bold flex flex-col items-center gap-0 w-full text-center select-none">
              <span className="text-[26px] sm:text-[34px] md:text-[42px] lg:text-[54px] tracking-[0.08em] text-white mix-blend-overlay drop-shadow-xl leading-none whitespace-nowrap">
                DAYANANDA SAGAR
              </span>
              <span className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[80px] tracking-widest text-dsu-gold drop-shadow-2xl leading-none whitespace-nowrap uppercase mt-0.5">
                UNIVERSITY
              </span>
            </h1>
          </motion.div>

          <div className="flex flex-col items-center w-full mt-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="flex flex-col items-center space-y-2 text-center"
            >
              <p className="text-sm md:text-lg tracking-widest font-light text-white drop-shadow-md">
                Supercharging India's AI future with DSU
              </p>
              <p className="text-xs md:text-base tracking-[0.4em] font-bold text-white uppercase drop-shadow-lg">
                INDIA'S AI FIRST UNIVERSITY
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="mt-6 md:mt-8"
            >
              <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-dsu-gold/0 via-dsu-gold to-dsu-gold/0 mx-auto animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
