"use client";

import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconBrandReact, IconBrandPython, IconBrandJavascript, IconBrandTypescript, IconBrandGit, IconDatabase, IconBrandDocker, IconBulb, IconUsers, IconMessage, IconArrowsRandom, IconClock, IconBrain, IconPalette, IconUserStar, IconBrandNextjs, IconCloud, IconLock } from '@tabler/icons-react';
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div className="rounded-lg border border-white w-full max-w-4xl blur-background sm:mr-8">
      <div className="p-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold text-themeWhite mb-12"
        >
          Skills & Expertise
        </motion.h1>
        <div className="text-md text-center font-light mb-8 space-y-4">
          <p className="leading-relaxed bg-white/10 p-4 rounded-lg shadow-inner transform hover:scale-105 transition-all duration-300 ease-in-out">
            I currentlyspecialize in full stack development, with a strong foundation in data science and cloud technologies.
            I'm always eager to tackle new challenges and expand my technical expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TechnicalSkillsCard />
          <SoftSkillsCard />
        </div>
        <LearningFocusSection />
      </div>
    </div>
  );
};

const TechnicalSkillsCard = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="bg-transparent border-white">
      <CardHeader>
        <CardTitle className="text-white">Technical Skills</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-white">
        {[
          { skill: "Python", progress: 85, icon: <IconBrandPython /> },
          { skill: "Git", progress: 80, icon: <IconBrandGit /> },
          { skill: "Next.js", progress: 75, icon: <IconBrandNextjs /> },
          { skill: "Linux", progress: 75, icon: <IconBrandReact /> },
          { skill: "React", progress: 73, icon: <IconBrandReact /> },
          { skill: "JavaScript", progress: 70, icon: <IconBrandJavascript /> },
          { skill: "Flask", progress: 70, icon: <IconDatabase /> },
          { skill: "TypeScript", progress: 65, icon: <IconBrandTypescript /> },
          { skill: "Pandas", progress: 65, icon: <IconBrandPython /> },
          { skill: "Docker", progress: 65, icon: <IconBrandDocker /> },
          { skill: "AWS", progress: 50, icon: <IconCloud /> },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 * index }}
          >
            <SkillBar {...item} />
          </motion.div>
        ))}
      </CardContent>
    </Card>
  </motion.div>
);

const SoftSkillsCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <Card className="bg-transparent border-white">
      <CardHeader>
        <CardTitle className="text-white">Soft Skills</CardTitle>
      </CardHeader>
      <CardContent>
        <SoftSkillsBadges />
        <PassionsSection />
      </CardContent>
    </Card>
  </motion.div>
);

const SoftSkillsBadges = () => (
  <div className="flex flex-wrap gap-2 mb-6">
    {[
      { icon: <IconBulb />, text: "Problem Solving" },
      { icon: <IconUsers />, text: "Team Collaboration" },
      { icon: <IconMessage />, text: "Communication" },
      { icon: <IconArrowsRandom />, text: "Adaptability" },
      { icon: <IconClock />, text: "Time Management" },
      { icon: <IconBrain />, text: "Critical Thinking" },
      { icon: <IconPalette />, text: "Creativity" },
      { icon: <IconUserStar />, text: "Leadership" },
    ].map((badge, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 * index }}
      >
        <HoverBorderGradient>
          {badge.icon} {badge.text}
        </HoverBorderGradient>
      </motion.div>
    ))}
  </div>
);

const PassionsSection = () => (
  <>
    <h4 className="text-white text-2xl font-semibold mb-4">Passions</h4>
    <div className="grid grid-cols-3 gap-4 auto-rows-fr">
      {['Cooking', 'BJJ', 'Hiking', 'Basketball', 'Mountain Biking'].map((passion, index) => (
        <PassionCard key={index} passion={passion} className={index >= 3 ? 'col-span-3 sm:col-span-1' : ''} />
      ))}
    </div>
  </>
);

const LearningFocusSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
    className="mt-12 bg-gradient-to-r from-slate-400 to-slate-500 rounded-lg p-6 shadow-lg"
  >
    <h3 className="text-2xl font-semibold text-themeOrange mb-4 flex items-center">
      <IconBrain className="mr-2" /> Current Focus Areas
    </h3>
    <p className="text-lg font-light mb-4">
      I currently find these topics interesting:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { title: "Binary Exploitation & Malware Analysis", icon: <IconLock /> },
        { title: "Applied Cryptography & PKI", icon: <IconMessage /> },
        { title: "Network Protocol Security", icon: <IconBulb /> },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 + (0.1 * index) }}
          className="bg-white/10 rounded-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-white/20"
        >
          <div className="text-themeOrange text-2xl">{item.icon}</div>
          <span className="text-sm font-medium">{item.title}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SkillBar = ({ skill, progress, icon }: { skill: string; progress: number; icon: React.ReactNode }) => (
  <div>
    <div className="flex justify-between mb-1 items-center">
      <div className="flex items-center space-x-2">
        {icon}
        <span className="text-sm font-medium">{skill}</span>
      </div>
      <span className="text-sm font-medium">{progress}%</span>
    </div>
    <Progress value={progress} className="h-2" />
  </div>
);

const PassionCard = ({ passion, className }: { passion: string; className?: string }) => (
  <div
    className={`relative flex rounded-lg border content-center bg-black/20 hover:bg-black/10 transition duration-500 dark:bg-white/20 items-center flex-col flex-nowrap justify-center overflow-visible p-px decoration-clone w-full transform hover:scale-105 ${className}`}
  >
    <div className="w-full text-black z-10 bg-white px-4 py-2 rounded-[inherit] flex items-center justify-center h-full">
      <p className="text-center font-medium">{passion}</p>
    </div>
    <div className="bg-gradient-to-br from-white to-slate-300 absolute z-0 flex-none inset-0 rounded-[inherit] overflow-hidden" style={{ filter: "blur(4px)" }} />
    <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]" />
  </div>
);

export default Skills;
