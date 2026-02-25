"use client";

import Image from "next/image";
import type { Work } from "@/types";
import { FaGithub } from "react-icons/fa";

type Props = {
  work: Work;
  index: number;
};

/**
 * 制作物を表示するためのカードコンポーネント
 * PC表示時には、ホバー/フォーカスで映画のスポットライトのようなエフェクトと吹き出しが表示されます。
 */
export default function WorkCard({ work, index }: Props) {
  const { title, speech, imageUrl, githubUrl } = work;

  // PC表示時の吹き出しを左右どちらに出すかを決定するフラグ
  // 偶数インデックス（左側の列）の場合は右に、奇数インデックス（右側の列）の場合は左に出す
  const isLeftColumn = index % 2 === 0;

  return (
    <div
      tabIndex={0}
      className="group relative w-full h-full flex flex-col gap-4 md:gap-6 bg-work-card-bg p-4 md:p-6 rounded-lg border border-border-white-10 hover:border-accent shadow-lg brightness-75 hover:brightness-100 focus-within:brightness-100 z-0 hover:z-50 focus-within:z-50
      [transition:all_0.3s_ease,z-index_0s_ease_0.3s]
      hover:[transition:all_0.3s_ease,z-index_0s_ease_0s]
      focus-within:[transition:all_0.3s_ease,z-index_0s_ease_0s]"
    >
      {/* 映画館のスポットライトを模したハイライトエフェクト（ホバー時に上から差し込む光） */}
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[120%] h-[calc(100%+1rem)] bg-linear-to-b from-accent/30 to-transparent pointer-events-none [clip-path:polygon(50%_0%,100%_100%,0%_100%)] opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300" />

      {/* 制作物の画像 */}
      <div className="relative w-full aspect-video md:aspect-square">
        <Image
          src={imageUrl}
          alt=""
          fill
          sizes="(max-width: 350px) 100vw, 350px"
          className="object-cover"
        />
      </div>

      {/* PC表示用の吹き出し（ホバー/フォーカス時に表示） */}
      <div
        className={`
          hidden md:block absolute top-1/4 w-64 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none
          ${isLeftColumn ? "left-[105%]" : "right-[105%]"}
        `}
      >
        <div className="bg-white p-4 rounded-lg shadow-lg relative ">
          <p className="text-gray-800 font-sans leading-relaxed tracking-wide">
            {speech}
          </p>

          {/* 吹き出しの三角形部分の描画 */}
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

      {/* SP表示用の説明文（吹き出しが出ない代わりとして表示） */}
      <p className="md:hidden font-sans text-sm text-text-main/80 leading-relaxed">
        {speech}
      </p>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 md:gap-3 justify-center items-center mt-auto p-3 md:p-4 border border-border-white-10 rounded-md hover:bg-white/10"
      >
        <FaGithub size={24} />
        <span className="font-sans text-text-main">リポジトリを見る</span>
      </a>
    </div>
  );
}
