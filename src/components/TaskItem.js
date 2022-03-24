import React from "react"
import CheckBox from "./CheckBox";
import TaskDesc from "./TaskDesc";
import Button from "./Button";


 const TaskItem=({task,removeTask, handleComplete})=>{

    return(
        <div style={{display:"flex",flexDirection:"row"}}>
            <CheckBox status={task.completed}  onChange={() => handleComplete(task.id)}/>
            <TaskDesc textDesc={task.text}/>
            <div>
            
            <Button text="delete" onClick={() => removeTask(task.id)} />
            </div> 
        </div>
    )
}

export default TaskItem;