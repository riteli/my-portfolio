import Image from "next/image";

/**
 * Aboutセクションの「PROFILE」タブで表示する自己紹介コンテンツ
 */
export default function ProfileContent() {
  return (
    <div className="font-sans">
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-10 items-center md:items-start">
        {/* 左側：自己紹介テキストと基本情報リスト */}
        <div className="flex-1">
          <div className="space-y-4 md:text-lg text-text-main/90 leading-relaxed md:leading-loose">
            <p>ZEN大学在学中の尾形 律と申します。</p>
            <p>現在はフロントエンド技術を中心に学習しています。</p>
            <p>
              UI/UXデザインにも強い関心があり、ユーザビリティやアクセシビリティを意識した「誰にとっても使いやすいサイト」を作れるようになることが目標です。
            </p>
          </div>

          <div className="border-t border-accent/30 pt-6 mt-6">
            <dl className="md:grid md:grid-cols-[120px_1fr] md:gap-y-4">
              <dt className="text-accent font-serif tracking-widest opacity-80">
                ROLE
              </dt>
              <dd>Frontend Developer (志望)</dd>

              <dt className="mt-3 md:mt-0 text-accent font-serif tracking-widest opacity-80">
                LOCATION
              </dt>
              <dd>Japan</dd>

              <dt className="mt-3 md:mt-0 text-accent font-serif tracking-widest opacity-80">
                FAVORITE
              </dt>
              <dd>Game, Movie</dd>
            </dl>
          </div>
        </div>

        {/* 右側：プロフィール画像 */}
        <div aria-hidden="true" className="w-24 md:w-48 shrink-0 opacity-90">
          <div className="relative w-full aspect-square border-2 border-accent/30 bg-accent/5 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/profile-icon.png"
              alt="尾形 律のプロフィール画像"
              fill
              sizes="(max-width: 768px) 96px, 192px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
