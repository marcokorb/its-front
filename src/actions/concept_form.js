import api from '../common/api';
import { get } from '../common/request';
import { conceptForm as types } from '../types';

// Request

const request = () => {
  return {
    type: types.get.REQUEST
  };
};

// Success

const success = (data) => {
  return {
    type: types.get.SUCCESS,
    payload: data
  };
};

// Failure

const failure = (error) => {
  return {
    type: types.get.FAILURE,
    payload: error
  };
};

export const getFormConcepts = () => (dispatch, getState) => {

  const { user } = getState();

  dispatch(request());

  return get(`${api.conceptForm.get}?username=${user.username}`)
    .then((response) => {
      dispatch(success(response.data));
      return response.data;
    })
    .catch((error) => dispatch(failure(error.response)));
};
