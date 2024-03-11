"use client";

import Link from "next/link";
import Input from "../ui/Input";
import { SubmitButton } from "../ui/SubmitButton";
import { TInitialState } from "@/types/types";
import { useFormState } from "react-dom";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginUser } from "@/lib/authActions";

const initialState: TInitialState = {
  error: "",
  success: false,
};

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(loginUser, initialState);

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [state.success, router]);

  return (
    <form
      action={formAction}
      className="flex flex-col w-full sm:w-1/2 mx-auto space-y-4 bg-gray-400 py-12 px-6 rounded-lg shadow-lg text-lg sm:text-xl"
    >
      <h2 className="text-3xl font-semibold mb-2 text-center">Login</h2>
      <Input placeholder="Username" name="username" />
      <Input type="password" placeholder="Password" name="password" />
      <SubmitButton title="Login" />

      <p className="text-center text-base">
        {"Dont You have an account? "}
        <Link href={"/register"} className="font-semibold hover:underline">
          Register
        </Link>
      </p>
      {state.error && (
        <p className="text-red-500 text-center font-semibold">{state.error}</p>
      )}
    </form>
  );
};

export default LoginForm;
