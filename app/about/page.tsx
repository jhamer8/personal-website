"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import { Suspense } from "react";

function AboutContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeTab = searchParams.get("section") || "work";

  const setActiveTab = (tab: string) => {
    router.push(`/about?section=${tab}`);
  };

  return (
    <div className="flex flex-1 flex-col z-20 overflow-auto dark:bg-gray-900 p-6 min-h-screen max-w-4xl mx-auto">
      <div className="flex gap-4 mb-8 border-b border-gray-700">
        <button
          onClick={() => setActiveTab("work")}
          className={`px-4 py-2 transition-colors relative ${
            activeTab === "work"
              ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-themeBlue"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Work Experience
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-4 py-2 transition-colors relative ${
            activeTab === "education"
              ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-themeBlue"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Education
        </button>
      </div>
      <div className="flex flex-1 flex-col items-center z-20 text-white">
        {activeTab === "education" ? <Education /> : <WorkExperience />}
      </div>
    </div>
  );
}

function About() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AboutContent />
    </Suspense>
  );
}

export default About;