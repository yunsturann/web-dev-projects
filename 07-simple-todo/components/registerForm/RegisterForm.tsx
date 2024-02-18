"use client";
import { registerUser } from "@/lib/actions";
import Input from "../ui/Input";
import Link from "next/link";
import { SubmitButton } from "../ui/SubmitButton";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TInitialState } from "@/types/types";

const initialState: TInitialState = {
  error: "",
  success: false,
};

const RegisterForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(registerUser, initialState);

  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state, router]);

  return (
    <form
      action={formAction}
      className="flex flex-col w-full sm:w-1/2 mx-auto space-y-4 bg-gray-400 py-12 px-6 rounded-lg shadow-lg text-lg sm:text-xl"
    >
      <h2 className="text-3xl font-semibold mb-2 text-center">Register</h2>
      <Input placeholder="Username" name="username" />
      <Input placeholder="Email" name="email" />
      <Input type="password" placeholder="Password" name="password" />
      <Input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
      />
      <Input placeholder="Image URL" name="image" />
      <SubmitButton title="Register" />
      <p className="text-center text-base">
        {"Do you already have an account? "}
        <Link href={"/login"} className="font-semibold hover:underline">
          Login
        </Link>
      </p>
      <p className="text-center text-rose-400 text-base">{state?.error}</p>
    </form>
  );
};

export default RegisterForm;
