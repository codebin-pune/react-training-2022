import React from "react"
import CheckBox from "./CheckBox";
import TaskDesc from "./TaskDesc";
import TaskList from "./TaskList";

 const TaskItem=({text,status})=>{


  const handller=(e)=>{
      console.log(e)
    console.log(e.currentTarget.id);
      
  }
    return(
        <div style={{display:"flex",flexDirection:"row"}}>
            <CheckBox action={status}/>
            <TaskDesc des={text}/>
            <button  onClick={(e)=>handller(e)} style={{height:20,marginTop:20,marginLeft:10}} >X</button>
        </div>
    )
}

export default TaskItem;