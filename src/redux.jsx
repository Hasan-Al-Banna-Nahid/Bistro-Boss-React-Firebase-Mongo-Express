import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Initial State
// eslint-disable-next-line no-unused-vars
const initialState = {
  todos: [],
  isLoading: false,
  error: null,
};
// Action Creator
const getRequest = "getDataRequest";
const getSuccess = "getSuccess";
const getFailed = "getFailed";

const getDataRequest = () => {
  return {
    type: getRequest,
    error: null,
  };
};
const getSuccessRequest = (todos) => {
  return {
    type: getSuccess,
    payload: todos,
  };
};
const getFailedRequest = (error) => {
  return {
    type: getFailed,
    payload: error,
  };
};
// Reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case getDataRequest:
      return {
        ...state,
        isLoading: true,
      };
    case getSuccessRequest:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case getFailedRequest:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
const todoUrl = "https://jsonplaceholder.typicode.com/todos";
const fetchData = () => {
  return (dispatch) => {
    dispatch(getDataRequest());
    fetch(todoUrl)
      .then((res) => res.json())
      .then((data) => {
        dispatch(getSuccessRequest(data.map((data) => data.title)));
      })
      .catch((err) => {
        const error = err.message;
        return dispatch(getFailedRequest(error));
      });
  };
};
const store = createStore(todosReducer, applyMiddleware(thunk.default));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchData());
