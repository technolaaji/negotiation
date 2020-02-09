import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'Action Required Negotiations',
    initialState: {
        data: []
    },
    reducers:{
        fetchRequired(state,action){
            state.data = action.payload
        }
    }
})