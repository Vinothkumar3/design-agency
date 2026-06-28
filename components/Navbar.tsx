import Link from "next/link";
import { ArrowRight } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-3" aria-label="Northstar home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-fuchsia-500/20 text-lg font-semibold text-fuchsia-300">
            N
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-100">
              Southstar
            </p>
            <p className="text-xs text-slate-400">Design Agency</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white focus:outline-none focus-visible:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-fuchsia-400/40 bg-fuchsia-500/10 px-3 py-2 text-sm font-medium text-fuchsia-200 transition hover:bg-fuchsia-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 sm:px-4"
        >
          <span className="hidden sm:inline">Start a Project</span>
          <span className="sm:hidden">Contact</span>
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
