import "./chatList.css";

import AddUser from "./add-user/AddUser";

// ** React Imports
import { useEffect, useState } from "react";
import { useUserStore } from "../../../store/user-store";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../config/firebase";

const ChatList = () => {
  const { currentUser } = useUserStore();

  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "userchats", currentUser.id),
      async (res) => {
        const items = res.data().chats || [];

        const promises = items.map(async (item) => {
          const userDocRef = doc(db, "users", item.receiverId);
          const userDocSnap = await getDoc(userDocRef);

          const user = userDocSnap.data();

          return { ...item, user };
        });

        const chatData = await Promise.all(promises);

        setChats(chatData.sort((a, b) => b.updatedAt - a.updatedAt));
      }
    );

    return () => {
      unSub();
    };
  }, [currentUser.id]);

  console.log(chats);

  return (
    <div className="chatList">
      {/* Search Section */}
      <div className="search">
        {/* Search Bar */}
        <div className="searchBar">
          <img src="./search.png" alt="search" />
          <input type="text" placeholder="Search" />
        </div>

        {/* Add new user Button */}
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          alt="add new user"
          className="addUserBtn"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {/* Chat List */}
      {chats.map((chat) => (
        <div key={chat.chatId} className="item">
          <img
            src={chat.user.avatar || "./avatar.png"}
            alt={chat.user.username + "'s avatar"}
          />
          <div className="texts">
            <span>{chat.user.username}</span>
            <p>{chat.lastMessage}</p>
          </div>
        </div>
      ))}

      {/* Add User Modal */}
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
