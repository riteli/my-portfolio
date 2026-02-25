import { ReactNode } from "react";

/**
 * Aboutセクションの各シアター（タブ）の情報を管理する型
 */
export type AboutSection = {
  id: number;
  title: string;
  subtitle: string;
  content: ReactNode;
};

/**
 * Worksセクションで表示する制作物の情報を管理する型
 */
export type Work = {
  id: number;
  title: string;
  speech: string; // PC表示時の吹き出し、またはSP表示時の説明文
  imageUrl: string; // サムネイル画像のパス
  githubUrl: string; // ソースコードのリポジトリURL
};

/**
 * Contactセクションのリンク先情報（チケット）を管理する型
 */
export type ContactInfo = {
  id: number;
  title: string;
  link: string; // 遷移先のURL
  label: string; // チケットの半券部分に表示するラベル（例: "CODE"）
  ariaLabel: string; // アクセシビリティ用の読み上げテキスト
};
