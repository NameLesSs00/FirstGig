"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const SectionOne = () => {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center p-6"
      id="Home"
    >
      {/* Background Image */}
      <Image
        src="/bg_image.png"
        alt="Background of an interior office"
        fill
        className="absolute inset-0 z-0 object-cover"
      />

      {/* Top Transparent Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-20 flex w-full max-w-5xl flex-col items-center justify-center rounded-3xl bg-[#5C5A5A]/70 py-16 px-12 text-center backdrop-blur-md"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="relative mx-auto mb-6 h-44 w-44 rounded-full overflow-hidden shadow-xl">
            <Image
              src="/Maria.png"
              alt="Maria Willem"
              fill
              className="rounded-full object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Maria Willem
          </h1>
          <h2 className="text-xl font-light text-white/90 md:text-2xl">
            Interior & Décor Designer
          </h2>
          <p className="mt-6 max-w-2xl text-white/80 md:text-lg">
            “Every space tells a story — my passion is turning yours into a
            place that feels like home.”
          </p>
        </div>
      </motion.div>

      {/* Bottom Transparent Container */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-20 mt-8 grid w-full max-w-5xl gap-6 rounded-3xl bg-[#5C5A5A]/40 p-8 backdrop-blur-md md:grid-cols-3"
      >
        <div className="rounded-2xl bg-[#595858] p-6 shadow-xl">
          <h3 className="text-xl font-semibold text-white">
            7+ Years Experience
          </h3>
          <p className="mt-2 text-sm text-white/80">
            Transforming spaces with style and purpose.
          </p>
        </div>

        <div className="rounded-2xl bg-[#595858] p-6 shadow-xl">
          <h3 className="text-xl font-semibold text-white">
            120+ Projects Completed
          </h3>
          <p className="mt-2 text-sm text-white/80">
            From cozy homes to modern offices.
          </p>
        </div>

        <div className="rounded-2xl bg-[#595858] p-6 shadow-xl">
          <h3 className="text-xl font-semibold text-white">
            Award-Winning Designs
          </h3>
          <p className="mt-2 text-sm text-white/80">
            Recognized for creativity and detail.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionOne;
