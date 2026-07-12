"use client";

import { useEffect, useState, useCallback } from "react";
import { IDealDocument, IDealResponse, SortOption, Platform, Category } from "@/types";
import { DealCard } from "./DealCard";
import { FilterBar } from "./FilterBar";
import { SearchBar } from "./SearchBar";
import { SortDropdown } from "./SortDropdown";
import { Loader2 } from "lucide-react";

export function DealGrid() {
  const [deals, setDeals] = useState<IDealDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const [filters, setFilters] = useState({
    platform: "all" as Platform | "all",
    category: "all" as Category | "all",
    search: "",
    sort: "discount-desc" as SortOption,
  });

  const fetchDeals = useCallback(async (reset = false) => {
    setLoading(true);
    const currentPage = reset ? 1 : page;
    
    const params = new URLSearchParams({
      page: String(currentPage),
      limit: "24",
      sort: filters.sort,
      ...(filters.platform !== "all" && { platform: filters.platform }),
      ...(filters.category !== "all" && { category: filters.category }),
      ...(filters.search && { search: filters.search }),
    });

    try {
      const res = await fetch(`/api/deals?${params}`);
      const data: IDealResponse = await res.json();
      
      if (reset) {
        setDeals(data.deals);
        setPage(1);
      } else {
        setDeals((prev) => [...prev, ...data.deals]);
      }
      
      setHasMore(data.pagination.hasNext);
    } catch (error) {
      console.error("Failed to fetch deals:", error);
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  useEffect(() => {
    fetchDeals(true);
  }, [filters]);

  useEffect(() => {
    if (page > 1) fetchDeals();
  }, [page]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
        <SearchBar 
          value={filters.search}
          onChange={(search) => setFilters((f) => ({ ...f, search }))}
        />
        <div className="flex gap-3 flex-wrap">
          <FilterBar
            platform={filters.platform}
            category={filters.category}
            onPlatformChange={(p) => setFilters((f) => ({ ...f, platform: p }))}
            onCategoryChange={(c) => setFilters((f) => ({ ...f, category: c }))}
          />
          <SortDropdown
            value={filters.sort}
            onChange={(s) => setFilters((f) => ({ ...f, sort: s }))}
          />
        </div>
      </div>

      {/* Grid */}
      {deals.length === 0 && !loading ? (
        <div className="text-center py-20 text-slate-400">
          No deals found. Try adjusting your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {deals.map((deal) => (
            <DealCard key={deal._id} deal={deal} />
          ))}
          {loading && Array.from({ length: 4 }).map((_, i) => (
            <DealSkeleton key={`skeleton-${i}`} />
          ))}
        </div>
      )}

      {/* Load More */}
      {hasMore && deals.length > 0 && !loading && (
        <div className="flex justify-center pt-6">
          <button
            onClick={() => setPage((p) => p + 1)}
            className="px-8 py-3 bg-white border border-slate-200 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Load More Deals
          </button>
        </div>
      )}
    </div>
  );
}

function DealSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200">
      <div className="skeleton aspect-square" />
      <div className="p-4 space-y-3">
        <div className="skeleton h-4 rounded w-3/4" />
        <div className="skeleton h-3 rounded w-1/2" />
        <div className="skeleton h-6 rounded w-1/3" />
        <div className="skeleton h-10 rounded-xl" />
      </div>
    </div>
  );
}
