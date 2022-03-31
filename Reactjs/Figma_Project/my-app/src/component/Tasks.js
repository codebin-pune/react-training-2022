import React from "react";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((item, id) => (
        <TaskItem key={id} task={item} />
      ))}
    </div>
  );
};
export default Tasks;
