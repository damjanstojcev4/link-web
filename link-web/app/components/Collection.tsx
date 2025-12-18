"use client";

import Image from "next/image";
import React from "react";

// Collection items with titles and subtitles
const collections = [
  { title: "Casual Elegance", subtitle: "Стил за секој ден", image: "/g16.png" },
  { title: "Business Style", subtitle: "За успешниот човек", image: "/g10.jpg" },
  { title: "Formal Collection", subtitle: "За посебни прилики", image: "/g8.jpg" },
  { title: "Prom & Events", subtitle: "За незаборавни моменти", image: "/g2.jpg" },
  { title: "Urban Style", subtitle: "Модерна елеганција", image: "/g7.jpg" },
  { title: "Summer Collection", subtitle: "Летна софистицираност", image: "/g18.jpg" },
  { title: "Contemporary Look", subtitle: "Смена боја, современ крој", image: "/g15.jpeg" },
  { title: "Professional Edge", subtitle: "Доверба во секоја ситуација", image: "/g17.jpeg" },
  { title: "Sophisticated Occasions", subtitle: "Луксуз за специјални моменти", image: "/g6.jpg" },
];

const Collection = () => {
  return (
    <section id="collection" className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">Нашата колекција</h1>
        <p className="text-white text-base md:text-base mt-4 drop-shadow-lg mb-12">
          Избери стил што зборува за тебе, Избери Линкести!
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {collections.map((item, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg h-56 sm:h-72 md:h-80 lg:h-96 cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title ?? `Collection image ${index + 1}`}
                fill
                unoptimized
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />

              {/* Bottom gradient shadow + overlay with title/subtitle (bottom-left) */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              <div className="absolute inset-0 flex items-end justify-start p-4">
                <div className="z-10 rounded-md px-3 py-2 inline-block bg-transparent text-left">
                  <h3 className="text-white text-lg font-semibold drop-shadow">{item.title}</h3>
                  <p className="text-white text-base md:text-base mt-4 drop-shadow-lg">{item.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;