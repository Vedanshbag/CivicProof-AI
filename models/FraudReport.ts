import { Schema, model, models } from "mongoose";
const FraudReportSchema = new Schema({ certificateId: String, type: String, severity: Number, details: String, resolved: { type: Boolean, default: false } }, { timestamps: true });
export default models.FraudReport || model("FraudReport", FraudReportSchema);
