import React from "react";
import ContactForm from "./form";
import Image from "next/image";
import pfp from "../../photos/pfp2.png";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";

function Contact() {
  return (
    <div className="flex flex-1 justify-center h-screen w-full z-50 overflow-hidden dark:bg-gray-900">
      <div className="flex flex-1 flex-row justify-around mt-12">
        <div className="flex-col text-white">
          <h1 className="text-4xl font-bold">Let's Connect!</h1>
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-yellow-500 to-transparent my-8 h-[1px] w-full" />

          <p className="text-2xl font-bold">
            Want to reach out to me? 
          </p>
          <p className="text-2xl font-bold">
            Please fill out this form here!
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold">Follow Me</h2>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <IconBrandGithub className="h-8 w-8 text-white dark:text-neutral-300" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <IconBrandLinkedin className="h-8 w-8 text-white dark:text-neutral-300" />
              </a>
              <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <IconBrandTwitter className="h-8 w-8 text-white dark:text-neutral-300" />
              </a>
            </div>
          </div>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
