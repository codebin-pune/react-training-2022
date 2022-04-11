import React from 'react'

export const Button = ({text,handleClick,status}) => {
  return (
    <button onClick={handleClick}  disabled={status} >{text}</button>
  )
}
