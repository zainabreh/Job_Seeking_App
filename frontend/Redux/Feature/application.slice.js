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

        },
        statusUpdation: (state,action)=>{
                 
                const application = state.userApplication.find(v=>v._id === action.payload.id)
                if(application){
                    application.status = action.payload.status
                }
        }
    }

})

export const {addApplication,removeApplication,statusUpdation} = applicationSlice.actions
export default applicationSlice.reducer