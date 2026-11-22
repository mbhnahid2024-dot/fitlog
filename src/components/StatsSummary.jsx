export default function StatsSummary({ plan }) {
  const minutes = plan.reduce((sum, w) => sum + (Number(w.duration) || 0), 0);
  const calories = plan.reduce((sum, w) => sum + (Number(w.caloriesBurned) || 0), 0);

  const stats = [
    { label: "Exercises", value: plan.length, accent: true },
    { label: "Minutes", value: minutes },
    { label: "Calories", value: calories },
  ];

  return (
    <div className="grid grid-cols-3 divide-x divide-line rounded-2xl border border-line bg-card py-6">
      {stats.map((s) => (
        <div key={s.label} className="px-4 sm:px-8">
          <p className="text-sm text-muted">{s.label}</p>
          <p
            className={`mt-2 font-heading text-4xl font-bold sm:text-5xl ${
              s.accent ? "text-accent-fg" : "text-fgtext-fg"
            }`}
          >
            {s.value}
          </p>
        </div>
      ))}
    </div>
  );
}