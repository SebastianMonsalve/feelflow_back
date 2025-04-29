import mongoose from "mongoose";
import { DB_NAME, DB_USER, DB_PASSWORD } from "./config.js";

export const connectDB = async () => {
  const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.xqpysxp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;
  try {
    const db = await mongoose.connect(URI);
    console.log("Connected with", db.connection.name);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
