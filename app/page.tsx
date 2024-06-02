"use client";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { Doppio_One } from "next/font/google";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const doppioOne = Doppio_One({
  weight: "400",
  subsets: ["latin"],
});

const suffix = [
  "Something Here",
  "AI Enthusiast",
  "Software Engineer",
  "Full Stack Developer",
  "Data Scientist",
  "Mountain Biker",
];

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen z-20 p-4 md:p-8 min-w-[300px]">
      <div
        className={`flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl ${doppioOne.className}`}
      >
        <h1 className="text-themeOrange mb-4 sm:mb-6 md:mb-8">Hi I'm Jaden!</h1>
        <div className="flex flex-col items-center justify-center text-lg sm:text-xl text-center">
          <h1 className="text-white mb-2 sm:mb-0">
            Computer science student and
          </h1>
          <FlipWords words={suffix} className="text-themePurple" />
        </div>
        <Separator className="w-full h-0.5 bg-themeWhite my-4 sm:my-6 md:my-8" />
        <div className="flex flex-row space-x-4 text-lg sm:text-xl">
          <a
            href="https://www.linkedin.com/in/your-profile"
            className="bg-white p-2 sm:p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 z-20"
          >
            <IconBrandLinkedin className="h-6 w-6 sm:h-8 sm:w-8 text-themePurple" />
            <p className="text-themePurple">LinkedIn</p>
          </a>
          <a
            href="https://github.com/your-profile"
            className="bg-white p-2 sm:p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 z-20"
          >
            <IconBrandGithub className="h-6 w-6 sm:h-8 sm:w-8 text-themePurple" />
            <p className="text-themePurple">GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
}
