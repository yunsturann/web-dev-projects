import { useState } from "react";
import FirstSaga from "./components/FirstSaga";
import CounterSaga from "./components/CounterSaga";

function App() {
  const [onCounter, setOnCounter] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setOnCounter((prev) => !prev)}>toggle</button>
      </div>

      {onCounter ? <CounterSaga /> : <FirstSaga />}
    </>
  );
}

export default App;
