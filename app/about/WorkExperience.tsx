import React from "react";
import CollapsibleSection from "./CollapsibleSection";
import PortfolioCard from "@/components/ui/3d-card";

function WorkExperience() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-themeWhite mb-6">
        Work Experience
      </h1>
      <div className="rounded-lg border border-white w-full max-w-4xl blur-background mr-8">
        <div className="flex flex-col p-6">
          <h2 className="text-2xl font-semibold space-y-4">
            Company XYZ
          </h2>
          <p className="text-lg text-slate-300">
            Software Engineer
          </p>
          <CollapsibleSection className="flex w-full" title="2022">
            <PortfolioCard
              name="Project A"
              number="001"
              link="https://work.com"
            />
            <PortfolioCard
              name="Project B"
              number="002"
              link="https://work.com"
            />
          </CollapsibleSection>
          <CollapsibleSection title="2023">
            <PortfolioCard
              name="Project C"
              number="003"
              link="https://work.com"
            />
            <PortfolioCard
              name="Project D"
              number="004"
              link="https://work.com"
            />
          </CollapsibleSection>
        </div>
      </div>
    </>
  );
}

export default WorkExperience;