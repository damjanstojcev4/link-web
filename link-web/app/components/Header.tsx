"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/linkesti-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = async (id: string) => {
    setIsOpen(false);

    // special-case 'home' -> scroll to top
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If we're not on the root route, navigate to it first, then scroll.
    if (pathname !== "/") {
      await router.push("/");

      // wait a tick to allow the DOM to render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);

      return;
    }

    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="backdrop-blur-md bg-black/95 fixed w-full top-0 z-50 shadow-md border-b border-white/10">
      <div className="flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <Link
            href="/"
            onClick={(e) => {
              // prevent Link from performing a navigation; we want smooth in-page scroll
              e.preventDefault();
              handleScroll("home");
            }}
          >
            <Image
              src={logo}
              alt="Logo"
              className="h-16 w-16 object-contain"
            />
          </Link>
          <span className="hidden lg:inline text-white font-semibold text-lg">
            Linkesti
          </span>
        </div>

        {/* Hamburger */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-6 text-white font-semibold">
          <li className="cursor-pointer hover:text-yellow-300" onClick={() => handleScroll("hero")}>
            Почетна
          </li>
          <li className="cursor-pointer hover:text-yellow-300" onClick={() => handleScroll("collection")}>
            Колекција
          </li>
          <li className="cursor-pointer hover:text-yellow-300" onClick={() => handleScroll("about")}>
            За нас
          </li>
          <li className="cursor-pointer hover:text-yellow-300" onClick={() => handleScroll("where")}>
            Каде сме
          </li>
          <li className="cursor-pointer hover:text-yellow-300" onClick={() => handleScroll("contact")}>
            Контакт
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 px-6 pb-4 space-y-2 text-white font-semibold">
          <div onClick={() => handleScroll("hero")} className="py-2 cursor-pointer hover:text-teal-300">Почетна</div>
          <div onClick={() => handleScroll("collection")} className="py-2 cursor-pointer hover:text-teal-300">Колекција</div>
          <div onClick={() => handleScroll("about")} className="py-2 cursor-pointer hover:text-teal-300">За нас</div>
          <div onClick={() => handleScroll("where")} className="py-2 cursor-pointer hover:text-teal-300">Каде сме</div>
          <div onClick={() => handleScroll("contact")} className="py-2 cursor-pointer hover:text-teal-300">Контакт</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
