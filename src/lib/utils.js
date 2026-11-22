export const SORT_OPTIONS = [
  { value: "duration", label: "Duration" },
  { value: "caloriesBurned", label: "Calories" },
  { value: "rating", label: "Rating" },
];

// Duration: shortest first. Calories & Rating: highest first.
export function sortWorkouts(list, key) {
  return [...list].sort((a, b) =>
    key === "duration" ? a.duration - b.duration : b[key] - a[key]
  );
}

// Search by workout name or muscle group tag.
export function filterWorkouts(list, query) {
  const q = query.trim().toLowerCase();
  if (!q) return list;
  return list.filter(
    (w) =>
      w.name.toLowerCase().includes(q) ||
      (w.muscleGroups ?? []).some((g) => g.toLowerCase().includes(q))
  );
}