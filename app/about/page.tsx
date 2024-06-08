"use client";
import React, { useState } from "react";
import LeftBar from "@/components/ui/left-bar";
import PortfolioCard from "@/components/ui/3d-card";
import CollapsibleSection from "./CollapsibleSection";

function About() {
  const [activeIcon, setActiveIcon] = useState<string | null>("book");

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
            <CollapsibleSection title="Fall 2022">
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
            </CollapsibleSection>
            <CollapsibleSection title="Fall 2023">
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
            </CollapsibleSection>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
