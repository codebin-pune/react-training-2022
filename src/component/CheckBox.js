import React from "react";

const CheckBox = ({status}) => {
    return (
        <input type = "checkbox" checked={status} />
    )
}

export default CheckBox;