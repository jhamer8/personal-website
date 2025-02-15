import React from "react";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div className="space-y-4">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
              <MapComponent />
            </div>

            {/* Social Links */}
            <div className="flex flex-col space-y-2">
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
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl transform -rotate-3" />
            <div className="relative">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;