import { concept as types } from '../types';

let defaultState = {
  items: [],
  isFetching: false,
  error: null
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.get.REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case types.get.SUCCESS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      };
    case types.get.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
