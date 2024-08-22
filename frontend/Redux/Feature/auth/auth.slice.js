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
            state.user = action.payload
            state.token = action.payload
        },
        clearUserInfo: (state,action)=>{

        }
    }
})

export const {setUserInfo,clearUserInfo} = authSlice.actions
export default authSlice.reducer