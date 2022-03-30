import * as types from "../constants/ActionTypes";

const initialState = ""
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH:
      console.log(action);
      console.log(state);
      return action.keyword
    default:
      return state;
  }
};

export default myReducer;
