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
    <div
      className="group relative w-full aspect-2/3 bg-work-card-bg p-6 rounded-lg border border-border-white-10 hover:border-accent flex flex-col justify-end shadow-lg brightness-75 hover:brightness-100 z-0 hover:z-50"
      style={{
        transitionProperty: "filter, border-color, z-index",
        transitionDuration: "0.3s, 0.3s, 0s",
        transitionDelay: "0s, 0s, 0.3s",
      }}
    >
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[120%] h-[calc(100%+1rem)] bg-linear-to-b from-accent/30 to-transparent pointer-events-none [clip-path:polygon(50%_0%,100%_100%,0%_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div
        className={`
          absolute top-1/4 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none
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
