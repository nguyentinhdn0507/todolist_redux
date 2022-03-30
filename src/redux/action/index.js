import * as types from "./../constants/ActionTypes";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};
export const saveTask = (task) => {
  return {
    type: types.SAVE_TASK,
    task, //task :task
  };
};
export const toggleForm = () => {
  return {
    type: types.TOGGLE_FORM,
  };
};
export const openForm = () => {
  return {
    type: types.OPEN_FORM,
  };
};
export const closeForm = () => {
  return {
    type: types.CLOSE_FORM,
  };
};
export const updateStatus = (id) => {
  console.log("id", id);
  return {
    type: types.UPDATE_STATUS,
    id, // id :id
  };
};
export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    id, // id :id
  };
};
export const editTask = (task) => {
  return {
    type: types.EDIT_TASK,
    task, // task:task
  };
};
export const filterTask = (filter) => {
  console.log(filter);
  //filter đc lưu ở đây dưới dạng object bao gồm 2 cái là filter name và status
  return {
    type: types.FILTER_TABLE,
    filter,
  };
};
export const searchTask = (keyword) => {
  // console.log("keyword action", keyword);
  return {
    type: types.SEARCH,
    keyword,
  };
};
export const sortTask = (sort) => {
  // console.log("sort", sort);
  //sort đc lưu ở đây dưới dạng object bao gồm 2 cái là sortBy name và sortValue
  return {
    type: types.SORT,
    sort,
  };
};
