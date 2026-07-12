"use client";

import { SortOption } from "@/types";
import { ArrowUpDown } from "lucide-react";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "discount-desc", label: "Discount: High → Low" },
  { value: "discount-asc", label: "Discount: Low → High" },
  { value: "price-asc", label: "Price: Low → High" },
  { value: "price-desc", label: "Price: High → Low" },
  { value: "newest", label: "Newest First" },
];

interface SortDropdownProps {
  value: SortOption;
  onChange: (sort: SortOption) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="relative">
      <ArrowUpDown className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="pl-9 pr-8 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-deal-red/20 focus:border-deal-red cursor-pointer appearance-none"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
