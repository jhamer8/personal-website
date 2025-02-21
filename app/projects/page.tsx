"use client";

import React from 'react';
import { motion } from "framer-motion";
import { IconTools, IconBuilding } from '@tabler/icons-react';

function Projects() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 overflow-auto dark:bg-gray-900">
      <div className="rounded-lg border border-white/20 w-full max-w-4xl blur-background sm:mr-8 p-8 bg-gradient-to-br from-white/5 to-white/10 shadow-lg">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold text-themeWhite mb-8"
        >
          Projects
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center text-center space-y-6"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-themeOrange"
            >
              <IconTools size={80} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-2 -right-2"
            >
            </motion.div>
          </div>

          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-2xl font-medium text-themeWhite mt-6"
          >
            Under Construction
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-lg"
          >
            I'm currently building something awesome! Check back soon to see my latest projects and developments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white/10 p-4 rounded-lg mt-8"
          >
            <p className="text-themeOrange font-medium">Expected Completion: Late March 2025</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;