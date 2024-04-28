// ** React Imports
import React, { FC, useState } from "react";

// ** React Icons
import { LuDot } from "react-icons/lu";

// ** Types
import { ITask } from "../../../types/types";

// ** Third Party
import { Draggable, Droppable } from "@hello-pangea/dnd";

// ** Custom Components
import Modal from "../ui/Modal";

// ** Server Actions
import { editTask, deleteTask } from "@/actions/board-actions";

interface ColumnProps {
  title: string;
  tasks: ITask[];
  droppableId: string;
}

const Column: FC<ColumnProps> = (props) => {
  const { title, tasks, droppableId } = props;

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const openDeleteModal = (taskId: string) => {
    setIsDelete(true);
    setTaskId(taskId);
  };

  const closeDeleteModal = () => {
    setIsDelete(false);
    setTaskId(null);
  };

  const openEditModal = (taskId: string) => {
    setIsEdit(true);
    setTaskId(taskId);
  };

  const closeEditModal = () => {
    setIsEdit(false);
    setTaskId(null);
  };

  return (
    <div className="flex-1">
      <div className="flex gap-1 dark:text-white">
        <h2 className="text-sm font-semibold mb-4 uppercase" draggable>
          {title}
        </h2>
        <LuDot />
      </div>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="bg-gray-200 dark:bg-gray-800 rounded-lg p-4"
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <div
                    className="bg-gray-700 rounded p-2 mb-2 text-white flex justify-between"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  >
                    {task.name}
                    {hoverIndex === index && (
                      <div className="flex gap-5">
                        <div
                          className="text-xs text-gray-400 mt-1 cursor-pointer"
                          onClick={() => openEditModal(task.id)}
                        >
                          Edit
                        </div>
                        <div
                          className="text-xs text-gray-400 mt-1 cursor-pointer"
                          onClick={() => openDeleteModal(task.id)}
                        >
                          Delete
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {/* Edit Modal */}
      {isEdit && (
        <Modal
          closeModal={closeEditModal}
          title="Edit Task"
          action={editTask}
          value={taskId!}
          isEdit={isEdit}
          taskValue={tasks.find((task) => task.id === taskId)?.name}
        />
      )}
      {/* Delete Modal */}
      {isDelete && (
        <Modal
          closeModal={closeDeleteModal}
          title="Are you sure you want to delete this task?"
          action={deleteTask}
          value={taskId!}
          isDelete={isDelete}
        />
      )}
    </div>
  );
};

export default Column;
