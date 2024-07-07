import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useUserStore } from "@/store/use-user-store";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { toast } from "@/components/ui/use-toast";
import { useTodosStore } from "@/store/use-todos-store";

const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  description: z.string().min(3, {
    message: "Description must be at least 3 characters.",
  }),
  isWatched: z.boolean(),
});

type TodoFormType = z.infer<typeof formSchema>;

const TodoFormDialog = () => {
  const addTodo = useTodosStore((state) => state.addTodo);

  const form = useForm<TodoFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      isWatched: false,
    },
  });

  const onSubmit = async (data: TodoFormType) => {
    try {
      const createdAt = new Date().toISOString();

      const todo = await addDoc(collection(db, `todos`), {
        ...data,
        createdAt,
        userId: auth.currentUser?.uid,
      });

      addTodo({
        id: todo.id,
        ...data,
        createdAt,
        userId: auth.currentUser?.uid!,
      });

      toast({
        title: "Todo created successfully",
        variant: "success",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Failed to create todo",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="blue" className="w-[240px]">
          Create Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
          <DialogDescription>
            {`Make changes to your profile here. Click save when you're done.`}
          </DialogDescription>
        </DialogHeader>
        <form
          className={"grid items-start gap-4"}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="grid gap-2">
            <Label>Title</Label>
            <Input {...form.register("title")} />
            {form.formState.errors.title && (
              <span className="text-red-500 text-sm">
                {form.formState.errors?.title.message}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <Label>Description</Label>
            <Input {...form.register("description")} />
            {form.formState.errors.description && (
              <span className="text-red-500 text-sm">
                {form.formState.errors?.description.message}
              </span>
            )}
          </div>
          <div className="flex items-center gap-x-4">
            <label draggable htmlFor="is-watched">
              Is Watched?
            </label>
            <Input
              id="is-watched"
              className="w-[25px]"
              type="checkbox"
              {...form.register("isWatched")}
            />
          </div>
          <div className="flex justify-between gap-x-3">
            <DialogClose asChild>
              <Button variant="destructive" className="flex-1">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" className="flex-1">
              Save
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TodoFormDialog;
