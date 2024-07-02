import "./addUser.css";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../../../config/firebase";
import { toast } from "react-toastify";
import { useState } from "react";
import { useUserStore } from "../../../../store/user-store";

const AddUser = () => {
  const { currentUser } = useUserStore();

  const [user, setUser] = useState(null);

  const onSubmitSearch = async (e) => {
    e.preventDefault();

    const username = new FormData(e.target).get("username");

    try {
      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      // array union allows us to add a new element to an array without duplicating it
      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={onSubmitSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button type="submit">Search</button>
      </form>
      {user && (
        <div className="user">
          <div className="detail">
            <img
              src={user.avatar || "./avatar.png"}
              alt={user.username + "'s avatar"}
            />
            <span>{user.username}</span>
          </div>
          <button type="button" onClick={handleAdd}>
            Add User
          </button>
        </div>
      )}
    </div>
  );
};

export default AddUser;
