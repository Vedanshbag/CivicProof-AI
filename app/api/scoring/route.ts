import { NextRequest, NextResponse } from "next/server";
import { scoringSchema } from "@/lib/validation/schemas";
import { generateTrustScore } from "@/lib/services/scoring";

export async function POST(req: NextRequest) {
  try {
    const payload = scoringSchema.parse(await req.json());
    const scores = generateTrustScore(payload.confidence, payload.flags, payload.contributionCount);
    return NextResponse.json(scores);
  } catch (error) {
    return NextResponse.json({ error: "Invalid scoring request", details: String(error) }, { status: 400 });
  }
}
