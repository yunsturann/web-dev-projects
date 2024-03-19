import { getSession } from "@/libs/actions";

const HomePage = async () => {
  const session = await getSession();
  return (
    <div>
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, deserunt.
      </p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default HomePage;
