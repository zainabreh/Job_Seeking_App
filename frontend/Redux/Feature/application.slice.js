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
                const {id,status} = action.payload
                const application = state.userApplication.find(v=>v._id === id)
                if(application){
                    application.status = status
                }
        }
    }

})

export const {addApplication,removeApplication,statusUpdation} = applicationSlice.actions
export default applicationSlice.reducer