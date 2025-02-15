import React from "react";
import PortfolioCard from "@/components/ui/3d-card";
import CollapsibleSection from "./CollapsibleSection";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1 
        className="text-4xl font-semibold text-themeWhite mb-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Education
      </motion.h1>
      <motion.div 
        className="flex rounded-lg border border-white w-full max-w-4xl blur-background sm:mr-8"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex flex-col p-6 w-full">
          <motion.h2 
            className="text-2xl font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Georgia Institute of Technology
          </motion.h2>
          <p className="text-lg text-slate-100">
            Bachelor of Science, Computer Science
          </p>
          <ul className="list-disc list-inside text-slate-300">
            <li>
              Threads: Intelligence, Cybersecurity and Privacy
            </li>
          </ul>
          <hr className="my-4 border-slate-300" />
          <CollapsibleSection title="Fall 2024 (In-Progress)">
            <PortfolioCard
              name="Computer Systems and Networks"
              number="CS 2200"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Human Dimension of Cybersecurity"
              number="CS 3237"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Introduction to Artificial Intelligence"
              number="CS 3600"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Introduction to Perception and Robotics"
              number="CS 3630"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
          </CollapsibleSection>
          <CollapsibleSection title="Fall 2023">
            <PortfolioCard
              name="Objects and Design"
              number="CS 2340"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Computing Ethics"
              number="CS 3001"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Design and Analysis of Algorithms"
              number="CS 3510"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Probability and Statistics"
              number="CS 3770"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Machine Learning for Trading Lab"
              number="VIP 3601"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
          </CollapsibleSection>
          <CollapsibleSection title="Spring 2023">
            <PortfolioCard
              name="Discrete Structures"
              number="CS 2050"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Applied Health"
              number="APPH 1040"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Biological Principles"
              number="BIOS 1107"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Spanish II"
              number="SPAN 1002"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
          </CollapsibleSection>
          <CollapsibleSection title="Fall 2022">
            <PortfolioCard
              name="Intro to OOP"
              number="CS 1331"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Psychology"
              number="PSYC 1101"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Linear Algebra"
              number="MATH 1554"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Data Structures and Algorithms"
              number="CS 1332"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
          </CollapsibleSection>
          <CollapsibleSection title="Spring 2022">
            <PortfolioCard
              name="Physics II"
              number="PHYS 2212"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Intro to Computing"
              number="CS 1301"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="English Composition II"
              number="ENGL 1102"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Calculus III"
              number="MATH 2401"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
          </CollapsibleSection>
          <CollapsibleSection className="flex w-full" title="Fall 2021">
            <PortfolioCard
              name="Computer Org. and Programming"
              number="CS 2110"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Calculus II"
              number="MATH 1502"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="English Composition I"
              number="ENGL 1101"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
            <PortfolioCard
              name="Physics I"
              number="PHYS 2211"
              link="https://catalog.gatech.edu/programs/cybersecurity-privacy-intelligence-computer-science-bs/"
            />
          </CollapsibleSection>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Education;