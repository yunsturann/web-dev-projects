import "./userInfo.css";
import { useUserStore } from "../../../store/user-store";

const UserInfo = () => {
  const { currentUser } = useUserStore();

  return (
    <div className="userInfo">
      {/* User */}
      <div className="user">
        <img
          src={currentUser.avatar || "./avatar.png"}
          alt={`${currentUser.username} avatar`}
        />
        <h2>{currentUser.username}</h2>
      </div>

      {/* Icons */}
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
