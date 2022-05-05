import { combineReducers } from "redux";
import authSlice from "./slices/authSlice";

import jobSettingDetailSlice from "./slices/hrbc/jobSettingDetailSlice";
import jobSettingListSlice from "./slices/hrbc/jobSettingListSlice";
import mailDeliveryOptionsSlice from "./slices/hrbc/mailDeliveryOptionsSlice";
import mailListSlice  from "./slices/hrbc/mailListSlice";
import mailSettingDetailsSlice from "./slices/hrbc/mailSettingDetailsSlice";
import mailSettingListSlice from "./slices/hrbc/mailSettingListSlice";
import jobDetailSlice from "./slices/job_seeker/jobDetailSlice";
import messagePopupSlice from "./slices/messagePopupSlice";
import paginationSlice from "./slices/paginationSlice";

const rootReducer = combineReducers({
    hrbc: combineReducers({
        mailList: mailListSlice,
        mailSettingList: mailSettingListSlice,
        jobSettingList: jobSettingListSlice,
        jobSettingDetail: jobSettingDetailSlice,
        mailOptions: mailDeliveryOptionsSlice,
        mailSettingDetails: mailSettingDetailsSlice,
    }),
    job_seeker: combineReducers({
        jobDetail: jobDetailSlice
    }),
    paginations: paginationSlice,
    messagePopup: messagePopupSlice,
    auth: authSlice
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;