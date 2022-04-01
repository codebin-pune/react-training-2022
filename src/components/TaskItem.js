import React from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";
import TaskDesc from "./TaskDesc";

const TaskItem = ({ task, removeTask, handleCompelete }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
      <CheckBox
        status={task.completed}
        onChange={() => handleCompelete(task.id)}
      />
      <TaskDesc taskText={task.title} />
      <div style={{ alignItems: "center", marginTop: 14, marginLeft: 10 }}>
        <Button text="Remove" handleClick={() => removeTask(task.id)} />
      </div>
    </div>
  );
};
export default TaskItem;
