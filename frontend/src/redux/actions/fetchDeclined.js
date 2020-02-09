import privateApi from '../../utils/privateApi';
import store from '../store';
import declinedSlice from '../reducers/declinedReducer';

export const fetchDeclined = async () => {
    let response = await privateApi("http://localhost:4000/negotiation?search=DECLINE");
    store.dispatch(declinedSlice.actions.fetchDeclined(response.data));
}