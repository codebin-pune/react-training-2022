import React from "react"
import TaskItem from "./TaskItem";

const Tasks=({tasks,removeTask,handleComplete})=>{
    return(
          <div>
              {tasks.map((item,id)=> (
              <TaskItem 
              key={id}
              task={item} 
              removeTask={removeTask} 
              handleComplete={handleComplete}
              />))
              
              }
          </div>
    );
}
export default Tasks;