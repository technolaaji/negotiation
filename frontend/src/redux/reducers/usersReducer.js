import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: "User Fetcher Reducer",
    initialState: {
        data: []
    },
    reducers: {
        fetchUsers(state, action){
            state.data = action.payload;
        }
    }
})