"use client";
import { ITodo } from "@/types/types";
import React, { FormEvent, useState } from "react";
import { FaEdit } from "react-icons/fa";
import Modal from "./Modal";
import Input from "./Input";
import { SubmitButton } from "./SubmitButton";
import { editTodo } from "@/lib/actions";

interface EditButtonProps {
  todo: string;
}

const EditButton: React.FC<EditButtonProps> = ({ todo }) => {
  const todoObj: ITodo = JSON.parse(todo);

  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    editTodo(formData);
    handleCloseModal();
  };

  return (
    <>
      <FaEdit
        className="size-5 sm:size-6  hover:opacity-80 text-blue-300 cursor-pointer"
        onClick={handleOpenModal}
      />
      <Modal
        title="Change Todo"
        showModal={showModal}
        onClose={handleCloseModal}
      >
        <form
          action={editTodo}
          className="flex-1 flex flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="id" value={todoObj._id.toString()} />
          <Input
            placeholder="Change todo"
            name="newTodo"
            defaultValue={todoObj.todo}
            required
          />
          <SubmitButton title="Save" />
        </form>
      </Modal>
    </>
  );
};

export default EditButton;
