import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../../config/firebase";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { email, password } = Object.fromEntries(new FormData(e.target));

    try {
      await signInWithEmailAndPassword(auth, email, password);

      toast.success("This is a demo, you can't login yet.");

      e.target.reset();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="item">
      <h2>Welcome back,</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
      </form>
    </div>
  );
};

export default Login;
