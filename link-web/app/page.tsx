"use client";

import { motion, Variants } from "framer-motion";
import Hero from "./components/Hero";
import BrandValues from "./components/Values";
import AboutUs from "./components/AboutUs";
import Collection from "./components/Collection";
import Where from "./components/Where";
import Contact from "./components/Contact";

// Explicitly type the variant to fix the error
const fadeInVariant: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

export default function Home() {
  return (
    <div className="bg-black overflow-hidden"> {/* Added overflow-hidden to prevent scroll jitters */}
      <Hero />

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInVariant}
      >
        <BrandValues />
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeInVariant}
      >
        <AboutUs />
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, margin: "-100px" }} 
        variants={fadeInVariant}
      >
        <Collection />
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInVariant}
      >
        <Where />
      </motion.div>

      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fadeInVariant}
      >
        <Contact />
      </motion.div>
    </div>
  );
}