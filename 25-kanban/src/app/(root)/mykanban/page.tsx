// ** React
import React from "react";

// ** Third Party
import { auth } from "@clerk/nextjs";
import { prisma } from "@/utils/prisma";

// ** Custom Components
import Board from "@/components/board/Board";

const MyKanbanPage = async () => {
  const { userId } = auth();

  const board = await prisma.kanbanBoard.findFirst({
    where: {
      userId: userId!,
    },
    include: {
      tasks: true,
    },
  });

  return (
    <>
      <Board board={board} />
    </>
  );
};

export default MyKanbanPage;
