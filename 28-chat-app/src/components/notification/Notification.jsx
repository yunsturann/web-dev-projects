import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

const Notification = () => {
  return (
    <div>
      <ToastContainer
        position="bottom-right"
        limit={3}
        style={{ overflow: "hidden" }}
      />
    </div>
  );
};

export default Notification;
