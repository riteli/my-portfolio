"use client";

import TicketCard from "../ui/TicketCard";
import type { ContactInfo } from "@/types";

const CONTACT_DATA: ContactInfo[] = [
  {
    id: 1,
    title: "GitHub",
    link: "https://github.com/riteli",
    label: "CODE",
    ariaLabel: "GitHubプロフィール (新しいタブで開く)",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="w-full max-w-4xl mx-auto py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="font-serif font-bold text-3xl text-text-main inline-block pb-2 border-b border-accent">
          Contact
        </h2>
      </div>

      <div className="flex flex-col items-center gap-6">
        {CONTACT_DATA.map((contact) => (
          <TicketCard key={contact.id} contact={contact} />
        ))}
      </div>
    </section>
  );
}
