import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="font-heading text-8xl font-bold text-accent">404</p>
      <h1 className="mt-2 font-heading text-3xl uppercase">Page not found</h1>
      <p className="mt-2 text-muted">
        That lift or page doesn&apos;t exist. Let&apos;s get you back to training.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-accent px-7 py-3 text-sm font-bold text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
}