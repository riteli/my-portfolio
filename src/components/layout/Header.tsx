import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-6 backdrop-blur-md bg-background/80 border-b border-border-white-10">
      <nav className="hidden md:block">
        <ul className="flex justify-end gap-8 py-4">
          <li>
            <Link
              href="/"
              className="text-xl hover:text-text-main transition-colors border-r border-accent pr-4"
            >
              Top
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-xl hover:text-text-main transition-colors border-r border-accent pr-4"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#work"
              className="text-xl hover:text-text-main transition-colors border-r border-accent pr-4"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-xl hover:text-text-main transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
