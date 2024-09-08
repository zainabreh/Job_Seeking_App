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
       
    }
})

export const {setjob} = jobSlice.actions
export default jobSlice.reducer