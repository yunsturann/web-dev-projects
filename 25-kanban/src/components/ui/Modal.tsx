import React, { FC } from "react";

// ** Custom Components
import Input from "./Input";
import Button from "./Button";

// ** Third Party Components
import toast from "react-hot-toast";

// ** Component Interface
interface ModalProps {
  closeModal: () => void;
  title: string;
  action: (formData: FormData) => Promise<void>;
  value: string;
  isCreate?: boolean;
}

const Modal: FC<ModalProps> = (props) => {
  const { closeModal, title, action, value, isCreate } = props;

  const handleSubmit = () => {
    if (isCreate) {
      toast.success("New Task Created");
    }
    closeModal();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800/30 z-20"
      onClick={closeModal}
    >
      <div
        className="bg-gray-700 rounded-lg p-6 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="flex justify-center">
          <form action={action} onSubmit={handleSubmit}>
            <Input type="hidden" name="taskId" value={value} />
            {isCreate && (
              <>
                <Input
                  type="text"
                  name="task"
                  placeholder="Enter task name"
                  fullWidth
                />
                <Input type="hidden" value={value} name="boardId" />
              </>
            )}
            <div className="mt-5 flex gap-5">
              <Button confirmButton text="Confirm" type="submit" />
              <Button text="Cancel" onClick={closeModal} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
