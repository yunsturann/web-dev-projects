import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Auth from "./components/auth/auth";
import Notification from "./components/notification/Notification";

const App = () => {
  const user = true;

  return (
    <div className="container">
      {user ? (
        <>
          <List />
          <Chat />
          <Detail />
        </>
      ) : (
        <>
          <Auth />
        </>
      )}
      <Notification />
    </div>
  );
};

export default App;
