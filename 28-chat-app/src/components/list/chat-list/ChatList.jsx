import "./chatList.css";

import AddUser from "./add-user/AddUser";

// ** React Imports
import { useEffect, useState } from "react";
import { useUserStore } from "../../../store/user-store";
import { doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useChatStore } from "../../../store/chat-store";
import { toast } from "react-toastify";

const ChatList = () => {
  const { currentUser } = useUserStore();
  const { changeChat } = useChatStore();

  const [addMode, setAddMode] = useState(false);
  const [chats, setChats] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  // filter
  const filteredChats = chats.filter((chat) =>
    chat.user.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = async (chat) => {
    const userChats = chats.map((item) => {
      // eslint-disable-next-line no-unused-vars
      const { user, ...rest } = item;
      return rest;
    });

    const chatIndex = userChats.findIndex(
      (item) => item.chatId === chat.chatId
    );

    userChats[chatIndex].isSeen = true;

    try {
      await updateDoc(doc(db, "userchats", currentUser.id), {
        chats: userChats,
      });
      changeChat(chat.chatId, chat.user);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="chatList">
      {/* Search Section */}
      <div className="search">
        {/* Search Bar */}
        <div className="searchBar">
          <img src="./search.png" alt="search" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
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
      {filteredChats.map((chat) => (
        <div
          key={chat.chatId}
          className="item"
          onClick={() => handleSelect(chat)}
          style={{
            backgroundColor: chat?.isSeen ? "transparent" : "#5183fe",
          }}
        >
          <img
            src={
              chat.user.blocked.includes(currentUser.id)
                ? "./avatar.png"
                : chat.user.avatar || "./avatar.png"
            }
            alt={chat.user.username + "'s avatar"}
          />
          <div className="texts">
            <span>
              {chat.user.blocked.includes(currentUser.id)
                ? "User"
                : chat.user.username}
            </span>
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
