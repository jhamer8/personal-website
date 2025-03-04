"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpenIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import {
  BookOpenIcon as BookOpenIconSolid,
  BriefcaseIcon as BriefcaseIconSolid,
} from "@heroicons/react/24/solid";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface LeftBarProps {
  activeIcon: string | null;
  setActiveIcon: (icon: string) => void;
}

function LeftBar({ activeIcon, setActiveIcon }: LeftBarProps) {
  return (
    <div className="flex flex-col justify-center mx-10">
      <div className="flex flex-col justify-center mx-6 space-y-5 z-20 absolute top-1/2 left-0 transform -translate-y-1/2">
        <motion.div
          onClick={() => setActiveIcon("book")}
          whileHover={{ scale: 1.1, color: "black" }}
          className="cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {activeIcon === "book" ? (
              <motion.div
                key="book-solid"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <BookOpenIconSolid className="h-6 w-6 text-white dark:text-white hover:text-themeOrange" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Education</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ) : (
              <motion.div
                key="book-outline"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <BookOpenIcon className="h-6 w-6 text-neutral-500 dark:text-white hover:text-white" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Education</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <div className="h-[1px] w-6 bg-neutral-500 dark:bg-white" />
        <motion.div
          onClick={() => setActiveIcon("briefcase")}
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {activeIcon === "briefcase" ? (
              <motion.div
                key="briefcase-solid"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <BriefcaseIconSolid className="h-6 w-6 text-white dark:text-white hover:text-themeOrange" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Work Experience</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            ) : (
              <motion.div
                key="briefcase-outline"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <BriefcaseIcon className="h-6 w-6 text-neutral-500 dark:text-white hover:text-white" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Work Experience</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default LeftBar;