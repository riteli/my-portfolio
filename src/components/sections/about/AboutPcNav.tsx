"use client";

import { BiSolidDoorOpen } from "react-icons/bi";
import type { AboutSection } from "@/types";

type Props = {
  sections: AboutSection[];
  activeId: number;
  setActiveId: (id: number) => void;
};

export default function AboutPcNav({ sections, activeId, setActiveId }: Props) {
  return (
    <nav
      className="hidden lg:block col-span-1 border-l border-accent/30 bg-black/20"
      aria-label="Aboutセクションナビゲーション"
    >
      <ul className="flex flex-col gap-10 h-full justify-center items-center p-6">
        {sections.map((section) => (
          <li
            key={section.id}
            className="w-full border-b border-accent/30 pb-4 last:border-0"
          >
            <button
              aria-current={activeId === section.id}
              className="w-full flex items-center justify-between group transition-all duration-300"
              onClick={() => setActiveId(section.id)}
            >
              <div>
                <p
                  className={`font-bold font-serif text-sm tracking-wider mb-1 transition-colors relative z-10 ${
                    activeId === section.id
                      ? "text-accent"
                      : "text-text-main/50 group-hover:text-accent/70"
                  }`}
                >
                  THEATER {section.id}
                </p>

                <div className="flex items-baseline gap-2">
                  <p
                    className={`font-sans font-bold text-lg transition-colors ${
                      activeId === section.id
                        ? "text-text-main"
                        : "text-text-main/70 group-hover:text-text-main"
                    }`}
                  >
                    {section.title}
                  </p>

                  <p
                    className={`text-xs font-bold whitespace-nowrap transition-colors ${
                      activeId === section.id
                        ? "text-text-main/60"
                        : "text-text-main/40 group-hover:text-text-main/60"
                    }`}
                  >
                    - {section.subtitle} -
                  </p>
                </div>
              </div>

              <div
                className={`transition-all duration-300 ${
                  activeId === section.id
                    ? "text-accent opacity-100 scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                    : "text-text-main/30 opacity-50 group-hover:text-text-main/70 group-hover:opacity-100"
                }`}
              >
                <BiSolidDoorOpen size={32} />
              </div>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
