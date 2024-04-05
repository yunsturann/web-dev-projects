"use client";

import Products from "@/components/Products";
import { useState } from "react";

const PaginationPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center ">
      {/* SET LIMIT */}
      <div className="flex justify-between text-lg w-80 mb-4">
        <button
          onClick={() => setLimit((prev) => prev - 1)}
          className="bg-blue-400 px-4 py-2"
        >
          Decrement
        </button>
        <button
          onClick={() => setLimit((prev) => prev + 1)}
          className="bg-blue-400 px-4 py-2"
        >
          Increment
        </button>
      </div>
      {/* PRODUCTS */}
      <Products page={page} limit={limit} />
      {/* it need to increase UX it fetchs next data */}
      <div className="hidden">
        <Products page={page + 1} limit={limit} />
      </div>
      {/* SET PAGE */}
      <div className="flex justify-between text-lg w-80 mt-4">
        <button
          onClick={() => setPage((prev) => prev - 1)}
          className="bg-blue-400 px-4 py-2"
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-blue-400 px-4 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationPage;
