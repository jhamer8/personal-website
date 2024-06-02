import type { Metadata } from "next";
import { Doppio_One } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Jaden's Personal Website",
};

const doppioOne = Doppio_One({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${doppioOne.className} overflow-hidden w-[100vw] h-[100vh]`}>
        <AuroraBackground>
          <Header />
          {children}
        </AuroraBackground>
      </body>
    </html>
  );
}
