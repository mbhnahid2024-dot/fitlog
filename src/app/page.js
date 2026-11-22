
import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import ErrorMessage from "@/components/ErrorMessage";
import { getWorkouts } from "@/lib/api";

export default async function HomePage() {
  let workouts = [];
  let error = null;

  try {
    workouts = await getWorkouts();
  } catch (err) {
    error = err.message;
  }

  return (
    <>
      <Hero />

      <section
        id="library"
        className="mx-auto w-full max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6"
      >
        <h2 className="font-heading text-4xl font-bold uppercase">
          The Library
        </h2>

        <p className="mb-8 mt-2 text-muted">
          Twelve lifts covering every major muscle group.
        </p>

        {error ? (
          <ErrorMessage message={error} />
        ) : (
          <WorkoutLibrary workouts={workouts} />
        )}
      </section>
    </>
  );
}
