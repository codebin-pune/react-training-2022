import React from 'react';
import CheckBox from './CheckBox';
import TaskDisc from './TaskDisc';

const TaskItem = ({tasks,removeTask,handleComplete}) => {
  return (
    <div style={{display:"flex",flexDirection:'row'}}>
      <CheckBox onChange = {() => handleComplete(tasks.id)} status={tasks.completed} />
      <TaskDisc taskText={tasks.title} />
      <button onClick={()=>removeTask(tasks.id)} style={{height:20,marginTop:15}}>X</button>
    </div>
  )
}
export default TaskItem;