import { NextRequest, NextResponse } from "next/server";
import { runVerificationReasoning } from "@/lib/ai/gemini";
import { connectDb } from "@/lib/db/mongoose";
import VerificationLog from "@/models/VerificationLog";
import { verificationSchema } from "@/lib/validation/schemas";
import { combineVerification, runFraudHeuristics } from "@/lib/services/fraudDetection";

export async function POST(req: NextRequest) {
  try {
    const payload = verificationSchema.parse(await req.json());
    const aiResult = await runVerificationReasoning(payload.extractedText);
    const localFlags = runFraudHeuristics(payload.extractedText, payload.metadata);
    const finalResult = combineVerification(aiResult, localFlags);

    await connectDb();
    await VerificationLog.create({
      certificateId: payload.certificateId,
      steps: ["ocr", "org-match", "fraud-scan", "ai-reasoning"],
      confidence: finalResult.confidence,
      summary: finalResult.summary,
      flags: finalResult.suspiciousFlags
    });

    return NextResponse.json(finalResult);
  } catch (error) {
    return NextResponse.json({ error: "Invalid verification request", details: String(error) }, { status: 400 });
  }
}
