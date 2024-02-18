import mongoose from "mongoose";

export type NavLink = {
  id: number;
  name: string;
  path: string;
};

export interface ITodo {
  _id: mongoose.Types.ObjectId;
  todo: string;
  isDone: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v?: number;
}

export type InitialState = {
  success: boolean;
  message: string;
};

export type TInitialState = {
  error?: string;
  success?: boolean;
};
