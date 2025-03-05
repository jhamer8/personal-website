import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Jaden Hamer",
  description: "Explore Jaden Hamer's software engineering projects, including PhishyBusiness and Wild Ranger.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}