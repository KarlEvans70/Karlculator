import './App.css';
import { useState } from 'react';
import Numbers from './components/Numbers';
import Operators from './components/Operators';
import { evaluate } from 'mathjs';

const App = () => {
  const [input, setInput]= useState("");

// function to calculate a result on a specific button click and update the state

const calculate = (button) => {
  if (button === "=") {
    const result = evaluate (input);
    setInput(result)
  } else if (button === "c") {
      setInput("");
  } else setInput(input + button);
};

const handleClick = (e) => {
  const display = e.target.textContent;
  calculate(display);
};

  return (
    <div className="container">
      <h1>Karlculator</h1>
      <h2 data-testid="display" className='screen'>{input}</h2>
      <Operators handleClick={handleClick} />
      <Numbers handleClick={handleClick} />
    </div>
  );
};

export default App;
