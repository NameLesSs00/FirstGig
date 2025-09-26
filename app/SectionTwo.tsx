"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const SectionTwo: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#5C5A5A] py-16" id="About Me">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* === 1. Left Column: Text Card === */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-center p-8 md:p-12"
        >
          <div className="max-w-md rounded-[40px] bg-[#A9938A] p-10 text-white shadow-xl">
            <h2 className="text-3xl text-center font-bold mb-6">Who Am I?</h2>
            <p className="text-base leading-relaxed font-light">
              An interior and décor designer with a passion for transforming
              everyday spaces into inspiring environments. For over 7 years,
              I&apos;ve worked with homeowners, entrepreneurs, and small businesses
              to create interiors that blend beauty with functionality. My
              design approach is rooted in understanding people—their stories,
              lifestyles, and aspirations—and turning those into spaces that
              truly feel like home. Every project is a collaboration, and my
              goal is always the same: to bring comfort, style, and personality
              into every corner I design.
            </p>
          </div>
        </motion.div>

        {/* === 2. Right Column: Image === */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center justify-center p-6"
        >
          <div className="relative w-full max-w-lg h-[600px] md:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/img1.png"
              alt="Modern, bright kitchen and living space design"
              fill
              className="rounded-3xl object-cover"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default SectionTwo;
