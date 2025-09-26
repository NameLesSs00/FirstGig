"use client";
import React from "react";
import { motion } from "framer-motion";

const SectionThree: React.FC = () => {
  return (
    <div className="bg-[#5C5A5A] font-inter" id="Services">
      {/* === Top Hero (separated) === */}
      <div className="relative h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <motion.img
          src="/img2.png"
          alt="Interior design hero"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Centered content */}
        <motion.div
          className="relative text-white text-center z-10 px-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 drop-shadow-xl leading-snug">
            Designing Spaces, Creating Stories
          </h1>

          <motion.div
            className="bg-black max-w-3xl mx-auto p-6 rounded-xl shadow-2xl border border-gray-600"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-base md:text-lg font-light leading-relaxed">
              I offer personalized décor and interior design solutions that
              combine style, comfort, and functionality. From cozy homes to
              professional workspaces, my goal is to create spaces that reflect
              your personality and needs.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* === Bottom two cards === */}
      <motion.div
        className="grid lg:grid-cols-2 gap-6 p-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Left Card */}
        <motion.div
          className="bg-[#F4EAE0] rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02] flex flex-col md:flex-row h-[320px] overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
            <h2 className="text-xl text-center font-semibold mb-4 text-gray-800">
              Home & Living Spaces
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              I help homeowners bring their dream interiors to life. Whether
              it's a single room refresh or a full home makeover, I design
              spaces that are warm, welcoming, and uniquely yours. From color
              palettes to furniture selection, every detail is carefully chosen
              to create harmony.
            </p>
          </div>
          <div className="md:w-2/5 relative h-40 md:h-full overflow-hidden md:rounded-r-xl rounded-b-xl">
            <img
              src="/img3.png"
              alt="Warm interior space design example"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Card */}
        <motion.div
          className="bg-[#AFB3AC] rounded-xl shadow-xl transform transition duration-300 hover:scale-[1.02] flex flex-col md:flex-row h-[320px] overflow-hidden"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
          }}
        >
          <div className="p-6 md:p-8 md:w-3/5 flex flex-col justify-center">
            <h2 className="text-xl text-center font-semibold mb-4 text-gray-800">
              Workspaces & Offices
            </h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              A well-designed workspace can boost creativity and productivity. I
              work with businesses and professionals to style offices and
              studios that inspire focus and reflect brand identity. My designs
              balance functionality with aesthetics to make every workplace
              inviting.
            </p>
          </div>
          <div className="md:w-2/5 relative h-40 md:h-full overflow-hidden md:rounded-r-xl rounded-b-xl">
            <img
              src="/img4.png"
              alt="Modern workspace with plants and desktop monitor"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionThree;
