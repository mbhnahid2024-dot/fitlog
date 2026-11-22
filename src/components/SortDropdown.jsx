import { ChevronDown } from "lucide-react";
import { SORT_OPTIONS } from "@/lib/utils";

export default function SortDropdown({ value, onChange }) {
  return (
    <label className="flex items-center gap-3 text-sm text-muted">
      Sort By
      <span className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none rounded-lg border border-line bg-bg py-2 pl-4 pr-10 text-white outline-none focus:border-accent"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
        />
      </span>
    </label>
  );
}