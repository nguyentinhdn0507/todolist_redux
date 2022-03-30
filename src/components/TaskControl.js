import React from "react";
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";

const TaskControl = () => {
  return (
    <div className="row mt-15">
      <TaskSearch/>
      <TaskSort/>
    </div>
  );
};

export default TaskControl;
