# My Portfolio

自身のスキルや制作物をまとめたポートフォリオサイトです。
UIの滑らかなインタラクションと、運用保守のしやすさを意識して開発しました。

## 🌐 URL

https://my-portfolio-seven-lac-85.vercel.app/

## 🛠 使用技術

- **フレームワーク:** Next.js (App Router) / React
- **言語:** TypeScript
- **スタイリング:** Tailwind CSS
- **CMS:** microCMS
- **その他ライブラリ:** embla-carousel-react (スライダー), react-icons

## ✨ 主な機能と工夫した点

### 1. microCMSの導入による運用保守コストの削減

制作物（Works）のデータはコード内にハードコーディングせず、microCMSからAPI経由で取得する設計にしています。これにより、新しい実績を追加する際にソースコードを編集・デプロイする必要がなくなり、管理画面からのテキスト・画像登録のみでサイトを自動更新できるようにしました。

### 2. App Routerを用いたServer/Clientコンポーネントの分離

Next.js 13以降のApp Routerのベストプラクティスに則り、コンポーネントの責務を分離しています。

- **Server Component (`page.tsx`):** APIキーを用いたmicroCMSへの安全なデータフェッチを担当。
- **Client Component (`WorksSection.tsx` 等):** スライダー機能や、ホバー時のスポットライトエフェクトなど、ブラウザ側でのインタラクションを担当。

### 3. こだわったUI

- `embla-carousel-react` を用いた、PC/スマホ両対応の滑らかなカルーセルUI。
- `WorkCard` では、CSSの `clip-path` や `brightness` を駆使し、映画のスポットライトのような独自のハイライトエフェクトを実装しています。

## 📁 主要なディレクトリ構成

```text
src/
├── app/                  # Next.js App Router (ルーティング・データフェッチ)
├── components/
│   ├── layout/           # ヘッダーなどの共通レイアウト
│   ├── sections/         # ページを構成する各セクション (Hero, About, Works等)
│   └── ui/               # 再利用可能なUIパーツ (WorkCard, SkillCard等)
├── types/                # APIレスポンスやPropsの型定義
└── utils/                # microCMSクライアントなどのユーティリティ関数
```
