import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Page does not exist</p>
      <Link href={"/"}>Return Home</Link>
    </div>
  );
};

export default NotFoundPage;
