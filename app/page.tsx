"use client";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { Rock_Salt } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { BeakerIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useFlubber } from "./hooks/use-flubber";

const rockSalt = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
});

const suffix = [
  "personal website",
  "tech journey",
  "code chronicles",
  "tech adventures",
  "coding odyssey",
  "tech explorations",
  "tech portfolio",
  "CS projects",
  "digital showcase",
];

const beakerPath = "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"; // BeakerIcon path
const planePath = "M2.5 19.5l19-7-19-7v6l14 1-14 1v6z"; // PaperAirplaneIcon path

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const paths = [beakerPath, planePath];
  const fill = useTransform(progress, [0, 1], ["#000", "#000"]);
  const path = useFlubber(progress, paths);

  useEffect(() => {
    if (isHovering) {
      const animation = animate(progress, 1, {
        duration: 0.8,
        ease: "easeInOut",
      });
      return () => animation.stop();
    } else {
      const animation = animate(progress, 0, {
        duration: 0.8,
        ease: "easeInOut",
      });
      return () => animation.stop();
    }
  }, [isHovering]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className={`flex flex-col items-center justify-center text-6xl md:text-8xl ${rockSalt.className}`}
      >
        <h1 className="text-yellow-500">Welcome to my</h1>
        <FlipWords words={suffix} />
        <div className="flex flex-row items-center justify-center text-6xl md:text-8xl space-x-6">
            <motion.button
              className="z-10"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <svg width="48" height="48" viewBox="0 0 24 24">
                <motion.path fill={fill} d={path} />
              </svg>
            </motion.button>
          
        </div>
      </div>
    </div>
  );
}

