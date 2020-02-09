import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: "Pending Negotiations",
    initialState: {
        data: []
    },
    reducers: {
        fetchPending(state, action){
            state.data = action.payload
        }
    }
})