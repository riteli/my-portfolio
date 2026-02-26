"use client";

import Link from "next/link";
import { scrollToSection } from "@/utils/scroll";

/**
 * サイトの共通ヘッダーコンポーネント
 * 画面上部に固定され、各セクションへのスムーズスクロールナビゲーションを提供します。
 */
export default function GlobalHeader() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full px-6 backdrop-blur-md bg-background/80 border-b border-border-white-10">
      <nav aria-label="メインナビゲーション">
        <ul className="flex justify-center md:justify-end gap-4 md:gap-8 py-4">
          <li>
            <Link
              href="/"
              onClick={(e) => scrollToSection(e, "/")}
              className="md:text-xl hover:text-text-main transition-colors border-r border-accent pr-2 md:pr-4"
            >
              Top
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={(e) => scrollToSection(e, "#about")}
              className="md:text-xl hover:text-text-main transition-colors border-r border-accent pr-2 md:pr-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#works"
              onClick={(e) => scrollToSection(e, "#works")}
              className="md:text-xl hover:text-text-main transition-colors border-r border-accent pr-2 md:pr-4"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="md:text-xl hover:text-text-main transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
