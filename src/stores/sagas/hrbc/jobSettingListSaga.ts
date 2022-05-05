import { JobSettingListResponse } from "@apis/management/api";
import { managementApiClient } from "@apis/app-api"
import { PayloadAction } from "@reduxjs/toolkit";
import { deleteJobSettingFailure, deleteJobSettingSuccess, jobSettingListFailure, jobSettingListSuccess } from "@stores/slices/hrbc/jobSettingListSlice";
import { openPopup } from "@stores/slices/messagePopupSlice";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";


const getJobSettingList = () =>
{
    return managementApiClient.getJobSettings();
};


const deleteJobSettingAPI = (id: string) =>
{
    return managementApiClient.deleteJobSettingDetails(id);
};


function* fetchJobSettingListSaga() {
    try {
        const response: AxiosResponse<JobSettingListResponse> = yield call(getJobSettingList);
        yield put(jobSettingListSuccess(response.data));
    } catch (e) {
        yield put(jobSettingListFailure("Error"));
    }
}

function* deleteJobSettingSaga(action: PayloadAction<string>) {
    const id = action.payload as string;
    try {
        yield call(deleteJobSettingAPI, id);
        yield put(deleteJobSettingSuccess(id));
        yield put(openPopup("JOBを設定を削除しました"));
    } catch (e) {
        yield put(deleteJobSettingFailure("Error"));
    }
}


function* jobSettingListSaga() {
    yield all([takeLatest("hrbc/jobSettingList/fetchJobSettingList", fetchJobSettingListSaga),
        takeLatest("hrbc/jobSettingList/deleteJobSetting", deleteJobSettingSaga)]);
}

export default jobSettingListSaga;