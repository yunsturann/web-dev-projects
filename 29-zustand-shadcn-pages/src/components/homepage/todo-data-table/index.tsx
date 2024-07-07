import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { auth } from "@/config/firebase";
import { ITodo, useTodosStore } from "@/store/use-todos-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import React, { useEffect } from "react";

const columns: ColumnDef<ITodo>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "isWatched",
    header: "Is Watched",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      console.log(row.original);
      const todo = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="z-50 bg-blue-400">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(todo.id)}
            >
              Copy todo ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View todo details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const TodoDataTable = () => {
  const fetchTodos = useTodosStore((state) => state.fetchTodos);
  const todos = useTodosStore((state) => state.todos);

  useEffect(() => {
    fetchTodos(auth.currentUser!.uid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(todos);

  return (
    <>
      <DataTable columns={columns} data={todos} />
    </>
  );
};

export default TodoDataTable;
