import "./userInfo.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      {/* User */}
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Doe</h2>
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
