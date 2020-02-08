import Cookies from 'js-cookie'

export const setToken = (value) => {
    Cookies.set('token', value);
}

export const getToken = () => {
    return Cookies.get('token');
} 

export const checkToken = () => {
    const token = getToken();
    return token !== undefined ? true : false;
}

export const deleteToken = () => {
    Cookies.remove('token');
}