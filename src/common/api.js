const API_HOST = 'http://localhost:8000';

const api = {
  question: {
    answer: `${API_HOST}/user_answer/`,
    get: `${API_HOST}/user_question/`,
  },
  conceptForm: {
    get: `${API_HOST}/concepts_form/`
  },
  concepts: {
    get: `${API_HOST}/concepts/`
  },
  userConcept: {
    get: `${API_HOST}/users_concepts/`
  },
  usersFromConcept: {
    get: `${API_HOST}/users_from_concepts/`
  },
  
};

export default api;
