import api from '../common/api';
import { get } from '../common/request';
import { userConcept as types } from '../types';

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

export const getUserConcepts = () => (dispatch, getState) => {

  const { user } = getState();

  dispatch(request());

  return get(`${api.userConcept.get}?username=${user.username}`)
    .then((response) => {
      dispatch(success(response.data));
      return response.data;
    })
    .catch((error) => dispatch(failure(error.response)));
};
