"use server";
import { prisma } from "@/utils/prisma";
import { auth } from "@clerk/nextjs";

export const getBoardIdForUser = async () => {
  const { userId } = auth();

  const board = await prisma.kanbanBoard.findFirst({
    where: {
      userId: userId!,
    },
  });

  return board ? board.id : null;
};
