import React from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";
import TaskDisc from "./TaskDisc";

const TaskItem = ({ tasks, removeTask, handleComplete }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginBottom: 10 }}>
      <CheckBox
        status={tasks.completed}
        onChange={() => handleComplete(tasks.id)}
      />
      <TaskDisc taskText={tasks.title} />
      <div style={{ alignItems: "center", marginTop: 14, marginLeft: 10 }}>
        <Button text="Remove" onClick={() => removeTask(tasks.id)} />
      </div>
    </div>
  );
};
export default TaskItem;