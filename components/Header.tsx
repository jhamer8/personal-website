"use client";

import React from "react";
import { motion } from "framer-motion";

function Header() {
  const motionProps = {
    whileHover: { scale: 1.15 },
    transition: { type: "spring", stiffness: 90 },
  };

  const textHoverProps = {
    whileHover: { 
      color: "#E9B24C", 
      textDecoration: "underline",
      textUnderlineOffset: "6px"
    },
  };

  return (
    <header className="z-20">
      <div className="flex flex-1 justify-center space-x-12 text-lg mt-8">
        <motion.a {...motionProps} href="/">
          <motion.h1 {...textHoverProps} className="text-white">HOME</motion.h1>
        </motion.a>

        <motion.a {...motionProps} href="/about">
          <motion.h1 {...textHoverProps} className="text-white">ABOUT</motion.h1>
        </motion.a>

        <motion.a {...motionProps} href="/skills">
          <motion.h1 {...textHoverProps} className="text-white">SKILLS</motion.h1>
        </motion.a>

        <motion.a {...motionProps} href="/contact">
          <motion.h1 {...textHoverProps} className="text-white">CONTACT</motion.h1>
        </motion.a>
      </div>
    </header>
  );
}

export default Header;
