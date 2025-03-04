"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconRobot,
  IconBrandGithub,
  IconWorld,
  IconPhone,
  IconShieldCheck,
  IconBuildingBank,
  IconArrowRight,
  IconArrowLeft,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import PhishyTeam from "../../../public/IMG_1689.png";
import PhishyScreenshot from "../../../public/PhishyScreenshot.png";

function PhishyBusinessProject() {
  const features = [
    {
      title: "AI Phone Simulation",
      description:
        "Simulates realistic phishing calls with an AI agent that responds to your inputs",
      icon: <IconPhone size={24} />,
    },
    {
      title: "Educational Feedback",
      description:
        "Provides immediate feedback on mistakes and how to avoid scams in the future",
      icon: <IconShieldCheck size={24} />,
    },
    {
      title: "Enterprise Solutions",
      description:
        "Potential for company-wide tests to train employees and identify vulnerabilities",
      icon: <IconBuildingBank size={24} />,
    },
  ];

  const techStack = [
    "Next.js",
    "TypeScript",
    "Retell",
    "Vercel",
    "ElevenLabs",
    "OpenAI",
    "Twilio",
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 overflow-auto dark:bg-gray-900">
      <div className="rounded-lg border border-white/20 w-full max-w-5xl blur-background p-8 bg-gradient-to-br from-white/5 to-white/10 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:gap-16 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg text-cyan-400 bg-white/5">
                <IconRobot size={32} />
              </div>
              <h1 className="text-4xl font-semibold text-themeWhite">
                PhishyBusiness
              </h1>
            </div>
            <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full inline-block text-sm font-medium mb-4">
              GT Hacklytics 2025 Award Winner
            </div>
            <p className="text-gray-300 mb-6">
              An AI-powered solution that creates realistic phone scam
              simulations to train people against phishing attacks. Over 1
              trillion dollars are lost every year to phone scams - our product
              creates a new type of training to prepare for phone call scams,
              while gathering data to help companies detect and prevent scams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full md:w-96 h-64 rounded-lg overflow-hidden border border-cyan-500/30 mt-4 md:mt-0 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-500"
          >
            <Image
              src={PhishyTeam}
              alt="PhishyBusiness"
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-medium text-themeWhite mb-4 border-b border-white/10 pb-2">
            How It Works
          </h2>
          <p className="text-gray-300 mb-6">
            By simply entering your phone number on the website, an AI Agent
            calls you and simulates a phishing call, responding to you and
            encouraging you with classic scam call tactics. If the callee gives
            out sensitive information, the AI agent will inform them of the
            mistakes they made and how they can fix it. When the call ends, an
            additional AI summary of key takeaways will be displayed on the
            website.
          </p>

          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-medium text-themeWhite mb-4 border-b border-white/10 pb-2">
                Website Preview
              </h2>
              <div className="relative w-full h-[290px] rounded-lg overflow-hidden border border-cyan-500/30 mt-4 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-500">
                <Image
                  src={PhishyScreenshot}
                  alt="PhishyBusiness Website Screenshot"
                  fill
                  className="transition-transform duration-500 object-fill"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-medium text-themeWhite mb-4 border-b border-white/10 pb-2">
                Demo Video
              </h2>
              <div className="relative w-full h-[290px] rounded-lg overflow-hidden border border-cyan-500/30 mt-4 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-500">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/LAumATWI2zE"
                  title="PhishyBusiness Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
              >
                <div className="text-cyan-400 mb-3">{feature.icon}</div>
                <h3 className="text-xl font-medium text-cyan-400 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-medium text-themeWhite mb-4 border-b border-white/10 pb-2">
            Future Development
          </h2>
          <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2 pl-4">
            <li>
              Scheduled calls that catch users off guard, with repeat features
              for periodic training
            </li>
            <li>
              Deeper analysis of call data to identify the most believable scams
              and vulnerable demographics
            </li>
            <li>
              Personal accounts to track progress over time and provide targeted
              improvement suggestions
            </li>
          </ul>

          <h2 className="text-2xl font-medium text-themeWhite mb-4 border-b border-white/10 pb-2">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-sm px-3 py-1 rounded-full bg-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="https://phishybusiness.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all"
            >
              <IconWorld size={20} />
              <span>Visit Website*</span>
            </Link>
            <Link
              href="https://devpost.com/software/phishybusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all"
            >
              <IconWorld size={20} />
              <span>View Devpost</span>
            </Link>
            <Link
              href="https://github.com/jhamer8/phishybusiness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 hover:from-gray-600 hover:to-gray-500 hover:text-white transition-all border border-gray-600"
            >
              <IconBrandGithub size={20} />
              <span>View Source</span>
            </Link>
          </div>

          <div className="mt-8 p-4 border border-yellow-300 bg-white/5 rounded-lg text-gray-300 text-sm">
            <p className="font-semibold text-yellow-300 mb-1">* Disclaimer:</p>
            <p>
              Unfortunately, the website's phone call functionality is no longer
              operational. Despite the educational nature of this project,
              telephone providers flagged our service as a potential scam and
              banned our numbers. The website remains available for
              demonstration purposes only.
            </p>
          </div>
        </motion.div>
        <div className="mt-8 text-center">
          <Link href="/projects" className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2">
            <IconArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhishyBusinessProject;
