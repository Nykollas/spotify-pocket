import {UserConstants} from '../types';

export const getUserRequest = () => ({
  type: UserConstants.GET_USER_REQUEST,
});

export const getUserSuccess = (payload) => {

  const { email, display_name,  images} = payload;

  const userProfile = {
    email: email,
    name: display_name,
    thumb:images.length ? images[0].url : '',
  }

  return {
    type: UserConstants.GET_USER_SUCCESS,
    payload: { ...userProfile }
  }
};

export const getUserFailed = ({ message }) => ({
  type: UserConstants.GET_USER_FAILED,
  payload: { message },
});

export const logout = () => ({
  type: UserConstants.USER_LOGOUT,
  payload: {},
});