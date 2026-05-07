import type { TrustScoreBreakdown } from "@/types/domain";

export function generateTrustScore(confidence: number, flags: string[], contributionCount = 0): TrustScoreBreakdown {
  const penalty = flags.length * 7;
  const contributionBoost = Math.min(12, contributionCount * 2);
  const trustScore = Math.max(0, Math.min(100, Math.round(confidence * 100 - penalty + contributionBoost)));

  return {
    trustScore,
    authenticityScore: Math.max(0, trustScore - Math.min(10, flags.length * 2)),
    communityImpactScore: Math.min(100, 60 + contributionCount * 4),
    reasons: [
      `confidence_${Math.round(confidence * 100)}`,
      `flags_${flags.length}`,
      `contribution_boost_${contributionBoost}`
    ]
  };
}
