export default function Loading({ text = "Loading workouts…" }) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-line border-t-accent" />
      <p className="text-muted">{text}</p>
    </div>
  );
}