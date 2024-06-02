"use client";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { Doppio_One } from "next/font/google";
import { useState } from "react";
import { Separator } from "@/components/ui/separator"
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
  "Mountain Biker"
];

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen z-20">
      <div
        className={`flex flex-col items-center justify-center text-6xl md:text-8xl ${doppioOne.className}`}
      >
        <h1 className="text-themeOrange mb-8">Hi I'm Jaden!</h1>
        <div className="flex items-center justify-center text-xl">
          <h1 className="text-white">Computer science student and</h1>
          <FlipWords words={suffix} className="text-themePurple"/>
        </div>
        <Separator className="w-full h-0.5 bg-themeWhite my-8" />
        <div className="flex space-x-4 text-xl">
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2">
            <a href="https://www.linkedin.com/in/your-profile" className="flex items-center space-x-2">
              <IconBrandLinkedin className="h-8 w-8 text-themePurple" />
              <p className="text-themePurple">LinkedIn</p>
            </a>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-2 z-20">
            <a href="https://github.com/your-profile" className="flex items-center space-x-2">
              <IconBrandGithub className="h-8 w-8 text-themePurple" />
              <p className="text-themePurple">GitHub</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
