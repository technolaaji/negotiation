import privateApi from '../../utils/privateApi';
import store from '../store';
import acceptedSlice from '../reducers/acceptedReducer';


export const fetchAccepted = async () => {
    let response = await privateApi("/negotiation?search=ACCEPT");
    store.dispatch(acceptedSlice.actions.fetchAccepted(response.data));
}