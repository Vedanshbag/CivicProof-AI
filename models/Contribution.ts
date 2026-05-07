import { Schema, model, models } from "mongoose";
const ContributionSchema = new Schema({ userId: String, title: String, type: String, occurredAt: Date, proofCertificateId: String, impactPoints: Number }, { timestamps: true });
export default models.Contribution || model("Contribution", ContributionSchema);
