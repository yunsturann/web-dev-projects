import { logout } from "@/actions";
import React from "react";

const LogoutForm = () => {
  return (
    <form action={logout}>
      <button type="submit" className="button_white">
        Logout
      </button>
    </form>
  );
};

export default LogoutForm;
