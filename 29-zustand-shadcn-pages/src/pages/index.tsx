import React from "react";
import Container from "@/components/shared/Container";
import TodoFormDialog from "@/components/homepage/todo-form-dialog";
import TodoDataTable from "@/components/homepage/todo-data-table";

const HomePage = () => {
  return (
    <section>
      <Container className="flex flex-col gap-y-4 ">
        <header>
          <h2 className="text-3xl font-semibold">Homepage</h2>
          <p className="text-gray-400 text-sm ">Your Todos</p>
        </header>

        {/* actions */}
        <TodoFormDialog />

        {/* Todos */}
        <TodoDataTable />
      </Container>
    </section>
  );
};

export default HomePage;
