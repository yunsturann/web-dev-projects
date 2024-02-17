import { deleteTodo } from "@/lib/actions";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton = ({ id }: { id: string }) => {
  return (
    <form action={deleteTodo}>
      <button type="submit">
        <input type="hidden" name="id" value={id} />
        <FaRegTrashAlt className="size-5 sm:size-6  hover:opacity-80 text-rose-400 cursor-pointer" />
      </button>
    </form>
  );
};

export default DeleteButton;
