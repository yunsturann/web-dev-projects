// ** React Imports
import React, { FC, useState } from "react";

// ** React Icons
import { LuDot } from "react-icons/lu";

// ** Types
import { ITask } from "../../../types/types";

// ** Third Party
import { Draggable, Droppable } from "@hello-pangea/dnd";

// ** Custom Components

interface ColumnProps {
  title: string;
  tasks: ITask[];
  droppableId: string;
}

const Column: FC<ColumnProps> = (props) => {
  const { title, tasks, droppableId } = props;

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [taskId, setTaskId] = useState<string | null>(null);

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
                        <div className="text-xs text-gray-400 mt-1 cursor-pointer">
                          Edit
                        </div>
                        <div className="text-xs text-gray-400 mt-1 cursor-pointer">
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
    </div>
  );
};

export default Column;
