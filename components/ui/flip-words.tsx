"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isInView, setIsInView] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const longestWord = useRef<string>(words.reduce((a, b) => (a.length >= b.length ? a : b), words[0]));

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!containerRef.current) return;
    const node = containerRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { root: null, threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    if (!isAnimating) {
      const id = window.setTimeout(() => {
        startAnimation();
      }, duration);
      return () => window.clearTimeout(id);
    }
  }, [isAnimating, duration, startAnimation, isInView]);

  return (
    <div ref={containerRef} className="relative inline-block align-baseline">
      {/* Width/height sizer to prevent layout shift */}
      <span className={cn("invisible whitespace-pre select-none", className)}>
        {longestWord.current}
      </span>

      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
        mode="popLayout"
      >
        <motion.div
          key={currentWord}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4, position: "absolute", inset: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={cn(
            "absolute inset-0 text-left text-white dark:text-neutral-100 will-change-transform",
            className
          )}
        >
          {currentWord}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
