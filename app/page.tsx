"use client";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { Doppio_One } from "next/font/google";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { motion } from "framer-motion";

const doppioOne = Doppio_One({
  weight: "400",
  subsets: ["latin"],
});

const suffix = [
  "AI Enthusiast",
  "Software Engineer",
  "Full Stack Developer",
  "Data Scientist",
  "Mountain Biker",
];

export default function Home() {
  return (
    <div className="flex flex-1 justify-center mt-48 md:mt-0 md:items-center w-full z-20  overflow-auto dark:bg-gray-900 p-6 min-h-screen min-w-[300px] lg:-mt-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`flex flex-col items-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl ${doppioOne.className}`}
      >
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-themeOrange mb-4 sm:mb-10 md:mb-14"
        >
          Hi I'm Jaden!
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col items-center justify-center text-lg sm:text-xl text-center lg:text-2xl"
        >
          <h1 className="text-white sm:mb-0">Computer science student at</h1>
          <div className="flex flex-row">
            <h1 className="text-white">Georgia Tech and</h1>
            <FlipWords words={suffix} className="text-themePurple" />
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col text-lg sm:text-xl"
        >
          <Separator className="w-full h-0.5 bg-themeWhite my-4 sm:my-6 md:my-8" />
          <div className="flex flex-row space-x-5 text-themeBlack">
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://www.linkedin.com/in/jaden-hamer-b96226219"
              className="bg-white p-3 sm:p-2 rounded-lg shadow-md flex items-center justify-center space-x-2 z-20 hover:text-themeOrange"
            >
              <IconBrandLinkedin className="h-6 w-6 sm:h-8 sm:w-8" />
              <p className="">LinkedIn</p>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              href="https://github.com/jhamer8"
              className="bg-white p-3 sm:p-2 rounded-lg shadow-md flex items-center justify-center space-x-2 z-20 hover:text-themeOrange"
            >
              <IconBrandGithub className="h-6 w-6 sm:h-8 sm:w-8 text-" />
              <p className="">GitHub</p>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}