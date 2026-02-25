import type { Work } from "@/types";

/**
 * Worksセクションで表示する制作物のデータ一覧
 * 新しい制作物を追加する場合は、この配列にオブジェクトを追加します。
 */
export const WORKS_DATA: Work[] = [
  {
    id: 1,
    title: "シンプル日記",
    speech:
      "初めて一から設計・開発したReactアプリです。Reactの基礎だけでなく、Firebaseを使ったバックエンドとの連携も学びながら形にしました。ログイン認証機能も実装しています。",
    imageUrl: "/work01.png",
    githubUrl: "https://github.com/riteli/diary-app",
  },
  {
    id: 2,
    title: "GobiSNS",
    speech:
      "Next.jsとSupabaseで構築した本格的なSNSアプリです。認証・投稿機能に加え、いいねやフォロー機能、無限スクロールまでフルスタックで実装しました。",
    imageUrl: "/work02.png",
    githubUrl: "https://github.com/riteli/gobi-sns",
  },
];
