import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ timeline: [], badges: [], analytics: { verifications: 24, flagged: 1 } });
}
