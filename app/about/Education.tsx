import React from "react";
import PortfolioCard from "@/components/ui/3d-card";
import CollapsibleSection from "./CollapsibleSection";

const Education = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-themeWhite mb-6">
        Education
      </h1>
      <div className="flex rounded-lg border border-white w-full max-w-4xl blur-background sm:mr-8">
        <div className="flex flex-col p-6 w-full">
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
    </>
  );
};

export default Education;