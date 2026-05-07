export type VerificationStep = "ocr" | "org_match" | "metadata_scan" | "fraud_scan" | "ai_reasoning";

export interface VerificationResult {
  summary: string;
  confidence: number;
  suspiciousFlags: string[];
  organizationName?: string;
}

export interface TrustScoreBreakdown {
  trustScore: number;
  authenticityScore: number;
  communityImpactScore: number;
  reasons: string[];
}
