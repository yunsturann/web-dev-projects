import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { toast } from "../ui/use-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";

const formSchema = z
  .object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords do not match.",
    path: ["passwordConfirmation"],
  });

type RegisterFormType = z.infer<typeof formSchema>;

const Register = () => {
  const form = useForm<RegisterFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });

  async function onSubmit(values: RegisterFormType) {
    // VALIDATE UNIQUE USERNAME
    const userRef = collection(db, "users");
    const q = query(userRef, where("username", "==", values.username));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return toast({
        title: "Username already exists",
        description: "Please choose another username",
        variant: "destructive",
      });
    }

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );

      await setDoc(doc(db, "users", res.user.uid), {
        username: values.username,
        email: values.email,
        id: res.user.uid,
      });

      toast({
        title: "Account created",
        description: "You have successfully created an account",
      });

      form.reset();
    } catch (error) {
      console.error(error);
      toast({
        title: "An error occurred",
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 flex justify-between flex-col gap-y-4 bg-slate-100 p-6"
      >
        <div className="space-y-4">
          <header>
            <h2 className="text-3xl mb-1 font-semibold">Register</h2>
            <p className="text-gray-500 text-sm">Sign up for an account</p>
          </header>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Johndoe" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirmation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter password again"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          Register
        </Button>
      </form>
    </Form>
  );
};

export default Register;
