"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { defaultValues } from "@/constants";
import { CustomField } from "./CustomField";

const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string(),
});

export type FormSchemaType = z.infer<typeof formSchema>;

const TransformationForm = ({
  action,
  data = null,
}: TransformationFormProps) => {
  const initialValues =
    data && action === "Update"
      ? {
          title: data?.title,
          aspectRatio: data?.aspectRatio,
          color: data?.color,
          prompt: data?.prompt,
          publicId: data?.publicId,
        }
      : defaultValues;
  // define form
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: initialValues,
  });
  // define a submit handler

  const onSubmit = (values: FormSchemaType) => {};

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <CustomField
          control={form.control}
          name="title"
          formLabel="Image Title"
          className="w-full"
          render={({ field }) => <Input {...field} className="input-field" />}
        />
      </form>
    </Form>
  );
};

export default TransformationForm;
