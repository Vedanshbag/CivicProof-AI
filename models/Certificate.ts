import { Schema, model, models } from "mongoose";
const CertificateSchema = new Schema({ userId: String, fileName: String, fileUrl: String, extractedText: String, organizationName: String, verificationStatus: { type: String, default: "pending" }, metadata: Schema.Types.Mixed }, { timestamps: true });
export default models.Certificate || model("Certificate", CertificateSchema);
