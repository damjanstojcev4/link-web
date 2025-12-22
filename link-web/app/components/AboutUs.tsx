"use client";

import Image from "next/image";
import aboutImg from "@/public/g16.png";

const AboutUs = () => {
  return (
    <section 
      id="about" 
      className="bg-black min-h-screen flex items-center justify-center py-16 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content - Appears FIRST on mobile */}
        <div className="flex flex-col justify-center space-y-8 text-white order-1 lg:order-2">
          <h2 className="text-5xl md:text-7xl font-normal tracking-wide">
            Кои сме ние?
          </h2>
          
          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
            <p>
              Препознатливи како еден од водечките модни избори во 
              нашиот град и пошироко, ја заслуживме довербата преку 
              доследност, искреност и вистинска почит кон секој клиент.
            </p>
            
            <p>
              Во <span className="text-white font-semibold">Линкести</span>, веруваме дека стилот е лична изјава која треба 
              да трае. Ви нудиме искуство обликувано со страст кон 
              квалитетот и естетиката што не подлегнува на времето.
            </p>
          </div>
        </div>

        {/* Image - Appears BELOW the text on mobile */}
        <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-[40px] order-2 lg:order-1">
          <Image
            src={aboutImg}
            alt="About Linkesti"
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" 
          />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;