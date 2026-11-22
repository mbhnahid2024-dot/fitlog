"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";

const links = [
  { href: "/", label: "Workouts", match: (p) => p === "/" || p.startsWith("/workout") },
  { href: "/my-plan", label: "My Plan", match: (p) => p.startsWith("/my-plan") },
];

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();
  const [open, setOpen] = useState(false); // mobile menu

  const linkClass = (active) =>
    `rounded-full px-4 py-1.5 text-sm transition ${
      active
        ? "bg-accent/15 font-medium text-accent-fg"
        : "text-muted hover:text-fg"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Left: hamburger (mobile) + logo */}
        <div className="flex items-center gap-3">
          <button
            className="text-fg md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="FitLog logo" className="h-8 w-auto" />
            <span className="font-heading text-2xl font-bold uppercase tracking-wider text-fg">
              FitLog
            </span>
          </Link>
        </div>

        {/* Middle links: desktop only, truly centered */}
        <nav className="hidden gap-1 md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.match(pathname))}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: counters */}
        <div className="flex items-center gap-4 text-sm text-fg sm:gap-5">
          <Link href="/my-plan" className="flex items-center gap-2 font-medium">
            Plan
            <span className="grid h-6 min-w-6 place-items-center rounded-full bg-accent px-1.5 text-xs font-bold text-black">
              {plan.length}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 font-medium">
            Saved
            <span className="grid h-6 min-w-6 place-items-center rounded-full border border-fg/60 px-1.5 text-xs font-bold text-fg">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-4 py-3 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={linkClass(link.match(pathname))}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}