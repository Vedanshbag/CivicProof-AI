import { Schema, model, models } from "mongoose";
const OrganizationSchema = new Schema({ name: { type: String, unique: true }, trustLevel: Number, verifiedDomains: [String] }, { timestamps: true });
export default models.Organization || model("Organization", OrganizationSchema);
