import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-dashed border-line px-6 py-20 text-center">
      <h3 className="font-heading text-3xl font-bold uppercase">Nothing here yet</h3>
      <p className="mt-2 text-muted">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-accent px-7 py-3 text-sm font-bold text-black transition hover:brightness-110"
      >
        Go to workouts
      </Link>
    </div>
  );
}