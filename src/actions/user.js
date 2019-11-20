import api from '../common/api';
import { get, post } from '../common/request';
import { user as types } from '../types';
import { getQuestion } from './question';

// Success

const updateUser = (data) => {
  return {
    type: types.set.SET_USERNAME,
    payload: data
  };
};

export const setUser = (username) => (dispatch, getState) => {

  dispatch(updateUser(username));
  dispatch(getQuestion());
};
