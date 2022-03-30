import React from 'react';
import TaskItem from './TaskItem';

const Tasks = ({tasks}) => {
  return(
    <div style={{marginTop:10,marginBottom:10,marginLeft:25,width:500,padding :10,backgroundColor:"lightgreen"}}>
      {tasks.map((task) => 
        <TaskItem tasks={task} />)}
    </div>
  )
}

export default Tasks