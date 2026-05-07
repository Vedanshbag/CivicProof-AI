import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/db/mongoose";
import Organization from "@/models/Organization";
export async function GET(req: NextRequest) {
  await connectDb();
  const q = req.nextUrl.searchParams.get("q") || "";
  const organizations = await Organization.find({ name: { $regex: q, $options: "i" } }).limit(10);
  return NextResponse.json({ organizations });
}
