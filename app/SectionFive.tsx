"use client";
import React from "react";
import { motion } from "framer-motion";

interface TestimonialProps {
  name: string;
  imageUrl: string;
  feedback: string;
}

// Reusable component for displaying an individual client feedback card
const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  imageUrl,
  feedback,
}) => {
  return (
    <motion.div
      className="bg-[#A49E9E]/70 rounded-xl p-6 md:p-8 flex flex-col items-center text-center shadow-lg h-full cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -8,
        boxShadow: "0px 12px 30px rgba(0,0,0,0.25)",
      }}
      whileTap={{ scale: 0.98 }} // small "click" feedback
    >
      {/* Client Image */}
      <motion.img
        src={imageUrl}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4"
        whileHover={{ scale: 1.1, rotate: 2 }} // subtle zoom & tilt
        transition={{ type: "spring", stiffness: 300 }}
      />

      {/* Client Name */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">{name}</h3>

      {/* Feedback Text */}
      <p className="text-sm text-gray-700 leading-relaxed italic">
        &quot;{feedback}&quot;
      </p>
    </motion.div>
  );
};

const SectionFive: React.FC = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Elena Fischer",
      imageUrl: "/img11.png",
      feedback:
        "Maria completely transformed my apartment into a cozy, modern space that finally feels like home. She understood my style immediately and added details I would have never thought of myself. Working with her was such a smooth and inspiring experience.",
    },
    {
      name: "Paul Sami",
      imageUrl: "/img12.png",
      feedback:
        "Maria is so skilled at what she does she made the design for my daughter's bedroom and it turned out to be so great. Thank you so much.",
    },
    {
      name: "Daniel Hartmann",
      imageUrl: "/img13.png",
      feedback:
        "Our office needed a fresh look, and Maria delivered beyond expectations. She created a professional yet welcoming environment that perfectly reflects our brand. Clients often compliment the design, and our team loves the new space.",
    },
  ];

  return (
    <div
      className="bg-[#D7D6D6] py-16 px-4 md:px-8 font-inter min-h-screen"
      id="Testimonials"
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12 md:mb-16 tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        clients&apos; feedback
      </motion.h1>

      {/* Testimonials container with staggered children */}
      <motion.div
        className="w-full p-6 rounded-xl shadow-xl bg-[#595858]/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } },
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionFive;
