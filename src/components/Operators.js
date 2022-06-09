import React from "react"
const Operators = ({ handleClick }) => {
  const operatorButtons =["+", "-", "*", "/", "c",]
  return (
    <div className="calc-keys">
      {operatorButtons.map((button) => (
        <button className="operator" onClick={handleClick} key={button}>{button}</button>
      ))} 
    </div>
  );
};

export default Operators;