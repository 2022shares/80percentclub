import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Deal from "@/lib/models/Deal";
import { aggregateAllDeals } from "@/services/platforms";
import { AffiliateLinkGenerator } from "@/services/affiliate/linkGenerator";

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    await connectDB();

    const purged = await (Deal as any).purgeExpired();
    const rawDeals = await aggregateAllDeals();
    
    let inserted = 0;
    let updated = 0;

    for (const raw of rawDeals) {
      const affiliate = AffiliateLinkGenerator.generate(raw.productUrl, raw.platform);
      
      const existing = await Deal.findOne({ productUrl: raw.productUrl });
      
      if (existing) {
        await Deal.updateOne(
          { productUrl: raw.productUrl },
          {
            $set: {
              currentPrice: raw.currentPrice,
              originalPrice: raw.originalPrice,
              discountPercentage: Math.round(((raw.originalPrice - raw.currentPrice) / raw.originalPrice) * 100 * 10) / 10,
              affiliateUrl: affiliate.affiliateUrl,
              isActive: true,
              updatedAt: new Date(),
            },
          }
        );
        updated++;
      } else {
        await Deal.create({
          ...raw,
          affiliateUrl: affiliate.affiliateUrl,
          isActive: true,
        });
        inserted++;
      }
    }

    return NextResponse.json({
      success: true,
      purged,
      inserted,
      updated,
      totalActive: await Deal.countDocuments({ isActive: true }),
    });
  } catch (error) {
    console.error("Admin refresh error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
