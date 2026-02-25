"use client";

import Image from "next/image";
import { useState } from "react";
import type { AboutSection } from "@/types";
import ProfileContent from "./about/ProfileContent";
import SkillsContent from "./about/SkillsContent";
import AboutMobileNav from "./about/AboutMobileNav";
import AboutPcNav from "./about/AboutPcNav";

// Aboutセクションで表示するタブのデータ定義
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

/**
 * Aboutセクションコンポーネント
 * プロフィールとスキルをタブ切り替えで表示するレイアウトです。
 * SP向けナビゲーションとPC向けナビゲーションを画面幅に応じて出し分けます。
 */
export default function About() {
  // 現在選択されているタブのIDを管理するステート
  const [activeId, setActiveId] = useState<number>(SECTIONS[0].id);

  // 選択中のタブIDに合致するコンテンツ情報を取得
  const activeContent = SECTIONS.find((section) => section.id === activeId);

  return (
    <section id="about" className="w-full max-w-6xl mx-auto px-6">
      <div className="text-center mb-10 lg:mb-16">
        <h2 className="font-serif font-bold text-3xl lg:text-4xl text-text-main inline-block pb-2 border-b border-accent">
          About
        </h2>
      </div>

      {/* コンテンツエリア全体の枠組み（PC表示ではグリッドレイアウト） */}
      <div className="flex flex-col lg:grid lg:grid-cols-4 border border-accent/20 bg-cinema-black shadow-2xl">
        {/* SP向けのタブナビゲーション */}
        <AboutMobileNav
          sections={SECTIONS}
          activeId={activeId}
          setActiveId={setActiveId}
        />

        {/* メインコンテンツ表示領域 */}
        <div className="lg:col-span-3 p-6 lg:p-10 h-125 lg:h-176 flex flex-col relative overflow-hidden">
          {/* 背景の装飾用アイコン */}
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

          {/* スクロール可能なコンテンツ本体 */}
          <div className="relative flex-1 z-10 min-h-0">
            <div className="h-full overflow-y-auto pr-2 lg:pr-4 pb-12">
              {activeContent?.content}
            </div>
            {/* スクロール領域下部のグラデーション（テキストがフェードアウトするように見せる効果） */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-cinema-black to-transparent pointer-events-none" />
          </div>
        </div>

        {/* PC向けのタブナビゲーション（右側に配置） */}
        <AboutPcNav
          sections={SECTIONS}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      </div>
    </section>
  );
}
