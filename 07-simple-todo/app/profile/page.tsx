import { getSession, switchIsAdmin } from "@/lib/authActions";
import Link from "next/link";

const Profile = async () => {
  const session = await getSession();
  if (!session.isLoggedIn) {
    return (
      <div className="flex-1 flex flex-col justify-center items-center gap-2 text-2xl font-semibold">
        <p>You are not logged in!</p>
        <Link href="/login" className="underline">
          Go to login page
        </Link>
      </div>
    );
  }
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-2 text-lg">
      <h1 className="text-4xl font-semibold tracking-wide">Your Profile</h1>
      <p>{session.email}</p>
      <p>{session.username}</p>
      <p>{`Is admin? ${session.isAdmin}`}</p>
      <form action={switchIsAdmin}>
        <button type="submit" className="bg-blue-400 p-2 rounded-lg">
          Switch to {session.isAdmin ? "user" : "admin"}
        </button>
      </form>
    </div>
  );
};

export default Profile;
