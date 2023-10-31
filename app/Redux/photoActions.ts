import axios from 'axios';
import { getAll, handelError, loadingState, seccPhoto } from './photoSlice';

export const addPhoto =
  ({ file, tagName }) =>
  async (dispatch) => {
    try {
      const datas = new FormData();
      datas.append('file', file);
      datas.append('tagName', tagName);

      dispatch(loadingState());

      const secc = await axios.post(
        'http://localhost:4000/api/gallery',
        datas,
        {
          withCredentials: true,
        }
      );
      dispatch(seccPhoto(secc.data.message));
      dispatch(getPhoto());
    } catch (error) {
      console.log(error);
      dispatch(handelError(error.response.data.message));
    }
  };
export const getPhoto = () => async (dispatch) => {
  try {
    dispatch(loadingState());
    const images = await axios.get('http://localhost:4000/api/gallery', {
      withCredentials: true,
    });
    dispatch(getAll(images.data));
  } catch (error) {
    dispatch(handelError(error.response.data.message));
  }
};
export const deletePhoto = (_id: string) => async (dispatch) => {
  try {
    dispatch(loadingState());
    const secc = await axios.delete(
      `http://localhost:4000/api/gallery/${_id}`,
      {
        withCredentials: true,
      }
    );
    dispatch(seccPhoto(secc.data.message));
    dispatch(getPhoto());
  } catch (error) {
    dispatch(handelError(error.response.data.message));
  }
};
