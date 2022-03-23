import React from 'react'
import Button from './Button'
import TaskList from './TaskList'
import Tasks from './Tasks'
import {useState} from "react"

const ActionButton=()=>{
   const [fullFill,setFullfill]=useState("");
   const[panding,setPanding]=useState("");
   
    const searchCompleted=(list)=>{
        const trueOne=list.filter((item)=>item.completed===true);
        console.log(trueOne);
        setFullfill(trueOne);
        
       }
     
    const serchPanding=(list)=>{
         const falseOne=list.filter((item)=>item.completed===false);
         console.log(falseOne);
         
    }
    
    console.log(fullFill);

    return(
        <div>
        {/* <Button text="Add New Task"/> */}
        {/* <Tasks taskList={fullFill}/> */}
        <Button text="completed Task" onclick={()=>searchCompleted(TaskList)} />
        <Button text="pending Task"  onclick={()=>serchPanding(TaskList)}/>
      
        </div>

    )
}

export default ActionButton