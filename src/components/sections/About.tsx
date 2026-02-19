"use client";

import Image from "next/image";
import { useState } from "react";
import type { AboutSection } from "@/types";
import { BiSolidDoorOpen } from "react-icons/bi";
import ProfileContent from "./about/ProfileContent";
import SkillsContent from "./about/SkillsContent";

const SECTIONS: AboutSection[] = [
  {
    id: 1,
    title: "PROFILE",
    subtitle: "プロフィール",
    content: <ProfileContent />,
  },
  {
    id: 2,
    title: "SKILLS",
    subtitle: "スキル",
    content: <SkillsContent />,
  },
];

export default function About() {
  const [activeId, setActiveId] = useState<number>(SECTIONS[0].id);
  const activeContent = SECTIONS.find((section) => section.id === activeId);

  return (
    <section id="about" className="w-full max-w-6xl mx-auto py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="font-serif font-bold text-4xl text-text-main inline-block pb-2 border-b border-accent">
          About
        </h2>
      </div>

      <div className="grid grid-cols-4 gap-0 border border-accent/20 bg-cinema-black shadow-2xl">
        <div className="col-span-3 p-10 h-176 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Image src="/file.svg" alt="" width={200} height={200} />
          </div>

          <div className="mb-8 border-b border-accent/30 pb-4 z-10 shrink-0">
            <p className="text-accent text-xs font-serif tracking-[0.3em] mb-2 opacity-70">
              {activeContent?.subtitle}
            </p>
            <h3 className="text-4xl font-bold text-text-main font-serif tracking-wide">
              {activeContent?.title}
            </h3>
          </div>

          <div className="flex-1 z-10 overflow-y-auto pr-4">
            {activeContent?.content}
          </div>
        </div>

        <nav
          className="col-span-1 border-l border-accent/30 bg-black/20"
          aria-label="Aboutセクションナビゲーション"
        >
          <ul className="flex flex-col gap-10 h-full justify-center items-center p-6">
            {SECTIONS.map((section) => (
              <li
                key={section.id}
                className="w-full border-b border-accent/30 pb-4 last:border-0"
              >
                <button
                  aria-current={activeId === section.id}
                  className="w-full flex items-center justify-between group transition-all duration-300"
                  onClick={() => setActiveId(section.id)}
                >
                  <div className="text-left relative pl-1">
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
      </div>
    </section>
  );
}
