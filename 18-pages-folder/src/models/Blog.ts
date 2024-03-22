import mongoose, { Schema, models } from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);

mongoose.Promise = global.Promise;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.Blog || mongoose.model("Blog", blogSchema);
