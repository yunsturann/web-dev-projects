import { IUser } from "@/types/UserType";
import React, { FC } from "react";
import Input from "../ui/Input";

interface UserFormProps {
  initialData: IUser;
}

const UserForm: FC<UserFormProps> = ({ initialData }) => {
  const EDIT_MODE = !!initialData.id;

  return (
    <div className="border border-gray-400 rounded-lg w-full max-w-3xl mx-auto px-12 py-8">
      <h1 className="text-center text-lg sm:text-xl font-semibold tracking-wide">
        {EDIT_MODE ? "Edit User" : "Create User"}
      </h1>

      <form className="space-y-3">
        <Input label="Name" />
        <Input label="Surname" />
        <Input label="Email" />
      </form>
    </div>
  );
};

export default UserForm;
