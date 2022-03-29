import React from "react"

const CheckBox=({status,onChange})=>{
    return <input type="checkbox" checked={status} onChange={onChange}/>;
        
    
};

export default CheckBox
