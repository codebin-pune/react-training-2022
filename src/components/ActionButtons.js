import React from "react";
import Button from "./Button";

const ActionButtons = ({ handleFilters }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginRight: 10 }}>
        <Button text="Show All" handleClick={() => handleFilters("all")} />
      </div>
      <div style={{ marginRight: 10 }}>
        <Button
          text="Filter Completed"
          handleClick={() => handleFilters("complete")}
        />
      </div>
      <div style={{ marginRight: 10 }}>
        <Button
          text="Filter Pending"
          handleClick={() => handleFilters("pending")}
        />
      </div>
    </div>
  );
};

export default ActionButtons;
