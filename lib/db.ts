import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/clothing";

export default async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(MONGO_URI);
}