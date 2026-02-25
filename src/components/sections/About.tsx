"use client";

import Image from "next/image";
import { useState } from "react";
import type { AboutSection } from "@/types";
import ProfileContent from "./about/ProfileContent";
import SkillsContent from "./about/SkillsContent";
import AboutMobileNav from "./about/AboutMobileNav";
import AboutPcNav from "./about/AboutPcNav";

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
    <section id="about" className="w-full max-w-6xl mx-auto px-6">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="font-serif font-bold text-3xl lg:text-4xl text-text-main inline-block pb-2 border-b border-accent">
          About
        </h2>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-4 border border-accent/20 bg-cinema-black shadow-2xl">
        <AboutMobileNav
          sections={SECTIONS}
          activeId={activeId}
          setActiveId={setActiveId}
        />

        <div className="lg:col-span-3 p-6 lg:p-10 h-125 lg:h-176 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
            <Image src="/file.svg" alt="" width={200} height={200} />
          </div>

          <div className="mb-6 lg:mb-8 border-b border-accent/30 pb-4 z-10">
            <p className="text-accent text-xs font-serif tracking-[0.3em] mb-2 opacity-70">
              {activeContent?.subtitle}
            </p>
            <h3 className="text-3xl lg:text-4xl font-bold text-text-main font-serif tracking-wide">
              {activeContent?.title}
            </h3>
          </div>

          <div className="relative flex-1 z-10 min-h-0">
            <div className="h-full overflow-y-auto pr-2 lg:pr-4 pb-12">
              {activeContent?.content}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-cinema-black to-transparent pointer-events-none" />
          </div>
        </div>

        <AboutPcNav
          sections={SECTIONS}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
    </section>
  );
}
