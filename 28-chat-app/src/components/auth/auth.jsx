import "./auth.css";

import Login from "./login/Login";
import Register from "./register/Register";

const Auth = () => {
  return (
    <div className="auth">
      <Login />
      <div className="separator"></div>
      <Register />
    </div>
  );
};

export default Auth;
