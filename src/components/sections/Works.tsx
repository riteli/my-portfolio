"use client";

import WorkCard from "../ui/WorkCard";
import type { Work } from "@/types";

const WORKS_DATA: Work[] = [
  {
    id: 1,
    title: "My First Work",
    speech: "This is my first work experience.",
  },
  {
    id: 2,
    title: "My Second Work",
    speech: "This is my second work experience.",
  },
];

export default function Works() {
  return (
    <section id="works" className="w-full max-w-4xl mx-auto py-20 px-6">
      <div className="text-center">
        <h2 className="font-serif font-bold text-3xl text-text-main inline-block pb-2 border-b border-accent">
          Works
        </h2>
      </div>

      <div className="relative mt-24">
        <div className="grid grid-cols-2 gap-x-12 gap-y-12 items-end">
          {WORKS_DATA.map((work, index) => (
            <WorkCard
              key={work.id}
              work={work}
              index={index}
            />
          ))}
        </div>

        <div className="w-full h-4 border-t-4 border-border-white-10 bg-linear-to-b from-white/5 to-transparent transform translate-y-4 rounded-full opacity-50" />
      </div>
    </section>
  );
}
