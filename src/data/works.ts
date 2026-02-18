import type { Work } from "@/types";

export const WORKS_DATA: Work[] = [
  {
    id: 1,
    title: "シンプル日記",
    speech:
      "初めて一から設計・開発したReactアプリです。Reactの基礎だけでなく、Firebaseを使ったバックエンドとの連携も学びながら形にしました。ログイン認証機能も実装しています。",
    imageUrl: "/work01.png",
  },
  {
    id: 2,
    title: "GobiSNS",
    speech:
      "Next.jsとSupabaseで構築した本格的なSNSアプリです。認証・投稿機能に加え、いいねやフォロー機能、無限スクロールまでフルスタックで実装しました。",
    imageUrl: "/work02.png",
  },
];
