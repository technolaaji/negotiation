import privateApi from '../../utils/privateApi';
import store from '../store';
import pendingSlice from '../reducers/pendingReducer';

export const fetchPending = async () => {
    const response = await privateApi("/negotiation?search=PENDING");
    store.dispatch(pendingSlice.actions.fetchPending(response.data))
}