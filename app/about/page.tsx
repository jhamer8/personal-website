"use client";
import React, { useState } from "react";
import LeftBar from "@/components/ui/left-bar";
import Education from "./Education";
import WorkExperience from "./WorkExperience"; // Import the new component

function About() {
  const [activeIcon, setActiveIcon] = useState<string | null>("book");

  return (
    <div className="flex flex-1 justify-center w-full z-20 overflow-auto dark:bg-gray-900 p-6 min-h-screen">
      <LeftBar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      <div className="flex flex-1 flex-col items-center z-20 mt-6 text-white ">
        {activeIcon === "book" ? (
          <Education />
        ) : (
          <WorkExperience /> // Use the new component
        )}
      </div>
    </div>
  );
}

export default About;