import axios from 'axios';
import types from './types';

export const fetchPosts = data => {
  return {
    type: types.FETCH_SENTENCES,
    data
  };
};

export const fetchAllPosts = () => {
  return dispatch => {
    return axios
      .get('http://5e1bd634db8a52001414c6b1.mockapi.io/api/biblestask')
      .then(response => {
        dispatch(fetchPosts(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
