"use client";
import React from "react";
import NavItem from "./ui/nav-item";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <header className="z-20">
      <div className="hidden sm:flex flex-1 justify-center space-x-12 text-lg mt-8">
        <NavItem text="HOME" href="/" />
        <NavItem text="ABOUT" href="/about" />
        <NavItem text="SKILLS" href="/skills" />
        <NavItem text="CONTACT" href="/contact" />
      </div>
      <div className="flex ml-8 justify-start mt-8 sm:hidden w-full">
        <Sheet>
          <SheetTrigger>
            <Bars3Icon className="h-8 w-8 text-white" />
          </SheetTrigger>
          <SheetContent side={"top"} className="flex flex-col justify-start text-themePurple">
            {/* <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader> */}
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-lg font-medium hover:text-themeOrange">Home</a>
              <a href="/about" className="text-lg font-medium hover:text-themeOrange">About</a>
              <a href="/skills" className="text-lg font-medium hover:text-themeOrange">Skills</a>
              <a href="/contact" className="text-lg font-medium hover:text-themeOrange">Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;
