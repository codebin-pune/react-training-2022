import React from 'react';
import CheckBox from './CheckBox';
import TaskDesc from './TaskDesc';

const TaskItem = () => {
  return (
    <div>
      <CheckBox status={false}/>
      <TaskDesc taskText={"Hello"} />
    </div>
  )
}
export default TaskItem;