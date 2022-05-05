import { all, fork } from "redux-saga/effects";
import authSaga from "./sagas/authSaga";

import jobSettingDetailSaga from "./sagas/hrbc/jobSettingDetailSaga";
import jobSettingListSaga from "./sagas/hrbc/jobSettingListSaga";
import messagePopupSaga from "./sagas/messagePopupSaga";

export function* rootSaga() {
    yield all([
        fork(messagePopupSaga),
        fork(jobSettingListSaga),
        fork(jobSettingDetailSaga),
        fork(authSaga)
    ]);
}