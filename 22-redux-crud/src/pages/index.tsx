// ** React
import React, { useEffect } from "react";

// ** Nextjs Imports
import Link from "next/link";
// ** Redux
import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "@/store/user-slice";

// ** Utils
import { cn } from "@/lib/utils";

const HomePage = () => {
  const { users, loading, loadingButton } = useSelector(
    (state: RootState) => state.user
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  const handleDelete = async (id: string) => {};

  return (
    <div className="px-4">
      {/* TABLE */}
      <div className="overflow-auto contents ">
        <table className="max-w-5xl mx-auto w-full border border-slate-200 overflow-auto rounded-lg shadow-lg shadow-purple-200/50">
          <thead>
            <tr className="bg-slate-400 text-white">
              <th className=" border border-white text-left tracking-wide font-semibold px-3 py-2">
                Name
              </th>
              <th className=" border border-white text-left tracking-wide font-semibold px-3 py-2">
                Surname
              </th>
              <th className=" border border-white text-left tracking-wide font-semibold px-3 py-2">
                Email
              </th>
              <th className=" border border-white text-left tracking-wide font-semibold px-3 py-2">
                Phone
              </th>
              <th className=" border border-white text-left tracking-wide font-semibold px-3 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="">
            {users.map((user, index) => {
              const isEven = index % 2 === 0;
              return (
                <tr
                  key={user._id}
                  className={`${isEven ? "bg-white" : "bg-slate-100"}`}
                >
                  <td
                    className={cn(
                      "px-3 py-2 whitespace-nowrap border border-white",
                      {
                        "border-slate-100": isEven,
                      }
                    )}
                  >
                    {user.name}
                  </td>
                  <td
                    className={cn(
                      "px-3 py-2 whitespace-nowrap border border-white",
                      {
                        "border-slate-100": isEven,
                      }
                    )}
                  >
                    {user.surname}
                  </td>
                  <td
                    className={cn(
                      "px-3 py-2 whitespace-nowrap border border-white",
                      {
                        "border-slate-100": isEven,
                      }
                    )}
                  >
                    {user.email}
                  </td>
                  <td
                    className={cn(
                      "px-3 py-2 whitespace-nowrap border border-white",
                      {
                        "border-slate-100": isEven,
                      }
                    )}
                  >
                    {user.phone}
                  </td>
                  <td
                    className={cn(
                      "px-3 py-2 whitespace-nowrap border border-white",
                      {
                        "border-slate-100": isEven,
                      }
                    )}
                  >
                    <button className="bg-blue-500 text-white p-1">
                      <Link href={`/user/update/${user._id}`}>Edit</Link>
                    </button>
                    <button
                      className="bg-red-500 text-white p-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      onClick={() => dispatch(deleteUser(user._id!))}
                      disabled={loadingButton}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
