import { user as types } from '../types';

let defaultState = {
  isFetching: false,
  username: 'marco',
  id: 1,
  email: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
  case types.set.SET_USERNAME:
    return {
      ...state,
      username: action.payload
    };
  default:
    return state;
  }
}
