import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../components/features/auth/authSlice";

export default configureStore({
    reducer:{
        auth:authReducer,
    }
})
