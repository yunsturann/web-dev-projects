// ** React
import React, { useEffect } from "react";

// ** Redux
import { AppDispatch, RootState } from "@/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "@/store/user-slice";
import Link from "next/link";

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
    <div>
      <table className="w-full border border-gray-400 overflow-auto">
        <thead>
          <tr>
            <th className="border border-gray-400 text-left">Name</th>
            <th className="border border-gray-400 text-left">Surname</th>
            <th className="border border-gray-400 text-left">Email</th>
            <th className="border border-gray-400 text-left">Phone</th>
            <th className="border border-gray-400 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
