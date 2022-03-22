import React from "react"
import CheckBox from "./CheckBox";

const TaskItem=()=>{
    return(
        <>
            <CheckBox action={false}/>
            <TaskDesc des="gopal patidar"/>
        </>
    )
}

export default TaskItem;