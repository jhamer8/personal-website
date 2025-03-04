import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface ExperienceItemProps {
  role: string;
  company: string;
  date: string;
  location: string;
  highlights: string[];
  delay?: number;
}

const ExperienceItem = ({ role, company, date, location, highlights, delay = 0 }: ExperienceItemProps) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    className="mb-8 relative border-l-2 border-themeOrange pl-6 pb-8 group hover:border-themeWhite transition-colors duration-300"
  >
    <motion.div
      className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-themeOrange group-hover:scale-150 transition-all duration-300"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3, delay: delay + 0.2 }}
    />
    
    <motion.div 
      className="space-y-2 p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10 hover:border-themeOrange/50 transition-all duration-300"
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
      <h3 className="text-xl font-bold text-themeOrange">{role}</h3>
      <h4 className="text-lg font-semibold text-themeWhite transition-colors duration-300">
        {company}
      </h4>
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-sm text-gray-400">
        <div className="flex items-center group/date">
          <Calendar className="w-4 h-4 mr-1 transition-colors duration-300" />
          <span className="transition-colors duration-300">{date}</span>
        </div>
        <div className="flex items-center group/location">
          <MapPin className="w-4 h-4 mr-1 transition-colors duration-300" />
          <span className="transition-colors duration-300">{location}</span>
        </div>
      </div>
      <ul className="space-y-2 mt-4">
        {highlights.map((highlight, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.1 * index }}
            className="flex items-start group/highlight"
          >
            <ArrowRight 
              className="flex-shrink-0 w-5 h-5 mr-2 mt-1 text-themeOrange transform group-hover/highlight:translate-x-1 transition-transform duration-300" 
            />
            <span className="text-gray-300 group-hover/highlight:text-themeWhite transition-colors duration-300">
              {highlight}
            </span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

function WorkExperience() {
  const experiences = [
    {
      role: "Full Stack Sof\u200Ctware Engineer",
      company: "RetailReady AI (Y Combinator W'24)",
      date: "01/2024 - 08/2024",
      location: "San Francisco",
      highlights: [
        "Spearheaded all technical development efforts as the first engineer, creating software instrumental in securing $3.3M seed funding",
        "Developed mobile apps with React Native and web applications using Next.js",
        "Created Flask backend with PostgreSQL database architecture and CI/CD pipeline",
        "Implemented advanced AI solutions using LLMs for routing guide summarization",
        "Managed on-site implementations across multiple warehouses in two countries",
        "Led and mentored engineering team while maintaining sprint efficiency"
      ]
    },
    {
      role: "Researcher",
      company: "Machine Learning for Trading Capstone Project",
      date: "08/2023 - Present",
      location: "Atlanta, GA",
      highlights: [
        "Built ML pipeline using Python, NLTK, and sentiment analysis for real-time Reddit market sentiment",
        "Developed data preprocessing system for text cleaning and sentiment scoring"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Codoxo",
      date: "05/2023 - 08/2023",
      location: "Atlanta, GA",
      highlights: [
        "Developed synthetic data pipeline generating 300,000+ lines of healthcare claims using pandas, S3, and SageMaker",
        "Engineered realistic synthetic home healthcare data"
      ]
    }
  ];

  return (
    <div className="rounded-lg border border-white w-full max-w-4xl blur-background sm:mr-8">
      <div className="p-8">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-semibold text-themeWhite mb-12"
        >
          Work Experience
        </motion.h1>
        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;