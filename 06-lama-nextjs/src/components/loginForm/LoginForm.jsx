"use client";
import { useRouter } from "next/navigation";
import styles from "./loginForm.module.css";
import { login } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import Link from "next/link";

const LoginForm = () => {
  const router = useRouter();
  const [state, formAction] = useFormState(login, undefined);

  useEffect(() => {
    if (state?.success) {
      alert("You have been logged in successfully");
    }
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="password" name="password" placeholder="password" required />
      <button type="submit">Login With Credentials</button>
      {state?.error && <p>{state.error}</p>}
      <Link href={"/register"}>
        {"Don't have an account? "}
        <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
