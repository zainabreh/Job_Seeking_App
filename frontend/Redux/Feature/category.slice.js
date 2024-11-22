import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    category:[]
}

const categorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {
        setCategory: (state,action)=>{
            state.category.push(action.payload)
        }
    }
})

export const {setCategory} = categorySlice.actions
export default categorySlice.reducer