import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteTask,
  editTask,
  updateStatus,
  openForm,
} from "../redux/action/index";

const TaskItem = (props) => {
  // console.log(props);
  const { task, index } = props;
  const dispatch = useDispatch();
  const onDeleteTask = (id) => {
    console.log("Delete Id", id);
    dispatch(deleteTask(id));
    console.log(id);
  };

  const upDateStatus = (id) => {
    console.log("upDateStatus id", id);
    dispatch(updateStatus(id));
  };

  const changeStatus = () => {
    return (
      <span
        className={task.status ? "btn btn-warning" : "btn btn-success"}
        onClick={() => upDateStatus(task.id)}
      >
        {props.task.status === true ? "Kích Hoạt" : "Ẩn"}
      </span>
    );
  };
  const editingTask = (task) => {
    dispatch(editTask(task));
    dispatch(openForm());
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.name}</td>
      <td className="text-center">{changeStatus()}</td>
      <td className="text-center">
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => editingTask(task)}
        >
          <span className="fa fa-pencil mr-5"></span>Sửa
        </button>
        &nbsp;
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDeleteTask(task.id)}
        >
          <span className="fa fa-trash mr-5"></span>Xóa
        </button>
      </td>
    </tr>
  );
};

export default TaskItem;
