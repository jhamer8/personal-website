import React from "react";
import ContactForm from "./form";
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import MapComponent from "@/components/Map";

function Contact() {
  return (
    <div className="flex flex-1 justify-center w-full z-20 overflow-auto dark:bg-gray-900 p-6 min-h-screen">
      <div className="flex flex-col sm:flex-row justify-around mt-12 space-y-8 sm:space-y-0 w-full">
        <div className="flex flex-col text-themeOrange space-y-8 sm:flex-1 items-center max-w-lg">
          <h1 className="text-4xl font-bold">Let's Connect!</h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-yellow-500 to-transparent my-8 h-[1px] w-full " />
          <MapComponent />
          <div className="mt-8 w-full ">
            <div className="flex flex-row justify-between w-full">
              <h2 className="text-2xl font-bold content-center mr-4">
                Connect Here:{" "}
              </h2>
              <div className="flex flex-row space-x-5 text-themeBlack">
                <a
                  href="https://www.linkedin.com/in/jaden-hamer-b96226219"
                  className="bg-white p-2 sm:p-3 rounded-lg shadow-md flex items-center justify-center space-x-2 z-20 hover:bg-gray-100 transition transform hover:scale-105 hover:text-themeOrange"
                >
                  <IconBrandLinkedin className="h-6 w-6 sm:h-8 sm:w-8" />
                  <p className="">LinkedIn</p>
                </a>
                <a
                  href="https://github.com/jhamer8"
                  className="bg-white p-2 sm:p-3 rounded-lg shadow-md flex items-center justify-center space-x-2 z-20 hover:bg-gray-100 transition transform hover:scale-105 hover:text-themeOrange"
                >
                  <IconBrandGithub className="h-6 w-6 sm:h-8 sm:w-8 " />
                  <p className="">GitHub</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-b from-transparent via-neutral-300 dark:via-yellow-500 to-transparent my-8 w-0.5 h-full mx-4" />
        <div className="pt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
