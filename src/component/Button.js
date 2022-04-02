import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={{ maxHeight: 30 }}>
      {text}
    </button>
  );
};

export default Button;