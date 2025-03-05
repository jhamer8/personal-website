import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jaden Hamer",
  description: "Contact Jaden Hamer.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}