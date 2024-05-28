import type { Metadata } from "next";
import { Cuprum } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";


export const metadata: Metadata = {
  title: "Personal Website",
  description: "Jaden's Personal Website",
};

const cuprum = Cuprum({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cuprum.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
