import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
    token : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo:(state,action)=>{
            state.user = action.payload.user
            state.token = action.payload.token
        },
        clearUserInfo: (state,action)=>{

        }
    }
})

export const {setUserInfo,clearUserInfo} = authSlice.actions
export default authSlice.reducer