import React from "react";
import Button from "./Button";

const ActionButtons = ({ handleFilter }) => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ marginRight: 10 }}>
        <Button text="Show All" onClick={() => handleFilter("all")} />
      </div>
      <div style={{ marginRight: 10 }}>
        <Button
          text="Filter Completed"
          onClick={() => handleFilter("complete")}
        />
      </div>
      <div style={{ marginRight: 10 }}>
        <Button
          text="Filter Pending"
          onClick={() => handleFilter("pending")}
        />
      </div>
    </div>
  );
};

export default ActionButtons;