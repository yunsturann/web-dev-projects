import "./chatList.css";

// ** React Imports
import { useState } from "react";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

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
          className="addUser"
          onClick={() => setAddMode((prev) => !prev)}
        />
      </div>

      {/* Chat List */}

      <div className="item">
        <img src="./avatar.png" alt="user" />
        <div className="texts">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user" />
        <div className="texts">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user" />
        <div className="texts">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user" />
        <div className="texts">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="user" />
        <div className="texts">
          <span>John Doe</span>
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
