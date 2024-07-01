import { toast } from "react-toastify";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();

    toast.success("This is a demo, you can't login yet.");
  };

  return (
    <div className="item">
      <h2>Welcome back,</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
