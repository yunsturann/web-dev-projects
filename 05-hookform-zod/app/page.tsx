import Login from "@/components/Login";
import LoginWithServer from "@/components/LoginWithServer";

const Home = () => {
  return (
    <main className="h-screen bg-gray-200 flex justify-center items-center">
      <LoginWithServer />
    </main>
  );
};

export default Home;
