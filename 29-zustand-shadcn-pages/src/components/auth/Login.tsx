import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "../ui/use-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "@/config/firebase";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

type LoginFormType = z.infer<typeof formSchema>;

const Login = () => {
  const router = useRouter();

  const form = useForm<LoginFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit({ email, password }: LoginFormType) {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast({
        title: "Login successful",
        description: "You have successfully logged in.",
      });

      router.push("/");
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
            <h2 className="text-3xl mb-1 font-semibold">Login</h2>
            <p className="text-gray-500 text-sm">
              Sign in with your credentials.
            </p>
          </header>

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
        </div>
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          Login
        </Button>
      </form>
    </Form>
  );
};

export default Login;
