import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const LoginForm = () => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      alert("Invalid username or password");
    }

    const data = await res.json();
    if (data.success) {
      router.refresh();
    }
  };

  return (
    <form
      className="border border-gray-600 py-12 px-6 flex flex-col gap-4 w-full max-w-[400px] rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl text-center font-medium">Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="text-lg p-2 outline-none border border-gray-400 rounded-md focus:border-blue-500 transition"
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        className="text-lg p-2 outline-none border border-gray-400 rounded-md focus:border-blue-500 transition"
        name="password"
      />
      <button
        type="submit"
        className="border border-black p-2 rounded-md text-lg font-medium hover:bg-black/10 transition duration-300"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
