"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import footerLogo from "@/public/logo.png"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Brand Logo Area */}
        <div className="relative w-[220px] h-[50px] transition-opacity hover:opacity-80">
          <Image
            src={footerLogo}
            alt="Linkesti Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Center: Refined Copyright & Location */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="text-sm tracking-widest uppercase font-light text-gray-500">
            © {currentYear} <span className="text-white font-medium">Linkesti</span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <p className="text-[11px] uppercase tracking-[0.2em] text-blue-500/80">
              Битола, Македонија
            </p>
          </div>
        </div>

        {/* Right: Social Icons with New Tab functionality */}
        <div className="flex items-center gap-5">
          <Link 
            href="https://www.facebook.com/linkesti.bitola" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-3 bg-zinc-900 rounded-full hover:bg-white transition-all duration-300 border border-white/5"
            aria-label="Facebook"
          >
            <FaFacebook className="w-5 h-5 group-hover:text-black transition-colors" />
          </Link>
          <Link 
            href="https://www.instagram.com/linkesti_bitola/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-3 bg-zinc-900 rounded-full hover:bg-white transition-all duration-300 border border-white/5"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5 group-hover:text-black transition-colors" />
          </Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;