"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bg from "@/public/IMG_7705.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Cinematic Scale Animation */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8, // Slow zoom out
          ease: "easeOut",
        }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={bg}
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-6">
        {/* Title with Slide-up Animation */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg"
        >
          Во ритамот на животот
        </motion.h1>

        {/* Subtitle with Fade-in Animation */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-white text-base md:text-base mt-4 drop-shadow-lg max-w-2xl mx-auto"
        >
          Повеќе од две децении... Префинетост во срцето на градот. 
          Битола е нашиот град, стилот е нашата приказна.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;