/**
 * スムーズスクロールを実行するためのユーティリティ関数
 * ページ内リンク（アンカー）をクリックした際に、固定ヘッダーの高さを考慮して適切な位置までスクロールさせます。
 * * @param e - クリックイベント（デフォルトのリンク遷移を防ぐために使用）
 * @param href - スクロール先の要素のID（例: "#about"）またはトップを示す "/"
 * @param headerHeight - 固定ヘッダーの高さ（デフォルトは60px）。この分だけスクロール位置を上にずらします
 */
export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  headerHeight: number = 60,
) => {
  e.preventDefault();

  if (href === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
    return;
  }

  if (href.startsWith("#")) {
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // ターゲット要素の現在のビューポート上でのY座標を取得
      const elementPosition = targetElement.getBoundingClientRect().top;
      // 現在のスクロール量を足し、固定ヘッダーの高さを引いて最終的なスクロール位置を計算
      const offsetPosition = elementPosition + window.scrollY - headerHeight;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });

      // URLのハッシュを更新し、履歴に残す（リロード時にもその位置に飛べるようにする）
      window.history.pushState(null, "", href);
    }
  }
};
