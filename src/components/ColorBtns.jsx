import React from "react";
import "./ColorBtns.css";

function ColorBtns({ color, setColor }) {
  return (
    <button
      className="colorBtn"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    ></button>
  );
}

export default ColorBtns;