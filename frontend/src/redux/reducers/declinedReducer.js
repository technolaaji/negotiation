import  { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: "Declined Negotiations",
    initialState: {
        data: []
    },
    reducers:{
        fetchDeclined(state,action){
            state.data = action.payload
        }
    }
})