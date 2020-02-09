import privateApi from '../../utils/privateApi';
import store from '../store';
import userSlice from '../reducers/usersReducer';

export const fetchUsers = async () => {
    let response = await privateApi("/auth/users");
    store.dispatch(userSlice.actions.fetchUsers(response.data));
}