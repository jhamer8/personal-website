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

import { usePathname } from 'next/navigation'
import Link from 'next/link'


function Header() {
  const pathname = usePathname();

  return (
    <header className="z-20">
      <div className="hidden sm:flex flex-1 justify-center space-x-12 text-lg mt-8">
        <NavItem text="HOME" href="/" className={`link ${pathname === '/' ? 'text-themeOrange' : 'text-white'}`} />
        <NavItem text="ABOUT" href="/about" className={`link ${pathname === '/about' ? 'text-themeOrange' : 'text-white'}`} />
        <NavItem text="SKILLS" href="/skills" className={`link ${pathname === '/skills' ? 'text-themeOrange' : 'text-white'}`} />
        <NavItem text="CONTACT" href="/contact" className={`link ${pathname === '/contact' ? 'text-themeOrange' : 'text-white'}`} />
      </div>
      <div className="flex ml-6 justify-start mt-8 sm:hidden w-full">
        <Sheet>
          <SheetTrigger>
            <Bars3Icon className="h-8 w-8 text-white" />
          </SheetTrigger>
          <SheetContent side={"top"} className="flex flex-col justify-start text-themePurple">
            <nav className="flex flex-col space-y-4">
              <a href="/" className={`text-lg font-medium hover:text-themeOrange ${pathname === '/' ? 'text-themeOrange' : ''}`}>Home</a>
              <a href="/about" className={`text-lg font-medium hover:text-themeOrange ${pathname === '/about' ? 'text-themeOrange' : ''}`}>About</a>
              <a href="/skills" className={`text-lg font-medium hover:text-themeOrange ${pathname === '/skills' ? 'text-themeOrange' : ''}`}>Skills</a>
              <a href="/contact" className={`text-lg font-medium hover:text-themeOrange ${pathname === '/contact' ? 'text-themeOrange' : ''}`}>Contact</a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Header;

