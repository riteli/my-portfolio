"use client";

import Image from "next/image";
import { useState } from "react";
import type { AboutSection } from "@/types";

const SECTIONS: AboutSection[] = [
  { id: 1, title: "dummy title" },
  { id: 2, title: "dummy title 2" },
  { id: 3, title: "dummy title 3" },
];

export default function About() {
  const [activeId, setActiveId] = useState<number>(SECTIONS[0].id);

  const activeContent = SECTIONS.find((section) => section.id === activeId);

  return (
    <section id="about" className="w-full max-w-7xl ">
      <h2 className="font-serif font-bold text-3xl text-text-main border-accent">
        <span className="border-b">About</span>
      </h2>
      <div className="grid grid-cols-4 gap-4 mt-3 p-2 bg-cinema-black">
        <div className="col-span-3 p-2">
          <h3 className="pb-1.5 text-center text-2xl font-bold  border-b border-accent text-text-main">
            {activeContent?.title}
          </h3>
          <div className="mt-4">
            <p>dummy content</p>
          </div>
        </div>

        <nav
          className="col-span-1 p-2 border-l border-accent"
          aria-label="About Sections"
        >
          <ul className="flex flex-col gap-6 items-center">
            {SECTIONS.map((section) => (
              <li key={section.id} className="border-b border-accent">
                <button
                  className="flex gap-2 items-center"
                  onClick={() => setActiveId(section.id)}
                >
                  <div>
                    <p className="font-bold font-serif">THEATER{section.id}</p>
                    <p className="font-sans">{section.title}</p>
                  </div>
                  <Image src="/opened-door.svg" alt="" width={35} height={35} />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
