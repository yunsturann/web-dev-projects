"use client";

import { Dispatch, FC, SetStateAction } from "react";
import { IoMdCloseCircle } from "react-icons/io";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  showModal: boolean;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({
  title,
  showModal,
  onClose,
  children,
  ...props
}) => {
  if (!showModal) return null;

  return (
    // MODAL OUTER
    <div
      {...props}
      className="fixed top-0 left-0 size-full bg-black/25 flex justify-center items-center py-8 px-4"
    >
      {/*  MODAL INNER */}
      <div
        className={`w-full max-w-5xl min-h-72 max-h-[70vh] overflow-auto bg-white rounded-xl text-black flex flex-col p-4 relative `}
      >
        {/* TITLE */}
        <h2 className="text-2xl text-center mb-4 font-semibold">{title}</h2>
        {/* CLOSE BUTTON */}
        <div
          className="absolute top-4 right-4 cursor-pointer hover:text-red-500 transition duration-300"
          onClick={onClose}
        >
          <IoMdCloseCircle size={32} />
        </div>

        {children}
      </div>
    </div>
  );
};

export default Modal;
