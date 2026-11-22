"use client";

import Link from "next/link";
import { Check, X } from "lucide-react";
import { useFitLog } from "@/context/FitLogContext";
import WorkoutStats from "./WorkoutStats";

// variant: "plan" (has Mark as Done) or "saved"
export default function PlanCard({ workout, variant }) {
  const { markDone, removeFromPlan, removeFromSaved } = useFitLog();
  const isPlan = variant === "plan";
  const done = isPlan && workout.done;

  return (
    <article
      className={`flex flex-col gap-4 rounded-2xl border border-line bg-card p-4 sm:flex-row sm:items-center ${
        done ? "opacity-70" : ""
      }`}
    >
      <img
        src={workout.image}
        alt={workout.name}
        className="h-36 w-full rounded-xl object-cover sm:h-20 sm:w-36"
      />

      <div className="flex-1">
        <h3
          className={`font-heading text-xl font-semibold uppercase ${
            done ? "line-through" : ""
          }`}
        >
          {workout.name}
        </h3>
        <p className="mb-1.5 text-sm text-muted">{workout.equipment}</p>
        <WorkoutStats
          duration={workout.duration}
          caloriesBurned={workout.caloriesBurned}
          rating={workout.rating}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/workout/${workout.id}`}
          className="rounded-full border border-line px-4 py-2 text-sm transition hover:border-accent"
        >
          View Details
        </Link>

        {isPlan &&
          (done ? (
            <span className="flex items-center gap-1.5 rounded-full border border-accent px-4 py-2 text-sm font-semibold text-accent">
              <Check size={16} /> Completed
            </span>
          ) : (
            <button
              onClick={() => markDone(workout.id)}
              className="flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
            >
              <Check size={16} /> Mark as Done
            </button>
          ))}

        <button
          aria-label={`Remove ${workout.name}`}
          onClick={() =>
            isPlan ? removeFromPlan(workout.id) : removeFromSaved(workout.id)
          }
          className="p-2 text-muted transition hover:text-white"
        >
          <X size={18} />
        </button>
      </div>
    </article>
  );
}