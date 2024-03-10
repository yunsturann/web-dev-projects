import { changePremium, getSession, updateUsername } from "@/actions";
import { redirect } from "next/navigation";
import React from "react";

const ProfilePage = async () => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  return (
    <div>
      <h1>Welcome to the ProfilePage</h1>

      <p>
        Welcome, <b>{session.username}</b>
      </p>
      <span>
        You are a <b>{session.isPro ? "Premium" : "Free"}</b> user
      </span>
      <form action={changePremium} className="mt-4">
        <button type="submit" className="button_white">
          {session.isPro ? "Cancel Premium" : "Buy"}
        </button>
      </form>
      <form action={updateUsername} className="flex flex-col gap-2 mt-4">
        <input
          type="text"
          name="username"
          className="input"
          required
          placeholder={session.username}
        />
        <button type="submit" className="button">
          Update username
        </button>
      </form>
    </div>
  );
};

export default ProfilePage;
