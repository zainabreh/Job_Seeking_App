import {  configureStore } from "@reduxjs/toolkit";
import authReducer from "../Redux/Feature/auth.slice";



export const store = configureStore({
    reducer:{
        auth: authReducer
    }
})