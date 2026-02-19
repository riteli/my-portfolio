import Link from "next/link";
import type { ContactInfo } from "@/types";

type Props = {
  contact: ContactInfo;
};

export default function TicketCard({ contact }: Props) {
  const { title, link, label, ariaLabel } = contact;

  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group relative flex w-full max-w-md cursor-pointer transition-transform hover:-translate-y-1"
    >
      <div className="relative flex w-full overflow-hidden rounded-lg border border-accent bg-cinema-black/50 backdrop-blur-sm">
        <div className="flex flex-1 flex-col justify-center p-6 border-r-2 border-dashed border-accent/30 relative">
          <p className="font-serif text-xs tracking-[0.2em] text-accent opacity-70 mb-1">
            ADMIT ONE
          </p>
          <h3 className="font-bold text-2xl text-text-main group-hover:text-accent transition-colors">
            {title}
          </h3>

          <div className="absolute -top-3 -right-1.75 h-4 w-4 rounded-full bg-black border-b border-accent" />
          <div className="absolute -bottom-3 -right-1.75 h-4 w-4 rounded-full bg-black border-t border-accent" />
        </div>

        <div className="flex w-32 flex-col items-center justify-center bg-accent/5 p-4 text-center">
          <div className="mb-2 h-8 w-8 rounded-full border border-accent flex items-center justify-center">
            <span className="block h-3 w-3 bg-accent rounded-full group-hover:animate-pulse" />
          </div>
          <p className="text-xs font-bold tracking-wider text-text-main/80">
            {label}
          </p>
        </div>
      </div>
    </Link>
  );
}
