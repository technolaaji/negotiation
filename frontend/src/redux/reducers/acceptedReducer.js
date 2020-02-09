import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: "Accepted Negotiations",
    initialState: {
        data: []
    },
    reducers: {
        fetchAccepted(state,action){
            state.data = action.payload
        }
    }
})