import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    job : [],
}

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        
        setjob: (state,action)=>{
            // state.job = [...state.job,action.payload]
            state.job = action.payload
        },
        removejob:(state,action)=>{
            state.job = state.job.filter((job) => job._id !== action.payload.id);
            
        }
       
    }
})

export const {setjob,removejob} = jobSlice.actions
export default jobSlice.reducer