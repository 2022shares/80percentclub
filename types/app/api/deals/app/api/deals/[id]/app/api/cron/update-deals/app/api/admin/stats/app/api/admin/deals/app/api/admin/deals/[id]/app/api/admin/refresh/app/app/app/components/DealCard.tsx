"use client";

import Image from "next/image";
import { IDealDocument } from "@/types";
import { formatPrice } from "@/lib/utils";
import { ExternalLink, Star } from "lucide-react";

interface DealCardProps {
  deal: IDealDocument;
}

export function DealCard({ deal }: DealCardProps) {
  const savings = deal.originalPrice - deal.currentPrice;

  return (
    <div className="deal-card bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
      {/* Image */}
      <div className="relative aspect-square">
        <Image
          src={deal.imageUrl}
          alt={deal.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        
        {/* Discount Badge */}
        <div className="discount-badge absolute top-3 left-3 bg-deal-red text-white px-3 py-1 rounded-full text-sm font-bold">
          {deal.discountPercentage.toFixed(0)}% OFF
        </div>
        
        {/* Platform Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold capitalize border border-slate-200">
          {deal.platform}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-sm font-semibold text-slate-900 line-clamp-2 mb-2 leading-snug">
          {deal.title}
        </h3>

        {/* Rating */}
        {deal.rating && (
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex items-center gap-0.5">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="text-sm font-medium text-slate-700">
                {deal.rating}
              </span>
            </div>
            <span className="text-xs text-slate-400">
              ({deal.reviewCount?.toLocaleString()})
            </span>
          </div>
        )}

        {/* Prices */}
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-xl font-bold text-deal-green">
            {formatPrice(deal.currentPrice)}
          </span>
          <span className="text-sm text-slate-400 line-through">
            {formatPrice(deal.originalPrice)}
          </span>
        </div>
        <p className="text-xs text-deal-red font-medium mb-4">
          Save {formatPrice(savings)}
        </p>

        {/* CTA */}
        <a
          href={deal.affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="grab-deal-btn flex items-center justify-center gap-2 w-full py-3 rounded-xl text-white font-bold text-sm"
        >
          Grab Deal
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
