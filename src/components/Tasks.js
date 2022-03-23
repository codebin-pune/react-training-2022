import React from "react"
import TaskItem from "./TaskItem";

const Tasks=({taskList})=>{
    return(
          <>
              {taskList.map((item)=> <TaskItem text={item.text} status={item.completed} />)
              
              }
          </>
    )
}
export default Tasks;