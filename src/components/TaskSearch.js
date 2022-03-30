import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchTask } from "../redux/action";

const TaskSearch = () => {
  const [searchKeyword, setSearchKeyWord] = useState({
    keyword: "",
  });
  const onChangeValue = (event) => {
    var target = event.target;
    var name = target.name;
    if (name === "") return;
    var value = target.value;
    setSearchKeyWord({
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const onSearchTask = (keyword) => {
    dispatch(searchTask(keyword));
  };
  console.log(searchKeyword);
  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <div className="input-group">
        <input
          name="keyword"
          value={searchKeyword.keyword}
          onChange={onChangeValue}
          type="text"
          className="form-control"
          placeholder="Nhập từ khóa..."
        />
        <span className="input-group-btn">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onSearchTask(searchKeyword.keyword)}
          >
            <span className="fa fa-search mr-5"></span>
            Tìm
          </button>
        </span>
      </div>
    </div>
  );
};

export default TaskSearch;
