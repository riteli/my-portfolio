export default function ProfileContent() {
  return (
    <div className="font-sans">
      <div className="flex gap-10 items-start">
        <div className="flex-1">
          <div className="space-y-4 text-lg text-text-main/90 leading-loose">
            <p>ZEN大学在学中の尾形 律と申します。</p>
            <p>現在はフロントエンド技術を中心に学習しています。</p>
            <p>
              UI/UXデザインにも強い関心があり、ユーザビリティやアクセシビリティを意識した「誰にとっても使いやすいサイト」を作れるようになることが目標です。
            </p>
          </div>

          <div className="border-t border-accent/30 pt-6 mt-6">
            <dl className="grid grid-cols-[120px_1fr] gap-y-4 text-base">
              <dt className="text-accent font-serif tracking-widest opacity-80">
                ROLE
              </dt>
              <dd>Frontend Developer (志望)</dd>

              <dt className="text-accent font-serif tracking-widest opacity-80">
                LOCATION
              </dt>
              <dd>Japan</dd>

              <dt className="text-accent font-serif tracking-widest opacity-80">
                FAVORITE
              </dt>
              <dd>Game, Movie</dd>
            </dl>
          </div>
        </div>

        <div className="w-48 shrink-0 opacity-80">
          <div className="w-full aspect-square border border-accent/30 bg-accent/5 flex items-center justify-center rounded-sm">
            <span className="text-accent font-serif text-5xl">P</span>
          </div>
        </div>
      </div>
    </div>
  );
}