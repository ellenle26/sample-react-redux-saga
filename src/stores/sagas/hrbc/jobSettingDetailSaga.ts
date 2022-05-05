import { JobSettingUpdateRequest } from "@apis/management/api";
import { managementApiClient } from "@apis/app-api";
import { PayloadAction } from "@reduxjs/toolkit";
import { EditJobSettingReq, fetchJobDetailSettingFailure, fetchJobDetailSettingSuccess, submitAddJobSettingFailed, submitAddJobSettingSucess, submitEditJobSettingFailed, submitEditJobSettingSucess } from "@stores/slices/hrbc/jobSettingDetailSlice";
import { openPopup } from "@stores/slices/messagePopupSlice";
import { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";


const getJobSettingDetail = (id: string) =>
{
    return managementApiClient.getJobSettingDetails(id);
};

const putJobSettingDetail = (item: EditJobSettingReq) =>
{
    return managementApiClient.putJobSettingDetails(item.id, item.data);
};

const postJobSettingDetail = (data: JobSettingUpdateRequest) => {
    return managementApiClient.postJobSettingDetails(data);
};

function* fetchJobSettingDetailSaga(action: PayloadAction<string>) {
    try {
        const id = action.payload as string;
        const response: AxiosResponse = yield call(getJobSettingDetail, id);
        yield put(fetchJobDetailSettingSuccess(response.data));
    } catch (e) {
        yield put(fetchJobDetailSettingFailure("Error"));
    }
}

function* editJobSettingListSaga(action: PayloadAction<EditJobSettingReq>) {
    try {
        yield call(putJobSettingDetail, action.payload);
        yield put(submitEditJobSettingSucess());
        yield put(openPopup("JOBを設定しました"));
    } catch (e) {
        yield put(submitEditJobSettingFailed("Error"));
    }
}

function* addJobSettingSaga(action: PayloadAction<JobSettingUpdateRequest>) {
    try {
        const data = action.payload as JobSettingUpdateRequest;
        yield call(postJobSettingDetail, data);
        yield put(submitAddJobSettingSucess());
        yield put(openPopup("JOBを設定しました"));
    } catch (e) {
        yield put(submitAddJobSettingFailed("Error"));
    }
}

function* jobSettingDetailSaga() {
    yield all([
        takeLatest("hrbc/jobSettingDetail/fetchJobDetailSetting", fetchJobSettingDetailSaga), 
        takeLatest("hrbc/jobSettingDetail/submitEditJobSetting", editJobSettingListSaga),
        takeLatest("hrbc/jobSettingDetail/submitAddJobSetting", addJobSettingSaga)
    ]);
}

export default jobSettingDetailSaga;