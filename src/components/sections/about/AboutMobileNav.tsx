"use client";

import type { AboutSection } from "@/types";

type Props = {
  sections: AboutSection[];
  activeId: number;
  setActiveId: (id: number) => void;
};

/**
 * Aboutセクションのモバイル向けタブナビゲーション
 */
export default function AboutMobileNav({
  sections,
  activeId,
  setActiveId,
}: Props) {
  return (
    <nav
      className="lg:hidden w-full border-b border-accent/30 bg-black/20"
      aria-label="Aboutセクションナビゲーション"
    >
      <ul className="flex">
        {sections.map((section) => (
          <li key={section.id} className="flex-1">
            <button
              aria-current={activeId === section.id}
              onClick={() => setActiveId(section.id)}
              className={`w-full py-4 flex flex-col items-center justify-center transition-all duration-300 border-b-2 ${
                activeId === section.id
                  ? "border-accent bg-white/5"
                  : "border-transparent hover:bg-white/5"
              }`}
            >
              <span
                className={`font-serif text-xs tracking-widest mb-1 ${activeId === section.id ? "text-accent" : "text-text-main/50"}`}
              >
                THEATER {section.id}
              </span>
              <span
                className={`font-bold text-sm tracking-widest ${activeId === section.id ? "text-text-main" : "text-text-main/70"}`}
              >
                {section.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
