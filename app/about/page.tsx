"use client";
import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import LeftBar from "@/components/ui/left-bar";
import PortfolioCard from "@/components/ui/3d-card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

function About() {
  const [activeIcon, setActiveIcon] = useState<string | null>("book");
  //Add this for education text https://ui.aceternity.com/components/text-generate-effect
  //Add tracing beam also https://ui.aceternity.com/components/tracing-beam

  //todo: animate opening, make it open by default on larger screens
  //button should be different when the collapsible is open
  return (
    <div className="flex flex-1 overflow-auto">
      <LeftBar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      <div className="flex flex-1 flex-col items-center z-20 mt-6 text-white ">
        <h1 className="text-4xl font-semibold text-themeWhite mb-6">
          Education
        </h1>
        <div className="rounded-lg border border-white w-full max-w-4xl blur-background mr-6">
          <div className="flex flex-col p-6">
            <h2 className="text-2xl font-semibold space-y-4">
              Georgia Institute of Technology
            </h2>
            <p className="text-lg text-slate-300">
              Bachelor of Science, Computer Science
            </p>
            <Collapsible>
              <div className="flex flex-1 justify-between items-center mb-6">
                <h1 className="flex-1">Fall 2022</h1>
                <CollapsibleTrigger className="ml-4">
                  <ChevronDownIcon className="w-6 h-6" />
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="w-full mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PortfolioCard(
                    "Algorithms and Math",
                    "CS 3510",
                    "https://book.com"
                  )}
                  {PortfolioCard(
                    "Algorithms and Math",
                    "CS 3510",
                    "https://book.com"
                  )}
                  {PortfolioCard(
                    "Algorithms and Math",
                    "CS 3510",
                    "https://book.com"
                  )}
                  {PortfolioCard(
                    "Algorithms and Math",
                    "CS 3510",
                    "https://book.com"
                  )}
                  {PortfolioCard(
                    "Algorithms and Math",
                    "CS 3510",
                    "https://book.com"
                  )}
                </div>
              </CollapsibleContent>
            </Collapsible>
            <Collapsible>
              <div className="flex flex-1 justify-between items-center mb-6">
                <h1 className="flex-1">Fall 2023</h1>
                <CollapsibleTrigger className="ml-4">
                  <ChevronDownIcon className="w-6 h-6" />
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {PortfolioCard(
                    "Algorithms and Math",
                    "CS 3510",
                    "https://book.com"
                  )}
                  {PortfolioCard(
                    "Algorithms and Math",
                    "CS 3510",
                    "https://book.com"
                  )}
                  {PortfolioCard(
                    "Algorithms and Math",
                    "CS 3510",
                    "https://book.com"
                  )}
                  {PortfolioCard(
                    "Algorithms and Math",
                    "CS 3510",
                    "https://book.com"
                  )}
                  {PortfolioCard(
                    "Algorithms and Math",
                    "CS 3510",
                    "https://book.com"
                  )}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
