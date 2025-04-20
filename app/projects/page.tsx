"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  IconTools,
  IconRobot,
  IconDeviceGamepad,
  IconArrowRight,
  IconHandClick,
} from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import PhoneAgent from "../../public/phone-agent.png";
import BankPhoto from "../../public/WildRanger/BankImage.png";
import SpecOpsTeam from "./spec-ops/images/team.jpg";
import { Metadata } from "next";

function Projects() {
  const projects = [
    {
      id: "specops",
      title: "SpecOps",
      description: (
        <>
          Built in 36 hours, SpecOps transforms your everyday environment into a tactical battleground. 
          Using Snap Spectacles, players can aim, shoot, and score in real-time laser tag with friends, 
          creating a new shared AR experience that makes each location unique.{" "}
          <span className="text-cyan-400 font-bold border-b-2 border-cyan-500/50">
            Immerse GT 2025 - AR Laser Tag
          </span>
        </>
      ),
      icon: <IconHandClick size={32} />,
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      tech: ["Snap Spectacles", "AR Technology", "Sync Kit", "World Mesh", "Colocation", "Hand Tracking"],
      path: "/projects/spec-ops",
      backgroundImage: SpecOpsTeam,
    },
    {
      id: "phishybusiness",
      title: "PhishyBusiness",
      description: (
        <>
          An AI phone agent that helps prime people against scam calls by
          simulating realistic scam scenarios in a safe environment.{" "}
          <span className="text-cyan-400 font-bold border-b-2 border-cyan-500/50">
            GT Hacklytics 2025 award winner
          </span>
        </>
      ),
      icon: <IconRobot size={32} />,
      color: "from-blue-500/20 to-cyan-500/20",
      textColor: "text-cyan-400",
      borderColor: "border-cyan-500/30",
      tech: ["AI", "Natural Language Processing", "Voice Synthesis"],
      path: "/projects/phishybusiness",
      backgroundImage: PhoneAgent,
    },
    {
      id: "wildranger",
      title: "Wild Ranger",
      description:
        'A game coded in C# and Unity for a hackathon with the theme "collect". Players explore the wild west as a ranger collecting coins which they can invest and accrue interest on.',
      icon: <IconDeviceGamepad size={32} />,
      color: "from-green-500/20 to-emerald-500/20",
      textColor: "text-emerald-400",
      borderColor: "border-emerald-500/30",
      tech: ["C#", "Unity", "Game Design"],
      path: "/projects/wildranger",
      backgroundImage: BankPhoto,
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 overflow-auto dark:bg-gray-900">
      <section className="rounded-lg border border-white/20 w-full max-w-5xl blur-background p-8 bg-gradient-to-br from-white/5 to-white/10 shadow-lg">
        <header>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-semibold text-themeWhite mb-2"
          >
            Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 mb-12"
          >
            Some of my recent work and passion projects, showing some of
            the things I find interesting/fun.
          </motion.p>
        </header>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <article key={project.id} className="h-full">
              <Link href={project.path} className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow:
                      "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  className={`rounded-xl border ${project.borderColor} p-6 bg-gradient-to-br ${project.color} backdrop-blur-sm cursor-pointer h-full flex flex-col relative overflow-hidden group`}
                >
                  {project.backgroundImage && (
                    <div className="absolute inset-0 z-0 opacity-20 transition-opacity duration-500 group-hover:opacity-100">
                      <Image
                        src={project.backgroundImage}
                        alt={`Background image for ${project.title} project`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  )}
                  <header className="flex items-center justify-between mb-4 relative z-10 transition-opacity duration-500 group-hover:opacity-0">
                    <div
                      className={`p-3 rounded-lg ${project.textColor} bg-white/5`}
                      aria-hidden="true"
                    >
                      {project.icon}
                    </div>
                    <motion.div whileHover={{ x: 5 }} className="text-gray-400" aria-hidden="true">
                      <IconArrowRight size={20} />
                    </motion.div>
                  </header>

                  <h2
                    className={`text-2xl font-medium mb-2 ${project.textColor} relative z-10 transition-opacity duration-500 group-hover:opacity-0`}
                  >
                    {project.title}
                  </h2>

                  <div className="text-gray-300 mb-6 flex-grow relative z-10 transition-opacity duration-500 group-hover:opacity-0">
                    {typeof project.description === "string"
                      ? project.description
                      : project.description}
                  </div>

                  <footer className="mt-auto relative z-10 transition-opacity duration-500 group-hover:opacity-0">
                    <ul className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <li
                          key={i}
                          className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </footer>
                </motion.div>
              </Link>
            </article>
          ))}
        </motion.div>

        <footer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 text-sm">
              As I continue to work on more projects, I'll update this page so stay tuned!
            </p>
          </motion.div>
        </footer>
      </section>
    </main>
  );
}

export default Projects;
