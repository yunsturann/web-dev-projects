"use client";

import { useEffect, useState } from "react";

const ClientPage = () => {
  const [session, setSession] = useState<any>(null);
  useEffect(() => {
    const getSession = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();

        setSession(data);
      } catch (error) {
        console.log(error);
      }
    };
    getSession();
  }, []);

  return (
    <div>
      <h1>ClientPage</h1>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default ClientPage;
