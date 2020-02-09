import { combineReducers } from '@reduxjs/toolkit';
import pendingReducer from './pendingReducer';
import actionRequiredReducer from './actionRequiredReducer';
import acceptedReducer from './acceptedReducer';
import declinedReducer from './declinedReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    pending: pendingReducer.reducer,
    required: actionRequiredReducer.reducer,
    accepted: acceptedReducer.reducer,
    declined: declinedReducer.reducer,
    user: usersReducer.reducer
})