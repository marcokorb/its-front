import { combineReducers } from 'redux';
import { default as concept } from './concept';
import { default as conceptForm } from './concept_form';
import { default as question } from './question';
import { default as user } from './user';
import { default as userConcept } from './user_concept';
import { default as usersFromConcept } from './users_from_concept';

const rootReducer = combineReducers({
  state: () => ({}),
  concept,
  conceptForm,
  question,
  user,
  userConcept,
  usersFromConcept
});

export default rootReducer;
