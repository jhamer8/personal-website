"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import LeftBar from "@/components/ui/left-bar";
import Education from "./Education";
import WorkExperience from "./WorkExperience";

function About() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeIcon = searchParams.get("section") || "book";

  const setActiveIcon = (icon: string) => {
    router.push(`/about?section=${icon}`);
  };

  return (
    <div className="flex flex-1 justify-center w-full z-20 overflow-auto dark:bg-gray-900 p-6 min-h-screen">
      <LeftBar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      <div className="flex flex-1 flex-col items-center z-20 mt-6 text-white ">
        {activeIcon === "book" ? (
          <Education />
        ) : (
          <WorkExperience /> 
        )}
      </div>
    </div>
  );
}

export default About;