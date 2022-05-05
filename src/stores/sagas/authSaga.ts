import { managementApiClient } from "@apis/app-api";
import { authorizedFailure, authorizedSuccess } from "@stores/slices/authSlice";
import { all, call, put, takeLatest } from "redux-saga/effects";

const connectHrbc = () => {
    return managementApiClient.postAuthorization("code");
}

function* authorizeSaga() {
    try {
        yield call(connectHrbc);
        yield put(authorizedSuccess());
    } catch (e) {
        yield put(authorizedFailure());
    }
}


function* authSaga() {
    yield all([takeLatest("auth/requestAuthorization", authorizeSaga)]);
}

export default authSaga;