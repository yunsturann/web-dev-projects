"use client";

import { TSignUpSchema, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpSchema>({ resolver: zodResolver(signUpSchema) });

  const onSubmit = async (data: TSignUpSchema) => {
    // submit the form to the server
    await new Promise((resolve) => setTimeout(resolve, 2000));

    reset();
  };

  return (
    <section className="h-1/2 w-1/3">
      {/*form*/}
      <form
        className="h-full flex flex-col justify-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/*username*/}
        <div className="relative">
          <input
            type="text"
            id="username"
            placeholder=" "
            className="block rounded-md px-6 pt-6 py-2 w-full text-lg text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
            {...register("username")}
          />
          <label
            htmlFor="username"
            className="absolute text-lg text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 origin-[0] cursor-text left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            username
          </label>
          {errors.username && (
            <p className="text-red-500 text-sm pl-6 ">{`${errors.username.message}`}</p>
          )}
        </div>
        {/*email*/}
        <div className="relative">
          <input
            type="email"
            id="email"
            placeholder=" "
            className="block rounded-md px-6 pt-6 py-2 w-full text-lg text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
            {...register("email")}
          />
          <label
            htmlFor="email"
            className="absolute text-lg text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 origin-[0] cursor-text left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            email
          </label>
          {errors.email && (
            <p className="text-red-500 text-sm pl-6">{`${errors.email.message}`}</p>
          )}
        </div>
        {/*password */}
        <div className="relative">
          <input
            type="password"
            id="password"
            placeholder=" "
            className="block rounded-md px-6 pt-6 py-2 w-full text-lg text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
            {...register("password")}
          />
          <label
            htmlFor="password"
            className="absolute text-lg text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] cursor-text left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            password
          </label>
          {errors.password && (
            <p className="text-red-500 text-sm pl-6">{`${errors.password.message}`}</p>
          )}
        </div>
        {/*confirm*/}
        <div className="relative">
          <input
            type="password"
            id="confirm-password"
            placeholder=" "
            className="block rounded-md px-6 pt-6 py-2 w-full text-lg text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer"
            {...register("confirmPassword")}
          />
          <label
            htmlFor="confirm-password"
            className="absolute text-lg text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] cursor-text left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
          >
            confirm-password
          </label>
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm pl-6">{`${errors.confirmPassword.message}`}</p>
          )}
        </div>
        {/*Submit Button*/}
        <button
          type="submit"
          className="bg-gray-800 hover:bg-gray-700 py-2 rounded-md text-lg text-white font-semibold tracking-wider transition duration-300 disabled:opacity-50"
          disabled={isSubmitting}
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Login;
