import React from 'react'
import Button from './Button'

import Tasks from './Tasks'
import {useState} from "react"

const ActionButton=({handleFilters})=>{
  
    
    

    return(
        <div>
        <div>
        <Button 
        text="completed" 
        onClick={()=>handleFilters("complete")}
         />
         </div>

         <div>
        <Button 
        text="panding" 
        onClick={()=>handleFilters("pending")}
         />
         </div>

         <div>
        <Button 
        text="show all" 
        onClick={()=>handleFilters("all")}
         />
         </div>
    </div>

    )
}

export default ActionButton