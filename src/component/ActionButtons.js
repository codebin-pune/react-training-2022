import React from "react";
import Button from "./Button";

const ActionButtons = () => {
    return (
        <div>
         <Button Text="Add task"/>
         <Button Text="Filter Complete"/>
         <Button Text="Filter Pending"/>
        </div>
    )
}

export default ActionButtons;