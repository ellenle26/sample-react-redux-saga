import { closePopup } from "@stores/slices/messagePopupSlice";
import { all, put, takeLatest } from "redux-saga/effects";

const delayPopup = () => {
    return new Promise((res) => setTimeout(res.bind(null), 3000));
}

function* closePopupSaga() {
    yield delayPopup();
    yield put(closePopup());
};

function* messagePopupSaga() {
    yield all([takeLatest("messagePopup/openPopup", closePopupSaga)]);
}

export default messagePopupSaga;