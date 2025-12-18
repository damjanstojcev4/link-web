"use client";

import Image from "next/image";
import bg from "@/public/IMG_7705.jpeg"; // ← change this to your image

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-[90vh] flex items-center justify-center"
    >
      {/* Background Image */}
      <Image
        src={bg}
        alt="Hero Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Text Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          Во ритамот на животот
        </h1>
        <p className="text-white text-base md:text-base mt-4 drop-shadow-lg">
          Повеќе од две децении... Префинетост во срцето на градот. Битола е нашиот град, стилот е нашата приказна.
        </p>
      </div>
    </section>
  );
};

export default Hero;
