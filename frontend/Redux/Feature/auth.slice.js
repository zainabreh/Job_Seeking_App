import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user : null,
}

const authSlice = createSlice({
    name: "logIn",
    initialState,
    reducers: {
        userData:(state,action)=>{
            state.user = action.payload.user
        }
    }
})

export const {userData} = authSlice.actions
export default authSlice.reducer