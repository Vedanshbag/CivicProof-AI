import { Schema, model, models } from "mongoose";
const VerificationLogSchema = new Schema({ certificateId: String, steps: [String], confidence: Number, summary: String, flags: [String] }, { timestamps: true });
export default models.VerificationLog || model("VerificationLog", VerificationLogSchema);
