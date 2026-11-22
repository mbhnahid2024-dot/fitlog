import { getWorkouts } from "@/lib/api";
export default async function HomePage() {
  const workouts = await getWorkouts();
  return <pre className="p-6">{JSON.stringify(workouts[0], null, 2)}</pre>;
}