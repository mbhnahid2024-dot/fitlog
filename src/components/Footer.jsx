export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-muted sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 text-white">
          <img src="/logo.png" alt="FitLog logo" className="h-6 w-auto" />
          <span className="font-heading text-lg font-bold uppercase tracking-wider">
            FitLog
          </span>
        </div>
        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
}