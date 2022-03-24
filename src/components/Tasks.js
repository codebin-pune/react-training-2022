import React from "react";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks, removeTask, handleCompelete }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          handleCompelete={handleCompelete}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
};

export default Tasks;
