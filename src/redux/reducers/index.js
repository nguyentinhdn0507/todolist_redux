// import status from "./status"; // được lấy từ reducer status
import filterTable from "./filterTable"; // được lấy từ reducer sort
import tasks from "./tasks"; // được lấy từ reducer tasks
import isDisplayForm from "./isDisplayForm"; // được lấy từ reducer isDisplayForm
import itemEditing from "./itemEditing"; // được lấy từ reducer itemEditing
import sort from "./sort"
import search from "./search"
import { combineReducers } from "redux";
const myReducer = combineReducers({
  tasks, // tasks:tasks
  isDisplayForm,
  itemEditing,
  filterTable,
  search,
  sort
});

export default myReducer;
