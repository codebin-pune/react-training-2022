import React from "react";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks, removeTask, handleComplete }) => {
  return (
    <p>
      {tasks.map((tasks) => (
        <TaskItem
          key={tasks.id}
          tasks={tasks}
          handleComplete={handleComplete}
          removeTask={removeTask}
        />
      ))}
    </p>
  );
};

export default Tasks;