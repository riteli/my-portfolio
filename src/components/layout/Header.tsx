"use client";

import Link from "next/link";
import { scrollToSection } from "@/utils/scroll";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full px-6 backdrop-blur-md bg-background/80 border-b border-border-white-10">
      <nav aria-label="メインナビゲーション" className="hidden md:block">
        <ul className="flex justify-end gap-8 py-4">
          <li>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "/")}
              className="text-xl hover:text-text-main transition-colors border-r border-accent pr-4"
            >
              Top
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              className="text-xl hover:text-text-main transition-colors border-r border-accent pr-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#works"
              onClick={(e) => scrollToSection(e, "#works")}
              className="text-xl hover:text-text-main transition-colors border-r border-accent pr-4"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="text-xl hover:text-text-main transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
