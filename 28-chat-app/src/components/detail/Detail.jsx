import { auth } from "../../config/firebase";
import "./detail.css";

const Detail = () => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="detail">
      {/* User */}
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      {/* Info */}
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowUp.png" alt="" />
          </div>
          {/* Photos */}
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-doga-dallar-yay-bahar.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-doga-dallar-yay-bahar.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-doga-dallar-yay-bahar.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-doga-dallar-yay-bahar.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-doga-dallar-yay-bahar.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-doga-dallar-yay-bahar.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-doga-dallar-yay-bahar.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/19560953/pexels-photo-19560953/free-photo-of-doga-dallar-yay-bahar.jpeg"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="" />
          </div>
        </div>

        {/* Block User */}
        <button type="button">Block User</button>

        {/* Block User */}
        <button type="button" className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
