import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo:(state,action)=>{
            state.user = action.payload.user
            state.isAuthenticated = action.payload.isAuthenticated
        },
       
        clearUserInfo: (state,action)=>{
            state.user = action.payload.user
            state.isAuthenticated = action.payload.isAuthenticated
        }
    }
})

export const {setUserInfo,clearUserInfo} = authSlice.actions
export default authSlice.reducer