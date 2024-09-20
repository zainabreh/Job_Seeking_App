import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userApplication: [],
}

const applicationSlice = createSlice({
    name:'Application',
    initialState,
    reducers: {
        addApplication: (state,action)=>{
            state.userApplication.push(action.payload)
        },
        removeApplication: (state,action)=>{
            // state.userApplication.filter(action.payload)
            // state.recuiterApplication.filter(action.payload)

        }
    }

})

export const {addApplication,removeApplication} = applicationSlice.actions
export default applicationSlice.reducer