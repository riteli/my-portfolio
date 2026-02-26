import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import GlobalHeader from "@/components/layout/GlobalHeader";
import "./globals.css";

// Googleフォントの読み込み設定
const notoSansJp = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
});

const shipporiMincho = Shippori_Mincho({
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RitsuOgata | Portfolio",
  description: "フロントエンドエンジニアを目指す尾形 律のポートフォリオです",
};

/**
 * アプリケーションのルートレイアウト
 * 全ページ共通のフォント設定、ヘッダー、およびベースとなるレイアウト構造を定義します。
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${notoSansJp.variable} ${shipporiMincho.variable} antialiased bg-background text-text-main`}
      >
        <GlobalHeader />
        <main className="flex flex-col items-center gap-16 md:gap-24 mt-16 mb-24">
          {children}
        </main>
      </body>
    </html>
  );
}
