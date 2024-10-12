import { useDispatch, useSelector } from "react-redux";
import {
  asyncIncrement,
  decrement,
  increment,
} from "../redux/actions/counterActions";

const CounterSaga = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
      <button onClick={() => dispatch(asyncIncrement())}>
        Async Increase (1s delay)
      </button>
    </>
  );
};

export default CounterSaga;
