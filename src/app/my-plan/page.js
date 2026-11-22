"use client";

import { useState } from "react";
import { useFitLog } from "@/context/FitLogContext";
import { sortWorkouts } from "@/lib/utils";
import StatsSummary from "@/components/StatsSummary";
import SortDropdown from "@/components/SortDropdown";
import PlanCard from "@/components/PlanCard";
import EmptyState from "@/components/EmptyState";
import Loading from "@/components/Loading";

export default function MyPlanPage() {
  const { plan, saved, loaded } = useFitLog();
  const [tab, setTab] = useState("plan"); // "plan" | "saved"
  const [sortBy, setSortBy] = useState("duration");

  if (!loaded) return <Loading text="Loading workouts…" />;

  const list = sortWorkouts(tab === "plan" ? plan : saved, sortBy);

  const tabs = [
    { key: "plan", label: "Today's Plan" },
    { key: "saved", label: "Saved" },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6">
      <h1 className="font-heading text-5xl font-bold uppercase">My Plan</h1>
      <p className="mb-8 mt-2 text-muted">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <StatsSummary plan={plan} />

      <div className="my-8 flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex rounded-xl border border-line bg-card p-1">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`rounded-lg px-5 py-2 text-sm transition ${
                tab === t.key
                  ? "bg-bg font-semibold text-fgtext-fg"
                  : "text-muted hover:text-fgtext-fg"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      {list.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {list.map((workout) => (
            <PlanCard key={workout.id} workout={workout} variant={tab} />
          ))}
        </div>
      )}
    </div>
  );
}