import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./rootReducer";
import rootSaga from "./rootsaga";

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create store and add middleware
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware) // Add saga middleware
);

// Start saga
sagaMiddleware.run(rootSaga);

export default store;
