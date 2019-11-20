import api from '../common/api';
import { get, post } from '../common/request';
import { question as types } from '../types';

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

export const getQuestion = () => (dispatch, getState) => {

  const { user } = getState();

  dispatch(request());

  return get(`${api.question.get}?username=${user.username}`)
    .then((response) => {
      dispatch(success(response.data));
      return response.data;
    })
    .catch((error) => dispatch(failure(error.response)));
};

export const answerQuestion = (data) => (dispatch, getState) => {

  const { user } = getState();

  return post(`${api.question.answer}?username=${user.username}`, { ...data })
    .then((response) => {
      if(response.data.alternative_status) {
        alert('Correto');
      } else {
        alert('Errado');
      }
      dispatch(getQuestion());
      return response.data;
    })
    .catch((error) => dispatch(failure(error.response)));
};