import { Schema, model, models } from "mongoose";
const TrustScoreSchema = new Schema({ userId: String, trustScore: Number, authenticityScore: Number, communityImpactScore: Number, reasons: [String] }, { timestamps: true });
export default models.TrustScore || model("TrustScore", TrustScoreSchema);
