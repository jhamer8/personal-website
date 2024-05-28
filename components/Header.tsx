"use client";

import React from "react";
import { motion } from "framer-motion";

function Header() {
  const motionProps = {
    whileHover: { scale: 1.15, color: "#97C6CF" },
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { type: "spring", stiffness: 90 },
  };

  return (
      <div className="flex flex-1 justify-center space-x-12 text-lg">
        <motion.a {...motionProps} href="/">
          <h1>HOME</h1>
        </motion.a>

        <motion.a {...motionProps} href="/about">
          <h1>ABOUT</h1>
        </motion.a>

        <motion.a {...motionProps} href="/skills">
          <h1>SKILLS</h1>
        </motion.a>
        <motion.a {...motionProps} href="/contact">
          <h1>CONTACT</h1>
        </motion.a>
      </div>
  );
}

export default Header;
