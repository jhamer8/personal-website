"use client";
import React, { useState } from "react";
import LeftBar from "@/components/ui/left-bar";
import PortfolioCard from "@/components/ui/3d-card";
import CollapsibleSection from "./CollapsibleSection";

function About() {
  const [activeIcon, setActiveIcon] = useState<string | null>("book");

  return (
    <div className="flex flex-1 justify-center w-full z-20 overflow-auto dark:bg-gray-900 p-6 min-h-screen">
      <LeftBar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      <div className="flex flex-1 flex-col items-center z-20 mt-6 text-white ">
        <h1 className="text-4xl font-semibold text-themeWhite mb-6">
          Education
        </h1>
        <div className="rounded-lg border border-white w-full max-w-4xl blur-background mr-8">
          <div className="flex flex-col p-6">
            <h2 className="text-2xl font-semibold space-y-4">
              Georgia Institute of Technology
            </h2>
            <p className="text-lg text-slate-300">
              Bachelor of Science, Computer Science
            </p>
              <CollapsibleSection className="flex w-full" title="Fall 2022">
                  <PortfolioCard
                    name="Algorithms and Math"
                    number="CS 3510"
                    link="https://book.com"
                  />
                  <PortfolioCard
                    name="Bit Manipulation"
                    number="CS 2110"
                    link="https://book.com"
                  />
                  <PortfolioCard
                    name="Algorithms and Math"
                    number="CS 3510"
                    link="https://book.com"
                  />
                  <PortfolioCard
                    name="Algorithms and Math"
                    number="CS 3510"
                    link="https://book.com"
                  />
                  <PortfolioCard
                    name="Algorithms and Math"
                    number="CS 3510"
                    link="https://book.com"
                  />
              </CollapsibleSection>
            <CollapsibleSection title="Fall 2023">
                <PortfolioCard
                  name="Algorithms and Math"
                  number="CS 3510"
                  link="https://book.com"
                />
                <PortfolioCard
                  name="Algorithms and Math"
                  number="CS 3510"
                  link="https://book.com"
                />
                <PortfolioCard
                  name="Algorithms and Math"
                  number="CS 3510"
                  link="https://book.com"
                />
                <PortfolioCard
                  name="Algorithms and Math"
                  number="CS 3510"
                  link="https://book.com"
                />
                <PortfolioCard
                  name="Algorithms and Math"
                  number="CS 3510"
                  link="https://book.com"
                />
            </CollapsibleSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
