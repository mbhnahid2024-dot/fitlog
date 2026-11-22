"use client";

import { useState } from "react";
import { filterWorkouts, sortWorkouts } from "@/lib/utils";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import WorkoutGrid from "./WorkoutGrid";

export default function WorkoutLibrary({ workouts }) {
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState("duration");

  // filter first, then sort the result
  const visible = sortWorkouts(filterWorkouts(workouts, query), sortBy);

  return (
    <>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <SearchBar value={query} onChange={setQuery} />
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-line py-16 text-center text-muted">
          No workouts match “{query}”.
        </p>
      ) : (
        <WorkoutGrid workouts={visible} />
      )}
    </>
  );
}