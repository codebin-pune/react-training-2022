import React from "react";
import Tasks from "./Tasks";

const Button = ({ text, onclick,full }) => {
  return (
    <>
      <button onClick={onclick}>{text}</button>
    </>
  );
};
export default Button;
