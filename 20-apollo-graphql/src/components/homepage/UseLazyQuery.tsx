import useGetLazyComments from "@/services/homepage/hooks/useGetComments";
import React from "react";
import { useTranslation } from "react-i18next";

const UseLazyQuery = () => {
  const { t } = useTranslation();
  const { getComments, data, error, loading } = useGetLazyComments();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="text-center">
      <button className="border p-3 text-red-400" onClick={() => getComments()}>
        {t("fetchData")}
      </button>
      {data ? (
        <ul>
          {data.map((comment) => (
            <li key={comment.id}>
              <p>{comment.comment}</p>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UseLazyQuery;
