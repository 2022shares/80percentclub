import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Deal from "@/lib/models/Deal";

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    await Deal.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin delete error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete deal" },
      { status: 500 }
    );
  }
}
