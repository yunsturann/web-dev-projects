import { all } from "redux-saga/effects";
import { watchCounterSaga } from "./sagas/counterSaga";
import { watchFetchDataSaga } from "./sagas/dataSaga";

export default function* rootSaga() {
  yield all([watchCounterSaga(), watchFetchDataSaga()]);
}
