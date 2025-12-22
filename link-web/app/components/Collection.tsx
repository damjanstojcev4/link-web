"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";

const collections = [
  { title: "Casual Elegance", subtitle: "Стил за секој ден", image: "/g16.png" },
  { title: "Business Style", subtitle: "За успешниот човек", image: "/g10.jpg" },
  { title: "Formal Collection", subtitle: "За посебни прилики", image: "/g8.jpg" },
  { title: "Prom & Events", subtitle: "За незаборавни моменти", image: "/g2.jpg" },
  { title: "Urban Style", subtitle: "Модерна елеганција", image: "/g7.jpg" },
  { title: "Summer Collection", subtitle: "Летна софистицираност", image: "/g18.jpg" },
  { title: "Contemporary Look", subtitle: "Смена боја, современ крој", image: "/g15.jpeg" },
  { title: "Professional Edge", subtitle: "Доверба во секоја ситуација", image: "/g17.jpeg" },
  { title: "Sophisticated Occasions", subtitle: "Луксуз за специјални моменти", image: "/g6.jpg" }
];

// 1. Container variant to coordinate children
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each card
    },
  },
};

// 2. Individual card variant
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const Collection = () => {
  return (
    <section id="collection" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-4">Нашата колекција</h2>
        <p className="text-gray-400 text-lg mb-16 italic">
          Избери стил што зборува за тебе, Избери Линкести!
        </p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {collections.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative group rounded-[30px] overflow-hidden aspect-[4/5] cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute inset-0 flex flex-col justify-end p-8 text-left">
                <h3 className="text-xl font-medium tracking-wide">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Collection;