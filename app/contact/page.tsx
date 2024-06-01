import React from "react";
import ContactForm from "./form";
import Image from "next/image";
import pfp from "../../photos/pfp1.png";
function Contact() {
  return (
    <div className="flex flex-1 justify-center h-screen w-full z-50 overflow-hidden">
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
          <Image className="w-1/2" src={pfp} alt="contact" />
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default Contact;
