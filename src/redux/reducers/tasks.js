import * as types from "./../constants/ActionTypes";
const randomId = () => {
  return Math.floor(1 + Math.random() * 0x10000)
    .toString(16)
    .substring(1);
};
const generateID = () => {
  return (
    randomId() +
    randomId() +
    "-" +
    randomId() +
    "-" +
    randomId() +
    "-" +
    randomId() +
    "-" +
    randomId() +
    randomId()
  );
};
const findIndex = (tasks, id) => {
  let result = -1; //không tìm thấy sẽ là -1
  tasks.forEach((task, index) => {
    if (task.id === id) {
      result = index;
    }
  });
  return result;
};
const data = JSON.parse(localStorage.getItem("todoList"));
console.log(data);
const initialState = data ? data : []; // danh sách các item
const myReducer = (state = initialState, action) => {
  let id = "";
  let index = -1;
  switch (action.type) {
    case types.LIST_ALL:
      console.log(state);
      return state;
    case types.SAVE_TASK:
      console.log(action);
      let task = {
        id: action.task.id, //có thể có giá trị hoặc không có giá trị
        name: action.task.name,
        status:
          action.task.status === "true" || action.task.status === true
            ? true
            : false,
      };
      if (!task.id) {
        task.id = generateID();
        state.unshift(task);
      } else {
        index = findIndex(state, task.id);
        state[index] = task;
      }
      localStorage.setItem("todoList", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS:
      console.log(action);
      id = action.id;
      console.log("id", id);
      index = findIndex(state, id);
      console.log(index);
      state[index] = {
        ...state[index],
        status: !state[index].status,
      };
      localStorage.setItem("todoList", JSON.stringify(state));
      return [...state];
    case types.DELETE_TASK:
      id = action.id;
      index = findIndex(state, id);
      state.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(state));
      return [...state];
    default:
      return state;
  }
};
export default myReducer;
// import vào file index trong reducer
