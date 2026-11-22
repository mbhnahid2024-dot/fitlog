const PRIMARY = "https://api.abcz.workers.dev/api/fitlog";
const FALLBACK = "https://api.api-store.workers.dev/api/fitlog";

// Try the primary API first, then the alternative one.
async function request(path = "") {
  let lastError = null;

  for (const base of [PRIMARY, FALLBACK]) {
    try {
      const res = await fetch(`${base}${path}`, { next: { revalidate: 60 } });
      if (res.status === 404) return null; // workout does not exist
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      return await res.json();
    } catch (err) {
      lastError = err; // try the next API
    }
  }
  throw new Error(lastError?.message || "Could not load workouts.");
}

// GET /api/fitlog  -> array of workouts
export async function getWorkouts() {
  const json = await request();
  if (Array.isArray(json)) return json;
  return json?.data ?? json?.workouts ?? [];
}

// GET /api/fitlog/:id -> one workout (or null if invalid id)
export async function getWorkoutById(id) {
  const json = await request(`/${id}`);
  const workout = json?.data ?? json;
  if (!workout || typeof workout !== "object" || !workout.name) return null;
  return workout;
}