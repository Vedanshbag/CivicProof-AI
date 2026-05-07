import { Schema, model, models } from "mongoose";
const UserSchema = new Schema({ uid: { type: String, required: true, unique: true }, email: String, name: String, role: { type: String, default: "user" } }, { timestamps: true });
export default models.User || model("User", UserSchema);
