import { NextRequest, NextResponse } from "next/server";
import { uploadSchema } from "@/lib/validation/schemas";

export async function POST(req: NextRequest) {
  try {
    const payload = uploadSchema.parse(await req.json());
    return NextResponse.json({
      message: "Upload metadata accepted",
      nextStep: "Generate signed upload URL from cloud storage provider",
      uploadId: `${payload.userId}-${Date.now()}`
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid upload request", details: String(error) }, { status: 400 });
  }
}
