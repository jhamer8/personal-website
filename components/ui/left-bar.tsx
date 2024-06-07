"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpenIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon as BookOpenIconSolid, BriefcaseIcon as BriefcaseIconSolid } from "@heroicons/react/24/solid";

function LeftBar() {
  const [activeIcon, setActiveIcon] = useState<string | null>('book');

  return (
    <div className="flex flex-col justify-center ml-6 space-y-5 z-20">
      <motion.button
        onClick={() => setActiveIcon('book')}
        whileHover={{ scale: 1.1, color: "black" }}
      >
        <AnimatePresence mode="wait">
          {activeIcon === 'book' ? (
            <motion.div
              key="book-solid"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BookOpenIconSolid className="h-6 w-6 text-white dark:text-white hover:text-themeOrange" />
            </motion.div>
          ) : (
            <motion.div
              key="book-outline"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BookOpenIcon className="h-6 w-6 text-neutral-500 dark:text-white hover:text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
      <div className="h-[1px] w-6 bg-neutral-500 dark:bg-white" />
      <motion.button
        onClick={() => setActiveIcon('briefcase')}
        whileHover={{ scale: 1.1 }}
      >
        <AnimatePresence mode="wait">
          {activeIcon === 'briefcase' ? (
            <motion.div
              key="briefcase-solid"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BriefcaseIconSolid className="h-6 w-6 text-white dark:text-white hover:text-themeOrange" />
            </motion.div>
          ) : (
            <motion.div
              key="briefcase-outline"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <BriefcaseIcon className="h-6 w-6 text-neutral-500 dark:text-white hover:text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}

export default LeftBar;
