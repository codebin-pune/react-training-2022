import React from 'react';
import TaskItem from './TaskItem';

const Tasks = ({taskList}) => {
  return(
    <div>
      {taskList.map((task) => <TaskItem completed={task.completed} text={task.text}/>)}
    </div>
  )
}

export default Tasks