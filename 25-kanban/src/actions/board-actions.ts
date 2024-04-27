"use server";

import { prisma } from "@/utils/prisma";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";

const { userId } = auth();

export async function createNewBoard(formData: FormData) {
  const name = formData.get("boardName") as string;

  const existingBoard = await prisma.kanbanBoard.findFirst({
    where: {
      userId: userId!,
    },
  });

  if (existingBoard) {
    await prisma.kanbanBoard.update({
      where: {
        id: existingBoard.id,
      },
      data: {
        name: name,
      },
    });
  } else {
    await prisma.kanbanBoard.create({
      data: {
        name,
        userId: userId!,
      },
    });
  }
  // revalidatePath("/");
  revalidatePath("/onboarding");
}

export async function createTask(formData: FormData) {
  const { boardId, task: name } = Object.fromEntries(formData.entries()) as {
    boardId: string;
    task: string;
  };

  console.log(boardId, name);
  // Check if task is empty
  if (!name.trim()) return;

  await prisma.task.create({
    data: {
      name,
      board: { connect: { id: boardId } },
      status: "TODO",
    },
  });

  revalidatePath("/");
}

export async function editTask(formData: FormData) {
  const newTask = formData.get("newTask") as string;
  const taskId = formData.get("taskId") as string;

  if (!newTask.trim()) return;

  await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      name: newTask,
    },
  });

  revalidatePath("/mykanban");
}
