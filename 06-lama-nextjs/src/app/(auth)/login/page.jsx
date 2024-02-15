import styles from "./login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin } from "@/lib/action";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button type="submit" className={styles.github}>
            Login with Github
          </button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
