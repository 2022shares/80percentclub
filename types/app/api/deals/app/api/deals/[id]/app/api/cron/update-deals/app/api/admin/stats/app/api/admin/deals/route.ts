import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Deal from "@/lib/models/Deal";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = request.nextUrl;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "50");
    const search = searchParams.get("search") || "";
    const platform = searchParams.get("platform");

    const query: Record<string, unknown> = {};
    if (search) query.$text = { $search: search };
    if (platform && platform !== "all") query.platform = platform;

    const skip = (page - 1) * limit;

    const [deals, total] = await Promise.all([
      Deal.find(query).sort({ createdAt: -1 }).skip(skip).limit(limit).lean(),
      Deal.countDocuments(query),
    ]);

    return NextResponse.json({ success: true, deals, total });
  } catch (error) {
    console.error("Admin deals error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch deals" },
      { status: 500 }
    );
  }
}
