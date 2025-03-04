"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

function UnityGame(props: any) {
  const hasWindow = typeof window !== "undefined";
  const {
    widthPercent = 0.75,
    heightPercent = 0.95,
    width = 1000,
    height = 600,
    ratio = 0.5,
    title,
    build,
    instructions,
    instructions2,
    description,
    tech = []
  } = props;

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  const [frame, setFrame] = useState(<></>);

  useEffect(() => {
    const windowWidth = windowDimensions.width
      ? windowDimensions.width * widthPercent
      : width;
    const windowHeight = windowDimensions.height
      ? (windowDimensions.height - 100) * heightPercent
      : height; 
    const useWidth = windowWidth * ratio < windowHeight;

    const widthToUse = useWidth ? windowWidth : windowHeight / ratio;
    const heightToUse = useWidth ? windowWidth * ratio : windowHeight;

    setFrame(
      <iframe
        src={build}
        width={widthToUse}
        height={heightToUse}
        className="overflow-hidden border-0"
        style={{ maxWidth: '100%' }}
      />
    );
  }, [windowDimensions, width, height, widthPercent, heightPercent, ratio, build]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 overflow-auto dark:bg-gray-900">
      <div className="rounded-lg border border-emerald-500/30 w-full max-w-5xl blur-background p-8 bg-gradient-to-br from-green-500/20 to-emerald-500/20 shadow-lg">
        <h1 className="text-4xl font-semibold text-emerald-400 mb-4">{title}</h1>
        
        {description && (
          <p className="text-gray-300 mb-6 max-w-2xl">
            {description}
          </p>
        )}
        
        <div className="flex justify-center items-center w-full mb-6">
          <div className="rounded-xl border border-emerald-500/30 overflow-hidden shadow-lg xl:h-[470px]">
            {frame}
          </div>
        </div>
        
        {instructions && (
          <div className="mt-6 p-4 bg-white/5 rounded-lg border border-emerald-500/20">
            <h3 className="text-xl font-medium text-emerald-400 mb-2">How to Play</h3>
            <p className="text-gray-300">{instructions}</p>
            {instructions2 && <p className="text-gray-300 mt-2">{instructions2}</p>}
          </div>
        )}
        
        {tech.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-6">
            {tech.map((technology: string, i: number) => (
              <span
                key={i}
                className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-8 text-center">
          <Link href="/projects" className="text-emerald-400 hover:text-emerald-300 flex items-center justify-center gap-2">
            <IconArrowLeft size={16} />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function WildRangerPage() {
  return (
    <UnityGame
      title="Wild Ranger"
      build="/WildRanger/index.html"
      description="A game coded in C# and Unity for a hackathon with the theme 'collect'. Players explore the wild west as a ranger collecting coins which they can invest and accrue interest on."
      tech={["C#", "Unity", "Game Design"]}
      instructions="Use WASD to move your character. Collect coins and invest them at the bank to earn interest. Watch out for obstacles!"
    />
  );
}
