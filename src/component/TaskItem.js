import React from 'react';
import CheckBox from './CheckBox';
import TaskDisc from './TaskDisc';

const TaskItem = () => {
  return (
    <div>
      <CheckBox status={false}/>
      <TaskDisc taskTxt={"Hello"} />
    </div>
  )
}
export default TaskItem;