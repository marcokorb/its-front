/* eslint-disable import/prefer-default-export */
import api from '../common/api';
import { get } from '../common/request';
import { concept as types } from '../types';

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

const updateChecked = (data) => {
  return {
    type: types.get.CHECKED,
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


export const toggleConcept = (conceptId, checked) => (dispatch, getState) => {

  const { concept } = getState();

  let checkedItems = [];

  if(checked) {
    checkedItems = [...concept.checkedItems, conceptId];
  } else {
    checkedItems = concept.checkedItems.filter(item => {
      return item !== conceptId;
    });
  }

  dispatch(updateChecked(checkedItems));
};


export const getConcepts = () => (dispatch, getState) => {

  const { user } = getState();

  dispatch(request());

  return get(`${api.concepts.get}?username=${user.username}`)
    .then((response) => {
      dispatch(success(response.data));
      return response.data;
    })
    .catch((error) => dispatch(failure(error.response)));
};
