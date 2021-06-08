import React from "react";

interface SquareProps {
    key: number,
    value: HTMLElement,
    onClick: any
}

export default Square = (props:SquareProps) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}