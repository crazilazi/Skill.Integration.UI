import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/services/authSlice";
import resourceReducer from "../components/resource/resourceSlice";
import skillReducer from "../components/appLayout/content/skills/skillSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    resource: resourceReducer,
    skill:skillReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
