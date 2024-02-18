import AddTodo from "@/components/addTodo/AddTodo";
import { ITodo } from "@/types/types";
import { getTodos } from "@/lib/actions";
import { FaEdit } from "react-icons/fa";
import DeleteButton from "@/components/ui/DeleteButton";

const AddTodoPage = async () => {
  const todos: ITodo[] = await getTodos();

  return (
    <section className="flex-1 flex flex-col max-sm:px-4 py-6 gap-4 sm:gap-6 ">
      <div className="text-center">
        <h1 className="text-2xl font-semibold tracking-wider">Add Todo</h1>
        <p>Welcome to the add todo page.</p>
      </div>
      <hr className="h-0.5 bg-gray-400" />
      {/* Add Todo */}
      <AddTodo />
      <hr className="h-0.5 bg-gray-400" />
      {/* List Todos */}
      <div className="self-center max-h-[500px] overflow-y-auto flex flex-col justify-start items-center  w-full sm:w-2/3 bg-gray-600 text-white rounded-xl">
        {todos.map((todo, index) => (
          <div
            key={todo._id.toString()}
            className={`w-full py-3 px-2 text-base sm:text-lg flex justify-between items-start gap-2 sm:gap-4 ${
              todos.length - 1 === index
                ? "border-b-0"
                : "border-b-2 border-gray-400"
            }`}
          >
            <p className="hover:line-through" title="click to done">
              {todo.todo}
            </p>
            <div className="flex gap-2 sm:gap-3">
              <FaEdit className="size-5 sm:size-6  hover:opacity-80 text-blue-300 cursor-pointer" />
              <DeleteButton id={todo._id.toString()} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddTodoPage;
