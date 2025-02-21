"use client";
import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./form";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMapPin,
  IconMail,
} from "@tabler/icons-react";
import MapComponent from "@/components/Map";

function Contact() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-themeWhite relative inline-block">
            Let's Connect!
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></span>
          </h1>
        </div> */}

        {/* Main Content */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Left Column - Info */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Map */}
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <MapComponent />
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex flex-col space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Connect on Social Media
              </h2>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/jaden-hamer-b96226219"
                  className="flex items-center px-6 py-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <IconBrandLinkedin className="w-6 h-6 text-black group-hover:text-orange-500 transition-colors" />
                  <span className="ml-3 text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/jhamer8"
                  className="flex items-center px-6 py-3 rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <IconBrandGithub className="w-6 h-6 text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors" />
                  <span className="ml-3 text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors">GitHub</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl"
              initial={{ rotate: 0 }}
              animate={{ rotate: -3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
            <div className="relative">
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;