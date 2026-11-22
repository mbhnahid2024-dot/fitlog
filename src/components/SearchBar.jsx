import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-xs">
      <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search name or muscle…"
        className="w-full rounded-lg border border-line bg-bg py-2 pl-9 pr-3 text-sm outline-none placeholder:text-muted focus:border-accent"
      />
    </div>
  );
}