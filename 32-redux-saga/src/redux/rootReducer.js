import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import dataReducer from "./reducers/dataReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  data: dataReducer,
});

export default rootReducer;
