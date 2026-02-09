"use client";

import type { Work } from "@/types";

type Props = {
  work: Work;
  index: number;
};

export default function WorkCard({ work, index }: Props) {
  const { title, speech } = work;

  const isLeftColumn = index % 2 === 0;

  return (
    <div className="group relative w-full aspect-2/3 bg-work-card-bg p-6 rounded-lg border border-border-white-10 hover:border-accent transition-colors duration-300 flex flex-col justify-end shadow-lg">
      <div
        className={`
          absolute top-1/4 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10
          ${
            isLeftColumn
              ? "left-[105%] translate-x-0"
              : "right-[105%] translate-x-0"
          }
        `}
      >
        <div className="bg-white text-black text-xs p-3 rounded-lg shadow-lg relative">
          {speech}

          <div
            className={`
                absolute top-1/2 -translate-y-1/2 border-8 border-transparent
                ${
                  isLeftColumn
                    ? "right-full border-r-white"
                    : "left-full border-l-white"
                }
              `}
          />
        </div>
      </div>

      <div className="relative z-0">
        <h3 className="font-bold text-xl text-text-main leading-tight">
          {title}
        </h3>
        <p className="text-text-sub text-sm mt-2">Design / Development</p>
      </div>
    </div>
  );
}
