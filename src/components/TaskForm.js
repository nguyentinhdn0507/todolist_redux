import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeForm, saveTask } from "../redux/action/index";

const TaskForm = () => {
  const [inputForm, setInputForm] = useState({
    id: "",
    name: "",
    status: false,
  });
  const item = useSelector((state) => state.itemEditing);
  console.log(item.id);
  useEffect(() => {
    setItemEditing(item);
  }, [item]);

  useEffect(() => {
    if (item && item.id !== null) {
      setInputForm({
        id: item.id,
        name: item.name,
        status: item.status,
      });
      console.log(inputForm);
    } else {
      onClearForm();
    }
  }, [item]);

  const [itemEditing, setItemEditing] = useState(item);
  const dispatch = useDispatch();
  const onChangeValue = (event) => {
    // đầu tiên tạo ra biến target

    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    if (name === "") return;
    //  check o tren
    setInputForm({
      ...inputForm,
      [name]: value,
    });
    console.log(inputForm);
  };
  const onSubmit = (event) => {
    // console.log('input submit: ',inputForm)
    event.preventDefault();
    console.log("a:  ", inputForm);
    if (inputForm.name.trim().length) {
      dispatch(saveTask(inputForm));
    }
    setInputForm({
      name: "",
      status: false,
    });
    onClearForm();
    onCloseForm();
  };
  const onClearForm = () => {
    setInputForm({
      name: " ",
      status: false,
    });
  };
  const onCloseForm = () => {
    console.log("run");
    dispatch(closeForm());
  };

  if (!itemEditing) return null;
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3 className="panel-title">
          {inputForm.id !== "" ? "Cập Nhật Công Việc" : "Thêm Công Việc"}
          <span
            className="fas fa-times-circle text-right"
            onClick={() => onCloseForm()}
          ></span>
        </h3>
      </div>
      <div className="panel-body">
        <form>
          <div className="form-group">
            <label>Tên :</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={inputForm.name}
              onChange={onChangeValue}
            />
          </div>
          <label>Trạng Thái :</label>
          <select
            className="form-control"
            required="required"
            name="status"
            value={inputForm.status}
            onChange={onChangeValue}
          >
            <option value={true}>Kích Hoạt</option>
            <option value={false}>Ẩn</option>
          </select>
          <br />
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-warning"
              onClick={onSubmit}
            >
              Thêm
            </button>
            &nbsp;
            <button type="submit" className="btn btn-danger">
              Hủy Bỏ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
