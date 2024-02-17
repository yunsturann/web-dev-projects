import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  try {
    if (isConnected) return;

    await mongoose.connect(process.env.MONGODB_URI as string);
    isConnected = true;
  } catch (error) {
    console.error("Error connecting to database", error);
    isConnected = false;
  }
};
