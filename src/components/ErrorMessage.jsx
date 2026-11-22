export default function ErrorMessage({ message }) {
  return (
    <div className="rounded-2xl border border-dashed border-line px-6 py-16 text-center">
      <h2 className="font-heading text-3xl uppercase">Something went wrong</h2>
      <p className="mt-2 text-muted">{message || "Please try again."}</p>
      <a
        href="/"
        className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-bold text-black"
      >
        Try again
      </a>
    </div>
  );
}