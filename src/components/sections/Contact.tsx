"use client";

import TicketCard from "../ui/TicketCard";
import type { ContactInfo } from "@/types";

// 連絡先・外部リンクのデータ定義
const CONTACT_DATA: ContactInfo[] = [
  {
    id: 1,
    title: "GitHub",
    link: "https://github.com/riteli",
    label: "CODE",
    ariaLabel: "GitHubプロフィール (新しいタブで開く)",
  },
];

/**
 * Contactセクションコンポーネント
 * 映画のチケット風デザイン（TicketCard）を用いて外部リンクへの導線を表示します。
 */
export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-4xl mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="font-serif font-bold text-3xl text-text-main inline-block pb-2 border-b border-accent">
          Contact
        </h2>
      </div>

      {/* チケットカードのリスト表示 */}
      <div className="flex flex-col items-center gap-6">
        {CONTACT_DATA.map((contact) => (
          <TicketCard key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
}
