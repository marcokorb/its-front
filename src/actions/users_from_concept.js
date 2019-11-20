import api from '../common/api';
import { post } from '../common/request';
import { usersFromConcept as types } from '../types';

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

export const getUsersFromConcepts = () => (dispatch, getState) => {

  const { concept, userConcept, user } = getState();

  const concepts = [...concept.checkedItems, ...userConcept.checkedItems]

  dispatch(request());

  return post(`${api.usersFromConcept.get}?username=${user.username}`, { concepts })
    .then((response) => {
      dispatch(success(response.data));
      return response.data;
    })
    .catch((error) => dispatch(failure(error.response)));
};
