import React from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconBrandReact, IconBrandPython, IconBrandJavascript, IconBrandTypescript, IconBrandGit, IconDatabase, IconBrandDocker, IconBulb, IconUsers, IconMessage, IconArrowsRandom, IconClock, IconBrain, IconPalette, IconUserStar, IconBrandNextjs, IconCloud, IconLock } from '@tabler/icons-react';
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 overflow-auto dark:bg-gray-900 text-white">
      {/* <h1 className="text-4xl font-semibold text-themeOrange mb-6">My Skills</h1> */}
      <div className="rounded-lg border border-white/20 w-full max-w-4xl blur-background sm:mr-8 p-8 bg-gradient-to-br from-white/5 to-white/10 shadow-lg">
        <div className="text-md text-center font-light mb-8 space-y-4">
          <p className="leading-relaxed bg-white/10 p-4 rounded-lg shadow-inner transform hover:scale-105 transition-all duration-300 ease-in-out">
            As a versatile technologist with a passion for cybersecurity, machine learning, and learning new things,
            I'm constantly seeking new ways to apply my skills.
            Between web development cybersecurity, data science, and cloud computing,
            I'm constantly working towards expanding my skillset.
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
  <Card className="bg-transparent border-white">
    <CardHeader>
      <CardTitle className="text-white">Technical Skills</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-white">
      <SkillBar skill="Python" progress={85} icon={<IconBrandPython />} />
      <SkillBar skill="Git" progress={80} icon={<IconBrandGit />} />
      <SkillBar skill="Next.js" progress={75} icon={<IconBrandNextjs />} />
      <SkillBar skill="Linux" progress={75} icon={<IconBrandReact />} />
      <SkillBar skill="React" progress={73} icon={<IconBrandReact />} />
      <SkillBar skill="JavaScript" progress={70} icon={<IconBrandJavascript />} />
      <SkillBar skill="Flask" progress={70} icon={<IconDatabase />} />
      <SkillBar skill="TypeScript" progress={65} icon={<IconBrandTypescript />} />
      <SkillBar skill="Pandas" progress={65} icon={<IconBrandPython />} />
      <SkillBar skill="Docker" progress={65} icon={<IconBrandDocker />} />
      <SkillBar skill="AWS" progress={50} icon={<IconCloud />} />
    </CardContent>
  </Card>
);

const SoftSkillsCard = () => (
  <Card className="bg-transparent border-white">
    <CardHeader>
      <CardTitle className="text-white">Soft Skills</CardTitle>
    </CardHeader>
    <CardContent>
      <SoftSkillsBadges />
      <PassionsSection />
    </CardContent>
  </Card>
);

const SoftSkillsBadges = () => (
  <div className="flex flex-wrap gap-2 mb-6">
    <HoverBorderGradient><IconBulb className="inline-block mr-1" /> Problem Solving</HoverBorderGradient>
    <HoverBorderGradient><IconUsers className="inline-block mr-1" /> Team Collaboration</HoverBorderGradient>
    <HoverBorderGradient><IconMessage className="inline-block mr-1" /> Communication</HoverBorderGradient>
    <HoverBorderGradient><IconArrowsRandom className="inline-block mr-1" /> Adaptability</HoverBorderGradient>
    <HoverBorderGradient><IconClock className="inline-block mr-1" /> Time Management</HoverBorderGradient>
    <HoverBorderGradient><IconBrain className="inline-block mr-1" /> Critical Thinking</HoverBorderGradient>
    <HoverBorderGradient><IconPalette className="inline-block mr-1" /> Creativity</HoverBorderGradient>
    <HoverBorderGradient><IconUserStar className="inline-block mr-1" /> Leadership</HoverBorderGradient>
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
  <div className="mt-12 bg-gradient-to-r from-slate-400 to-slate-500 rounded-lg p-6 shadow-lg">
    <h3 className="text-2xl font-semibold text-themeOrange mb-4 flex items-center">
      <IconBrain className="mr-2" /> Current Learning Focus
    </h3>
    <p className="text-lg font-light mb-4">
      I'm expanding my knowledge in machine learning and AI, focusing on:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { title: "Cybersecurity", icon: <IconLock /> },
        { title: "Natural Language Processing", icon: <IconMessage /> },
        { title: "Computer Vision", icon: <IconBulb /> },
      ].map((item, index) => (
        <div 
          key={index} 
          className="bg-white/10 rounded-lg p-4 flex items-center space-x-3 transform hover:scale-110 transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-white/20"
        >
          <div className="text-themeOrange text-2xl">{item.icon}</div>
          <span className="text-sm font-medium">{item.title}</span>
        </div>
      ))}
    </div>
  </div>
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
