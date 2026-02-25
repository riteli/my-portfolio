import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  title: string;
  description: string;
};

/**
 * スキルセットを表示するためのカードコンポーネント
 * アイコン、タイトル、および簡単な説明文をレイアウトします。
 */
export default function SkillCard({ icon, title, description }: Props) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-md bg-white/5 border border-white/5">
      {/* 左側のアイコンとタイトルエリア */}
      <div className="flex flex-col items-center justify-center w-20 shrink-0 gap-2 border-r border-accent/20 text-accent">
        {icon}
        <span className="text-[10px] font-bold tracking-wider">{title}</span>
      </div>

      {/* 右側の説明文エリア */}
      <p className="text-sm text-text-main/80 leading-relaxed">{description}</p>
    </div>
  );
}
