"use client";
import { addPost } from "@/lib/action";
import styles from "./adminPostForm.module.css";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="Slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea name="desc" placeholder="Description" rows={10}></textarea>
      <button type="submit">Add Post</button>
      {state && <p>{state.error}</p>}
    </form>
  );
};

export default AdminPostForm;
