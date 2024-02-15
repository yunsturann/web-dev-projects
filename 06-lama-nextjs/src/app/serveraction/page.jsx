import { addPost, deletePost } from "@/lib/action";

const ServerActionTestPage = () => {
  return (
    <div>
      <h1>ServerActionTestPage</h1>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button type="submit">Test Me</button>
      </form>

      <form action={deletePost}>
        <input type="text" placeholder="PostId" name="postId" />
        <button>Delete</button>
      </form>
    </div>
  );
};

export default ServerActionTestPage;
