"use client";

import { Search, X } from "lucide-react";
import { useState, useCallback } from "react";
import { debounce } from "@/lib/utils";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const [localValue, setLocalValue] = useState(value);

  const debouncedSearch = useCallback(
    debounce((val: string) => onChange(val), 400),
    [onChange]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setLocalValue(val);
    debouncedSearch(val);
  };

  const clearSearch = () => {
    setLocalValue("");
    onChange("");
  };

  return (
    <div className="relative flex-1 min-w-[200px]">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <input
        type="text"
        placeholder="Search deals..."
        value={localValue}
        onChange={handleChange}
        className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-deal-red/20 focus:border-deal-red transition-all"
      />
      {localValue && (
        <button
          onClick={clearSearch}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
