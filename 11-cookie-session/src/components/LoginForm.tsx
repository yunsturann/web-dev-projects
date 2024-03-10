"use client";
import { login } from "@/actions";
import React from "react";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <input
        type="text"
        name="username"
        placeholder="username"
        className="input"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="input"
      />
      <button type="submit" className="button">
        Login
      </button>
      {state?.error && <p className="text-rose-400">{state.error}</p>}
    </form>
  );
};

export default LoginForm;
