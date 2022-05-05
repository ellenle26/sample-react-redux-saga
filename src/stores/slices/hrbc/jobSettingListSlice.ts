import { JobSettingDataResponse, JobSettingListResponse } from "@apis/management/api";
import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface JobSettingListState {
    items: JobSettingDataResponse[] | null;
    total: number;
    page: number;
    error: any;
    hoverItemId: string | null;
    selectedItem: SelectedJobSettingItem | null;
}
export interface SelectedJobSettingItem {
    id: string;
    name: string;
    title?: string;
    content?: string;
}
const initialState: JobSettingListState =  {
    items: null,
    total: 0,
    page: 1,
    error: null,
    hoverItemId: null,
    selectedItem: null
}

const jobSettingListAdapter = createEntityAdapter<JobSettingListState>();

export const jobSettingListSlice = createSlice({
    name: "hrbc/jobSettingList",
    initialState: jobSettingListAdapter.getInitialState(initialState),
    reducers: {
        fetchJobSettingList: (state) => {
            return {... state};
        },
        jobSettingListSuccess: (state, action: PayloadAction<JobSettingListResponse>) => {
            return {... state, items: action.payload.job_settings, total: Number(action.payload.total), error: null, selectedItem: null};
        },
        jobSettingListFailure: (state, action: PayloadAction<string>) => {
            return {... state, error: action.payload, selectedItem: null};
        },
        deleteJobSetting: (state, _: PayloadAction<string>) => {
            return {...state};
        },
        deleteJobSettingSuccess: (state, action: PayloadAction<string>) => {
            if (state.items) {
                const id = action.payload;
                state.items = state.items.filter(i => i.id !== id);
            }
            state.selectedItem = null;
            state.error =null;
        },
        deleteJobSettingFailure: (state, action: PayloadAction<string>) => {
            return {...state, selectedItem: null, error: action.payload};
        },
        hoverOnJobSettingItem: (state, action: PayloadAction<string>) => {
            return { ...state, hoverItemId: action.payload }
        },
        unHoverOnJobSettingItem: (state) => {
            return { ...state, hoverItemId: null }
        },
        unSelectJobSettingItem: (state) => {
            return {...state, selectedItem: null};
        },
        selectJobSettingItem: (state, action: PayloadAction<string>) => {
            const foundItem = state.items?.find((item) => item.id === action.payload);
            const item: SelectedJobSettingItem = {
                id: action.payload,
                name: foundItem && foundItem.name ? foundItem.name : '',
                title: foundItem && foundItem.name ? `${foundItem.name}を除しますか？` : '除しますか？',
                content: '削除した設定は復元できません。'
            } 
            return {... state, selectedItem: item};
        }
    }
});


export const {fetchJobSettingList, 
    jobSettingListSuccess, jobSettingListFailure, 
    selectJobSettingItem, unSelectJobSettingItem,
    deleteJobSetting, deleteJobSettingSuccess, deleteJobSettingFailure,
    hoverOnJobSettingItem, unHoverOnJobSettingItem} = jobSettingListSlice.actions;

export default jobSettingListSlice.reducer;