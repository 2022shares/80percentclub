import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Deal from "@/lib/models/Deal";
import { IDealFilters } from "@/types";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = request.nextUrl;
    const filters: IDealFilters = {
      platform: (searchParams.get("platform") as any) || undefined,
      category: (searchParams.get("category") as any) || undefined,
      search: searchParams.get("search") || undefined,
      sort: (searchParams.get("sort") as any) || "discount-desc",
      page: parseInt(searchParams.get("page") || "1"),
      limit: Math.min(parseInt(searchParams.get("limit") || "24"), 48),
    };

    const result = await (Deal as any).findActive(filters);

    return NextResponse.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error("Deals API error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch deals" },
      { status: 500 }
    );
  }
}
