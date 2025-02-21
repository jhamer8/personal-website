"use client";
import React from "react";
import NavItem from "./ui/nav-item";
import { Bars3Icon } from "@heroicons/react/24/outline";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface HeaderProps {
  className?: string;
}

function Header({ className = "" }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className={`z-50 fixed top-0 w-full ${className}`}>
      <div className="hidden sm:flex flex-1 justify-center space-x-12 text-lg mt-8">
        <NavItem
          text="HOME"
          href="/"
          className={`link ${
            pathname === "/" ? "text-themeOrange" : "text-white"
          }`}
        />
        <NavItem
          text="ABOUT"
          href="/about"
          className={`link ${
            pathname === "/about" ? "text-themeOrange" : "text-white"
          }`}
        />
        <NavItem
          text="SKILLS"
          href="/skills"
          className={`link ${
            pathname === "/skills" ? "text-themeOrange" : "text-white"
          }`}
        />
        <NavItem
          text="PROJECTS"
          href="/projects"
          className={`link ${
            pathname === "/projects" ? "text-themeOrange" : "text-white"
          }`}
        />
        <NavItem
          text="CONTACT"
          href="/contact"
          className={`link ${
            pathname === "/contact" ? "text-themeOrange" : "text-white"
          }`}
        />
      </div>
      <div className="flex ml-6 justify-start mt-8 sm:hidden w-full">
        <Sheet>
          <SheetTrigger>
            <Bars3Icon className="h-8 w-8 text-white" />
          </SheetTrigger>
          <SheetContent
            side={"top"}
            className="flex flex-col justify-start text-themePurple"
          >
            <nav className="flex flex-col space-y-4">
              <SheetClose asChild>
                <Link
                  href="/"
                  className={`text-lg font-medium hover:text-themeOrange ${
                    pathname === "/" ? "text-themeOrange" : ""
                  }`}
                >
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/about"
                  className={`text-lg font-medium hover:text-themeOrange ${
                    pathname === "/about" ? "text-themeOrange" : ""
                  }`}
                >
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/skills"
                  className={`text-lg font-medium hover:text-themeOrange ${
                    pathname === "/skills" ? "text-themeOrange" : ""
                  }`}
                >
                  Skills
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/contact"
                  className={`text-lg font-medium hover:text-themeOrange ${
                    pathname === "/contact" ? "text-themeOrange" : ""
                  }`}
                >
                  Contact
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
