import React from "react"

const CheckBox=({action})=>{
    return(
        <>
            <input type="checkbox" checked={action}/>
        </>
    )
}

export default CheckBox
