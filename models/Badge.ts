import { Schema, model, models } from "mongoose";
const BadgeSchema = new Schema({ userId: String, badgeType: String, title: String, icon: String }, { timestamps: true });
export default models.Badge || model("Badge", BadgeSchema);
