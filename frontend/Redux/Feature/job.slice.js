import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    job : null,
}

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        setjob:(state,action)=>{
            state.job = action.payload
        },
        resetjob:(state,action)=>{
            state.job = null
        },
        updatejob:(state,action)=>{
            state.job = action.payload
        }
       
    }
})

export const {setjob,resetjob,updatejob} = jobSlice.actions
export default jobSlice.reducer