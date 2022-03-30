import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTask } from "../redux/action";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [filter, setFilter] = useState({
    name: "",
    status: -1,
  });

  let getData = useSelector((state) => state.tasks);
  console.log("getData", getData);
  let filterTable = useSelector((state) => state.filterTable);
  // console.log(filterTable);
  const searchInput = useSelector((state) => state.search);
  //Sort by status and sort by name
  const sortData = useSelector((state) => state.sort);
  console.log("sortData", sortData);
  if (sortData.by === "name") {
    getData.sort((task1, task2) => {
      if (task1.name > task2.name) return -sortData.value;
      else if (task1.name < task2.name) return sortData.value;
      else return 0;
    });
  } else {
    getData.sort((task1, task2) => {
      if (task1.status > task2.status) return -sortData.value;
      else if (task1.status < task2.status) return sortData.value;
      else return 0;
    });
  }

  if (filterTable) {
    if (filterTable.name) {
      getData = getData.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1
        );
      });
    }
  }
  // filter data
  if (filterTable) {
    if (filterTable.status || filterTable.status === 0) {
      getData = getData.filter((task) => {
        if (filterTable.status === -1) {
          // console.log(filterTable.status);
          return task;
        } else {
          console.log(filterTable.status);
          return task.status === (filterTable.status === 1 ? true : false);
        }
      });
    }
  }
  // search value input
  getData = getData.filter((item) => {
    return item.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
  });

  const elementTask = getData.map((task, index) => {
    return <TaskItem key={task.id} index={index} task={task} />;
  });
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    var target = e.target;
    var name = target.name;
    if (name === "") return;
    var value = target.value;

    let filterData = {
      name: name === "name" ? value : filter.name,
      status: name === "status" ? value : filter.status,
    };
    setFilter({
      ...filterData,
      [name]: value,
    });
    dispatch(filterTask(filterData));
  };
  const onChangeStatus = (e) => {
    var target = e.target;
    var name = target.name;
    if (name === "") return;
    var value = target.value;

    let filterData = {
      name: name === "name" ? value : filter.name,
      status: name === "status" ? value : filter.status,
    };
    setFilter({
      ...filterData,
      [name]: value,
    });
    dispatch(filterTask(filterData));
  };
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th className="text-center">STT</th>
          <th className="text-center">Tên</th>
          <th className="text-center">Trạng Thái</th>
          <th className="text-center">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Nhập Từ Khóa ..."
              value={filter.name}
              onChange={handleOnChange}
            />
          </td>
          <td>
            <select
              className="form-control"
              name="status"
              onChange={onChangeStatus}
            >
              <option value={-1}>Tất Cả</option>
              <option value={0}>Ẩn</option>
              <option value={1}>Kích Hoạt</option>
            </select>
          </td>
          <td></td>
        </tr>
        {elementTask}
      </tbody>
    </table>
  );
};

export default TaskList;
