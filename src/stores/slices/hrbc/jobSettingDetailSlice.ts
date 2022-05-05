import { JobSettingDetailResponse, JobSettingUpdateRequest } from "@apis/management/api";
import { JobFile } from "@apis/types/job";
import { JobSettingValidation } from "@libs/types";
import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface JobSettingDetailState {
    item: JobSettingDetailResponse | null;
    error: string | null;
    validation: JobSettingValidation;
    isSubmit: boolean;
    isSuccess: boolean;
}

export interface EditJobSettingReq {
    id: string,
    data: JobSettingUpdateRequest
}

const initialState: JobSettingDetailState = {
    item: null,
    error: null,
    validation: {
    },
    isSubmit: false,
    isSuccess: false
}

const jobSettingDetailAdapter = createEntityAdapter<JobSettingDetailState>();

export const jobSettingDetailSlice = createSlice({
    name: "hrbc/jobSettingDetail",
    initialState: jobSettingDetailAdapter.getInitialState(initialState),
    reducers: {
        initialJobDetailSettingItem: (state) => {
            return {...state,
                item: {
                    name: "",
                }, error: null, isSubmit: false, isSuccess: false};
        },
        fetchJobDetailSetting: (state,  _: PayloadAction<string>) => {
            return {... state};
        },
        fetchJobDetailSettingSuccess: (state, action: PayloadAction<JobSettingDetailResponse>) => {
            return {... state, item: action.payload, error: null};
        },
        fetchJobDetailSettingFailure: (state, action: PayloadAction<string>) => {
            return {... state, error: action.payload};
        },
        uploadListHTMLFile: (state, action: PayloadAction<JobFile>) => {
            const fileContent = action.payload;
            const base64String = fileContent.content.replaceAll("data:application/octet-stream;base64,", "");

            if (state.item) {
                state.item.page_job_list_file_name = fileContent.name;
                state.item.page_job_list_file_content = base64String;
            }
        },
        uploadDetailedHTMLFile: (state, action: PayloadAction<JobFile>) => {
            const fileContent = action.payload;
            const base64String = fileContent.content.replaceAll("data:application/octet-stream;base64,", "");

            if (state.item) {
                state.item.page_job_detail_file_name = fileContent.name;
                state.item.page_job_detail_file_content = base64String;
            }
        },
        changeJobName: (state, action: PayloadAction<string>) => {
            if ( action.payload) {
                state.validation.name = "";
            } else {
                state.validation.name = "JOB名称を入れてください。";
            }
            if (state.item) {
                state.item.name = action.payload;
            }
        },
        validateJobSettingDetail:(state) => {
            if (state.item && state.item.name) {
                state.validation.name = "";
            } else {
                state.validation.name = "JOB名称を入れてください。";
            }
        },
        submitEditJobSetting: (state, _: PayloadAction<EditJobSettingReq>) => {
            state.isSubmit = true;
            state.error = null;
            state.isSuccess = false;
        },
        submitEditJobSettingSucess: (state) => {
            state.isSuccess = true;
        },
        submitEditJobSettingFailed: (state, action: PayloadAction<string>) => {
            state.isSubmit = false;
            state.isSuccess = false;
            state.error = action.payload;
        },
        submitAddJobSetting: (state, _: PayloadAction<JobSettingUpdateRequest>) => {
            state.isSubmit = true;
            state.error = null;
            state.isSuccess = false;
        },
        submitAddJobSettingSucess: (state) => {
            state.isSuccess = true;
        },
        submitAddJobSettingFailed: (state, action: PayloadAction<string>) => {
            state.isSubmit = false;
            state.isSuccess = false;
            state.error = action.payload;
        },
        clearJobSettingDetailState: (state) => {
            return {
                ...state,
                item: null,
                error: null,
                isSubmit: false,
                isSuccess: false
            };
        }
    }
});

export const {
    fetchJobDetailSetting, fetchJobDetailSettingFailure, fetchJobDetailSettingSuccess,
    uploadListHTMLFile, uploadDetailedHTMLFile, changeJobName,
    submitEditJobSetting, submitEditJobSettingSucess,submitEditJobSettingFailed,
    submitAddJobSetting, submitAddJobSettingSucess, submitAddJobSettingFailed,
    clearJobSettingDetailState, initialJobDetailSettingItem,
    validateJobSettingDetail
    } = jobSettingDetailSlice.actions;

export default jobSettingDetailSlice.reducer;