"use client";
import { FlipWords } from "@/components/ui/flip-words";
import { Doppio_One } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconChevronDown,
} from "@tabler/icons-react";
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
  const [showArrow, setShowArrow] = useState(true);
  const isProgrammaticScrollRef = useRef(false);
  const scrollEndTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const scroller = document.querySelector("div.overflow-auto");
    if (!scroller) return;

    const handleScroll = () => {
      if (isProgrammaticScrollRef.current) return;
      const currentScrollTop = (scroller as HTMLElement).scrollTop;
      setShowArrow(currentScrollTop <= 8);
    };

    handleScroll();
    scroller.addEventListener("scroll", handleScroll, {
      passive: true,
    } as AddEventListenerOptions);
    const handleScrollEnd = () => {
      isProgrammaticScrollRef.current = false;
      const currentScrollTop = (scroller as HTMLElement).scrollTop;
      setShowArrow(currentScrollTop <= 8);
    };
    scroller.addEventListener("scrollend", handleScrollEnd as EventListener);

    return () => {
      scroller.removeEventListener("scroll", handleScroll as EventListener);
      scroller.removeEventListener(
        "scrollend",
        handleScrollEnd as EventListener
      );
      if (scrollEndTimeoutRef.current)
        window.clearTimeout(scrollEndTimeoutRef.current);
    };
  }, []);

  const scrollToBio = () => {
    const target = document.getElementById("bio-section");
    isProgrammaticScrollRef.current = true;
    setShowArrow(false);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (scrollEndTimeoutRef.current)
      window.clearTimeout(scrollEndTimeoutRef.current);
    scrollEndTimeoutRef.current = window.setTimeout(() => {
      isProgrammaticScrollRef.current = false;
      const scroller = document.querySelector("div.overflow-auto");
      if (scroller) {
        const currentScrollTop = (scroller as HTMLElement).scrollTop;
        setShowArrow(currentScrollTop <= 8);
      }
    }, 1200);
  };

  return (
    <div className="w-full min-w-[300px] z-20 lg:-mt-6">
      {/* Hero Section */}
      <section className="flex min-h-screen w-full justify-center mt-48 md:mt-0 md:items-center p-6">
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
            <div className="flex flex-row gap-2">
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

        {/* Scroll Arrow */}
        {showArrow && (
          <button
            aria-label="Scroll to bio section"
            onClick={scrollToBio}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 backdrop-blur text-white"
          >
            <IconChevronDown className="h-6 w-6 animate-bounce" />
          </button>
        )}
      </section>

      {/* Bio Section */}
      <section
        id="bio-section"
        className="min-h-screen w-full px-4 sm:px-6 py-20 md:py-24 flex items-center justify-center"
      >
        <div className="max-w-3xl w-full mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-6 sm:p-8 md:p-10">
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 ${doppioOne.className}`}
            >
              About Me
            </h2>
            <div className="h-px w-full bg-white/10 mb-6 sm:mb-8" />
            <div className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed space-y-4">
              <p>
                I'm Jaden Hamer, a computer science student at Georgia Tech with
                a passion for building thoughtful products at the intersection of
                software, data, AI, and cybersecurity.
              </p>
              <p>
                I love shipping clean, performant web experiences, exploring
                intelligent systems, and bringing ideas to life end-to-end — with
                a strong interest in secure design and defensive practices.
              </p>
              <p>
                Outside of code, you'll find me on a mountain bike trail,
                tinkering with new tech, or collaborating with friends on
                creative projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
