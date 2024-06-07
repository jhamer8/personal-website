"use client";
import React, { useState } from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { LinkIcon } from "@heroicons/react/24/outline";
import LeftBar from "@/components/ui/left-bar";
import PortfolioCard from "@/components/ui/3d-card";

function About() {
  const [activeIcon, setActiveIcon] = useState<string | null>("book");


  return (
    <div className="flex flex-1">
      <LeftBar activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      <div className="flex flex-1">
        {PortfolioCard("Algorithms and Math", "CS 3510", "https://book.com")}
      </div>
    </div>
  );
}

export default About;
