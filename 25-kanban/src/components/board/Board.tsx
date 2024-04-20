"use client";
/* eslint-disable react-hooks/exhaustive-deps */
// ** React
import React, { FC, useEffect, useState } from "react";

// ** Next
import { useRouter } from "next/navigation";

// ** Third Party
import axios from "axios";
import { DropResult, DragDropContext } from "@hello-pangea/dnd";
import { SyncLoader } from "react-spinners";
import toast from "react-hot-toast";

// ** Types
import { ITask, IBoard } from "../../../types/types";

// ** Custom Components
import Column from "./Column";

interface BoardProps {
  board: IBoard | null;
}

const Board: FC<BoardProps> = (props) => {
  const { board } = props;
  const router = useRouter();
  const [tasks, setTasks] = useState<ITask[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!board) {
      router.push("/onboarding");
      return;
    }

    setTasks(board.tasks);
    setLoading(false);
  }, [board]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const draggedTask = tasks?.find((task) => task.id === draggableId);

    let updatedStatus: string;

    switch (destination.droppableId) {
      case "todo":
        updatedStatus = "TODO";
        break;
      case "in-progress":
        updatedStatus = "IN_PROGRESS";
        break;
      case "done":
        updatedStatus = "DONE";
        break;
      default:
        updatedStatus = draggedTask?.status!;
        break;
    }

    try {
      axios.post("/api/updateTaskStatus", {
        taskId: draggableId,
        newStatus: updatedStatus,
      });
    } catch (error) {
      toast.error("An error occurred while updating the task status");
    }

    const updatedTasks = tasks?.map((task) => {
      if (task.id === draggableId) {
        return {
          ...task,
          status: updatedStatus,
        };
      }
      return task;
    });

    setTasks(updatedTasks || null);
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <SyncLoader color="blue" />
      </div>
    );
  }

  return (
    <div className="h-screen text-black dark:text-white dark:bg-gray-900 py-10 relative ">
      <h1 className="font-bold text-center mb-10 text-3xl">{board?.name}</h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid md:grid-cols-3 max-md:items-center gap-10 md:gap-5 w-[90%] max-w-[1450px] mx-auto">
          <Column
            title="Todo"
            tasks={tasks?.filter((task) => task.status === "TODO") || []}
            droppableId="todo"
          />
          <Column
            title="In Progress"
            tasks={tasks?.filter((task) => task.status === "IN_PROGRESS") || []}
            droppableId="in-progress"
          />
          <Column
            title="Done"
            tasks={tasks?.filter((task) => task.status === "DONE") || []}
            droppableId="done"
          />
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
