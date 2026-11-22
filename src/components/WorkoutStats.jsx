import { Clock, Flame, Star } from "lucide-react";

export default function WorkoutStats({ duration, caloriesBurned, rating }) {
  const items = [
    { Icon: Clock, text: `${duration} min` },
    { Icon: Flame, text: `${caloriesBurned} kcal` },
    { Icon: Star, text: rating },
  ];

  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted">
      {items.map(({ Icon, text }, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <Icon size={15} className="text-accent-fg" />
          {text}
        </span>
      ))}
    </div>
  );
}