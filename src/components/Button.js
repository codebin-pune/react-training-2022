import React from "react";

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick} style={{ maxHeight: 30 }}>
      {text}
    </button>
  );
};

export default Button;
