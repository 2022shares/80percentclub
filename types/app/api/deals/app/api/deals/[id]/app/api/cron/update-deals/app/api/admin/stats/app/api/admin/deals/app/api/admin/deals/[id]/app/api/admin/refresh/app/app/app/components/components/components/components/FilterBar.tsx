"use client";

import { Platform, Category } from "@/types";
import { PLATFORM_CONFIGS } from "@/services/platforms";
import { Filter } from "lucide-react";

const CATEGORIES: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All Categories" },
  { value: "electronics", label: "Electronics" },
  { value: "fashion", label: "Fashion" },
  { value: "home", label: "Home" },
  { value: "beauty", label: "Beauty" },
  { value: "sports", label: "Sports" },
  { value: "toys", label: "Toys" },
  { value: "books", label: "Books" },
  { value: "automotive", label: "Automotive" },
];

interface FilterBarProps {
  platform: Platform | "all";
  category: Category | "all";
  onPlatformChange: (platform: Platform | "all") => void;
  onCategoryChange: (category: Category | "all") => void;
}

export function FilterBar({
  platform,
  category,
  onPlatformChange,
  onCategoryChange,
}: FilterBarProps) {
  const platforms = Object.entries(PLATFORM_CONFIGS).map(([key, config]) => ({
    value: key as Platform,
    label: config.name,
  }));

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Filter className="w-4 h-4 text-slate-400 hidden sm:block" />
      
      <select
        value={platform}
        onChange={(e) => onPlatformChange(e.target.value as Platform | "all")}
        className="px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-deal-red/20 focus:border-deal-red cursor-pointer"
      >
        <option value="all">All Platforms</option>
        {platforms.map((p) => (
          <option key={p.value} value={p.value}>
            {p.label}
          </option>
        ))}
      </select>

      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value as Category | "all")}
        className="px-3 py-2.5 bg-white border border-slate-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-deal-red/20 focus:border-deal-red cursor-pointer"
      >
        {CATEGORIES.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>
    </div>
  );
}
