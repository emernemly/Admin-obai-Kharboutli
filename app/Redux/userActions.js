import {
  handelError,
  loadingState,
  logoutslice,
  signIn,
  userverfy,
} from './userSlice';
import axios from 'axios';

export const signInAction = (data, navigate) => async (dispatch) => {
  try {
    dispatch(loadingState());
    const user = await axios.post(
      'https://admin-obai-kharboutli-back-end.onrender.com/api/user',
      data,
      {
        withCredentials: true,
      }
    );
    dispatch(signIn(user.data));
    if (user.data) {
      navigate.push('/Admin');
    }
  } catch (error) {
    dispatch(handelError(error.response.data.message));
  }
};

export const userAcess = () => async (dispatch) => {
  try {
    const user = await axios.get(
      'https://admin-obai-kharboutli-back-end.onrender.com/api/user',
      {
        withCredentials: true,
      }
    );

    dispatch(userverfy(user.data));
  } catch (error) {
    dispatch(handelError(error.response.data.message));
  }
};
export const userLogout = (router) => async (dispatch) => {
  try {
    dispatch(loadingState());
    console.log('hi');
    await axios.get(
      'https://admin-obai-kharboutli-back-end.onrender.com/api/user/logout',
      {
        withCredentials: true,
      }
    );
    dispatch(logoutslice());

    window.location.reload();
  } catch (error) {
    console.log(error);
    dispatch(handelError(error.response.data.message));
  }
};
