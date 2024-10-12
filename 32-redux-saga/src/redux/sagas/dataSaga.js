import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDataFailure, fetchDataSuccess } from "../actions/dataActions";
import { FETCH_DATA_REQUEST } from "../actionTypes";

// Worker saga
function* fetchDataSaga() {
  try {
    const response = yield call(
      axios.get,
      "https://jsonplaceholder.typicode.com/posts"
    );

    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    yield put(fetchDataFailure(error.message));
  }
}

// Watcher saga
export function* watchFetchDataSaga() {
  yield takeEvery(FETCH_DATA_REQUEST, fetchDataSaga);
}
