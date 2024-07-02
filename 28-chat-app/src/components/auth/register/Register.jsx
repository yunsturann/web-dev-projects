import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { toast } from "react-toastify";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";
import uploadStorage from "../../../lib/firebase/uploadStorage";

const initialAvatar = {
  file: null,
  url: "",
};

const Register = () => {
  const [avatar, setAvatar] = useState(initialAvatar);
  const [isLoading, setIsLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      let imgUrl = "";

      if (avatar.file) {
        imgUrl = await uploadStorage(avatar.file);
      }

      await setDoc(doc(db, "users", res.user.uid), {
        id: res.user.uid,
        username,
        email,
        avatar: imgUrl,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", res.user.uid), {
        chats: [],
      });

      toast.success("User created successfully! You can now login.");

      e.target.reset();
      setAvatar(initialAvatar);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="item">
      <h2>Create an Account</h2>

      <form onSubmit={onSubmitRegister}>
        <label htmlFor="file">
          <img src={avatar.url || "./avatar.png"} alt="" />
          Upload an Image
        </label>
        <input
          type="file"
          id="file"
          style={{ display: "none" }}
          onChange={handleAvatar}
        />

        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
