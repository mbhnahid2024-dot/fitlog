import Link from "next/link";
import WorkoutStats from "./WorkoutStats";

export default function WorkoutCard({ workout }) {
  const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } =
    workout;

  return (
    <Link
      href={`/workout/${id}`}
      className="group block overflow-hidden rounded-2xl border border-line bg-card transition hover:-translate-y-1 hover:border-accent/60"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <div className="flex flex-wrap gap-2">
          {(muscleGroups ?? []).map((group) => (
            <span
              key={group}
              className="rounded-full bg-accent px-3 py-1 text-[11px] font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="mt-4 font-heading text-2xl font-semibold uppercase tracking-wide">
          {name}
        </h3>
        <p className="mt-1 text-sm text-muted">{equipment}</p>

        <div className="mt-4 border-t border-line pt-4">
          <WorkoutStats
            duration={duration}
            caloriesBurned={caloriesBurned}
            rating={rating}
          />
        </div>
      </div>
    </Link>
  );
}