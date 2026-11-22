import { notFound } from "next/navigation";
import WorkoutDetails from "@/components/WorkoutDetails";
import ErrorMessage from "@/components/ErrorMessage";
import { getWorkoutById } from "@/lib/api";

export default async function WorkoutPage({ params }) {
  const { id } = await params; // params is a Promise in newer Next.js

  let workout = null;
  let error = null;

  try {
    workout = await getWorkoutById(id);
  } catch (err) {
    error = err.message;
  }

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16">
        <ErrorMessage message={error} />
      </div>
    );
  }

  if (!workout) notFound(); // shows not-found.js (created in Step 9)

  return <WorkoutDetails workout={workout} />;
}