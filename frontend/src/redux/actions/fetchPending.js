import privateApi from '../../utils/privateApi';
import store from '../store';
import pendingSlice from '../reducers/pendingReducer';

export const fetchPending = async () => {
    const response = await privateApi("http://localhost:4000/negotiation?search=PENDING");
    store.dispatch(pendingSlice.actions.fetchPending(response.data))
}