import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  try {
    if (isConnected) return;
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
  } catch (error) {
    isConnected = false;
    console.log(error);
    throw new Error("Failed to connect to database");
  }
};
