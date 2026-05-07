import { z } from "zod";

export const uploadSchema = z.object({
  fileName: z.string().min(1),
  fileType: z.enum(["pdf", "image", "certificate", "volunteer-proof"]),
  userId: z.string().min(1)
});

export const verificationSchema = z.object({
  certificateId: z.string().min(1),
  extractedText: z.string().min(10),
  metadata: z.record(z.string(), z.unknown()).optional()
});

export const scoringSchema = z.object({
  confidence: z.number().min(0).max(1),
  flags: z.array(z.string()),
  contributionCount: z.number().int().min(0).default(0)
});
