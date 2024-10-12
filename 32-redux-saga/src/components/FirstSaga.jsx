import { useDispatch, useSelector } from "react-redux";
import { fetchDataRequest } from "../redux/actions/dataActions";

const FirstSaga = () => {
  const dispatch = useDispatch();

  const { items, error, isLoading } = useSelector((state) => state.data);

  return (
    <div>
      <h2>Data:</h2>

      <button onClick={() => dispatch(fetchDataRequest())}>Fetch Data</button>

      {isLoading && <p style={{ fontSize: "4rem" }}>Is Loading</p>}

      {error && <p>{error}</p>}

      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FirstSaga;
