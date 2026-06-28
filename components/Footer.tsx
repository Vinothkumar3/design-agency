import { ArrowUpRight } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-200">Southstar Studio</p>
          <p className="mt-1">© 2026 Southstar Studio. Crafted with clarity and purpose.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-fuchsia-300">
              {link.label}
            </a>
          ))}
          <a href="#top" className="inline-flex items-center gap-2 text-slate-200 transition hover:text-fuchsia-300">
            Back to top
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
