import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import TaskControl from "./components/TaskControl";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { editTask, openForm, toggleForm } from "./redux/action";

function App() {
  const showForm = useSelector((state) => state.isDisplayForm);
  const itemEditing = useSelector((state) => state.itemEditing);
  console.log(itemEditing);
  console.log(showForm);
  const dispatch = useDispatch();
  const onClearTask = (task) => {
    dispatch(editTask(task));
  };
  const onToggleForm = () => {
    if (itemEditing && itemEditing.id !== "") {
      dispatch(openForm());
    } else {
      dispatch(toggleForm());
    }
    onClearTask({
      id: "",
      name: "",
      status: false,
    });
  };
  var elementForm = showForm === true ? <TaskForm /> : "";
  return (
    <div className="container">
      <div className="text-center">
        <h1>Quản Lý Công Việc</h1>
        <hr />
      </div>
      <div className="row">
        <div
          className={
            showForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : " "
          }
        >
          {elementForm}
        </div>
        <div
          className={
            showForm === true
              ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
              : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
          }
        >
          <button
            type="button"
            className="btn btn-primary"
            onClick={onToggleForm}
          >
            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
          </button>
          {/* Search - Sort */}
          <TaskControl />
          <div className="row mt-15">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <TaskList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
