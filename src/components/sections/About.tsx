"use client";

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
    <section id="about">
      <h2>About</h2>
      <div>
        <div>
          <h3>{activeContent?.title}</h3>
          <div>{/* コンテンツ */}</div>
        </div>

        <nav aria-label="About Sections">
          <ul>
            {SECTIONS.map((section) => (
              <li key={section.id}>
                <button onClick={() => setActiveId(section.id)}>
                  {section.title}
                  {activeId === section.id && <span>(Active)</span> /* テスト用 */}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
