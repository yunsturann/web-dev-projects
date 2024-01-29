"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json",
    });
    if (res.ok) {
      router.refresh();
      router.push("/");
    } else {
      const response = await res.json();
      setErrorMessage(response.message);
    }
  };

  return (
    <section>
      <form className="flex flex-col gap-3 w-1/2" onSubmit={handleSubmit}>
        {/*Title*/}
        <h1>Create New User</h1>
        {/*NAME INPUT */}
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="m-2 py-2 px-4 bg-slate-400 rounded"
        />
        {/*Mail INPUT */}

        <label htmlFor="">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="m-2 py-2 px-4 bg-slate-400 rounded"
        />
        {/*Password INPUT */}

        <label htmlFor="">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="m-2 py-2 px-4 bg-slate-400 rounded"
        />
        {/*Submit Button */}
        <input
          type="submit"
          value="Create User"
          className="bg-blue-400 hover:bg-blue-500 py-2 px-4 cursor-pointer"
        />
      </form>
      <p className="text-red-500 ">{errorMessage}</p>
    </section>
  );
};

export default UserForm;
