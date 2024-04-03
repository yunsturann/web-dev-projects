// ** React
import React, { useEffect } from "react";

// ** Redux
import { AppDispatch, RootState } from "@/components/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers } from "@/components/store/user-slice";

const HomePage = () => {
  const { users, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  console.log(users);

  return (
    <div>
      <table className="w-full border border-gray-400">
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
                <button className="bg-blue-500 text-white p-1">Edit</button>
                <button className="bg-red-500 text-white p-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomePage;
