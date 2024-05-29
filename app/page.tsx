import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
const suffix = [
  "personal website",
  "tech journey",
  "code chronicles",
  "tech adventures",
  "coding odyssey",
  "tech explorations",
  "tech portfolio",
  "CS projects",
  "digital showcase",
]
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center text-4xl md:text-8xl">
        <h1 className="text-yellow-500">Welcome to my</h1>
        <FlipWords
          words={suffix}
        />
      </div>
    </div>
  );
}
