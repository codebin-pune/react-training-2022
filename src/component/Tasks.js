import React from 'react';
import TaskItem from './TaskItem';

const Tasks = ({tasks,removeTask,handleComplete}) => {
  return(
    <div>
      {tasks.map((task) => 
      <TaskItem 
      handleComplete = {handleComplete}
      removeTask={removeTask} 
      tasks={task}
      />)}
    </div>
  )
}

export default Tasks