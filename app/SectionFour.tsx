"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectCardProps {
  imageUrl: string;
  caption: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, caption }) => {
  return (
    <motion.div
      className="rounded-xl shadow-xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03, boxShadow: "0 12px 30px rgba(0,0,0,0.3)" }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={imageUrl}
          alt={caption}
          fill
          className="object-cover transition duration-300"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
          priority={false} // you can set true for first images
        />
      </div>

      {/* Caption Text */}
      <div className="p-4 bg-[#4A4848]">
        <p className="text-sm text-gray-100 font-medium leading-snug">
          {caption}
        </p>
      </div>
    </motion.div>
  );
};

const SectionFour: React.FC = () => {
  const projects: ProjectCardProps[] = [
    {
      imageUrl: "/img5.png",
      caption:
        "A bright and modern living room with neutral colors and warm wood accents.",
    },
    {
      imageUrl: "/img6.png",
      caption:
        "A luxurious bedroom with dark walls, a large tufted bed, and gold details.",
    },
    {
      imageUrl: "/img7.png",
      caption:
        "A clean, modern bathroom with wood paneling and a large bathtub.",
    },
    {
      imageUrl: "/img8.png",
      caption:
        "A clean, stylish kitchen with a mix of light wood and white cabinets.",
    },
    {
      imageUrl: "/img9.png",
      caption:
        "An open living and dining area with large windows overlooking a scenic view.",
    },
    {
      imageUrl: "/img10.png",
      caption:
        "A cozy reading nook with a green wall, a velvet chair, and an artistic flair.",
    },
  ];

  return (
    <div
      className="bg-[#5C5A5A] py-16 px-4 md:px-8 font-inter min-h-screen"
      id="Portfolio"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-12 md:mb-16 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Project I have worked on
        </motion.h1>

        {/* Grid of Cards with staggered children */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SectionFour;
