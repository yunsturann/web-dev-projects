import { put, takeEvery, delay } from "redux-saga/effects";
import { ASYNC_INCREMENT, INCREMENT } from "../actionTypes";

function* asyncIncrementSaga() {
  yield delay(1000);
  yield put({ type: INCREMENT });
}

export function* watchCounterSaga() {
  yield takeEvery(ASYNC_INCREMENT, asyncIncrementSaga);
}
