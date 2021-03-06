import privateApi from '../../utils/privateApi';
import store from '../store';
import actionRequiredSlice from '../reducers/actionRequiredReducer';

export const fetchRequired = async () => {
    let response = await privateApi("/negotiation?search=ACTION_REQUIRED");
    store.dispatch(actionRequiredSlice.actions.fetchRequired(response.data));
}