"use client";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { Rock_Salt } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { BeakerIcon } from '@heroicons/react/24/solid';
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
const linkedinPath = "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"; // PaperAirplaneIcon path

export default function Home() {
  const [isHovering, setIsHovering] = useState(false);
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const paths = [beakerPath, linkedinPath];
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


