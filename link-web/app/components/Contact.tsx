"use client";

import { useState } from "react";
import Image from "next/image";
import contactImg from "@/public/g7.jpg";

const Contact = () => {
  // State to track the transformation for mobile taps
  const [isTapped, setIsTapped] = useState(false);

  return (
    <section 
      id="contact" 
      className="bg-black py-20 px-6 md:px-12 lg:px-24 text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <h2 className="text-3xl md:text-5xl font-normal text-center mb-16 leading-tight max-w-4xl mx-auto">
          Контактирајте нè или посетете нè за повеќе информации!
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Text Details */}
          <div className="flex flex-col space-y-12">
            <p className="text-gray-400 text-lg md:text-xl">
              Имате прашање или сакате персонализирана консултација? <br />
              Контактирајте нè – секогаш сме тука за вас.
            </p>

            <div className="space-y-8">
              {/* Working Hours */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Работно време</h3>
                <div className="text-gray-300 space-y-2 text-lg">
                  <p>Понеделник - Петок</p>
                  <p className="font-medium text-white">10h–20h</p>
                  <p className="pt-2">Сабота 10h–17h</p>
                </div>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-2xl font-semibold mb-4">Телефон</h3>
                <p className="text-gray-300 text-xl tracking-wider">
                  +389 75 438740
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Branded Image */}
          <div 
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[40px] cursor-pointer touch-none"
            onClick={() => setIsTapped(!isTapped)}
          >
            <Image
              src={contactImg}
              alt="Linkesti Contact Representative"
              fill
              className={`
                object-cover transition-all duration-700 ease-in-out
                ${isTapped ? "grayscale-0 scale-105" : "grayscale hover:grayscale-0 md:hover:scale-105"}
              `}
              priority
            />
            {/* Mobile-only subtle visual hint */}
            {!isTapped && (
              <div className="absolute inset-0 flex items-end justify-center pb-6 md:hidden pointer-events-none">
                <span className="bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full text-xs uppercase tracking-widest opacity-70">
                  Допрете за боја
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;