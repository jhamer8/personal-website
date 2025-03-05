import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jaden Hamer",
  description: "Learn about Jaden Hamer's professional background, including work experience, education history, and technical skills. Explore my journey and qualifications in software development.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}