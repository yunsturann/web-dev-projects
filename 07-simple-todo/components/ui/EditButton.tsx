"use client";
import { ITodo } from "@/types/types";
import React from "react";
import { FaEdit } from "react-icons/fa";

interface EditButtonProps {
  todo: string;
}

const EditButton: React.FC<EditButtonProps> = ({ todo }) => {
  const todoObj: ITodo = JSON.parse(todo);

  return (
    <>
      <FaEdit className="size-5 sm:size-6  hover:opacity-80 text-blue-300 cursor-pointer" />
    </>
  );
};

export default EditButton;
