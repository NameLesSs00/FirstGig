"use client";
import React from "react";
import { MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_GREEN = "#25D366";
const X_BLACK = "#000000";
const BG_GRAY = "#595858";

interface CtaButtonProps {
  text: string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
  href: string;
}

const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  icon,
  bgColor,
  textColor,
  href,
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center space-x-3
        px-8 py-4 md:px-12 md:py-5
        rounded-[40px] font-bold text-lg md:text-xl
        shadow-2xl transition duration-300 ease-in-out
        transform hover:scale-[1.03] active:scale-[0.98]
      `}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.2), 
                    0 8px 10px -6px rgba(0, 0, 0, 0.2)`,
      }}
      onMouseEnter={(e) => {
        const shadowColor =
          bgColor === X_BLACK
            ? "rgba(255, 255, 255, 0.4)"
            : "rgba(37, 211, 102, 0.6)";
        e.currentTarget.style.boxShadow = `0 10px 30px ${shadowColor}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 25px -5px rgba(0, 0, 0, 0.2), 
                                           0 8px 10px -6px rgba(0, 0, 0, 0.2)`;
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="text-2xl">{icon}</span>
      <span>{text}</span>
    </motion.a>
  );
};

const SectionSix: React.FC = () => {
  return (
    <div
      className="min-h-[70vh] flex items-center justify-center px-4 md:px-8 font-inter"
      id="Contact"
      style={{
        backgroundColor: BG_GRAY,
        backgroundImage:
          "radial-gradient(circle at center, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.5) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto text-center py-20">
        {/* Headings */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tighter"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Seen Enough?
        </motion.h1>
        <motion.h2
          className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Time to Work.
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-200 mb-16 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Have a project in mind? Get in touch today.
        </motion.p>

        {/* Buttons with stagger */}
        <motion.div
          className="flex flex-col md:flex-row gap-8 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.25 } },
          }}
        >
          <CtaButton
            text="Message me on WhatsApp"
            icon={<MessageCircle className="w-6 h-6" />}
            bgColor={WHATSAPP_GREEN}
            textColor="white"
            href="https://wa.me/your-number"
          />
          <CtaButton
            text="You can find me on X"
            icon={<X className="w-6 h-6" />}
            bgColor={X_BLACK}
            textColor="white"
            href="https://x.com/yourhandle"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionSix;
