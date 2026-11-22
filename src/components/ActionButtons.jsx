"use client";

import { Bookmark, CalendarPlus } from "lucide-react";
import { useFitLog, MAX_PLAN } from "@/context/FitLogContext";

export default function ActionButtons({ workout }) {
  const { addToPlan, saveForLater, isInPlan, isSaved, planIsFull } = useFitLog();

  const inPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);

  let planLabel = "Add to today's plan";
  if (inPlan) planLabel = "In today's plan";
  else if (planIsFull) planLabel = `Plan full (${MAX_PLAN}/${MAX_PLAN})`;

  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <button
        onClick={() => addToPlan(workout)}
        disabled={inPlan || planIsFull}
        className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <CalendarPlus size={18} /> {planLabel}
      </button>

      <button
        onClick={() => saveForLater(workout)}
        disabled={alreadySaved}
        className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium transition hover:border-accent disabled:cursor-not-allowed disabled:opacity-50"
      >
        <Bookmark size={18} /> {alreadySaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}