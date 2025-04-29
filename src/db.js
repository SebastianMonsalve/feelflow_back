import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sebastiandev16:XIsJKHuYsDouQNIQ@cluster0.xqpysxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("feelflowDB is connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
