import React from "react";
import Button from "./Button";

const ActionButtons = ({handleFilter}) => {
    return (
        <div>
         <Button Text="Show all" onClick={()=>handleFilter("all")}/>   
         <Button Text="Filter Complete" onClick={()=>handleFilter("complete")}/>
         <Button Text="Filter Pending" onClick={()=>handleFilter("pending")}/>
        </div>
    )
}

export default ActionButtons;