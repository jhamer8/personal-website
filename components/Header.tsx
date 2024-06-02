"use client";
import React from "react";
import NavItem from "./ui/nav-item";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
        <Popover>
          <PopoverTrigger>
            <Bars3Icon className="h-8 w-8 text-white" />
          </PopoverTrigger>
          <PopoverContent className="flex flex-col justify-start text-themeOrange ">
            <a className="" href="/">HOME</a>
            <a className="" href="/about">ABOUT</a>
            <a className="" href="/skills">SKILLS</a>
            <a className="" href="/contact">CONTACT</a>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
}

export default Header;

