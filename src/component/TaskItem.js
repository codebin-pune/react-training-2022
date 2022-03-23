import React from 'react';
import CheckBox from './CheckBox';
import TaskDisc from './TaskDisc';

const TaskItem = ({completed,text}) => {
  return (
    <div style={{display:"flex",flexDirection:'row'}}>
      <CheckBox status={completed} />
      <TaskDisc taskText={text} />
      <button style={{height:20,marginTop:15}}>X</button>
    </div>
  )
}
export default TaskItem;