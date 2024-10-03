import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    userApplication: [],
}

const applicationSlice = createSlice({
    name:'Application',
    initialState,
    reducers: {
        addApplication: (state,action)=>{
            console.log("applia",current(state));
        
            state.userApplication.push(action.payload)
        },
        clearApplicationHistory: (state) => {
            // Reset userApplication back to an empty array
            state.userApplication = [];
          },
        statusUpdation: (state,action)=>{
                // const {id,status} = action.payload
                // const application = state.userApplication.find(v=>v._id === id)
                // if(application){
                //     application.status = status
                // }
        }
    }

})

export const {addApplication,clearApplicationHistory,removeApplication,statusUpdation} = applicationSlice.actions
export default applicationSlice.reducer