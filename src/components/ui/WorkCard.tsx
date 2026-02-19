"use client";

import Image from "next/image";
import type { Work } from "@/types";

type Props = {
  work: Work;
  index: number;
};

export default function WorkCard({ work, index }: Props) {
  const { title, speech, imageUrl } = work;

  const isLeftColumn = index % 2 === 0;

  return (
    <div
      tabIndex={0}
      className="group relative w-full aspect-2/3 flex flex-col gap-20 bg-work-card-bg p-6 rounded-lg border border-border-white-10 hover:border-accent shadow-lg brightness-75 hover:brightness-100 focus-within:brightness-100 z-0 hover:z-50 focus-within:z-50
      [transition:all_0.3s_ease,z-index_0s_ease_0.3s]
      hover:[transition:all_0.3s_ease,z-index_0s_ease_0s]
      focus-within:[transition:all_0.3s_ease,z-index_0s_ease_0s]"
    >
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[120%] h-[calc(100%+1rem)] bg-linear-to-b from-accent/30 to-transparent pointer-events-none [clip-path:polygon(50%_0%,100%_100%,0%_100%)] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />

      <div className="relative w-full aspect-square">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(max-width: 350px) 100vw, 350px"
          className="object-cover"
        />
      </div>

      <div
        className={`
          absolute top-1/4 w-64 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none
          ${
            isLeftColumn
              ? "left-[105%]"
              : "right-[105%]"
          }
        `}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg relative ">
          <p className="text-gray-800 font-sans leading-relaxed tracking-wide">
            {speech}
          </p>

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
      <h3 className="font-bold text-xl text-text-main leading-tight text-center">
        {title}
      </h3>
    </div>
  );
}
