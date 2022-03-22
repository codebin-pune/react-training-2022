import React from 'react';
import Button from './Button';

const ActionButtons = () => {
  return (
    <div>
      <Button text="Add task" />
      <Button text="Filter Completed" />
      <Button text="Filter Pending" />
    </div>
  )
}

export default ActionButtons;