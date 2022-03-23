import React from 'react';

const Button = ({Text,onClick}) => {
    return (
        <button onClick={onClick}>{Text}</button>
    )
}

export default Button;