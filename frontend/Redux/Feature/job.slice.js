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
        }
       
    }
})

export const {setjob,resetjob} = jobSlice.actions
export default jobSlice.reducer