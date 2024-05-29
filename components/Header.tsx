"use client";

import React from "react";
import { motion, useAnimation } from "framer-motion";

const useNavItemAnimation = () => {
  return useAnimation();
};

const NavItem = ({ text, href }: { text: string; href: string }) => {
  const controls = useNavItemAnimation();

  const motionProps = {
    whileHover: { scale: 1.15 },
    transition: { type: "spring", stiffness: 90 },
  };

  const textHoverProps = {
    whileHover: { color: "#E9B24C" },
  };

  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%" },
  };

  return (
    <motion.a
      {...motionProps}
      href={href}
      onHoverStart={() => controls.start("visible")}
      onHoverEnd={() => controls.start("hidden")}
    >
      <motion.div className="relative">
        <motion.h1 {...textHoverProps} className="text-white">
          {text}
        </motion.h1>
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-yellow-500"
          variants={underlineVariants}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.a>
  );
};

function Header() {
  return (
    <header className="z-20">
      <div className="flex flex-1 justify-center space-x-12 text-lg mt-8">
        <NavItem text="HOME" href="/" />
        <NavItem text="ABOUT" href="/about" />
        <NavItem text="SKILLS" href="/skills" />
        <NavItem text="CONTACT" href="/contact" />
      </div>
    </header>
  );
}

export default Header;

