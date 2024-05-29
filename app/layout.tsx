import type { Metadata } from "next";
import { Short_Stack } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { AuroraBackground } from "@/components/ui/aurora-background";

export const metadata: Metadata = {
  title: "Personal Website",
  description: "Jaden's Personal Website",
};

const shortStack = Short_Stack({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={shortStack.className}>
        <AuroraBackground>
          <Header />
          {children}
        </AuroraBackground>
      </body>
    </html>
  );
}
