import EmojiPicker from "emoji-picker-react";
import "./chat.css";
import { useState } from "react";

const Chat = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="chat">
      {/* User Detail */}
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>John doe</span>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              sapiente laboriosam debitis distinctio illo. Eveniet quos a natus
              atque rem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              sapiente laboriosam debitis distinctio illo. Eveniet quos a natus
              atque rem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              sapiente laboriosam debitis distinctio illo. Eveniet quos a natus
              atque rem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <img
              src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-doga-dallar-yay-bahar.jpeg"
              alt=""
            />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              sapiente laboriosam debitis distinctio illo. Eveniet quos a natus
              atque rem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              sapiente laboriosam debitis distinctio illo. Eveniet quos a natus
              atque rem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          <div className="texts">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              sapiente laboriosam debitis distinctio illo. Eveniet quos a natus
              atque rem.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setShowEmojiPicker((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={showEmojiPicker} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <div className="sendButton">Send</div>
      </div>
    </div>
  );
};

export default Chat;
