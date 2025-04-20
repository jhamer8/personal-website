"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconWorld,
  IconArrowLeft,
  IconUsers,
  IconMap,
  IconHandClick,
  IconTrophy,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import team from "./images/team.jpg";
import hallway from "./images/hallway.mp4";
import gameplay from "./images/gameplay.mp4";


function SpecOpsProject() {
  const features = [
    {
      title: "Multiplayer",
      description:
        "Multiplayer gameplay enabled using colocation and the sync framework.",
      icon: <IconUsers size={24} />,
    },
    {
      title: "Environment Mapping",
      description:
        "The environment is fully mapped using World Mesh, making every location a unique battleground.",
      icon: <IconMap size={24} />,
    },
    {
      title: "Hand Tracking",
      description:
        "Pinch your fingers to aim and shoot with intuitive AR controls",
      icon: <IconHandClick size={24} />,
    },
    {
      title: "Competitive Play",
      description:
        "Compete against your friends in immersive AR battles",
      icon: <IconTrophy size={24} />,
    },
  ];

  const techStack = [
    "Snap Spectacles",
    "AR Technology",
    "Sync Kit",
    "World Mesh",
    "Colocation",
    "Hand Tracking",
  ];

  const teamMembers = [
    {
      name: "Andrew Levine",
      role: "GT Electrical Engineering '26"
    },
    {
      name: "Cole Kaplan",
      role: "GT Computer Science '26"
    },
    {
      name: "Noah Cook",
      role: "GT Computer Science '27"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 overflow-auto dark:bg-gray-900">
      <div className="rounded-lg border border-white/20 w-full max-w-5xl blur-background p-4 sm:p-8 bg-gradient-to-br from-white/5 to-white/10 shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:gap-16 mb-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 w-full"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="p-3 rounded-lg text-cyan-400 bg-white/5">
                <IconHandClick size={32} />
              </div>
              <h1 className="text-4xl font-semibold text-themeWhite break-words">
                SpecOps
              </h1>
            </div>
            <div className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full inline-block text-sm font-medium mb-4">
              Immerse GT 2025 - AR Laser Tag
            </div>
            <p className="text-gray-300 mb-6">
              Built in 36 hours, SpecOps transforms your everyday environment into a tactical battleground. 
              Using Snap Spectacles, players can aim, shoot, and score in real-time laser tag with friends, 
              creating a new shared AR experience that makes each location unique.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative w-full md:w-96 h-64 rounded-lg overflow-hidden border border-cyan-500/30 mt-4 md:mt-0 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-500"
          >
            <Image
              src={team}
              alt="SpecOps Team"
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
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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
            Project Demo
          </h2>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-cyan-500/30 mb-8 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-500">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/2iftoQBStko"
              title="SpecOps Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="text-2xl font-medium text-themeWhite mb-4 border-b border-white/10 pb-2">
            Project Showcase
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-500">
              <video
                src={hallway}
                autoPlay
                muted
                loop
                className="transition-transform duration-500 object-cover"
              />
            </div>
            <div className="relative w-full h-[300px] rounded-lg overflow-hidden border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-500">
              <video
                src={gameplay}
                autoPlay
                muted
                loop
                className="transition-transform duration-500 object-cover"
              />
            </div>
          </div>

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

          <h2 className="text-2xl font-medium text-themeWhite mb-4 border-b border-white/10 pb-2">
            Other Team Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl border border-cyan-500/30 bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
              >
                <h3 className="text-xl font-medium text-cyan-400 mb-1">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="https://www.specops.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all"
            >
              <IconWorld size={20} />
              <span>Visit Website</span>
            </Link>
            <Link
              href="https://devpost.com/software/spec-ops"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 transition-all"
            >
              <IconWorld size={20} />
              <span>View Devpost</span>
            </Link>
            <Link
              href="https://github.com/yourusername/specops"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 text-gray-200 hover:from-gray-600 hover:to-gray-500 hover:text-white transition-all border border-gray-600"
            >
              <IconBrandGithub size={20} />
              <span>View Source</span>
            </Link>
          </div>
        </motion.div>
        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="text-cyan-400 hover:text-cyan-300 flex items-center justify-center gap-2"
          >
            <IconArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SpecOpsProject;
