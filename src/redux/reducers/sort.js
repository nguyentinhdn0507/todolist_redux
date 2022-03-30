import * as types from "../constants/ActionTypes";

const initialState = {
  by: "name",
  value: 1, // sẽ là tăng và -1 sẽ là giảm
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SORT:
      console.log(action);
      return {
        by: action.sort.by,
        value: action.sort.value,
      };
    default:
      return state;
  }
};
export default myReducer;
