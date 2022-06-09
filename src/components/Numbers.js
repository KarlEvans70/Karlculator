import React from "react"
const Numbers = ({ handleClick }) => {
  const Buttons = [
    "1", 
    "2", 
    "3", 
    "4", 
    "5", 
    "6", 
    "7", 
    "8", 
    "9",
    "0",
    ".",
    "=",
];
return (
  <div className="calc-keys">
    {Buttons.map((button) => (
     <button className="button" onClick={handleClick} key={button}>{button}</button>
    ))}
  </div>
  );
}

export default Numbers;