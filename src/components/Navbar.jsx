"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

const links = [
  { href: "/", label: "Workouts", match: (p) => p === "/" || p.startsWith("/workout") },
  { href: "/my-plan", label: "My Plan", match: (p) => p.startsWith("/my-plan") },
];

export default function Navbar() {
  const pathname = usePathname();
  const { plan, saved } = useFitLog();

  return (
    <header className="border-b border-line bg-bg">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-3 px-4 py-4 sm:px-6">
        {/* Logo (remove the <span> if your logo.png already contains the text) */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="FitLog logo" className="h-8 w-auto" />
          <span className="font-heading text-2xl font-bold uppercase tracking-wider">
            FitLog
          </span>
        </Link>

        {/* Links: second row on mobile, centered on desktop */}
        <nav className="order-3 flex w-full justify-center gap-1 md:order-none md:w-auto">
          {links.map((link) => {
            const active = link.match(pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-sm transition ${
                  active
                    ? "bg-accent/10 font-medium text-accent"
                    : "text-muted hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-5 text-sm">
          <Link href="/my-plan" className="flex items-center gap-2">
            Plan
            <span className="grid h-6 min-w-6 place-items-center rounded-full bg-accent px-1.5 text-xs font-bold text-black">
              {plan.length}
            </span>
          </Link>
          <Link href="/my-plan" className="flex items-center gap-2 text-muted">
            Saved
            <span className="grid h-6 min-w-6 place-items-center rounded-full border border-line px-1.5 text-xs font-bold text-white">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}