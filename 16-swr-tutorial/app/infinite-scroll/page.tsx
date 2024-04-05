"use client";

import { useGetUsers } from "@/services/infinite/hooks/useGetUsers";

const InfiniteScrollPage = () => {
  const { data, setSize, size } = useGetUsers();

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {data.map((page, index) => (
        <div key={index}>
          {page.users.map((user, index) => (
            <div key={index} className="flex">
              {user.id} - {user.firstName} - {user.age}
            </div>
          ))}
        </div>
      ))}
      <button onClick={() => setSize(size + 1)}>Load More</button>
    </div>
  );
};

export default InfiniteScrollPage;
