import mongoose from "mongoose";
import { ENV } from "./env.js";

export const connectDB = async () => {
  try {
    if (!ENV.MONGO_URI) {
      console.log("MongoDB URI not provided, skipping database connection");
      return;
    }
    const conn = await mongoose.connect(ENV.MONGO_URI);

    console.log("MongoDB connected successfully:", conn.connection.host);
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    console.log("Continuing without database connection...");
    // Don't exit the process, just log the error
  }
};
