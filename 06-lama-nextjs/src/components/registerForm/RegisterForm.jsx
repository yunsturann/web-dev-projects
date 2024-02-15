"use client";
import { register } from "@/lib/action";
import styles from "./registerForm.module.css";
import { useFormState } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const router = useRouter();

  const [state, formAction] = useFormState(register, undefined);
  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="Username" name="username" required />
      <input type="email" placeholder="Email" name="email" required />
      <input type="password" placeholder="Password" name="password" required />
      <input
        type="password"
        placeholder="Confirm Password"
        name="confirmPassword"
      />
      <button type="submit">Register</button>
      {state?.error && <p>{state.error}</p>}
      <Link href={"/login"}>
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};

export default RegisterForm;
