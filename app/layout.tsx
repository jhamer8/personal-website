import type { Metadata } from "next";
import { Doppio_One } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const metadata: Metadata = {
  title: "Jaden Hamer | Software Engineer",
  description: "Professional portfolio of Jaden Hamer, showcasing projects, skills, and experience in web development and software engineering.",
  keywords: "Jaden Hamer, web developer, portfolio, software engineer, projects, skills, personal website",
  authors: [{ name: "Jaden Hamer" }],
  openGraph: {
    title: "Jaden Hamer's Digital Portfolio",
    description: "Professional portfolio of Jaden Hamer, showcasing projects and skills in web development",
    url: "https://jadenh.dev/",
    siteName: "Jaden Hamer's Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Jaden Hamer's Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: "index, follow",
  metadataBase: new URL("https://jadenh.dev"),
  alternates: {
    canonical: 'https://jadenh.dev',
  },
};

const doppioOne = Doppio_One({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${doppioOne.className} w-[100vw] h-[100vh] flex flex-1 flex-col`}
      >
        <AuroraBackground className="bg">
          <div className="flex flex-1 flex-col h-full">
            <div className="flex flex-1 mb-16">
              <Header/>
            </div>
            <div className="overflow-auto">{children}</div>
          </div>
        </AuroraBackground>
      </body>
    </html>
  );
}