import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: (v: string) => {
          return /^[a-zA-Z0-9_]{5,}$/.test(v);
        },
        message: (props: any) =>
          `Username should contain only letters, numbers, and underscores. Minimum 5 characters.`,
      },
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const todoSchema = new Schema(
  {
    todo: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Todo = mongoose.models?.Todo || model("Todo", todoSchema);
export const User = mongoose.models?.User || model("User", userSchema);
