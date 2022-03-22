import React from "react"
import CheckBox from "./CheckBox";
import TaskDesc from "./TaskDesc";

const TaskItem=()=>{
    return(
        <>
            <CheckBox action={true}/>
            <TaskDesc des="Javascript Array operation"/>
        </>
    )
}

export default TaskItem;