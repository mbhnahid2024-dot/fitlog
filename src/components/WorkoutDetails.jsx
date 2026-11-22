import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ActionButtons from "./ActionButtons";

export default function WorkoutDetails({ workout }) {
  const {
    name, image, description, muscleGroups, equipment, difficulty,
    sets, reps, duration, caloriesBurned, rating, instructions,
  } = workout;

  const specs = [
    ["Equipment", equipment],
    ["Difficulty", difficulty],
    ["Sets", sets],
    ["Reps", reps],
    ["Duration", `${duration} min`],
    ["Calories", `${caloriesBurned} kcal`],
    ["Rating", rating],
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-muted hover:text-white">
        <ArrowLeft size={16} /> Back to workouts
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left: image */}
        <div className="overflow-hidden rounded-2xl border border-line">
          <img src={image} alt={name} className="h-full max-h-[640px] w-full object-cover" />
        </div>

        {/* Right: info */}
        <div>
          <h1 className="font-heading text-4xl font-bold uppercase sm:text-5xl">{name}</h1>
          <p className="mt-4 text-muted">{description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {(muscleGroups ?? []).map((g) => (
              <span key={g} className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-black">
                {g}
              </span>
            ))}
          </div>

          {/* Spec panel */}
          <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-card">
            {specs.map(([label, value]) => (
              <div key={label} className="flex items-center justify-between px-5 py-3.5 text-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                  {label}
                </span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          {/* Instructions */}
          <h2 className="mb-3 mt-8 font-heading text-2xl uppercase">Instructions</h2>
          <ol className="list-inside list-decimal space-y-2 text-muted marker:text-accent">
            {(instructions ?? []).map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <ActionButtons workout={workout} />
        </div>
      </div>
    </div>
  );
}