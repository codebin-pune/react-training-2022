import React from 'react';
import TaskDisc from './TaskDisc';
import Image from './Image';

const TaskItem = ({tasks}) => {
  return (
    <div style={{display:"flex",flexDirection:'row'}}>
      <Image img={tasks.image}/>

      <TaskDisc taskText={tasks.title}/>
    </div>
  )
}
export default TaskItem;