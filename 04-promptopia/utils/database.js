import mongoose from "mongoose";

let isConnected = false; // important to track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); // to prevent console errors from mongo

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  // if not connected, connect it
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
