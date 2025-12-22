"use client";

import { FiAward, FiHeart, FiMapPin } from "react-icons/fi";

const values = [
  {
    icon: <FiAward className="w-8 h-8" />,
    title: "20+ Години Традиција",
    description: "Докажан квалитет и доследност во светот на модата."
  },
  {
    icon: <FiHeart className="w-8 h-8" />,
    title: "Личен Пристап",
    description: "Секој клиент добива внимание и совет за совршен изглед."
  },
  {
    icon: <FiMapPin className="w-8 h-8" />,
    title: "Срцето на Битола",
    description: "Лоцирани во центарот, достапни за вашите најважни моменти."
  }
];

const BrandValues = () => {
  return (
    <section className="bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {values.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center space-y-4">
            <div className="text-gray-500 mb-2">{item.icon}</div>
            <h3 className="text-white text-xl font-light tracking-widest uppercase">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandValues;