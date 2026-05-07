import mongoose from "mongoose";
let cached = globalThis as typeof globalThis & { mongooseConn?: typeof mongoose };
export async function connectDb() {
  if (cached.mongooseConn) return cached.mongooseConn;
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI missing");
  cached.mongooseConn = await mongoose.connect(uri, { dbName: "civicproof" });
  return cached.mongooseConn;
}
