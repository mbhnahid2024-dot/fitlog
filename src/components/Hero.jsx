import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6">
      <div className="grid items-center gap-8 rounded-3xl bg-card p-8 md:grid-cols-2 md:p-14">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Workout Library
          </p>
          <h1 className="mt-4 font-heading text-5xl font-bold uppercase leading-none sm:text-6xl lg:text-7xl">
            Train with intent. Log every set.
          </h1>
          <p className="mt-6 max-w-md text-muted">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
            today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase text-black transition hover:brightness-110"
          >
            Browse workouts <ArrowDown size={16} />
          </a>
        </div>

        <Image
          src="/banner.png"
          alt="Fitness machine banner"
          width={600}
          height={600}
          priority
          className="mx-auto h-auto w-full max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
}