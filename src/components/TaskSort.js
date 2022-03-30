import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortTask } from "../redux/action";

const TaskSort = () => {
  const sortItem = useSelector((state) => state.sort);
  // console.log(sortItem.by);
  // console.log(sortItem.value);

  const dispatch = useDispatch();
  const onSort = (sortBy, sortValue) => {
    // console.log(sort);
    dispatch(
      sortTask({
        by: sortBy,
        value: sortValue,
      })
    );
  };
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenu1"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
          <li onClick={() => onSort("name", 1)}>
            <a
              className={`dropdown-item ${
                sortItem.by === "name" && sortItem.value === 1
                  ? "sort_selected"
                  : ""
              }`}
              role="button"
            >
              Tên A-Z
            </a>
          </li>
          <li onClick={() => onSort("name", -1)}>
            <a
              className={`dropdown-item ${
                sortItem.by === "name" && sortItem.value === -1
                  ? "sort_selected"
                  : ""
              }`}
              role="button"
            >
              Tên Z-A
            </a>
          </li>
          <li role="separator" className="divider"></li>
          <li onClick={() => onSort("status", 1)}>
            <a
              className={`dropdown-item ${
                sortItem.by === "status" && sortItem.value === 1
                  ? "sort_selected"
                  : ""
              }`}
              role="button"
            >
              Trạng Thái Kích Hoạt
            </a>
          </li>
          <li onClick={() => onSort("status", -1)}>
            <a
              className={`dropdown-item ${
                sortItem.by === "status" && sortItem.value === -1
                  ? "sort_selected"
                  : ""
              }`}
              role="button"
            >
              Trạng Thái Ẩn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskSort;
